import React from 'react';
import { motion } from 'framer-motion';


function Banner() {
    return (
        <>

            <section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 text-center">
                {/* Large Text */}

                <h1
                    className="text-6xl  md:text-8xl font-bold mb-6 text-center"
                >
                    I'm Ajay Sharma
                </h1>
                {/* Buttons */}
                <div className="flex space-x-6">
                    <motion.a
                        href="../../public/AjaySharma_Resume.pdf"
                        download
                        whileHover={{ scale: 1.1 }}
                        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition"
                    >
                        My Resume
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.1 }}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                    >
                        My Work
                    </motion.a>
                </div>
            </section>

        </>
    )
}

export default Banner;
