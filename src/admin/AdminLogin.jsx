import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiLock, FiUser } from 'react-icons/fi';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/api/admin/login', {
                username,
                password,
            });

            if (response.data.process) {
                localStorage.setItem('adminToken', response.data.token);
                localStorage.setItem('adminUser', JSON.stringify(response.data.admin));
                toast.success('Login Successful!');
                setTimeout(() => navigate('/admin/dashboard'), 1500);
            } else {
                toast.error(response.data.message || 'Login Failed');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#050505] p-6">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-zinc-900 rounded-[32px] p-10 border border-gray-100 dark:border-zinc-800 shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="h-16 w-16 bg-[#006599] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                            <FiLock size={32} />
                        </div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">Admin Portal</h1>
                        <p className="text-gray-400 text-sm mt-2 font-medium">Secure Access Only</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center text-gray-400 group-focus-within:text-[#006599] transition-colors">
                                <FiUser size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:border-[#006599] focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all font-medium text-gray-900 dark:text-white"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center text-gray-400 group-focus-within:text-[#006599] transition-colors">
                                <FiLock size={18} />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-transparent focus:border-[#006599] focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all font-medium text-gray-900 dark:text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-2xl bg-[#006599] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:shadow-[#006599]/20 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
