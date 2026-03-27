import React from 'react';
import { useLocation } from "react-router-dom";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiMongodb, SiTypescript, SiNextdotjs, SiJavascript } from 'react-icons/si';
import skillsData from "../data/skills.json";


const IconComponent = ({ name, color }) => {
    const icons = {
        FaReact: <FaReact className={name === "React" ? "text-[#61DAFB]" : "text-3xl text-cyan-400"} style={{ color: name === "React" ? color : undefined }} />,
        FaNodeJs: <FaNodeJs className={name === "Node.js" ? "text-[#339933]" : "text-3xl text-green-500"} style={{ color: name === "Node.js" ? color : undefined }} />,
        FaPython: <FaPython style={{ color }} />,
        FaDatabase: <FaDatabase className={!color ? "text-3xl text-purple-500" : ""} style={{ color }} />,
        FaDocker: <FaDocker style={{ color }} />,
        FaGitAlt: <FaGitAlt style={{ color }} />,
        SiTailwindcss: <SiTailwindcss style={{ color }} />,
        SiDjango: <SiDjango style={{ color }} />,
        SiMongodb: <SiMongodb style={{ color }} />,
        SiTypescript: <SiTypescript style={{ color }} />,
        SiNextdotjs: <SiNextdotjs style={{ color }} />,
        SiJavascript: <SiJavascript style={{ color }} />,
        ExpressIcon: <div className="font-bold text-gray-400">ex</div>,
        RestIcon: <div className="font-bold text-blue-400">{'{ }'}</div>,
        AwsIcon: <div className="font-bold text-[#FF9900]">AWS</div>,
    };
    return icons[name] || null;
};

export default function Skills() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    
    const skillCategories = skillsData.skillCategories.map(category => ({
        ...category,
        icon: <IconComponent name={category.icon} />,
        skills: category.skills.map(skill => ({
            ...skill,
            icon: <IconComponent name={skill.icon} color={skill.color} />
        }))
    }));

    const displaySkills = skillsData.displaySkills;

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
