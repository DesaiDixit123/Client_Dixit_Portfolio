import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiBriefcase, FiZap, FiBookOpen, FiMessageSquare, FiTrendingUp, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        projects: 0,
        services: 0,
        skills: 0,
        blogs: 0,
        inquiries: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [projectsRes, servicesRes, skillsRes, blogsRes, inquiriesRes] = await Promise.all([
                    axios.get('http://localhost:4000/api/projects'),
                    axios.get('http://localhost:4000/api/services'),
                    axios.get('http://localhost:4000/api/skills'),
                    axios.get('http://localhost:4000/api/blogs'),
                    axios.get('http://localhost:4000/api/contact')
                ]);

                setStats({
                    projects: projectsRes.data.data?.length || 0,
                    services: servicesRes.data.data?.length || 0,
                    skills: skillsRes.data.data?.length || 0,
                    blogs: blogsRes.data.data?.length || 0,
                    inquiries: inquiriesRes.data.data?.length || 0
                });
            } catch (error) {
                console.error('Error fetching dashboard stats:', error);
            }
        };
        fetchStats();
    }, []);

    const statCards = [
        { label: 'Total Projects', value: stats.projects, icon: FiBriefcase, color: 'bg-blue-500' },
        { label: 'Active Services', value: stats.services, icon: FiZap, color: 'bg-emerald-500' },
        { label: 'Mastered Skills', value: stats.skills, icon: FiZap, color: 'bg-amber-500' },
        { label: 'Published Blogs', value: stats.blogs, icon: FiBookOpen, color: 'bg-purple-500' },
        { label: 'User Inquiries', value: stats.inquiries, icon: FiMessageSquare, color: 'bg-rose-500' },
    ];

    return (
        <div>
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">Command Center.</h1>
                <p className="text-gray-400 font-medium">Overview of your portfolio ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
                {statCards.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border border-gray-100 dark:border-zinc-800 shadow-xl shadow-black/[0.02]"
                    >
                        <div className={`h-12 w-12 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${stat.color.split('-')[1]}-500/20`}>
                            <stat.icon size={20} />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                        <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight italic">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-zinc-900 p-10 rounded-[40px] border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Recent Activity</h3>
                        <FiTrendingUp className="text-[#006599]" />
                    </div>
                    <div className="space-y-6">
                        <p className="text-gray-400 text-sm font-medium italic">New inquiries and updates will appear here.</p>
                    </div>
                </div>

                <div className="bg-[#006599] p-10 rounded-[40px] text-white relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-2xl font-black tracking-tight mb-4">Portfolio Strategy</h3>
                            <p className="text-white/70 text-sm font-medium max-w-xs leading-relaxed">Ensure your project gallery displays your most recent and impactful work for maximum conversion.</p>
                        </div>
                        <div className="mt-12 flex items-center gap-4">
                            <FiClock className="opacity-50" />
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Last Backup: Just Now</span>
                        </div>
                    </div>
                    <FiBriefcase className="absolute -bottom-10 -right-10 text-white/5 h-64 w-64 group-hover:scale-110 transition-transform duration-1000" />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
