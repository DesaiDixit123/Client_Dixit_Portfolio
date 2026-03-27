import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function ContactUs() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to API
        console.log("Form submitted:", formData);
        alert("Thanks for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section className="py-20 bg-[#030014] relative overflow-hidden" id="contact">
            {/* Background glowing effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] opacity-50 z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full filter blur-[150px] opacity-50 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 mt-4" data-aos="fade-up">
                    <p className="text-[#00E5FF] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">GET IN TOUCH</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        Contact <span className="bg-gradient-to-r from-[#00E5FF] to-blue-500 text-transparent bg-clip-text">Me</span>
                    </h2>
                    {isHomePage && (
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                            Have a project in mind or want to explore potential collaborations? I'd love to hear from you. Drop me a message below!
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 group flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                                <FiMail className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
                            <p className="text-gray-400 mb-2 text-sm">I respond quickly to emails.</p>
                            <a href="mailto:desaidixit50@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                desaidixit50@gmail.com
                            </a>
                        </div>

                        <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 group flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                                <FiPhone className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
                            <p className="text-gray-400 mb-2 text-sm">Available for urgent discussions.</p>
                            <a href="tel:+919737080195" className="text-purple-400 hover:text-purple-300 transition-colors">
                                +91 9737080195
                            </a>
                        </div>

                        <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 group flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                <FiMapPin className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                            <p className="text-gray-400 mb-2 text-sm">Based in</p>
                            <p className="text-blue-400 text-sm px-2">Nikol - Naroda Road, Ahmedabad</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-3xl backdrop-blur-sm w-full shadow-2xl" data-aos="fade-up" data-aos-delay="400">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#0a0a1a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#0a0a1a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0a0a1a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-[#0a0a1a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <FiSend className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
