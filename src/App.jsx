import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Index from "./Index"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutUs from "./components/AboutUs"
import SuccessStory from "./components/SuccessStory"
import ContactMe from "./components/ContactUs"
import ProjectDetail from "./components/ProjectDetail"
// import Blog from "./components/Blogs"
// import BlogDetail from "./components/BlogDetails"

const Router = createBrowserRouter([
  {
    
    path: '/',
    element: <Index />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/projects",element:<Projects/>},
      {path:"/skills",element:<Skills/>},
      {path:"/about",element:<AboutUs/>},
      {path:"/story",element:<SuccessStory/>},
      {path:"/contact",element:<ContactMe/>},
      {path:"/project/:id",element:<ProjectDetail/>},
      // {path:"/blog",element:<Blog/>},
      // {path:"/blog/:id",element:<BlogDetail/>},
    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
