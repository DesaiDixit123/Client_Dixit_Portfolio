import React from 'react';
import { FiCheckCircle, FiUsers, FiCoffee, FiAward } from 'react-icons/fi';

export default function Stats() {
    const stats = [
        { label: "Project Completed", value: "750+", icon: <FiCheckCircle className="text-3xl text-cyan-400" /> },
        { label: "Happy Clients", value: "500+", icon: <FiUsers className="text-3xl text-purple-400" /> },
        { label: "Cups of Coffee", value: "1000+", icon: <FiCoffee className="text-3xl text-orange-400" /> },
        { label: "Years Experience", value: "7+", icon: <FiAward className="text-3xl text-blue-400" /> },
    ];

    return (
        <section className="w-full py-20 bg-[#0B0F19] relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white/[0.03] border border-white/[0.05] rounded-3xl p-8 text-center backdrop-blur-sm hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                            <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <h4 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h4>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
