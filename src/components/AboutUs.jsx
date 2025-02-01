import { motion } from "framer-motion";
import profileImage from "../assets/Dixit_Background-removebg-preview - Copy.png";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-[#2A3386] to-[#00659A] min-h-screen flex items-center justify-center p-4 sm:p-8">
      <motion.div
        className="max-w-6xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Profile Image */}
        <div className="md:w-1/3 w-full h-64 md:h-auto p-4 flex items-center justify-center">
  <img
    src={profileImage}
    alt="Dixit Desai"
    className="object-cover w-full h-full rounded-lg"
  />
</div>


        {/* Right Side - About Content */}
        <div className="md:w-2/3 w-full p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Hello, I'm <span className="text-blue-500">Dixit Desai</span> 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            A passionate <span className="font-semibold text-blue-500">Full Stack Developer</span> with expertise in building dynamic web applications. I specialize in crafting scalable solutions using MongoDB, Express.js, React, and Node.js.
            <br />
            Additionally, I have experience working with <span className="font-semibold text-green-500">Python</span> and <span className="font-semibold text-green-500">Django</span>, along with relational databases like <span className="font-semibold text-yellow-500">SQL</span> and <span className="font-semibold text-yellow-500">SQLite</span>.
          </p>

          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
              🚀 Skills & Technologies
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-600 dark:text-gray-300 text-sm">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
              <li>SQLite</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
              🌍 My Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              I aspire to develop impactful applications that make everyday tasks simpler and more efficient. From e-commerce solutions to interactive games, I enjoy blending creativity with functionality.
            </p>
          </div>

          <motion.a
            href="#projects"
            className="inline-block mt-6 px-4 py-2 sm:px-6 sm:py-2 text-white bg-gradient-to-r from-[#2A3386] to-[#00659A] rounded-[10px] shadow-[0px_0px_5px_2px_#718096]  transition-transform transform hover:-translate-y-1 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Explore My Projects 🚀
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
