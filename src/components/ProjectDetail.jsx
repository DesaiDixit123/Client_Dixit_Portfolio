import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProjects, fetchProjectsById } from "./api/projectsApi";

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await fetchProjectsById(id);
                if (response && response.data) {
                    setProject(response.data);
                    console.log(response.data)
                } else {
                    console.error("Invalid API response structure:", response);
                }
            } catch (error) {
                console.error("Error fetching project:", error.message);
            }
        };

        getProject();
    }, [id]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    if (!project) return <div>Loading...</div>;

    return (
        <div className="p-5 sm:p-10">
            <motion.h1
                className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#2A3386] to-[#00659A] text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {project.title}
            </motion.h1>
            <div className="max-w-full sm:max-w-4xl mx-auto">
                <Slider {...sliderSettings}>
                    {[project.image1, project.image2, project.image3, project.image4, project.image5].map((img, index) => (
                        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            <img src={img} alt={`Project Image ${index + 1}`} className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-lg" />
                        </motion.div>
                    ))}
                </Slider>
                <motion.p
                    className="mt-6 text-lg sm:text-xl text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {project.description}
                </motion.p>
                <div className="">

                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                    >
                    View on GitHub
                </a>
                <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 pl-[20px]"
                >
                   Preview
                </a>
                    </div>
            </div>
        </div>
    );
}
