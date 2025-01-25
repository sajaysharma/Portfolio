import React from 'react';



const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50" >

                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="../../public/A3---12pp.jpg"
                            alt="Profile"
                            className="w-10 h-10 rounded-full shadow-md"
                        />
                        <span className="text-lg font-semibold text-gray-800">Ajay Sharma</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        {['HOME', 'ABOUT', 'EDUCATION', 'SKILLS', 'PROJECT', 'CONTACT'].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-gray-800 transition font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
