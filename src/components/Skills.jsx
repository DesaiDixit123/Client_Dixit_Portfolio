import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiMongodb, SiTypescript, SiNextdotjs, SiJavascript } from 'react-icons/si';
import { useLocation } from "react-router-dom";
import Services from "./Services";

export default function Skills() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <FaReact className="text-3xl text-cyan-400" />,
            skills: [
                { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 95 },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 85 },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 92 },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 80 },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
            ]
        },
        {
            title: "Backend Development",
            icon: <FaNodeJs className="text-3xl text-green-500" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 90 },
                { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: 85 },
                { name: "Django", icon: <SiDjango className="text-[#092E20]" />, level: 80 },
                { name: "Express", icon: <div className="font-bold text-gray-400">ex</div>, level: 88 },
                { name: "REST APIs", icon: <div className="font-bold text-blue-400">{'{ }'}</div>, level: 92 },
            ]
        },
        {
            title: "Database & Cloud",
            icon: <FaDatabase className="text-3xl text-purple-500" />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 85 },
                { name: "PostgreSQL", icon: <FaDatabase className="text-[#4169E1]" />, level: 80 },
                { name: "MySQL", icon: <FaDatabase className="text-[#4479A1]" />, level: 85 },
                { name: "AWS", icon: <div className="font-bold text-[#FF9900]">AWS</div>, level: 75 },
                { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, level: 70 },
            ]
        }
    ];

    const displaySkills = [
        { name: "React", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Django", level: 80 },
        { name: "Express", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
    ];

    return (
        <section className={`w-full relative z-10 overflow-hidden ${isHomePage ? "py-20 bg-[#030014]" : "pt-32 pb-20 bg-[#030014]"}`}>
            {isHomePage ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-[#00E5FF] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">
                            Professional Toolkit
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A comprehensive toolkit that enables me to build robust, scalable, and high-performance applications from the ground up.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
                        {skillCategories.map((category, idx) => (
                            <div 
                                key={idx} 
                                className="bg-[#0B0F19] rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 relative group overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={idx * 150}
                            >
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    <div className="p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                                        {category.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white">{category.title}</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {category.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="flex items-center gap-3 p-3 rounded-lg bg-[#151925] border border-gray-800/50 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-colors">
                                            <div className="text-xl">{skill.icon}</div>
                                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="mb-16" data-aos="fade-up">
                        <p className="text-cyan-400 text-[13px] font-bold tracking-[0.25em] uppercase mb-4 text-center">PROFESSIONAL TOOLKIT</p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 text-center">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {displaySkills.map((skill, index) => (
                            <SkillRing key={index} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

const SkillRing = ({ skill, index }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;

    return (
        <div 
            className="bg-[#0B0F19] rounded-[2rem] p-10 shadow-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <h3 className="text-xl font-bold text-white mb-8 tracking-wide uppercase">{skill.name}</h3>
            <div className="relative w-40 h-40 flex items-center justify-center mx-auto">
                <svg className="w-full h-full -rotate-90">
                    <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00E5FF" />
                            <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        className="stroke-gray-800/50 fill-none stroke-[8]"
                    />
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke={`url(#gradient-${index})`}
                        className="fill-none stroke-[8] transition-all duration-1000 ease-out"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: offset,
                            strokeLinecap: 'round'
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-white">
                        {skill.level}
                        <span className="text-xl align-top ml-0.5 text-cyan-400">%</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
