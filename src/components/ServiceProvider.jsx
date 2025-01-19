import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        category: "Development",
        title: "Website Development",
        description:
            "Expert in website development, creating responsive and visually appealing sites, integrating cutting-edge technologies for optimal performance and user engagement.",
    },
    {
        id: "02",
        category: "Security / Secure",
        title: "Secure Software Development",
        description:
            "Ensuring secure software development with robust coding practices, rigorous testing, and continuous monitoring to safeguard against potential vulnerabilities and threats.",
    },
    {
        id: "03",
        category: "UI/UX Design",
        title: "Web UI/UX Design",
        description:
            "Designing compelling and user-centric web interfaces, prioritizing seamless navigation, and enhancing user experience through intuitive and visually appealing elements.",
    },
    {
        id: "04",
        category: "Web Design",
        title: "Application Design",
        description:
            "Crafting intuitive application designs, focusing on user experience, and implementing innovative solutions for a seamless and engaging user interaction.",
    },
    {
        id: "05",
        category: "SEO Analytics",
        title: "Digital Marketing",
        description:
            "Strategize digital marketing, optimize SEO for enhanced online visibility, and drive results with data-driven techniques to boost web presence.",
    },
];

export default function ServicesProvider() {
    return (
        <div className="px-4 md:px-12 lg:px-24 py-8">
            <div className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                <h1>Services That I Provide</h1>
            </div>

            <div className="text-center text-2xl md:text-4xl lg:text-5xl font-bold my-6 text-gray-800">
                <h1>
                    My Special Service For Your Business <br />
                    <span className="text-blue-500">Development</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="group flex flex-col md:flex-row items-start md:items-center border-t-2 border-black py-6 px-4 hover:border-blue-300 transition-all duration-300 bg-white rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-start md:items-center mb-4 md:mb-0">
                            <p className="text-gray-500 text-lg md:text-xl mr-4">{service.id}</p>
                            <div>
                                <p className="font-medium text-gray-600">{service.category}</p>
                                <h2 className="text-lg md:text-2xl font-bold group-hover:text-blue-600">
                                    {service.title}
                                </h2>
                            </div>
                        </div>
                        <div className="text-gray-600 text-sm md:text-base mt-2 md:mt-0 md:ml-6">
                            {service.description}
                        </div>
                        <button className="bg-blue-600 p-3 rounded-md ml-auto mt-4 md:mt-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L19.5 10.5M19.5 10.5L13.5 16.5M19.5 10.5H4.5"
                                />
                            </svg>
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
