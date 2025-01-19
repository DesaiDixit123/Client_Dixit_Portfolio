import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchProjects } from "./api/projectsApi";
import { useNavigate } from "react-router-dom";
// import Box from '@mui/joy/Box';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Typography from '@mui/joy/Typography';
// import Home from '@mui/icons-material/Home';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getProducts = async () => {
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

        getProducts();
    }, []);

    const truncateText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    const handleNavigate = (projectId) => {
        navigate(`/project/${projectId}`);
    };


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

            {/* <div className="flex"> */}
                {/* <div className="fixed top-20 left-0 h-full w-64 overflow-y-auto py-[120px]">
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                            '& > *': { minWidth: 0, flexBasis: 200 },
                        }}
                    >
                        <div>
                           
                            <List
                                size="md"
                                variant="outlined"
                                sx={{ maxWidth: 300, borderRadius: 'sm' }}
                            >
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <Home />
                                        </ListItemDecorator>
                                        Home
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Projects</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Settings</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Projects</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Settings</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Projects</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Settings</ListItemButton>
                                </ListItem>
                            </List>
                        </div>
                    </Box>
                </div> */}

                <motion.div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-10 overflow-y-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            whileInView={{
                                opacity: [0, 1],
                                x: index % 2 === 0 ? [-50, 0] : [50, 0],
                                y: [-20, 0],
                            }}
                            transition={{
                                opacity: { duration: 0.5 },
                                x: { duration: 0.7 },
                                y: { duration: 0.7 },
                            }}
                            viewport={{ once: false, amount: 0.2 }}
                            onClick={() => handleNavigate(project._id)}
                        >
                            <div className="relative p-3">
                                <motion.img
                                    src={project.image1}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                />
                            </div>
                            <motion.p className="text-[16px] text-gray-600 mt-2 text-end pr-[15px]">
                                {project.projectLanguage}
                            </motion.p>
                            <div className="p-5">
                                <motion.h1 className="text-[22px] font-bold bg-gradient-to-r from-[#2A3386] to-[#00659A] text-transparent bg-clip-text">
                                    {truncateText(project.title, 6)}
                                </motion.h1>
                                <motion.p className="text-[16px] text-gray-600 mt-2">
                                    {truncateText(project.description, 10)}
                                </motion.p>
                                <motion.a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
                                >
                                    View on GitHub
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            {/* </div> */}
        </>
    );
}
