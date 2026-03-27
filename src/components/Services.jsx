import React from 'react';
import { FiMonitor, FiServer, FiLayers, FiActivity, FiDatabase, FiLock } from 'react-icons/fi';
import { useLocation } from "react-router-dom";

export default function Services({ isEmbedded = false }) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const services = [
        {
            icon: <FiMonitor className="text-4xl text-cyan-400" />,
            title: "Frontend Development",
            description: "Crafting pixel-perfect, responsive, and highly interactive user interfaces using modern frameworks like React and Next.js. I focus on accessibility, performance, and seamless animations to deliver exceptional digital experiences.",
            features: ["React & Next.js", "Tailwind CSS", "Framer Motion & AOS", "Responsive Design"]
        },
        {
            icon: <FiServer className="text-4xl text-blue-500" />,
            title: "Backend Development",
            description: "Architecting robust, secure, and scalable server-side applications. I build efficient RESTful APIs and integrate complex databases using Node.js, Python, and the Django ecosystem to power dynamic applications.",
            features: ["Node.js & Express", "Python & Django", "RESTful APIs", "Database Architecture"]
        },
        {
            icon: <FiLayers className="text-4xl text-purple-500" />,
            title: "Full Lifecycle & Architecture",
            description: "Navigating the complete software development lifecycle from concept to deployment. I ensure end-to-end product delivery, implementing CI/CD pipelines and scalable cloud infrastructure for long-term business value.",
            features: ["System Architecture", "Cloud Deployment (AWS)", "Docker & CI/CD", "Performance Optimization"]
        },
        {
            icon: <FiDatabase className="text-4xl text-green-400" />,
            title: "Database Management",
            description: "Designing and scaling high-performance database architectures. I specialize in schema design, query optimization, and data modeling for both SQL (PostgreSQL/MySQL) and NoSQL (MongoDB) databases.",
            features: ["Schema Design", "Query Optimization", "Data Migration", "MongoDB & PostgreSQL"]
        },
        {
            icon: <FiActivity className="text-4xl text-yellow-400" />,
            title: "API Strategy & Integration",
            description: "Building robust, well-documented API ecosystems. I focus on developing secure RESTful and GraphQL endpoints that enable seamless communication between your frontend and complex backend services.",
            features: ["RESTful API Design", "GraphQL Integration", "API Documentation", "Third-party Services"]
        },
        {
            icon: <FiLock className="text-4xl text-red-500" />,
            title: "Secure Web Solutions",
            description: "Implementing industry-standard security protocols to protect your data and users. I integrate JWT authentication, OAuth, and SSL encryption to ensure your applications are robust against modern threats.",
            features: ["JWT & OAuth Integration", "Data Encryption", "Secure Auth Workflows", "Vulnerability Auditing"]
        }
    ];

    const content = (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-[#00E5FF] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">
                    What I Do
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                </h3>
                {isHomePage && (
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Comprehensive technical solutions designed to transform your ideas into powerful, market-ready digital products.
                    </p>
                )}
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
                {(isHomePage ? services.slice(0, 3) : services).map((service, index) => (
                    <div 
                        key={index} 
                        className="group bg-[#151925] border border-gray-800 rounded-3xl p-8 hover:bg-[#1a1f2e] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <div className="mb-6 p-4 bg-white/[0.02] rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>
                        
                        <h4 className="text-2xl font-bold text-white mb-4">
                            {service.title}
                        </h4>
                        
                        <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                            {service.description}
                        </p>

                        <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );

    if (isEmbedded) return content;

    return (
        <section className={`w-full relative z-10 overflow-hidden ${isHomePage ? "py-20 bg-[#030014]" : "pt-32 pb-20 bg-[#030014]"}`}>
            {/* Background Orbs (Only on dedicated page) */}
            {!isHomePage && (
                <>
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] opacity-40 z-0 pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full filter blur-[150px] opacity-40 z-0 pointer-events-none" />
                </>
            )}
            {content}
        </section>
    );
}
