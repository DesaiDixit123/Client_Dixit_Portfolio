import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiBookOpen } from 'react-icons/fi';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        author: 'Dixit Desai',
        date: '',
        summary: '',
        image: '',
        content: '',
    });

    const token = localStorage.getItem('adminToken');

    const fetchBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/blogs');
            setBlogs(res.data.data || []);
        } catch (error) {
            toast.error('Failed to fetch blogs');
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const resetForm = () => {
        setFormData({ title: '', author: 'Dixit Desai', date: '', summary: '', image: '', content: '' });
    };

    const handleEdit = (blog) => {
        setEditingBlog(blog);
        setFormData({ ...blog });
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            if (editingBlog) {
                await axios.put(`http://localhost:4000/api/blogs/${editingBlog._id}`, formData, config);
                toast.success('Blog updated');
            } else {
                await axios.post('http://localhost:4000/api/blogs', formData, config);
                toast.success('Blog published');
            }
            setIsModalOpen(false);
            setEditingBlog(null);
            resetForm();
            fetchBlogs();
        } catch (error) {
            toast.error('Action failed');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this blog post?')) return;
        try {
            await axios.delete(`http://localhost:4000/api/blogs/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Blog removed');
            fetchBlogs();
        } catch (error) {
            toast.error('Delete failed');
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">Editorial.</h1>
                    <p className="text-gray-400 font-medium">Broadcast your thoughts and insights.</p>
                </div>
                <button onClick={() => { resetForm(); setEditingBlog(null); setIsModalOpen(true); }} className="p-4 bg-[#006599] text-white rounded-2xl shadow-xl hover:bg-black transition-all group">
                    <FiPlus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                    <div key={blog._id} className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border border-gray-100 dark:border-zinc-800 group relative flex gap-6">
                        <img src={blog.image} className="w-32 h-32 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                        <div className="flex-1">
                            <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(blog)} className="text-gray-400 hover:text-[#006599] transition-colors"><FiEdit2 size={16} /></button>
                                <button onClick={() => handleDelete(blog._id)} className="text-rose-500 hover:text-rose-600 transition-colors"><FiTrash2 size={16} /></button>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#006599] mb-2 block">{blog.date}</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 italic line-clamp-1">{blog.title}</h3>
                            <p className="text-xs text-gray-400 font-medium line-clamp-2">{blog.summary}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
                    <div className="bg-white dark:bg-zinc-900 w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                        <div className="p-10 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter italic">{editingBlog ? 'Edit Story' : 'New Publication'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><FiX size={24} /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-10 overflow-y-auto space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Title</label>
                                    <input type="text" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none text-sm" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Date / Month</label>
                                    <input type="text" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none text-sm" placeholder="August 2024" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Featured Image URL</label>
                                <input type="url" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none text-sm" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Summary</label>
                                <textarea required rows={3} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none text-sm resize-none" value={formData.summary} onChange={(e) => setFormData({ ...formData, summary: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Main Content (Markdown supported)</label>
                                <textarea required rows={8} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 outline-none text-sm resize-none" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} />
                            </div>
                            <button type="submit" disabled={loading} className="w-full py-5 rounded-[24px] bg-[#006599] text-white font-black uppercase tracking-widest text-xs shadow-2xl flex items-center justify-center gap-3">
                                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><FiCheck size={18} /> {editingBlog ? 'Update Blog' : 'Publish Blog'}</>}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageBlogs;
