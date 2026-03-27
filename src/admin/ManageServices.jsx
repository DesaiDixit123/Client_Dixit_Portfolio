import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiLayers } from 'react-icons/fi';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        icon: '',
        description: '',
        points: ['', '', ''],
    });

    const token = localStorage.getItem('adminToken');

    const fetchServices = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/services');
            setServices(res.data.data);
        } catch (error) {
            toast.error('Failed to fetch services');
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const payload = {
                ...formData,
                points: formData.points.filter(p => p.trim() !== '')
            };

            if (editingService) {
                await axios.put(`http://localhost:4000/api/services/${editingService._id}`, payload, config);
                toast.success('Service updated');
            } else {
                await axios.post('http://localhost:4000/api/services', payload, config);
                toast.success('Service added');
            }
            setIsModalOpen(false);
            setEditingService(null);
            resetForm();
            fetchServices();
        } catch (error) {
            toast.error('Action failed');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({ title: '', icon: '', description: '', points: ['', '', ''] });
    };

    const handleEdit = (service) => {
        setEditingService(service);
        setFormData({
            title: service.title,
            icon: service.icon,
            description: service.description,
            points: service.points.length ? [...service.points] : ['', '', ''],
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this service?')) return;
        try {
            await axios.delete(`http://localhost:4000/api/services/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Service removed');
            fetchServices();
        } catch (error) {
            toast.error('Delete failed');
        }
    };

    const handlePointChange = (idx, val) => {
        const newPoints = [...formData.points];
        newPoints[idx] = val;
        setFormData({ ...formData, points: newPoints });
    };

    const addPoint = () => setFormData({ ...formData, points: [...formData.points, ''] });

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">Services.</h1>
                    <p className="text-gray-400 font-medium">Define your expertize and offerings.</p>
                </div>
                <button
                    onClick={() => { resetForm(); setEditingService(null); setIsModalOpen(true); }}
                    className="p-4 bg-[#006599] text-white rounded-2xl shadow-xl shadow-[#006599]/20 hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all group"
                >
                    <FiPlus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <div key={service._id} className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border border-gray-100 dark:border-zinc-800 group relative">
                        <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => handleEdit(service)} className="text-gray-400 hover:text-[#006599] transition-colors"><FiEdit2 size={16} /></button>
                            <button onClick={() => handleDelete(service._id)} className="text-rose-500 hover:text-rose-600 transition-colors"><FiTrash2 size={16} /></button>
                        </div>
                        <div className="h-12 w-12 bg-gray-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-[#006599] mb-6 group-hover:bg-[#006599] group-hover:text-white transition-all">
                            <FiLayers size={20} />
                        </div>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 italic">{service.title}</h3>
                        <p className="text-xs text-[#006599] font-black uppercase tracking-widest mb-4">{service.description}</p>
                        <div className="space-y-2">
                            {service.points.map((p, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-gray-300 rounded-full" />
                                    <span className="text-[10px] text-gray-500 font-medium">{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
                    <div className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                        <div className="p-10 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter italic">{editingService ? 'Edit Service' : 'New Offering'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><FiX size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-10 overflow-y-auto space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:border-[#006599] outline-none text-sm font-medium transition-all"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Icon Class (e.g., FiZap)</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:border-[#006599] outline-none text-sm font-medium transition-all"
                                    value={formData.icon}
                                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Short Tagline</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:border-[#006599] outline-none text-sm font-medium transition-all"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 block">Key Points</label>
                                {formData.points.map((point, idx) => (
                                    <input
                                        key={idx}
                                        type="text"
                                        placeholder={`Point ${idx + 1}`}
                                        className="w-full px-6 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:border-[#006599] outline-none text-xs font-medium transition-all"
                                        value={point}
                                        onChange={(e) => handlePointChange(idx, e.target.value)}
                                    />
                                ))}
                                <button type="button" onClick={addPoint} className="text-[10px] font-bold text-[#006599] ml-4 hover:underline ring-0 outline-none">+ Add Point</button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 rounded-[24px] bg-[#006599] text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all shadow-2xl flex items-center justify-center gap-3"
                            >
                                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><FiCheck size={18} /> {editingService ? 'Update Hub' : 'Add Service'}</>}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageServices;
