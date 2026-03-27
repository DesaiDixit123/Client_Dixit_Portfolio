import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserGraduate, FaUserAlt, FaGithub, FaLinkedin, FaCertificate, FaHeart, FaDownload } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaPython, FaBookOpen } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiDjango } from 'react-icons/si';

import profile_img from '../assets/Dixit.png';

const experiences = [
    {
        id: 1,
        role: "MERN Stack Development Intern",
        company: "Coding Cloud",
        duration: "January 2024 - June 2024",
        descTitle: "ERROR",
        descText: "When I was learning in the beginning, I realized that if there is an error of a single dot then you do not get scared, otherwise you not see that error, so it is important to be focused."
    },
    {
        id: 2,
        role: "PHP Laravel & MERN Stack Developer",
        company: "Cybernet It Solutions",
        duration: "July 2024 - August 2025",
        descTitle: "TIME-LIMIT",
        descText: "When you work under time pressure, do not pay attention to the time; you should think about how you can complete the work by keeping your mind calm."
    },
    {
        id: 3,
        role: "PHP Laravel & MERN Stack Developer",
        company: "Amar infotech private limited",
        duration: "September 2025 - February 2026",
        descTitle: "TEAM VALUE",
        descText: "If you want to make a good project through creativity, then you need the support of a team so that every member can make the project with his unique idea."
    },
    {
        id: 4,
        role: "Full Stack Developer (Freelance)",
        company: "Full Time Freelancing",
        duration: "March 2026 - Present",
        descTitle: "INDEPENDENCE",
        descText: "Handling end-to-end full stack development for clients, executing diverse technical requirements, and continuously adapting to new technologies."
    }
];

export default function Resume() {
    return (
        <section className="min-h-screen py-24 bg-[#0A0D18] text-gray-300 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center my-10">
                    <p className="text-[#00E5FF] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">MY RESUME</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        About <span className="bg-gradient-to-r from-[#00E5FF] to-blue-500 text-transparent bg-clip-text">Me</span>
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Sidebar */}
                    <div data-aos="fade-right" className="lg:w-[32%] w-full bg-[#1E2337] rounded-3xl p-8 shadow-2xl flex flex-col items-center">
                        <div className="w-[85%] aspect-square rounded-3xl overflow-hidden mb-6 border border-gray-700 bg-gray-800">
                            <img src={profile_img} alt="Dixit Desai" className="w-full h-full object-cover" />
                        </div>
                        <a href="/Dixit_Resume.pdf" download="Dixit_Resume.pdf" className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-colors mb-10 shadow-lg shadow-cyan-500/30">
                            <FaDownload className="text-lg" /> Resume
                        </a>

                        <div className="w-full mb-10">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-700 pb-2">
                                <FaUserAlt className="text-lg text-cyan-500" /> Contact
                            </h3>
                            <ul className="space-y-4 text-[13px] tracking-wide font-light">
                                <li className="flex items-center gap-4">
                                    <FaPhoneAlt className="text-gray-400 text-sm w-4 shrink-0" />
                                    <span className="break-all">+91 9737080195</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FaEnvelope className="text-gray-400 text-sm w-4 shrink-0" />
                                    <a href="mailto:desaidixit50@gmail.com" className="hover:text-cyan-400 break-all transition-colors">desaidixit50@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FaGithub className="text-gray-400 text-sm w-4 shrink-0" />
                                    <a href="https://github.com/DesaiDixit123" target="_blank" rel="noreferrer" className="hover:text-cyan-400 break-all transition-colors">github.com/DesaiDixit123</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FaLinkedin className="text-gray-400 text-sm w-4 shrink-0" />
                                    <a href="https://www.linkedin.com/in/dixit-desai-b636072a5/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 break-all transition-colors">linkedin.com/in/dixit-desai-b636072a5</a>
                                </li>
                                <li className="flex gap-4">
                                    <FaMapMarkerAlt className="text-gray-400 text-sm w-4 shrink-0 mt-1" />
                                    <span className="leading-relaxed">Nikol - Naroda Road, Ahmedabad City.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full mb-10">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-700 pb-2">
                                <FaUserGraduate className="text-xl text-cyan-500" /> Education
                            </h3>
                            <ul className="space-y-6 pl-7 border-l border-gray-700 ml-2 relative">
                                <li className="relative">
                                    <span className="absolute -left-[33px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                                    <h4 className="font-semibold text-white tracking-wide leading-tight">B.C.A. (Bachelor of Computer Applications)</h4>
                                    <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">R.B. Institute of management studies, GTU</p>
                                    <div className="flex gap-3 text-[11px] mt-1 font-semibold">
                                        <p className="text-cyan-400">CGPA: 7.20</p>
                                        <p className="text-yellow-400">Passing: 2024</p>
                                    </div>
                                </li>
                                <li className="relative">
                                    <span className="absolute -left-[33px] top-1.5 w-2 h-2 rounded-full bg-gray-500"></span>
                                    <h4 className="font-semibold text-gray-300 tracking-wide leading-tight">Higher Secondary School</h4>
                                    <p className="text-[11px] text-gray-400 mt-2">GSEB</p>
                                    <div className="flex gap-3 text-[11px] mt-1 font-semibold">
                                        <p className="text-cyan-400">Percentage: 74%</p>
                                        <p className="text-yellow-400">Passing: 2021</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full mb-10">
                            <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-gray-700 pb-2">
                                <FaCertificate className="text-lg text-cyan-500" /> Certificates
                            </h3>
                            <ul className="space-y-3 pl-3 text-[13px] font-light text-gray-300">
                                <li className="flex flex-col gap-1">
                                    <span className="font-semibold text-white">Coding Cloud :-</span>
                                    <span className="text-gray-400 pl-4 text-[12px]">MERN Stack Development</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full flex-grow">
                            <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-gray-700 pb-2">
                                <FaHeart className="text-lg text-rose-500" /> Hobbies
                            </h3>
                            <ul className="flex flex-wrap gap-2 text-[12px] font-semibold">
                                <li className="px-4 py-1.5 bg-[#181C2E] border border-gray-700 rounded-full text-gray-300">Chess</li>
                                <li className="px-4 py-1.5 bg-[#181C2E] border border-gray-700 rounded-full text-gray-300">Cricket</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-[68%] w-full flex flex-col gap-6">

                        {/* Header Box */}
                        <div data-aos="fade-down" className="bg-[#1E2337] rounded-[2rem] py-10 px-8 text-center flex flex-col justify-center items-center shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-[0.2em] relative z-10">DESAI DIXIT</h1>
                            <p className="text-cyan-400 text-sm font-bold tracking-[0.3em] uppercase relative z-10 border-t border-b border-cyan-500/30 py-2 px-8 inline-block">Full Stack Developer</p>
                        </div>

                        {/* About Me */}
                        <div data-aos="fade-up" data-aos-delay="100" className="bg-[#1E2337] rounded-[2rem] p-8 md:p-10 shadow-2xl">
                            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3"><span className="w-8 h-[2px] bg-cyan-500 block"></span> Profile Summary</h2>
                            <p className="text-[#a0a4b8] leading-8 text-[13px] tracking-wide font-light text-justify">
                                I am a web developer with a passion for building dynamic web applications. I have a solid background in full-stack development using the MERN stack and Python Django. My goal is to leverage my skills and knowledge in a challenging environment to contribute to team success and advance my career. I thrive on collaboration and continuous learning from peers.
                            </p>
                        </div>

                        {/* Experience */}
                        <div data-aos="fade-up" data-aos-delay="200" className="bg-[#1E2337] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><span className="w-8 h-[2px] bg-cyan-500 block"></span> Internship Experience</h2>

                            <div className="space-y-6">
                                {experiences.map((exp) => (
                                    <div key={exp.id} className="border border-[#343B58] rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
                                        <h3 className="text-[22px] font-semibold text-white mb-1">{exp.role}</h3>
                                        <p className="text-xs text-gray-400 mb-5 tracking-wide">{exp.company}</p>
                                        <p className="text-[11px] text-gray-300 font-light mb-3">{exp.duration}</p>
                                        <div className="mt-4 pt-4 border-t border-[#343B58]">
                                            <h4 className="text-[12px] font-bold text-white mb-1.5">{exp.descTitle}</h4>
                                            <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                                {exp.descText}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Skills - Expanded & Graphical */}
                        <div data-aos="fade-up" data-aos-delay="300" className="bg-[#1E2337] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><span className="w-8 h-[2px] bg-cyan-500 block"></span> Technical Skills</h2>

                            {/* Text Summary */}
                            <ul className="list-disc pl-5 text-[12.5px] text-gray-300 leading-relaxed font-light space-y-3 marker:text-cyan-500 mb-12">
                                <li><strong className="text-white font-semibold">Frontend Development:</strong> React.js, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap</li>
                                <li><strong className="text-white font-semibold">Backend Development:</strong> Node.js, Express.js, MongoDB, Python, Python Framework Django, SQL, SQLLITE Database</li>
                                <li><strong className="text-white font-semibold">API:</strong> API Development and Integration</li>
                                <li><strong className="text-white font-semibold">Management:</strong> Project Management and Team Collaboration</li>
                                <li><strong className="text-white font-semibold">Logic:</strong> Problem-Solving and Critical Thinking</li>
                                <li><strong className="text-white font-semibold">Version Control:</strong> Git, GitHub</li>
                                <li><strong className="text-white font-semibold">Tools:</strong> VS Code</li>
                            </ul>

                            {/* Skills Graphic Section */}
                            <div className="flex flex-col items-center justify-center pt-8 border-t border-gray-800">
                                {/* Top Row of Skills */}
                                <div className="flex flex-wrap justify-center items-center gap-0 lg:-mx-4 relative z-10 w-full mb-6 max-w-2xl px-4 lg:px-0">
                                    {/* Dotted connecting line behind */}
                                    <div className="absolute top-1/2 left-10 right-10 h-[1px] border-t border-dashed border-gray-600 -z-10 hidden sm:block"></div>

                                    <SkillBubble icon={<SiJavascript className="text-[#F7DF1E] bg-black" />} name="JAVASCRIPT" />
                                    <SkillBubble icon={<FaReact className="text-[#61DAFB]" />} name="REACT JS" />
                                    <SkillBubble icon={<FaNodeJs className="text-[#339933]" />} name="NODE JS" />
                                    <SkillBubble icon={<SiExpress className="text-gray-300" />} name="EXPRESS" />
                                </div>

                                {/* Bottom Row of Skills */}
                                <div className="flex flex-wrap justify-center items-center gap-0 lg:-mx-4 relative z-10 w-full mb-4 max-w-lg px-4 lg:px-0">
                                    {/* Dotted connecting line behind */}
                                    <div className="absolute top-1/2 left-8 right-8 h-[1px] border-t border-dashed border-gray-600 -z-10 hidden sm:block"></div>

                                    <SkillBubble icon={<SiMongodb className="text-[#47A248]" />} name="MONGODB" />
                                    <SkillBubble icon={<FaPython className="text-[#3776AB]" />} name="PYTHON" />
                                    <SkillBubble icon={<SiDjango className="text-[#092E20] bg-white rounded-md p-1" />} name="DJANGO" />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillBubble({ icon, name }) {
    return (
        <div className="flex items-center">
            {/* Small dot connecting to line if needed */}
            <div className="w-[5px] h-[5px] rounded-full bg-[#52527a] hidden sm:block"></div>

            <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full border border-dashed border-[#474c6d] bg-[#1E2337] flex flex-col items-center justify-center p-3 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:-translate-y-2 transition-all duration-300 z-10 mx-[-4px] sm:mx-[-8px]">
                <div className="text-[35px] sm:text-[45px] mb-2 drop-shadow-lg">
                    {icon}
                </div>
                <span className="text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">{name}</span>
            </div>

            {/* Small dot connecting to line if needed */}
            <div className="w-[5px] h-[5px] rounded-full bg-[#52527a] hidden sm:block"></div>
        </div>
    );
}
