import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1E2336] py-5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Copyright */}
                <p className="text-white font-medium text-[15px]">
                    © {new Date().getFullYear()} All Rights Reserved by <span className="text-[#8B92A5]">Dixit</span>
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a 
                        href="https://www.facebook.com/dixit.desai.9822?mibextid=rS40aB7S9Ucbxw6v" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        <FaFacebook size={19} />
                    </a>
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        <FaXTwitter size={19} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/dixit-desai-b636072a5/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        <FaLinkedin size={19} />
                    </a>
                    <a 
                        href="https://github.com/DesaiDixit123/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        <FaGithub size={19} />
                    </a>
                </div>

            </div>
        </footer>
    );
}