import React from 'react';
import axios from "axios";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import pic from "../../public/contact.png";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
              await axios.post("https://getform.io/f/aejjgvgb",userInfo);
              toast.success("Your message has been sent");
        } catch (error) {
            console.log("Error :" + error);
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <div name="CONTACT" className="flex flex-col md:flex-row gap-4 items-center justify-center min-h-screen bg-gray-100 p-6">
                {/* Left Side - Image */}
                <div className="w-full  md:w-1/2 flex justify-center  ">
                    <img src={pic} alt="Crop" className="w-3/4 md:w-[362px] md:h-[362px] max-w-md md:mt-28 mt-10 rounded-2xl shadow-lg h-full object-cover" />
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-2xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect! </h2>
                    <p className="text-gray-600 mb-6">Feel free to reach out for collaborations, projects, or just to say hi! </p>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        // action='https://getform.io/f/aejjgvgb'
                        // method="POST"
                        className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-lg"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-3 border rounded-lg"
                                {...register("message", { required: true })}
                            ></textarea>
                            {errors.message && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <button
                            type='submit'
                            className="w-full bg-blue-900 hover:bg-blue-700 text-white cursor-pointer p-3 rounded-lg">
                            Submit
                        </button>
                    </form>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
                            <FaTwitter />
                        </a>
                    </div>

                    {/* Download Resume */}
                    <div className="text-center mt-6">
                        <a className="bg-gray-800 text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-gray-900">Download Resume </a>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Contact;

