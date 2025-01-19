import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/DixitWeb.png";
import { FaArrowRight } from "react-icons/fa";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`nav flex justify-between items-center px-4 py-3 md:px-7 md:py-5 border-b-2 transition-all duration-300 ${isScrolled ? "fixed top-0 w-full bg-white shadow-lg z-50" : "relative bg-transparent"}`}
        >
            {/* Logo */}
            <NavLink to="/">
                <img src={logo} alt="Logo" className="w-[150px] md:w-[200px]" />
            </NavLink>

            {/* Navigation Links */}
            <div className="hidden md:flex font-semibold">
                <ul className="flex gap-5">
                    <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-blue-600">About Us</NavLink></li>
                    <li><NavLink to="/projects" className="hover:text-blue-600">Projects</NavLink></li>
                    <li><NavLink to="/skills" className="hover:text-blue-600">Skills</NavLink></li>
                    <li><a href="/Dixit_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Resume</a></li>
                    <li><NavLink to="/story" className="hover:text-blue-600">Story</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-blue-600">Contact Me</NavLink></li>
                </ul>
            </div>

            {/* Let's Talk Button */}
            <div className="hidden md:flex">
                <NavLink to="/contact">
                    <button className="bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white font-semibold w-[120px] h-[40px] flex justify-center items-center rounded-[20px] hover:shadow-lg hover:scale-105">
                        Let's Talk <span className="pl-2"><FaArrowRight /></span>
                    </button>
                </NavLink>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[70px] left-0 right-0 bg-white shadow-md md:hidden">
                    <ul className="flex flex-col gap-5 py-5 px-7">
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Home</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">About Us</NavLink></li>
                        <li><NavLink to="/projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Projects</NavLink></li>
                        <li><NavLink to="/skills" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Skills</NavLink></li>
                        <li><a href="/Dixit_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Resume</a></li>
                        <li><NavLink to="/story" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Story</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Contact Me</NavLink></li>
                        <li>
                            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                                <button className="bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white font-semibold w-full py-2 rounded-md">
                                    Let's Talk <FaArrowRight className="inline ml-2" />
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
