import axios from "axios";


const BASE_URL = "https://server-dixit-portfolio.onrender.com/api/projects";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(BASE_URL);

      
      console.log(response.data)
    return response.data; // Return fetched data
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow the error for handling in the component
  }
};


export const fetchProjectsById = async (id) => {
  try {
    const response = await axios.get(`https://server-dixit-portfolio.onrender.com/api/project/${id}`)
    
    return response.data
  } catch (error) {

    console.log("Error Fetching Projects By Id",error)
    return null
    
  }
}