import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { 
    FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, 
    FiUpload, FiLink, FiExternalLink, 
    FiSearch, FiLayers, FiAlertCircle, FiChevronDown
} from 'react-icons/fi';

const ManageProjects = () => {
    const [projects, setProjects] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        projectLanguage: '',
        liveLink: '',
    });
    const [files, setFiles] = useState({
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
    });
    const [previews, setPreviews] = useState({});

    const token = localStorage.getItem('adminToken');

    const fetchProjects = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/projects');
            setProjects(res.data.data || []);
        } catch (error) {
            toast.error('Failed to fetch projects');
        }
    };

    const fetchLanguages = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/languages');
            setLanguages(res.data.data || []);
        } catch (error) {
            console.error('Failed to fetch languages');
        }
    };

    useEffect(() => {
        fetchProjects();
        fetchLanguages();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const name = e.target.name;
        if (file) {
            setFiles({ ...files, [name]: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({ ...prev, [name]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        if (!formData.title) return "Project Title is required.";
        if (!formData.projectLanguage) return "Architecture Node (Language) is required.";
        if (!formData.description || formData.description === '<p><br></p>') return "Project Description is required.";
        if (!editingProject && !files.image1) return "Primary Cover (Image 1) is required.";
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

        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        Object.keys(files).forEach(key => {
            if (files[key]) data.append(key, files[key]);
        });

        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            if (editingProject) {
                await axios.put(`http://localhost:4000/api/project/${editingProject._id}`, data, config);
                toast.success('Project updated successfully');
            } else {
                await axios.post('http://localhost:4000/api/projects', data, config);
                toast.success('Project launched successfully');
            }
            setIsModalOpen(false);
            setEditingProject(null);
            resetForm();
            fetchProjects();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Production failed');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({ title: '', description: '', projectLanguage: '', liveLink: '' });
        setFiles({ image1: null, image2: null, image3: null, image4: null, image5: null });
        setPreviews({});
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setFormData({
            title: project.title,
            description: project.description,
            projectLanguage: project.projectLanguage,
            liveLink: project.liveLink || '',
        });
        setPreviews({
             image1: project.image1,
             image2: project.image2,
             image3: project.image3,
             image4: project.image4,
             image5: project.image5,
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to decommission this project?')) return;
        try {
            await axios.delete(`http://localhost:4000/api/projects/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Project removed');
            fetchProjects();
        } catch (error) {
            toast.error('Deletion failed');
        }
    };

    const filteredProjects = projects.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.projectLanguage.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'clean']
        ],
    };

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
                        Management Studio
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter italic">Portfolio.</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#006599] transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search catalog..."
                            className="pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 outline-none w-64 text-sm font-medium focus:ring-2 focus:ring-[#006599]/10 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => { resetForm(); setEditingProject(null); setIsModalOpen(true); }}
                        className="group flex items-center gap-3 px-8 py-4 bg-[#006599] text-white rounded-2xl shadow-2xl shadow-[#006599]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <span className="text-xs font-black uppercase tracking-widest">New Entry</span>
                        <FiPlus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                    </button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            layout
                            key={project._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white dark:bg-zinc-900 rounded-[40px] border border-gray-100 dark:border-zinc-800 hover:border-[#006599]/30 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 flex flex-col h-full"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img src={project.image1} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleEdit(project)} className="flex-1 py-3 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#006599] hover:text-white transition-colors flex items-center justify-center gap-2">
                                            <FiEdit2 size={12} /> Edit
                                        </button>
                                        <button onClick={() => handleDelete(project._id)} className="flex-1 py-3 bg-rose-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                                            <FiTrash2 size={12} /> Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                    <span className="px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white shadow-xl">
                                        {project.projectLanguage}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight mb-2 italic line-clamp-1">{project.title}</h3>
                                <div className="text-xs text-gray-400 font-medium line-clamp-2 leading-relaxed h-8 mb-4 overflow-hidden" dangerouslySetInnerHTML={{ __html: project.description }} />
                                
                                <div className="mt-auto pt-6 border-t border-gray-50 dark:border-zinc-800 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[project.image1, project.image2, project.image3, project.image4, project.image5].filter(Boolean).map((img, i) => (
                                            <div key={i} className="h-6 w-6 rounded-full border-2 border-white dark:border-zinc-900 overflow-hidden bg-gray-100">
                                                <img src={img} className="h-full w-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 h-8 w-8 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-400 group-hover:text-[#006599] transition-colors justify-center">
                                         <FiExternalLink size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Entry Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-hidden text-gray-900 dark:text-white">
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
                            className="bg-white dark:bg-zinc-950 w-full max-w-6xl rounded-[48px] shadow-2xl relative z-10 flex flex-col max-h-full"
                        >
                            {/* Modal Header */}
                            <div className="px-10 py-8 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-[#006599]/10 flex items-center justify-center text-[#006599]">
                                        <FiLayers size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black tracking-tighter italic">{editingProject ? 'Modify Instance' : 'Archive New Entry'}</h2>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{editingProject ? 'Syncing updates to ecosystem' : 'Staging new case study'}</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="h-12 w-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-900 text-gray-400 hover:text-rose-500 transition-all active:scale-90"><FiX size={24} /></button>
                            </div>

                            {/* Modal Body */}
                            <form onSubmit={handleSubmit} className="p-10 overflow-y-auto space-y-12 custom-scrollbar">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                    {/* Left Column: General Info */}
                                    <div className="lg:col-span-4 space-y-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Identity. <span className="text-rose-500">*</span></label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Nexus Dashboard"
                                                className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-sm font-bold transition-all"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Architecture Node. <span className="text-rose-500">*</span></label>
                                            <div className="relative">
                                                <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                <select
                                                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-sm font-bold transition-all appearance-none cursor-pointer"
                                                    value={formData.projectLanguage}
                                                    onChange={(e) => setFormData({ ...formData, projectLanguage: e.target.value })}
                                                >
                                                    <option value="">Select Domain</option>
                                                    {languages.map(lang => <option key={lang._id} value={lang.name}>{lang.name}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">External Link.</label>
                                            <div className="relative">
                                                <FiLink className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="url"
                                                    placeholder="live.project.com"
                                                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent focus:border-[#006599] outline-none text-sm font-bold transition-all"
                                                    value={formData.liveLink}
                                                    onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Experience Assets. <span className="text-rose-500">*</span></label>
                                            <div className="grid grid-cols-5 gap-3">
                                                {[1, 2, 3, 4, 5].map(num => (
                                                    <div key={num} className="relative group/asset">
                                                        <input
                                                            type="file"
                                                            id={`asset-${num}`}
                                                            name={`image${num}`}
                                                            className="hidden"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label 
                                                            htmlFor={`asset-${num}`} 
                                                            className={`aspect-square rounded-xl border-2 border-dashed flex items-center justify-center cursor-pointer transition-all overflow-hidden relative ${previews[`image${num}`] 
                                                                ? 'border-solid border-[#006599]' 
                                                                : 'border-gray-200 dark:border-zinc-800 hover:border-[#006599] hover:bg-[#006599]/5'}`}
                                                        >
                                                            {previews[`image${num}`] ? (
                                                                <img src={previews[`image${num}`]} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="flex flex-col items-center gap-1 opacity-20">
                                                                    <FiUpload size={12} />
                                                                    <span className="text-[8px] font-black">0{num}</span>
                                                                </div>
                                                            )}
                                                            {num === 1 && !previews.image1 && (
                                                                <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                                                            )}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Narrative */}
                                    <div className="lg:col-span-8 flex flex-col h-full min-h-[400px]">
                                        <div className="space-y-2 flex-1 flex flex-col">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Mission Narrative. <span className="text-rose-500">*</span></label>
                                            <div className="flex-1 bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-transparent focus-within:border-[#006599] transition-all">
                                                <ReactQuill 
                                                    theme="snow"
                                                    value={formData.description}
                                                    onChange={(val) => setFormData({ ...formData, description: val })}
                                                    modules={quillModules}
                                                    className="h-full admin-editor"
                                                    placeholder="Describe the architectural complexity and mission objective..."
                                                />
                                            </div>
                                        </div>
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
                                            <FiCheck size={20} className="group-hover:scale-125 transition-transform" /> 
                                            {editingProject ? 'Commit Modifications' : 'Launch for Review'}
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style>{`
                .admin-editor .ql-container {
                    border: none !important;
                    font-family: inherit;
                    font-size: 0.875rem;
                }
                .admin-editor .ql-toolbar {
                    border: none !important;
                    border-bottom: 1px solid rgba(0,0,0,0.05) !important;
                    padding: 1rem !important;
                }
                .dark .admin-editor .ql-toolbar {
                    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
                }
                .dark .ql-snow .ql-stroke { stroke: #9ca3af !important; }
                .dark .ql-snow .ql-fill { fill: #9ca3af !important; }
                .dark .ql-snow .ql-picker { color: #9ca3af !important; }
                .admin-editor { height: calc(100% - 50px); }
            `}</style>
        </div>
    );
};

export default ManageProjects;
