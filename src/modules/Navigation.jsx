import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Resume", path: "/resume", },
        { name: "Portfolio", path: "/projects" },
        { name: "Skills", path: "/skills" }, 
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    return (
        <nav
            className={`w-full transition-all duration-300 z-50 ${
                isScrolled ? "fixed top-0 bg-[#0B0F19]/95 backdrop-blur-md shadow-2xl border-b border-gray-800" : "absolute top-0 left-0 bg-[#0B0F19] border-b border-gray-800"
            }`}
        >
            <div className="flex items-center justify-between w-full px-4 md:px-6 lg:px-8 py-4 lg:py-5">
                {/* Left Section: Logo */}
                <NavLink to="/" className="flex items-center gap-1.5 group">
                    <div className="relative flex items-center justify-center h-8 w-8 lg:h-9 lg:w-9 rounded-full border-[2px] border-cyan-500 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-[#0B0F19] transition-all duration-300 overflow-hidden">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full p-1 stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                            <path d="M6 4V20H13C16.866 20 20 16.4183 20 12C20 7.58172 16.866 4 13 4H6Z" />
                        </svg>
                    </div>
                    <span className="text-xl lg:text-2xl font-bold text-white tracking-wide">ixit</span>
                </NavLink>

                {/* Right Section: Navigation Links & Socials */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {/* Navigation Links */}
                    <div className="flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link, index) => (
                            link.isExternal ? (
                                <a
                                    key={index}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[13px] xl:text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <div key={index} className="relative flex flex-col items-center group">
                                    <NavLink
                                        to={link.path}
                                        className={`text-[13px] xl:text-sm font-semibold transition-all duration-300 pb-1 ${
                                            isActive(link.path) 
                                            ? "text-cyan-400" 
                                            : "text-gray-300 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </NavLink>
                                    {/* Active Underline */}
                                    <div className={`h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 absolute bottom-0 transition-transform origin-left duration-300 ${isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                                </div>
                            )
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-[1px] bg-gray-600"></div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 lg:gap-5 text-gray-300">
                        <a href="#" className="hover:text-white transition-colors"><FaFacebookF size={15} /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaXTwitter size={15} /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn size={15} /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaGithub size={15} /></a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white p-2 focus:outline-none"
                    >
                        {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0B0F19] border-t border-gray-800 ${
                    isMenuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                }`}
            >
                <div className="flex flex-col px-6 space-y-4">
                    {navLinks.map((link, index) => (
                        link.isExternal ? (
                            <a
                                key={index}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-300 hover:text-white text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <NavLink
                                key={index}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-base font-medium transition-colors ${
                                    isActive(link.path) ? "text-cyan-400" : "text-gray-400 hover:text-white"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    {isActive(link.path) && <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>}
                                    {link.name}
                                </div>
                            </NavLink>
                        )
                    ))}
                    
                    {/* Mobile Socials */}
                    <div className="flex items-center gap-6 pt-6 border-t border-gray-800 text-gray-400">
                        <a href="#" className="hover:text-white"><FaFacebookF size={18} /></a>
                        <a href="#" className="hover:text-white"><FaXTwitter size={18} /></a>
                        <a href="#" className="hover:text-white"><FaLinkedinIn size={18} /></a>
                        <a href="#" className="hover:text-white"><FaGithub size={18} /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
