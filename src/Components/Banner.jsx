import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import pic from '../../public/Profile.png';



function Banner() {
    return (
        <>

            <div name = "HOME" className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2  mt-12 md:mt-38 space-y-2 py-10 order-2">
                        <span className='font-semibold text-xl'>Hii, There! I'm</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            {/* <span className='text-blue-800 font-bold text-6xl'>Developer</span> */}
                            <ReactTyped
                                className='text-blue-800 font-bold text-6xl'
                                strings={["Programmer", "Coder", "Graphics Designer","Java Learner", "Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop = {true}
                            />
                        </div>
                        <p className='text-sm md:text-md text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos,
                            quasi ipsa nam id quisquam minima maiores reprehenderit dolor
                            consequatur molestias libero aliquid
                        </p>
                        <br />
                        {/* Button */}
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
                                className="px-6 py-3 text-black font-semibold rounded-lg bg-blue-200 shadow-lg hover:bg-blue-400 border-b-amber-50 transition"
                            >
                                My Work
                            </motion.a>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-50 md:mt-20 ml-5 mt-10 md:order-2 order-1">
                    <img  
                       className='rounded-full md:w-[400px] md:h-[400px] w-[350px] h-[350px]'
                       src={pic} alt="" />
                    </div>
                </div>
            </div>
            <br />
            <hr />
        </>
    )
}

export default Banner;
