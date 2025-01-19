import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <section id="skills" className="py-10 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Skills
                    </motion.span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend Development */}
                    <motion.div
                        className="bg-white p-6 rounded-full shadow-md text-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Frontend Development</h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux Toolkit" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" className="w-10 h-10 rounded-full mx-auto" />
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="w-10 h-10 rounded-full mx-auto mb-4" />
                        <ul className="list-disc list-inside text-gray-700">
                            <li>React.js, Redux Toolkit, Context API</li>
                            <li>HTML5, CSS3, JavaScript (ES6+)</li>
                            <li>Tailwind CSS, Bootstrap</li>
                        </ul>
                    </motion.div>

                    {/* Backend Development */}
                    <motion.div
                        className="bg-white p-6 rounded-full shadow-md text-center"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <h3 className="text-xl font-semibold text-green-600 mb-4">Backend Development</h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" alt="Django" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s" alt="RESTful APIs" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://i.ytimg.com/vi/EMcPGLeDmeE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5RLZ06ATPV_jC9BKl44se6FiaRA" alt="JWT" className="w-10 h-10 rounded-full mx-auto" />
                        </div>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Node.js, Express.js</li>
                            <li> Python, Django</li>
                            <li>RESTful APIs</li>
                            <li>Authentication (JWT, OAuth)</li>
                        </ul>
                    </motion.div>

                    {/* Database */}
                    <motion.div
                        className="bg-white p-6 rounded-full shadow-md text-center"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <h3 className="text-xl font-semibold text-yellow-600 mb-4">Database</h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuqWn7rCVhqZ_pSlxwVUzlZtFWaOMdbm28A&s" alt="MongoDB" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://avatars.githubusercontent.com/u/45120?s=200&v=4" alt="Mongoose" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" alt="SQLite" className="w-10 h-10 rounded-full mx-auto" />
                        </div>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>MongoDB, MySQL, SQLite</li>
                            <li>Sql, MySQL</li>
                            <li>SqlLite</li>
                        </ul>
                    </motion.div>

                    {/* Cloud & Deployment */}
                    <motion.div
                        className="bg-white p-6 rounded-full shadow-md text-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Cloud & Deployment</h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <img src="https://appexchange.salesforce.com/image_host/2b53bb52-3256-4cdb-860b-cbe896427aeb.png" alt="Cloudinary" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://i0.wp.com/gluonhq.com/wp-content/uploads/2018/05/heroku-logotype-vertical-purple.png?fit=576%2C684&ssl=1" alt="Heroku" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png" alt="Vercel" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-svg-vector.svg" alt="Netlify" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://cdn.peopleshost.com/wp-content/uploads/2017/01/cpanel-logo-lp-475x375.png" alt="cPanel" className="w-10 h-10 rounded-full mx-auto" />
                        </div>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Cloudinary (Image Upload)</li>
                            <li>Heroku , Vercel , Netlify</li>
                            <li>cPanel (Hosting & Management)</li>
                        </ul>
                    </motion.div>

                    {/* Tools & Utilities */}
                    <motion.div
                        className="bg-white p-6 rounded-full shadow-md text-center"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <h3 className="text-xl font-semibold text-red-600 mb-4">Tools & Utilities</h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <img src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg" alt="GitHub" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo-thumbnail.png" alt="Postman" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://tannerfriedman.com/wp-content/uploads/2022/08/91-913031_axios-axios-logo-hd-png-download.png" alt="Axios" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://avatars.githubusercontent.com/u/45120?s=200&v=4" alt="Mongoose" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*QTZvtnHWanNxBQBynhtlIA.png" alt="Multer" className="w-10 h-10 rounded-full mx-auto" />
                        </div>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Git, GitHub (Version Control)</li>
                            <li>Postman (API Testing) , Axios (HTTP Client)</li>
                            <li>MongoDB (Database Management)</li>
                            <li>Multer (File Upload)</li>
                        </ul>
                    </motion.div>



                    
                    {/* Other Skills */}
                    <motion.div
                        className="bg-white p-6 rounded-full shadow-md text-center"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">Other Skills</h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <img src="https://w7.pngwing.com/pngs/241/221/png-transparent-web-development-responsive-web-design-mobile-app-development-cross-platform-computer-icons-web-design-angle-web-design-text.png" alt="FreeCodeCamp" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://cdn-icons-png.flaticon.com/512/8148/8148303.png" alt="LeetCode" className="w-10 h-10 rounded-full mx-auto" />
                            <img src="https://cdn-icons-png.flaticon.com/512/10435/10435114.png" 
                             className="w-10 h-10 rounded-full mx-auto"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" className="w-10 h-10 rounded-full mx-auto"/>
                        
                        </div>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Responsive Web Design</li>
                            <li>Problem-Solving & Debugging</li>
                            <li>Basic Data Structures & Algorithms</li>
                        </ul>
                    </motion.div>
                    </div>


            </div>
        
        </section>
    );
}
