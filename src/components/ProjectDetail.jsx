import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProjectsById } from './api/projectsApi';
import { FiArrowLeft, FiExternalLink, FiCode, FiGithub } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const getProject = async () => {
            try {
                const response = await fetchProjectsById(id);
                let data = response?.data || response;
                if (Array.isArray(data) && data.length > 0) {
                    data = data[0];
                }
                setProject(data);
            } catch (error) {
                console.error("Error loading project details:", error);
            } finally {
                setLoading(false);
            }
        };
        getProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030014] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-gray-800 border-t-cyan-500 animate-spin"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-gray-400">Project Not Found</h2>
                <Link to="/" className="text-cyan-400 hover:text-cyan-300 px-6 py-2 rounded-full border border-cyan-500">Return to Portfolio</Link>
            </div>
        );
    }

    const images = [project.image1, project.image2, project.image3, project.image4, project.image5].filter(Boolean);

    return (
        <section className="min-h-screen bg-[#030014] text-gray-300 pt-32 pb-20 font-sans relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] opacity-40 z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full filter blur-[150px] opacity-40 z-0 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Back Button */}
                <Link 
                    to="/projects" 
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-12 transition-all duration-300"
                    data-aos="fade-right"
                >
                    <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="font-medium">Back to Projects</span>
                </Link>

                {/* Header Section (Image Left, Info Right) */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    
                    {/* Main Project Image (Left) */}
                    {images.length > 0 && (
                        <div 
                            className="relative group w-full"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-gray-900">
                                <img 
                                    src={images[0]} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 via-transparent to-transparent" />
                            </div>
                        </div>
                    )}

                    {/* Project Info (Right) */}
                    <div data-aos="fade-left" className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <FiCode className="text-sm" />
                                {project.projectLanguage || "Web Development"}
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                                {project.title}
                            </h1>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {/* Live Preview Button */}
                            {(project.previewLink || project.liveLink) && (
                                <a 
                                    href={(project.previewLink || project.liveLink).startsWith('http') ? (project.previewLink || project.liveLink) : `https://${(project.previewLink || project.liveLink)}`} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:-translate-y-1"
                                >
                                    <FiExternalLink className="text-xl" />
                                    Live Preview
                                </a>
                            )}

                            {/* GitHub Button */}
                            {/* {project.githubLink && (
                                <a 
                                    href={project.githubLink.startsWith('http') ? project.githubLink : `https://${project.githubLink}`} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
                                >
                                    <FiGithub className="text-xl" />
                                    GitHub Source
                                </a>
                            )} */}
                        </div>
                    </div>
                </div>

                {/* Description Card (Full Width) */}
                <div 
                    className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-14 mb-20 backdrop-blur-sm relative overflow-hidden"
                    data-aos="fade-up"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6 inline-block">Project Overview</h2>
                    <div 
                        className="prose prose-invert max-w-none text-gray-400 leading-relaxed text-lg font-light"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                </div>

                {/* Gallery Section (Full Width) */}
                {images.length > 1 && (
                    <div data-aos="fade-up">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <p className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Visual Showcase</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Project Highlights</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                            {images.slice(1).map((img, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video bg-gray-900/50 shadow-2xl"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                >
                                    <img 
                                        src={img} 
                                        alt={`${project.title} ${idx + 2}`} 
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
