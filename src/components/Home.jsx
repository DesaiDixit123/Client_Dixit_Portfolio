import { useState, useEffect } from "react";
import bg_img from "../assets/Dixit.png";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { LuContactRound } from "react-icons/lu";
import { RxResume } from "react-icons/rx";
import Skills from "./Skills";
import ServicesSection from "./Services";
import ServicesProvider from "./ServiceProvider";
import ExtraInfo from "./ExtraInfo";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <BackgroundHome />
            <motion.div
                className="projects-section mt-8" // Added margin top for spacing
                whileInView={{
                    opacity: [0, 1],
                    x: [-200, 0],
                }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Projects />
            </motion.div>

            <motion.div
                className="skills-section"
                whileInView={{
                    opacity: [0, 1],
                    x: [200, 0],
                }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Skills />
            </motion.div>
            <motion.div
                className="services-provider-section"
                whileInView={{
                    opacity: [0, 1],
                    y: [100, 0],
                }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <ServicesProvider />
            </motion.div>
            <motion.div
                className="services-section"
                whileInView={{
                    opacity: [0, 1],
                    x: [-200, 0],
                }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <ServicesSection />
            </motion.div>
            <ExtraInfo />
        </>
    );
}

export const BackgroundHome = () => {
    const [titleIndex, setTitleIndex] = useState(0);

    const titles = [
        "MERN Stack Developer",
        "Python Django Developer",
        "React JS Developer",
        "Full Stack Developer",
    ];

    const descriptions = [
        "MERN Stack Developer focuses on building dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Python Django Developer specializes in building web applications using Python and Django framework.",
        "React JS Developer is responsible for building modern web applications using React.js.",
        "Full Stack Developer works across both frontend and backend technologies to develop and maintain web applications.",
    ];

    const titleColors = ["text-red-500", "text-green-500", "text-blue-500", "text-purple-500"];
    const descriptionColors = ["text-gray-600", "text-teal-500", "text-orange-500", "text-pink-500"];
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC733"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const animatedText = (text) => {
        return text.split("").map((char, index) => (
            <motion.span
                key={index}
                style={{ display: "inline-block" }}
                animate={{
                    color: colors,
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ));
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center px-8 h-[85vh] space-y-8 lg:space-y-0">
                <motion.div
                    className="flex flex-col items-start w-full lg:w-[60%] space-y-4"
                    whileInView={{
                        opacity: [0, 1],
                        x: [-50, 0],
                    }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 className="font-bold text-2xl md:text-[20px] lg:text-[25px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        Hello, Welcome
                    </h1>

                    <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                        {animatedText("I'm Dixit Desai")}
                    </h3>
                    <h3 className={`font-bold text-2xl md:text-3xl lg:text-4xl ${titleColors[titleIndex]}`}>
                        {titles[titleIndex]}
                    </h3>
                    <p className={`text-sm md:text-lg lg:text-xl ${descriptionColors[titleIndex]}`}>
                        {descriptions[titleIndex]}
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 md:space-x-5">
                        <NavLink to={"/contact"}>
                            <button className="transition-colors duration-300 ease-in-out bg-gradient-to-r from-[#2A3386] to-[#00659A] hover:shadow-[0px_0px_10px_2px_#718096] text-white font-semibold rounded-[20px] w-[200px] h-[70px] flex justify-center items-center p-3">
                                <span className="pr-[15px] text-[22px]"><LuContactRound /></span>
                                Contact Me
                            </button>
                        </NavLink>

                        <a href="/Dixit_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="transition-colors text-[20px] duration-300 ease-in-out bg-gradient-to-r from-[#2A3386] to-[#00659A] hover:shadow-[0px_0px_10px_2px_#718096] text-white font-semibold rounded-[20px] w-[200px] h-[70px] flex justify-center items-center p-3">
                                <span className="pr-[15px] text-[22px]">
                                    <RxResume className="text-[22px] font-bold" />
                                </span>
                                Resume
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-[35%]"
                    whileInView={{
                        opacity: [0, 1],
                        x: [50, 0],
                    }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img
                        src={bg_img}
                        alt="background image"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </motion.div>
            </div>
        </>
    );
};
