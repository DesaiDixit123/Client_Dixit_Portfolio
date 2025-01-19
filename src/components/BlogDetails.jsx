import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mern_stack1 from "../assets/MERN-stack-blog.jpg";
import mern_stack2 from "../assets/MERN-Stack-blog1.jpg";
import mern_stack3 from "../assets/MERN-Stack-blog2.jpg";
import mern_stack4 from "../assets/MERN-Stack-blog3.jpg";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const blogsData = [
    {
      id: 1,
      title: "Mastering the MERN Stack",
      author: "Dixit Desai",
      date: "August 2024",
      content: `The MERN stack (MongoDB, Express.js, React, Node.js) is a powerful and popular JavaScript stack for building full-stack web applications. 

I started exploring the MERN stack in early 2023, driven by my passion for developing scalable and interactive web applications. Over the months, I have gained expertise in integrating MongoDB for flexible data storage, Express.js for handling server-side logic, React for crafting dynamic user interfaces, and Node.js for efficient backend operations.

This comprehensive journey through the MERN stack has helped me build real-world applications like Hollybooks, which focuses on book reviews and e-commerce. By continuously learning and implementing new features, I have strengthened my skills in deploying and managing full-stack projects.`,
      images: [mern_stack1, mern_stack2, mern_stack3, mern_stack4],
    }
  ];

  useEffect(() => {
    const selectedBlog = blogsData.find((blog) => blog.id === parseInt(id));
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">{blog.title}</h1>
            <p className="text-gray-500 mb-2">By {blog.author} | {blog.date}</p>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
            <Link
              to="/"
              className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-semibold"
            >
              ← Back to Blogs
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6">
            {blog.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`MERN Stack ${index + 1}`}
                className="rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
