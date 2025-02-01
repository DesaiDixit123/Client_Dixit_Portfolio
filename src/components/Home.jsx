import { useState, useEffect } from "react";
import bg_img from "../assets/Dixit_Background-removebg-preview - Copy.png";
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
            <BackgroundHome className />
            <MarqueeComponentDesign />
            <Aboute/>

            <motion.div
                className="Extra-section"
                whileInView={{
                    opacity: [0, 1],
                    y: [100, 0],
                }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
               
            <ExtraInfo />
            </motion.div>
            <MarqueeComponent/>
            <motion.div
                className="projects-section mt-8" // Added margin top for spacing
                // whileInView={{
                //     opacity: [0, 1],
                //     x: [-200, 0],
                // }}
                whileInView={{
                    opacity: [0, 1],
                    y: [100, 0],
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
                    y: [100, 0],
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
                    y: [100, 0],
                }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <ServicesSection />
            </motion.div>
           
        </>
    );
}
export const BackgroundHome = () => {
    const [titleIndex, setTitleIndex] = useState(0);

    const titles = [
        "MERN Stack Developer",
        "Python Django Developer",
        "Full Stack Developer",
    ];

    const descriptions = [
        "MERN Stack Developer focuses on building dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Python Django Developer specializes in building web applications using Python and Django framework.",
        "Full Stack Developer works across both frontend and backend technologies to develop and maintain web applications.",
    ];

    const titleColors = ["text-red-500", "text-green-500", "text-purple-500"];
    const descriptionColors = ["text-gray-600", "text-teal-500", "text-pink-500"];
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
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-8 h-auto lg:h-[85vh] space-y-8 lg:space-y-0 ">
                {/* Text Section */}
                <motion.div
                    className="flex flex-col items-start w-full lg:w-[60%] space-y-4 pt-[50px]"
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

                {/* Image Section */}
                <motion.div
                    className="w-full lg:w-[35%] flex justify-center items-center "
                    whileInView={{
                        opacity: [0, 1],
                        scale: [0.9, 1],
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img
                        src={bg_img}
                        alt="background image"
                        className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-full shadow-2xl shadow-gray-500"
                    />
                </motion.div>
            </div>
        </>
    );
};
const MarqueeComponent = () => {
    return (
      <div className="bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white mt-6 mb-5 sm:py-2 h-[60px] sm:h-[70px] overflow-hidden flex justify-center items-center">
        <marquee direction="right" scrollamount="6" className="font-bold text-[22px] sm:text-[28px] md:text-[30px]">
          ✵ 25+ Project Completed ✵ 15+ Satisfied Clients ✵ 10+ Team Members ✵ 3+ WorldWide Languages ✵
        </marquee>
      </div>
    );
  };
  
  const MarqueeComponentDesign = () => {
    return (
      <div className="bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white mt-6 mb-5 sm:py-2 h-[60px] sm:h-[70px] overflow-hidden flex justify-center items-center">
        <marquee className="font-bold text-[22px] sm:text-[28px] md:text-[30px]">
          ✵ Website Design & Logo ✵ Create Dynamic & Static Website ✵ Mobile Application Design ✵ UI / UX Mobile Design ✵ Business Branding ✵
        </marquee>
      </div>
    );
  };
  
 

const Aboute = () => {
    return (
      <motion.div
        className="flex flex-col items-center text-center py-12 px-6 md:px-12 lg:px-24"
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Icon */}
        <div className="text-4xl bg-gradient-to-r from-[#2A3386] to-[#00659A] bg-clip-text text-transparent font-bold mb-4">
        ✵
      </div>
  
        {/* Description */}
        <p className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-gray-900 leading-relaxed max-w-4xl">
          I am <span className="text-[#2A3386] font-bold">Dixit Desai</span>, a passionate 
          <span className="text-[#00659A] font-bold"> Full Stack Developer</span> from India.  
          I specialize in **MERN Stack Development, Web Applications, and UI/UX Design**,  
          excelling in **IT solutions** and modern web technologies.
        </p>
      </motion.div>
    );
  };
  