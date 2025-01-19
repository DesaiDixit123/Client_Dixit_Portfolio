import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="bg-gradient-to-r from-[#2A3386] to-[#00659A] min-h-screen flex items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 sm:mb-6">Contact Me</h2>
          <p className="text-gray-600 mb-3 sm:mb-4">
            Feel free to reach out for any project or collaboration!
          </p>

          <div className="flex items-center mb-3 sm:mb-4">
            <FaPhoneAlt className="text-indigo-600 mr-2 sm:mr-3" />
            <p className="text-gray-700 text-sm sm:text-base">+91 9737080195</p>
          </div>
          <div className="flex items-center mb-3 sm:mb-4">
            <FaEnvelope className="text-indigo-600 mr-2 sm:mr-3" />
            <p className="text-gray-700 text-sm sm:text-base">dixitdesai809@gmail.com</p>
          </div>
          <div className="flex items-center mb-6 sm:mb-8">
            <FaMapMarkerAlt className="text-indigo-600 mr-2 sm:mr-3" />
            <p className="text-gray-700 text-sm sm:text-base">Ahmedabad, Gujarat, India</p>
          </div>

          {/* Social Media Section */}
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-2">Connect with me</h3>
          <p className="text-gray-600 mb-3">Follow me on social media for updates!</p>

          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/dixit_official_0503/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 text-2xl"
            >
              <FaInstagram />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/DesaiDixit123/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/dixit.desai.9822?mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaFacebookF />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedi
n.com/in/dixit-
desai-b636072a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-3 sm:space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
