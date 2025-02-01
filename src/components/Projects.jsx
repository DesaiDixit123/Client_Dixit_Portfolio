import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchProjects } from "./api/projectsApi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetchProjects();
                if (response && response.data) {
                    setProjects(response.data);
                } else {
                    console.error("Invalid API response structure:", response);
                }
            } catch (error) {
                console.error("Error fetching projects:", error.message);
            }
        };

        getProjects();
    }, []);

    const truncateText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    const handlePreview = (previewUrl) => {
        if (previewUrl) {
            window.open(previewUrl, "_blank");
        } else {
            alert("Preview link not available!");
        }
    };

    const handleGitHub = (githubLink) => {
        if (githubLink) {
            window.open(githubLink, "_blank");
        } else {
            alert("GitHub link not available!");
        }
    };
    // const handleImageClick = (projectId) => {
    //     // Navigate to the project details page with the project ID
    //     navigate(`/project/${projectId}`);
    // };
    return (
        <>
            <motion.div
                className="flex justify-center items-center text-[30px] font-bold h-[70px] bg-gradient-to-r from-[#2A3386] to-[#00659A] text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>My Creative Projects</h1>
            </motion.div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-10 overflow-y-auto">
                {projects.map((project) => (
                    <Card
                        key={project._id}
                        sx={{
                            maxWidth: 345,
                            margin: "auto",
                            boxShadow: "0px 4px 10px rgba(42, 51, 134, 0.5), 0px 4px 10px rgba(0, 101, 154, 0.5)",
                            borderRadius: "10px",
                            transition: "box-shadow 0.3s ease-in-out", // Smooth transition for box shadow
                            '&:hover': {
                                boxShadow: "0px 8px 20px rgba(42, 51, 134, 0.7), 0px 8px 20px rgba(0, 101, 154, 0.7)",
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="80"
                            image={project.image1}
                            alt={project.title}
                            sx={{
                                borderRadius: "8px", // Add border radius around the image
                                padding: "5px",
                                // Add padding inside the image container
                            }}
                            // onClick={() => handleImageClick(project._id)}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {truncateText(project.title, 6)}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {truncateText(project.description, 10)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => handleGitHub(project.githubLink)}>
                                GitHub
                            </Button>
                            <Button size="small" color="secondary" onClick={() => handlePreview(project.previewLink)}>
                                Preview
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}
