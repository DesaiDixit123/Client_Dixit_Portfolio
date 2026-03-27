import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiExternalLink, FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { fetchProjects } from './api/projectsApi';

export default function Projects() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [categories, setCategories] = useState(["All"]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetchProjects();
                let data = [];
                if (response && response.data) {
                    data = response.data;
                } else if (Array.isArray(response)) {
                    data = response;
                }
                setProjects(data);
                setFilteredProjects(data);
                
                // Extract unique categories
                const cats = ["All", ...new Set(data.map(p => p.projectLanguage).filter(Boolean))];
                setCategories(cats);
            } catch (error) {
                console.error("Error loading projects:", error);
            } finally {
                setLoading(false);
            }
        };
        getProjects();
    }, []);

    const filterByCategory = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.projectLanguage === category));
        }
    };

    const settings = {
        dots: true,
        infinite: projects.length > 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: projects.length > 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: projects.length > 1,
                }
            }
        ]
    };

    if (loading) {
        return (
            <section className="w-full py-20 bg-[#030014] relative z-10 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-gray-800 border-t-cyan-500 animate-spin"></div>
            </section>
        );
    }

    return (
        <section className={`w-full ${isHomePage ? "py-20" : "pt-32 pb-20"} bg-[#0B0F19] relative z-10`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 mt-4" data-aos="fade-up">
                    <p className="text-[#00E5FF] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">MY PORTFOLIO</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Projects</span>
                    </h2>
                    {isHomePage && (
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-6">
                            Here are some of my top projects demonstrating my expertise in building scalable, real-world applications.
                        </p>
                    )}
                </div>

                {/* Categories Tabs (Only on Projects Page) */}
                {!isHomePage && categories.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20" data-aos="fade-up">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => filterByCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 border ${
                                    activeCategory === cat
                                        ? "bg-cyan-500 border-cyan-500 text-[#030014] shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                        : "bg-white/5 border-white/10 text-gray-400 hover:border-cyan-500/50 hover:text-white"
                                }`}
                            >
                                {cat.toUpperCase()}
                            </button>
                        ))}
                    </div>
                )}

                {filteredProjects.length > 0 ? (
                    <div className="px-2" data-aos="fade-up" data-aos-delay="200">
                        {isHomePage ? (
                            <Slider {...settings} className="projects-slider">
                                {filteredProjects.map((project) => (
                                    <ProjectCard key={project._id} project={project} />
                                ))}
                            </Slider>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project, index) => (
                                    <div key={project._id} data-aos="fade-up" data-aos-delay={index * 100}>
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center text-gray-400 py-10">
                        No projects launched yet.
                    </div>
                )}
            </div>
        </section>
    );
}

const ProjectCard = ({ project }) => (
    <div className="px-0 md:px-2 py-2 h-full w-full">
        <div className="group relative bg-[#1B2130] rounded-[2rem] overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10" />
                <img 
                    src={project.image1 || "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {project.title}
                </h4>
                
                <div 
                    className="text-gray-400 mb-6 flex-grow min-h-[60px] line-clamp-2 overflow-hidden text-[15px] font-light leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: project.description }} 
                />
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.projectLanguage && (
                        <span className="px-4 py-1.5 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 tracking-wider">
                            {project.projectLanguage}
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <Link to={`/projects/${project._id}`} className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all">
                        <FiArrowRight className="text-lg" /> 
                        <span>VIEW DETAILS</span>
                    </Link>
                    {(project.liveLink || project.previewLink) && (
                        <a 
                            href={(project.liveLink || project.previewLink).startsWith('http') ? (project.liveLink || project.previewLink) : `https://${(project.liveLink || project.previewLink)}`} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-[#030014] transition-all duration-300"
                        >
                            <FiExternalLink />
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);
