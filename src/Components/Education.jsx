import React from 'react'

function Education() {
    return (
        <>

            <div name ="EDUCATION" className="max-w-screen mt-10 mb-10">

                {/* Education Section */}
                <div id="education" className="py-12 px-6 ">
                    <h2 className="text-3xl md:text-9xl font-bold text-center text-blue-600 md:mb-8">
                        My Education
                    </h2>

                    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 space-y-6 max-w-screen md:ml-12 md:mr-12 mx-auto">
                        {/* Post Graduation */}
                        <div >
                            <div className="flex justify-between items-center">
                            <p className="text-lg md:text-xl font-semibold">
                                MCA
                            </p>
                            <p className="text-sm md:text-base justify-between items-center ml-4 font-medium text-gray-700">
                                GALGOTIAS UNIVERSITY GREATER NOIDA
                            </p>
                            <span className="px-4 py-1 bg-gray-200 rounded-full text-sm font-semibold">
                                PRESENT
                            </span>
                            </div>
                            <span className='text-sm'>(Post Graduation)</span>
                        </div>
                        {/* Graduation */}
                        <div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg md:text-xl font-bold">
                                BCA
                                </p>
                            <p className="text-sm md:text-base font-medium ml-4 text-gray-700">
                                RBMI GROUP OF INSTITUTION BAREILLY
                            </p>
                            <span className="px-4 py-1 bg-gray-200 rounded-full text-sm font-semibold">
                                2021-2024
                            </span>
                        </div>
                        <span className='text-sm'>(Graduation)</span>
                        </div>
                        {/* Intermediate */}
                        <div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg md:text-xl font-bold">Intermediate</p>
                            <p className="text-sm md:text-base font-medium ml-4 text-gray-700">
                                SRM INTER COLLEGE MILAK
                            </p>
                            <span className="px-4 py-1 bg-gray-200 rounded-full text-sm font-semibold">
                                2019-2021
                            </span>
                        </div>
                        <span className='text-sm'>  </span>
                        </div>
                        {/* High School */}
                        <div className="flex justify-between items-center">
                            <p className="text-lg md:text-xl font-bold">High School</p>
                            <p className="text-sm md:text-base font-medium ml-4 text-gray-700">
                                PT RAM PD VAIDYA SMARAK IC MILAK
                            </p>
                            <span className="px-4 py-1 bg-gray-200 rounded-full text-sm font-semibold">
                                2018-2019
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Education;


