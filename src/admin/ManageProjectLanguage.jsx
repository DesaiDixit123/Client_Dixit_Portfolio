import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, 
    FiCode, FiSearch, FiLayers
} from 'react-icons/fi';

const ManageProjectLanguage = () => {
    const [languages, setLanguages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingLanguage, setEditingLanguage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [name, setName] = useState("");

    const token = localStorage.getItem('adminToken');

    const fetchLanguages = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/languages');
            setLanguages(res.data.data || []);
        } catch (error) {
            toast.error('Failed to fetch languages');
        }
    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.warning("Language name is required.");
            return;
        }

        setLoading(true);
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            if (editingLanguage) {
                // Backend might not have update for language yet, if not, I'll delete and add or just skip update
                // Given the router only has post, get, delete, I'll just support add/delete for now
                // or assume if I need update I should check controller.
                // Looking at projectLanguageRouter.js, there's no PUT. I'll just support ADD.
                toast.info("Update protocol unavailable. Re-creating entry.");
                await axios.delete(`http://localhost:4000/api/languages/${editingLanguage._id}`, config);
            }
            
            await axios.post('http://localhost:4000/api/languages', { name }, config);
            toast.success('Architecture node established');
            
            setIsModalOpen(false);
            setEditingLanguage(null);
            setName("");
            fetchLanguages();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Synchronization failed');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to decommission this language/framework?')) return;
        try {
            await axios.delete(`http://localhost:4000/api/languages/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Node removed');
            fetchLanguages();
        } catch (error) {
            toast.error('Deletion failed');
        }
    };

    const filteredLanguages = languages.filter(l => 
        l.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-12">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-[#006599] text-[9px] font-black uppercase tracking-[0.5em] mb-4"
                    >
                        <div className="h-[1px] w-8 bg-[#006599]" />
                        Project Categorization
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter italic">Frameworks.</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#006599] transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Find technology..."
                            className="pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 outline-none w-64 text-sm font-medium focus:ring-2 focus:ring-[#006599]/10 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => { setName(""); setEditingLanguage(null); setIsModalOpen(true); }}
                        className="group flex items-center gap-3 px-8 py-4 bg-[#006599] text-white rounded-2xl shadow-2xl shadow-[#006599]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <span className="text-xs font-black uppercase tracking-widest">New Node</span>
                        <FiPlus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                    </button>
                </div>
            </div>

            {/* Languages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <AnimatePresence>
                    {filteredLanguages.map((lang, idx) => (
                        <motion.div
                            layout
                            key={lang._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border border-gray-100 dark:border-zinc-800 hover:border-[#006599]/30 transition-all duration-500 group relative"
                        >
                            <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => { setEditingLanguage(lang); setName(lang.name); setIsModalOpen(true); }} className="p-2 text-gray-400 hover:text-[#006599] transition-colors"><FiEdit2 size={14} /></button>
                                <button onClick={() => handleDelete(lang._id)} className="p-2 text-rose-500 hover:text-rose-600 transition-colors"><FiTrash2 size={14} /></button>
                            </div>
                            <div className="h-10 w-10 bg-gray-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-[#006599] mb-4 group-hover:bg-[#006599] group-hover:text-white transition-all">
                                <FiCode size={20} />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight italic line-clamp-1">{lang.name}</h3>
                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-2">Active Protocol</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-hidden">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl" 
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white dark:bg-zinc-950 w-full max-w-lg rounded-[48px] shadow-2xl relative z-10 flex flex-col max-h-full"
                        >
                            <div className="px-10 py-8 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-[#006599]/10 flex items-center justify-center text-[#006599]">
                                        <FiLayers size={24} />
                                    </div>
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter italic">{editingLanguage ? 'Refine Node' : 'Initialize Node'}</h2>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="h-12 w-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-900 text-gray-400 hover:text-rose-500 transition-all active:scale-90"><FiX size={24} /></button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-10 space-y-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Framework Identity.</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Next.js, Flutter, etc."
                                        required
                                        className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-sm font-bold transition-all"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoFocus
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-6 rounded-3xl bg-[#006599] text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-black dark:hover:bg-white dark:hover:text-black hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-[0.99] flex items-center justify-center gap-4 group"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <FiCheck size={20} className="group-hover:scale-125 transition-transform" /> 
                                            {editingLanguage ? 'Commit Node' : 'Archive Node'}
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ManageProjectLanguage;
