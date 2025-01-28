import React from 'react';
import Facebook from "../../public/Facebook.png";
import LinkedIn from "../../public/linkedin.png";
import Twitter from "../../public/twitter.png";
import Instagram from "../../public/instagram.png";
import GitHub from "../../public/github.png";


function Footer() {
    const logos = [
        {
            id : 1,
            logo : Facebook
        },
        {
            id : 2,
            logo : LinkedIn
        },
        {
            id : 3,
            logo : Instagram
        },
        {
            id : 4,
            logo : Twitter
        },
        {
            id : 5,
            logo : GitHub
        },
    ]
  return (
    <>
      <hr />
      <footer className='py-12'>
        <div className="max-w-screen-2xl cotainer mx-auto px-4 md:px-20">
                 <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4 '>
                        {
                            logos.map(({id,logo}) => (
                                <div className=' ' key={id}>
                                    <img src={logo} alt="" className='w-[50px] h-[50px] p-1 rounded-full cursor-pointer hover:scale-110 duration-300' />
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p>
                            &copy; 2025 || Developed By Ajay Sharma
                        </p>
                    </div>
                 </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
