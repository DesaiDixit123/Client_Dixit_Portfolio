import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import mernJourney from "../assets/MERN-Stack-Journy.jpg";
import pythonJourney from "../assets/python-django.jpg";

export default function SuccessStory() {
  return (
    <div className="bg-gradient-to-r from-[#2A3386] to-[#00659A] min-h-screen py-10 px-5 flex items-center justify-center">
      <motion.div
        className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
            🚀 My Success Story
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Journey into the MERN Stack
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                In <span className="font-semibold text-blue-500">January 2024</span>, I began my web development journey with the MERN stack. Initially, it was challenging to grasp the fundamentals of MongoDB, Express.js, React, and Node.js. I faced hurdles in understanding backend concepts and integrating frontend with backend services. Debugging code and managing state in React were particularly difficult.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                However, consistent practice and project development helped me overcome these challenges. By building small projects like a To-Do App and an E-commerce site, I developed a strong grasp of full-stack development. My problem-solving skills improved, and I gained confidence in creating scalable applications.
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Expanding Horizons with Python & Django
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                By <span className="font-semibold text-blue-500">August 2024</span>, I transitioned to learning Python and Django. Initially, understanding Django's ORM and the MVC architecture was overwhelming. Deploying applications and managing databases posed additional challenges. Yet, I persisted by building REST APIs and deploying small projects, enhancing my backend development skills.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Combining MERN with Django broadened my understanding of scalable web solutions. My journey was filled with ups and downs, but every mistake taught me valuable lessons and refined my development approach.
              </p>
            </div>

            {/* Right Side - Images */}
            <div className="lg:w-1/2 space-y-4">
              <img
                src={mernJourney}
                alt="MERN Stack Journey"
                className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-md"
              />
              <img
                src={pythonJourney}
                alt="Python Django Journey"
                className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">
              📅 Timeline
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> January 2024 - Began learning the MERN stack.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> April 2024 - Faced challenges in project integration.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> June 2024 - Built and deployed full-stack projects.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> August 2024 - Transitioned to Python and Django.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> Present - Building scalable applications using MERN and Django.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
