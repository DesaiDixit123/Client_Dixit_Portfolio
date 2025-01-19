import { NavLink } from "react-router-dom";
import logo from "../assets/DixitWeb.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <>

            <div className="bg-white shadow-[0px_0px_20px_2px_#718096] py-8">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Personal Information */}
                        <div>
                            <img src={logo} alt="" className="w-[300px]" />

                            <p className="pt-[40px] text-[20px]">Location: Ahmedabad , Gujarat</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li><a href="/about" className="hover:text-blue-400">About Me</a></li>
                                <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
                                <li><a href="/Dixit_Resume.pdf" target="_blank"
                            rel="noopener noreferrer" className="hover:text-blue-400">Resume</a></li>
                                <li><a href="/skills" className="hover:text-blue-400">Skills</a></li>
                                <li><a href="/contact" className="hover:text-blue-400">Contact Me</a></li>
                                <li><a href="story" className="hover:text-blue-400">Story</a></li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                            <div className="grid grid-cols-2 gap-3">
                            <a href="https://www.linkedi
n.com/in/dixit-
desai-b636072a5/"    target="_blank"
              rel="noopener noreferrer">
                                    <div className="group w-[150px] h-[45px] flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#2A3386] to-[#00659A] hover:shadow-[0px_0px_10px_2px_#718096]     text-white relative overflow-hidden">
                                        <span className="pr-[5px] text-[20px]"><FaLinkedin /></span>
                                        <button className="font-semibold text-[18px] z-10">
                                            Linked-In
                                        </button>

                                    </div>
                                </a>
                                <a href="https://www.instagram.com/dixit_official_0503/"    target="_blank"
              rel="noopener noreferrer">

                                    <div className="group w-[150px] h-[45px] flex justify-center items-center rounded-[20px] text-white relative overflow-hidden  bg-gradient-to-r from-[#2A3386] to-[#00659A] hover:shadow-[0px_0px_10px_2px_#718096] ">
                                    <span className="pr-[5px] text-[20px]"><FaInstagram /></span>
                                        <button className="font-semibold text-[18px] z-10">
                                            Instagram
                                        </button>

                                    </div>
                                </a>
                                <a href="https://www.facebook.com/dixit.desai.9822?mibextid=rS40aB7S9Ucbxw6v"    target="_blank"
              rel="noopener noreferrer">

                                    <div className="group w-[150px] h-[45px] flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#2A3386] to-[#00659A] hover:shadow-[0px_0px_10px_2px_#718096]  text-white relative overflow-hidden">
                                    <span className="pr-[5px] text-[20px]"><FaFacebook /></span>
                                        <button className="font-semibold text-[18px] z-10">
                                            Facebook
                                        </button>

                                    </div>
                                </a>
                                {/* <NavLink> */}

                                        <a href="https://github.com/DesaiDixit123/"    target="_blank"
              rel="noopener noreferrer">

                                    <div className="group w-[150px] h-[45px] flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#2A3386] to-[#00659A] hover:shadow-[0px_0px_10px_2px_#718096]  text-white relative overflow-hidden">
                                    <span className="pr-[5px] text-[22px]"><FaGithub /></span>
                                        <button className="font-semibold text-[18px] z-10">
                                            Git-Hub
                                        </button>
                                    </div>
                                        </a>
                                {/* </NavLink> */}
                            </div>
                        </div>
                    </div>
                    {/* Copyright and Legal Info */}
                    <div className="mt-10 text-center text-sm text-black">
                        <p>© 2025 Dixit Desai. All Rights Reserved.</p>
                        <p><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a> | <a href="/terms" className="hover:text-blue-400">Terms of Service</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}