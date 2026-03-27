import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Index from "./Index"
import Home from "./components/Home"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutUs from "./components/AboutUs"
import SuccessStory from "./components/SuccessStory"
import ContactMe from "./components/ContactUs"
import ProjectDetail from "./components/ProjectDetail"
import Blog from "./components/Blogs"
import BlogDetail from "./components/BlogDetails"

// Admin Components
import AdminLogin from "./admin/AdminLogin"
import AdminLayout from "./admin/AdminLayout"
import AdminDashboard from "./admin/AdminDashboard"
import ManageProjects from "./admin/ManageProjects"
import ManageServices from "./admin/ManageServices"
import ManageSkills from "./admin/ManageSkills"
import ManageBlogs from "./admin/ManageBlogs"
import ManageInquiries from "./admin/ManageInquiries"
import ManageProjectLanguage from "./admin/ManageProjectLanguage"

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/resume", element: <Resume /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactMe /> },
      { path: "/projects/:id", element: <ProjectDetail /> },
    ]
  },
  {
    path: '/admin/login',
    element: <AdminLogin />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'projects', element: <ManageProjects /> },
      { path: 'services', element: <ManageServices /> },
      { path: 'skills', element: <ManageSkills /> },
      { path: 'blogs', element: <ManageBlogs /> },
      { path: 'inquiries', element: <ManageInquiries /> },
      { path: 'project-languages', element: <ManageProjectLanguage /> },
    ]
  }
])

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Services from "./components/Services"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true
    });
  }, []);
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
