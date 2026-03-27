import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { FiLayout, FiBriefcase, FiZap, FiBookOpen, FiLogOut, FiMenu, FiX, FiMessageSquare, FiShield, FiCode } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        toast.info('Logged out successfully');
        navigate('/admin/login');
    };

    const menuItems = [
        { name: 'Dashboard', icon: FiLayout, path: '/admin/dashboard' },
        { name: 'Projects', icon: FiBriefcase, path: '/admin/projects' },
        { name: 'Languages', icon: FiCode, path: '/admin/project-languages' },
        { name: 'Services', icon: FiZap, path: '/admin/services' },
        { name: 'Blogs', icon: FiBookOpen, path: '/admin/blogs' },
        { name: 'Inquiries', icon: FiMessageSquare, path: '/admin/inquiries' },
    ];

    return (
        <div className="flex h-screen bg-[#f8f9fa] dark:bg-[#050505] overflow-hidden font-sans">
            <ToastContainer position="top-right" autoClose={2000} />

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-[#0a0a0a] border-r border-gray-100 dark:border-zinc-800/50 transition-all duration-700 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="p-10">
                        <div className="flex items-center gap-4 group">
                            <div className="h-12 w-12 bg-gradient-to-br from-[#006599] to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-500">
                                <FiShield size={24} />
                            </div>
                            <div>
                                <h1 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">Command.</h1>
                                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mt-1">Portfolio Studio</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-6 space-y-1.5 overflow-y-auto custom-scrollbar">
                        <p className="px-4 text-[9px] font-black uppercase tracking-[0.5em] text-gray-400 mb-6 mt-4">Main Navigation</p>
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => `flex items-center gap-4 px-6 py-4 rounded-[20px] font-black uppercase tracking-widest text-[10px] transition-all duration-300 ${isActive 
                                    ? 'bg-[#006599] text-white shadow-2xl shadow-[#006599]/30 translate-x-2' 
                                    : 'text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-900 hover:text-gray-900 dark:hover:text-white hover:translate-x-1'}`}
                            >
                                <item.icon size={18} className={({ isActive }) => isActive ? 'animate-pulse' : ''} />
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-8 border-t border-gray-100 dark:border-zinc-800/50">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 px-6 py-5 rounded-[20px] font-black uppercase tracking-widest text-[10px] text-rose-500 bg-rose-50/50 dark:bg-rose-950/10 hover:bg-rose-500 hover:text-white transition-all duration-500 shadow-sm"
                        >
                            <FiLogOut size={18} />
                            Terminate Session
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 bg-[#fbfbfb] dark:bg-[#080808] relative">
                {/* Desktop/Mobile Header */}
                <header className="flex items-center justify-between px-10 py-8 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-100 dark:border-zinc-800/50 sticky top-0 z-40">
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => setSidebarOpen(!isSidebarOpen)} 
                            className="p-3 text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-zinc-900 rounded-xl transition-all"
                        >
                             {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                        <div className="h-4 w-[1px] bg-gray-200 dark:bg-zinc-800 hidden sm:block" />
                        <span className="text-xs font-black uppercase tracking-widest text-gray-400 hidden sm:block">Status: <span className="text-emerald-500">Authorized</span></span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-black text-gray-900 dark:text-white tracking-tight">Dixit Desai</p>
                            <p className="text-[9px] font-black uppercase text-gray-400">Master Administrator</p>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-700 shadow-sm" />
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-10 lg:p-16 custom-scrollbar">
                    <div className="max-w-[1600px] mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
