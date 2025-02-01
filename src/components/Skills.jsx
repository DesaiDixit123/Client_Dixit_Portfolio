import { motion } from "framer-motion";

export default function Skills() {
    return (
        <>
            <div className="flex justify-center text-[30px] py-[20px] font-bold google-font">
                <h1>Skills</h1>
            </div>

            <motion.div 
                className="px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {skillData.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="w-full border-2 border-black relative overflow-hidden shadow-lg shadow-gray-500 rounded-2xl"
                        whileHover={{ scale: 1.05 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-center font-semibold text-[22px] border-b-2 border-black bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white rounded-t-2xl py-3">
                            {skill.title}
                        </h3>
                        <motion.div 
                            className="grid grid-cols-3 gap-4 p-6"
                            animate={{ x: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            {skill.icons.map((icon, idx) => (
                                <img key={idx} src={icon.src} alt={icon.alt} className="w-12 h-12 mx-auto" />
                            ))}
                        </motion.div>
                        <div className="px-6 pb-6">
                            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
                                {skill.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                        <motion.div 
                            className="bg-gradient-to-r from-[#2A3386] to-[#00659A] w-20 h-20 absolute bottom-[-20px] right-[-10px] rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        ></motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}

const skillData = [
    {
        title: "Frontend Development",
        icons: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React.js" },
            { src: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", alt: "Redux Toolkit" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", alt: "HTML5" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", alt: "CSS3" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", alt: "Bootstrap" }
        ],
        details: ["React.js, Redux Toolkit, Context API", "HTML5, CSS3, JavaScript (ES6+)", "Tailwind CSS, Bootstrap"]
    },
    {
        title: "Backend Development",
        icons: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", alt: "Express.js" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", alt: "Python" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg", alt: "Django" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s", alt: "RESTful APIs" },
            { src: "https://i.ytimg.com/vi/EMcPGLeDmeE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5RLZ06ATPV_jC9BKl44se6FiaRA", alt: "JWT" }
        ],
        details: ["Node.js, Express.js", "Python, Django", "RESTful APIs", "Authentication (JWT, OAuth)"]
    },

    {
        title: "Database",
        icons: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB" },
            { src: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg", alt: "MySQL" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg", alt: "SQLite" }
        ],
        details: ["MongoDB, MySQL, SQLite", "Database Design & Management", "SQL & NoSQL Databases"]
    },
    {
        title: "Cloud & Deployment",
        icons: [
            { src: "https://appexchange.salesforce.com/image_host/2b53bb52-3256-4cdb-860b-cbe896427aeb.png" },
            { src: "https://i0.wp.com/gluonhq.com/wp-content/uploads/2018/05/heroku-logotype-vertical-purple.png?fit=576%2C684&ssl=1" , alt: "AWS" },
            { src: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png", alt: "Google Cloud" },
            { src: "https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-svg-vector.svg", alt: "Google Cloud" },
            { src: "https://cdn.peopleshost.com/wp-content/uploads/2017/01/cpanel-logo-lp-475x375.png", alt: "Google Cloud" },
        ],
        details: ["AWS, Google Cloud, Cloudflare", "Heroku, Netlify, Vercel", "Docker, Kubernetes"]
    },
    {
        title: "Tools & Utilities",
        icons: [
            { src: "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg", alt: "Git" },
            { src: "https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo-thumbnail.png", alt: "GitHub" },
            { src: "https://tannerfriedman.com/wp-content/uploads/2022/08/91-913031_axios-axios-logo-hd-png-download.png", alt: "VS Code" },
            { src: "https://avatars.githubusercontent.com/u/45120?s=200&v=4", alt: "VS Code" },
            { src: "https://miro.medium.com/v2/resize:fit:1400/1*QTZvtnHWanNxBQBynhtlIA.png", alt: "VS Code" },
        ],
        details: ["Git, GitHub", "Postman for API Testing", "VS Code, CLI Tools"]
    },
    {
        title: "Other Skills",
        icons: [
            { src: "https://cdn-icons-png.flaticon.com/512/8148/8148303.png", alt: "LeetCode" },
            { src: "https://cdn-icons-png.flaticon.com/512/10435/10435114.png", alt: "HackerRank" },          
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png", alt: "HackerRank" },          
        ],
        details: ["Problem Solving & Debugging", "Basic DSA", "Competitive Programming"]
    }
];
