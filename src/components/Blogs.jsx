import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCalendarAlt, FaUserAlt, FaArrowRight } from "react-icons/fa";
import mern_stack from "../assets/MERN-stack-blog.jpg"
import python_django from "../assets/python-django.jpg"
import sql_nosql from "../assets/sql-nosql.jpg"
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Mastering the MERN Stack",
      author: "Dixit Desai",
      date: "August 2024",
      summary: "Learn how to build scalable applications using MongoDB, Express, React, and Node.js.",
      image:mern_stack,
    },
    {
      id: 2,
      title: "Introduction to Python with Django",
      author: "Dixit Desai",
      date: "July 2024",
      summary: "Get started with backend development using Python and Django framework.",
      image: python_django,
    },
    {
      id: 3,
      title: "SQL vs NoSQL Databases",
      author: "Dixit Desai",
      date: "June 2024",
      summary: "Understand the key differences between SQL and NoSQL databases for modern applications.",
      image:sql_nosql,
    },
  ]);

  return (
    <div className="bg-gray-100 py-10 px-5 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-600 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📖 Latest Blogs
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {blog.summary}
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FaUserAlt className="mr-1" /> {blog.author}
                <span className="mx-2">|</span>
                <FaCalendarAlt className="mr-1" /> {blog.date}
              </div>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
