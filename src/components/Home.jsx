import { useState, useEffect } from "react";
import bg_img from "../assets/Dixit.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuContactRound } from "react-icons/lu";
import { RxResume } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FiTrendingUp, FiZap, FiCheckCircle, FiUsers, FiArrowRight } from "react-icons/fi";

import Projects from "./Projects";
import Skills from "./Skills";
import Services from "./Services";
import Stats from "./Stats";
import SuccessStory from "./SuccessStory";
import ContactUs from "./ContactUs";

export default function Home() {
    return (
        <div className="bg-[#030014] flex flex-col w-full overflow-hidden">
            <BackgroundHome />
            <Stats />
            <Skills />
            <Projects />
            <Services />
            <SuccessStory />
            <ContactUs />
        </div>
    );
}

export const BackgroundHome = () => {
    const [titleIndex, setTitleIndex] = useState(0);

    const titles = [
        "MERN Stack Developer",
        "Python Django Developer",
        "React JS Developer",
        "Full Stack Developer",
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const interval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen w-full flex items-center bg-[#030014] overflow-hidden px-4 sm:px-8 lg:px-20 py-20 lg:py-0">
            {/* Animated Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-[120px] opacity-60 z-0 pointer-events-none float-anim-1" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full filter blur-[150px] opacity-60 z-0 pointer-events-none float-anim-2" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full mt-10 lg:mt-0">
                {/* Left Content */}
                <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 items-center lg:items-start tracking-wide">
                    <div data-aos="fade-down" className="inline-block">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-cyan-50 tracking-wide uppercase">
                                Open for New Projects
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2 lg:space-y-4 w-full">
                        <h1 data-aos="fade-right" data-aos-delay="200" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                            I'm <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                Dixit Desai
                            </span>
                        </h1>
                        <div data-aos="fade-right" data-aos-delay="400" className="h-10 md:h-16 flex items-center justify-center lg:justify-start">
                            <h2
                                key={titleIndex}
                                className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-300 animate-[fade-in-up_0.5s_ease-out_forwards]"
                            >
                                {titles[titleIndex]}
                            </h2>
                        </div>
                    </div>

                    <p data-aos="fade-up" data-aos-delay="600" className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed mt-4">
                        Transforming complex requirements into seamless, high-performance web applications using the MERN stack. Engineering robust, scalable, and secure backend solutions powered by Python and the Django ecosystem. Designing pixel-perfect, interactive frontend experiences with React. Mastering the full development lifecycle to build end-to-end digital products that drive business value.
                    </p>

                    <div data-aos="fade-up" data-aos-delay="800" className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
                        <NavLink to="/projects" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-3.5 bg-[#9A9ECC] hover:bg-[#8A8EBB] text-[#030014] font-bold rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                                <span>View My Work</span>
                            </button>
                        </NavLink>

                        <NavLink to="/contact" className="w-full sm:w-auto">
                            <button className="group w-full sm:w-auto px-10 py-3.5 bg-transparent border-2 border-[#9A9ECC] hover:bg-[#9A9ECC]/10 text-[#9A9ECC] font-bold rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                                <span>Contact Me</span>
                                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* Right Image Container */}
                <div data-aos="zoom-in-left" data-aos-duration="1200" className="relative order-1 lg:order-2 flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <div className="relative w-[280px] h-[360px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[520px] group perspective-1000">
                        {/* Glow Behind Image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl rounded-[3rem] transition-all duration-500" />
                        
                        {/* Main Image Card */}
                        <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm z-10 transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
                            <img
                                src={bg_img}
                                alt="Dixit Desai"
                                className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute top-10 -right-4 sm:-right-8 lg:-right-12 z-20 bg-white/[0.05] border border-white/[0.1] backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 float-anim-1">
                            <div className="bg-cyan-500/20 p-2 sm:p-3 rounded-xl text-cyan-400">
                                <FiTrendingUp className="text-lg sm:text-xl" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Success Rate</p>
                                <p className="text-sm sm:text-lg font-bold text-white">99%</p>
                            </div>
                        </div>

                        <div className="absolute bottom-24 -left-4 sm:-left-8 lg:-left-12 z-20 bg-white/[0.05] border border-white/[0.1] backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 float-anim-2">
                            <div className="bg-purple-500/20 p-2 sm:p-3 rounded-xl text-purple-400">
                                <FiCheckCircle className="text-lg sm:text-xl" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Projects Done</p>
                                <p className="text-sm sm:text-lg font-bold text-white">50+</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-6 lg:right-10 z-20 bg-white/[0.05] border border-white/[0.1] backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 float-anim-3">
                            <div className="bg-blue-500/20 p-2 sm:p-3 rounded-xl text-blue-400">
                                <FiUsers className="text-lg sm:text-xl" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Happy Clients</p>
                                <p className="text-sm sm:text-lg font-bold text-white">40+</p>
                            </div>
                        </div>

                        <div className="absolute top-28 sm:top-32 -left-4 sm:-left-8 lg:-left-16 z-20 bg-white/[0.05] border border-white/[0.1] backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 float-anim-4">
                            <div className="bg-pink-500/20 p-2 sm:p-3 rounded-xl text-pink-400">
                                <FiZap className="text-lg sm:text-xl" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Availability</p>
                                <p className="text-sm sm:text-lg font-bold text-white">24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};