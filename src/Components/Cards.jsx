import React from 'react'

function Cards({ item }) {
    // console.log(item)
    return (
        <div>
            <div className="card bg-base-100 w-85 shadow-xl border-2 border-gray-700 p-8 md:ml-8 mt-17 rounded-3xl">
                <figure className="px-8 pt-8">
                    <img
                        src={item.image}
                        alt="Shoes"
                        className="rounded-3xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="project-title font-semibold text-xl">{item.title}</h2>
                    <p>{item.info}</p>
                    <div className="card-actions mt-7">
                        <a href='https://github.com/sajaysharma/bookLibrary' className="bg-blue-700  text-white p-3 rounded-xl">View Detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
