import React from 'react';
import java from "../../public/java.png";
import css from "../../public/css.jpg";
import html from "../../public/html.png";
import mongoDB from "../../public/mongodb.jpg";
import node from "../../public/node.png";
import react from "../../public/reactjs.png";
import cProg from "../../public/c-.png";
import mySql from "../../public/mysql.png";


function Skills() {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MonoDB",
            title: "A NoSQL database offering high scalability, flexibility, and efficient data handling for modern applications."
        },
        {
            id: 2,
            logo: java,
            name: "Java",
            title: "A versatile, object-oriented language used in enterprise applications, Android development, and backend systems."
        },
        {
            id: 3,
            logo: react,
            name: "React",
            title: "A JavaScript library for building fast, interactive, and reusable UI components efficiently."
        },
        {
            id: 4,
            logo: node,
            name: "Node",
            title: "A server-side runtime for scalable applications, supporting asynchronous programming and high performance."
        },
        {
            id: 5,
            logo: html,
            name: "HTML",
            title: "The foundation of web pages, defining structure and content with semantic elements for better accessibility."
        },
        {
            id: 6,
            logo: css,
            name: "CSS",
            title: "A styling language that controls layout, colors, and responsiveness for visually appealing web pages."
        },
        {
            id: 7,
            logo: cProg,
            name: "C Programming",
            title: "A powerful language for system software, game development, and competitive programming with efficient execution."
        },
        {
            id: 8,
            logo: mySql,
            name: "MySql",
            title: "A reliable relational database system supporting structured data storage, powerful queries, and transaction management."
        },
    ]
    return (
        <>
            <div name="SKILLS" className="max-w-screen-2xl min-h-screen cotainer mx-auto px-4 md:px-20 mt-10 ">
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Skills</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-6 my-6 justify-center items-center">
                    {
                        cardItem.map(({id, logo, name, title}) => (
                            <div className="md:w-[250px] md:h-[250px] border-2 border-gray-700 rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-300" key={id}>
                                <img src={logo} alt="" className='w-[100px] h-[100px] p-1 justify-center rounded-full border-[2px]'/>
                                <div>
                                    <div className="px-2  font-bold text-xl mb-1">{name}</div>
                                    <p className="px-1 text-sm text-gray-700">{title}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
        </>
    )
}

export default Skills;
