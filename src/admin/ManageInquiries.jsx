import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiMail, FiUser, FiCalendar, FiTrash2, FiMessageSquare } from 'react-icons/fi';

const ManageInquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchInquiries = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/contact');
            setInquiries(res.data.data || []);
        } catch (error) {
            toast.error('Failed to fetch inquiries');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this inquiry?')) return;
        try {
            // Check if there is a delete endpoint for inquiries in your backend
            // For now, I'll assuming it might exist or show an alert
            // await axios.delete(`http://localhost:4000/api/contact/${id}`);
            // toast.success('Inquiry removed');
            // fetchInquiries();
            alert('Delete functionality for inquiries depends on backend support.');
        } catch (error) {
            toast.error('Delete failed');
        }
    };

    return (
        <div className="space-y-8">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">Inquiries.</h1>
                <p className="text-gray-400 font-medium">Messages from your potential clients and collaborators.</p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="w-10 h-10 border-4 border-[#006599] border-t-transparent rounded-full animate-spin" />
                </div>
            ) : inquiries.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-[40px] border border-gray-100 dark:border-zinc-800">
                    <FiMessageSquare size={48} className="mx-auto text-gray-200 mb-6" />
                    <p className="text-gray-400 font-medium">No inquiries yet. Keep building!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {inquiries.map((inquiry) => (
                        <div key={inquiry._id} className="bg-white dark:bg-zinc-900 p-10 rounded-[40px] border border-gray-100 dark:border-zinc-800 group relative">
                            {/* <button onClick={() => handleDelete(inquiry._id)} className="absolute top-8 right-8 text-gray-300 hover:text-rose-500 transition-colors active:scale-95"><FiTrash2 size={20} /></button> */}

                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 bg-[#006599]/5 rounded-2xl flex items-center justify-center text-[#006599]">
                                    <FiUser size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">{inquiry.fullname}</h3>
                                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#006599]">
                                        <FiMail size={12} />
                                        <span>{inquiry.email}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-2xl mb-8">
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">"{inquiry.discription || inquiry.message || 'No description provided.'}"</p>
                            </div>

                            <div className="flex items-center justify-between text-gray-400">
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest italic">
                                    <FiCalendar size={12} />
                                    <span>{new Date(inquiry.createdAt).toLocaleDateString()}</span>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#006599]">New Inquiry</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageInquiries;
