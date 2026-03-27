import projectsData from "../../data/projects.json";


const BASE_URL = "/api/projects";

export const fetchProjects = async () => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: projectsData }; 
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};


export const fetchProjectsById = async (id) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    const project = projectsData.find(p => p._id === id);
    return { data: project };
  } catch (error) {
    console.log("Error Fetching Projects By Id", error);
    return null;
  }
};