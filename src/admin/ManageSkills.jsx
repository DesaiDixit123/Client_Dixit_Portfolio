import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, 
    FiCpu, FiSearch, FiLayers, FiDatabase, FiSmartphone
} from 'react-icons/fi';

const ManageSkills = () => {
    const [skillsData, setSkillsData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSkill, setEditingSkill] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        category: '',
        icon: '',
        color: '',
        skills: ['', '', '', ''],
    });

    const token = localStorage.getItem('adminToken');

    const fetchSkills = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/skills');
            setSkillsData(res.data.data || []);
        } catch (error) {
            toast.error('Failed to fetch skills');
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    const validateForm = () => {
        if (!formData.category) return "Category Name is required.";
        if (!formData.icon) return "Icon Library name is required.";
        if (formData.skills.filter(s => s.trim() !== '').length === 0) return "At least one skill entry is required.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const error = validateForm();
        if (error) {
            toast.warning(error);
            return;
        }

        setLoading(true);
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const payload = { ...formData, skills: formData.skills.filter(s => s.trim() !== '') };

            if (editingSkill) {
                await axios.put(`http://localhost:4000/api/skills/${editingSkill._id}`, payload, config);
                toast.success('Technical domain updated');
            } else {
                await axios.post('http://localhost:4000/api/skills', payload, config);
                toast.success('New technical domain archived');
            }
            setIsModalOpen(false);
            setEditingSkill(null);
            resetForm();
            fetchSkills();
        } catch (error) {
            toast.error('Synchronization failed');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({ category: '', icon: '', color: '', skills: ['', '', '', ''] });
    };

    const handleEdit = (skill) => {
        setEditingSkill(skill);
        setFormData({
            category: skill.category,
            icon: skill.icon,
            color: skill.color,
            skills: skill.skills.length ? [...skill.skills] : ['', '', '', ''],
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to decommission this skill category?')) return;
        try {
            await axios.delete(`http://localhost:4000/api/skills/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Domain removed');
            fetchSkills();
        } catch (error) {
            toast.error('Deletion failed');
        }
    };

    const handleSkillItemChange = (idx, val) => {
        const newSkills = [...formData.skills];
        newSkills[idx] = val;
        setFormData({ ...formData, skills: newSkills });
    };

    const addSkillItem = () => setFormData({ ...formData, skills: [...formData.skills, ''] });
    const removeSkillItem = (idx) => {
        const newSkills = formData.skills.filter((_, i) => i !== idx);
        setFormData({ ...formData, skills: newSkills });
    };

    const filteredSkills = skillsData.filter(s => 
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
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
                        Technical Intelligence
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter italic">Stack.</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#006599] transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Identify technology..."
                            className="pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 outline-none w-64 text-sm font-medium focus:ring-2 focus:ring-[#006599]/10 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => { resetForm(); setEditingSkill(null); setIsModalOpen(true); }}
                        className="group flex items-center gap-3 px-8 py-4 bg-[#006599] text-white rounded-2xl shadow-2xl shadow-[#006599]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <span className="text-xs font-black uppercase tracking-widest">New Domain</span>
                        <FiPlus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                    </button>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                <AnimatePresence>
                    {filteredSkills.map((category, idx) => (
                        <motion.div
                            layout
                            key={category._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white dark:bg-zinc-900 p-10 rounded-[40px] border border-gray-100 dark:border-zinc-800 hover:border-[#006599]/30 transition-all duration-500 hover:shadow-2xl group relative flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className={`h-14 w-14 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl flex items-center justify-center text-[#006599] group-hover:bg-[#006599] group-hover:text-white transition-all duration-500 group-hover:-rotate-3 shadow-sm`}>
                                    <FiCpu size={24} />
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <button onClick={() => handleEdit(category)} className="p-2.5 bg-gray-50 dark:bg-zinc-800 text-gray-400 hover:text-[#006599] rounded-xl transition-colors shadow-sm"><FiEdit2 size={14} /></button>
                                    <button onClick={() => handleDelete(category._id)} className="p-2.5 bg-gray-50 dark:bg-zinc-800 text-rose-500 hover:text-rose-600 rounded-xl transition-colors shadow-sm"><FiTrash2 size={14} /></button>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-6 italic">{category.category}</h3>
                            
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((s, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-50 dark:bg-zinc-800/50 text-[9px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 rounded-full border border-transparent group-hover:border-[#006599]/10 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-50 dark:border-zinc-800 flex items-center justify-between">
                                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">System Core.</span>
                                 <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse" />
                            </div>
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
                            className="bg-white dark:bg-zinc-950 w-full max-w-2xl rounded-[48px] shadow-2xl relative z-10 flex flex-col max-h-full"
                        >
                            <div className="px-10 py-8 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-[#006599]/10 flex items-center justify-center text-[#006599]">
                                        <FiCpu size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter italic">{editingSkill ? 'Sync Domain' : 'New Integration'}</h2>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{editingSkill ? 'Updating architecture protocols' : 'Initializing new tech capability'}</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="h-12 w-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-900 text-gray-400 hover:text-rose-500 transition-all active:scale-90"><FiX size={24} /></button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Domain Name.</label>
                                        <input
                                            type="text"
                                            placeholder="Full Stack Mastery"
                                            required
                                            className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-sm font-bold transition-all"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Accent Signature (Color).</label>
                                        <input
                                            type="text"
                                            placeholder="from-blue-500 to-indigo-600"
                                            required
                                            className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-sm font-bold transition-all"
                                            value={formData.color}
                                            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Hardware Icon Class.</label>
                                    <input
                                        type="text"
                                        placeholder="FiCpu, FiDatabase, FiSmartphone"
                                        required
                                        className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-sm font-bold transition-all"
                                        value={formData.icon}
                                        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between px-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Technology Grid.</label>
                                        <button type="button" onClick={addSkillItem} className="text-[10px] font-black uppercase text-[#006599] hover:opacity-70 transition-opacity">+ Add Entry</button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {formData.skills.map((skill, idx) => (
                                            <div key={idx} className="flex gap-2">
                                                <input
                                                    type="text"
                                                    placeholder={`Tech node 0${idx + 1}`}
                                                    className="w-full px-8 py-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-xs font-bold transition-all"
                                                    value={skill}
                                                    onChange={(e) => handleSkillItemChange(idx, e.target.value)}
                                                />
                                                {formData.skills.length > 1 && (
                                                    <button type="button" onClick={() => removeSkillItem(idx)} className="px-4 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl transition-all">
                                                        <FiTrash2 size={16} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
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
                                            <FiCheck size={20} className="group-hover:rotate-12 transition-transform" /> 
                                            {editingSkill ? 'Establish Domain' : 'Initialize Mastery'}
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

export default ManageSkills;
