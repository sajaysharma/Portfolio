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
            name: "MonoDB"
        },
        {
            id: 2,
            logo: java,
            name: "Java"
        },
        {
            id: 3,
            logo: react,
            name: "React"
        },
        {
            id: 4,
            logo: node,
            name: "Node"
        },
        {
            id: 5,
            logo: html,
            name: "HTML"
        },
        {
            id: 6,
            logo: css,
            name: "CSS"
        },
        {
            id: 7,
            logo: cProg,
            name: "C Programming"
        },
        {
            id: 8,
            logo: mySql,
            name: "MySql"
        },
    ]
    return (
        <>
            <div name="SKILLS" className="max-w-screen-2xl min-h-screen cotainer mx-auto px-4 md:px-20 mt-10 ">
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Skills</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6 justify-center items-center">
                    {
                        cardItem.map(({id, logo, name}) => (
                            <div className="md:w-[300px] md:h-[300px] border-2 border-gray-700 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300" key={id}>
                                <img src={logo} alt="" className='w-[120px] h-[120px] p-1 justify-center rounded-full border-[2px]'/>
                                <div>
                                    <div className="px-4 py-7 font-bold text-xl mb-2">{name}</div>
                                    <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
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
