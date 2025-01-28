import React, { useState } from 'react';
import pic from '../../public/A3---12pp.jpg';
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";



const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const navItem = [
        {
            id: 1,
            text: "HOME"
        },
        {
            id: 2,
            text: "ABOUT"
        },
        {
            id: 3,
            text: "EDUCATION"
        },
        {
            id: 4,
            text: "SKILLS"
        },
        {
            id: 5,
            text: "PROJECT"
        },
        {
            id: 6,
            text: "CONTACT"
        }
    ]

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed left-0 right-0 top-0 z-50 bg-white" >

                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex  space-x-2">
                        <span className="text-xl font-semibold text-gray-800">Ajay Sharma</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="">
                        <ul className='hidden md:flex space-x-8 '>
                            {
                                navItem.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
                                ))
                            }
                        </ul>
                        <div
                            onClick={() => setMenu(!menu)}
                            className='md:hidden'>
                            {menu ? <AiOutlineMenu size={24} /> : <IoClose size={24} />}
                        </div>
                    </div>
                </div>
                {/* Mobile navbar */}

                {
                    menu && (

                        <div>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
                                {
                                    navItem.map(({ id, text }) => (
                                        <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>{text}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Navbar;
