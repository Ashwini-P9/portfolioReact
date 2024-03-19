import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrGithub } from "react-icons/gr";
const Footer = () => {
  return (
    <>
    <div className=' h-[70px] w-[screen] bg-black flex flex-row  justify-around'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                <FaLinkedinIn  className='text-white '/></div>
                <span className='text-white m1-1 mt-[0.1rem]'>Linkedin</span>
                
            </a>
        </div>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="ashwinimp99@gmail.com" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                 <IoMdMail   className='text-white '/></div>
                <span className='text-white m1-1 mt-[0.1rem]'>Mail</span>
                
            </a>
        </div>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                <BiSolidPhoneCall  className='text-white '/>
                </div>
                <span className='text-white m1-1 mt-[0.1rem]'>7887613720</span>
                
            </a>
        </div>

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="https://github.com/Ashwini-P9" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                <GrGithub className='text-white '/></div>
                <span className='text-white m1-1 mt-[0.1rem]'>Github.com</span>
              
            </a>
        </div>
        
        </div></>
  )
}

export default Footer