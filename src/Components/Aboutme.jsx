
import React from 'react';


function Aboutme() {
  return (
    <>

      <div name ="ABOUT" className="max-w-screen-2xl  container mx-auto px-4 md:px-20 flex items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-6 md:p-8 w-full max-w-screen-2xl">
          {/* Image Section */}
          <div className="flex justify-center items-center md:w-1/3">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-yellow-400 overflow-hidden">
              <img
                src="../../public/A3---12pp.jpg" // Replace with your actual image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 flex flex-col justify-center px-4 md:px-8 mt-6 md:mt-0">
            <p className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed">
              About Me!
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            I am a passionate developer with expertise in MERN stack development, React, Tailwind CSS, and DaisyUI.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              I have a strong interest in creating visually appealing and user-friendly designs, blending my technical skills with a keen eye for graphic design. My recent completion of the AWS Cloud Computing workshop has further expanded my understanding of cloud technologies.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              With a focus on crafting intuitive and scalable solutions, I enjoy exploring innovative tools and technologies to deliver impactful projects. My enthusiasm for both development and design drives me to continuously enhance my skills and contribute to creative, technology-driven solutions.
            </p>
          </div>
        </div>
      </div>
      
      <hr />

    </>
  )
}

export default Aboutme;
