import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Cards from './Cards';

function Project() {

    const data = [
        {
            id: 1,
            title: "Project#1",
            info: "Library Management System based on MERN",
            image: "../../public/project_pic.jpg"
        },
        {
            id: 2,
            title: "Project#2",
            info: "Lorem ipsum dolor sit amet consectetur.",
            image: "../../public/project_pic.jpg"
        },
        {
            id: 3,
            title: "Project#3",
            info: "Lorem ipsum dolor sit amet consectetur.",
            image: "../../public/project_pic.jpg"
        },
        {
            id: 4,
            title: "Project#4",
            info: "Lorem ipsum dolor sit amet consectetur.",
            image: "../../public/project_pic.jpg"
        },
    ];


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div name="PROJECT" className="max-w-screen  container mx-auto mb-12 px-4 md:px-20">
                <div>
                    <h1 className='text-2xl font-semibold mt-8'>Project</h1>
                    <p className='text-gray-700 text-sm'>I have worked on various web development projects, focusing on responsive design, user experience, and efficient functionality. Using modern technologies like React, MERN Stack, and Tailwind CSS, I build scalable solutions that solve real-world problems. My goal is to keep learning and refining my skills by working on innovative applications.</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            data.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <br />
            <hr />
        </>
    )
}

export default Project;




{/* <div className='my-4 p-3'>
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-900 dark:text-white dark:bg-slate-900 dark:border">
                    <figure>
                        <img
                            src= {java}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Project
                            <div className="badge badge-secondary">Mera project</div>
                        </h2>
                        <p> kuch hai </p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Lorem</div>
                            <div className="cursor-pointer px-5 py-3 badge badge-outline hover:bg-pink-500  hover:text-white duration-200">Read</div>
                        </div>
                    </div>
                </div>
            </div> */}