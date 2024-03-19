import React from 'react'
import Profile from '../assets/profile.png'
import {Style} from '../utils/Style'
import Resume from '../assets/Resume.pdf'
import { TiArrowDownOutline } from "react-icons/ti";
import '../App.css'

const About = () => {
  return (
    <div className='flex flex-wrap justify-center items-center m-10 p-10' id='About'>

  <div className='flex-1 py-4'>
    <span className={Style.heroHeadText}>
        Hi, I'm <span className='text-orange-600 shadow-orange-300'>
            Ashwini
        </span>
   
    <br />
    <span className={Style.heroSubText}>
        I am a Java Developer & 
        <br />
          Web Developer
    </span>
    </span >
    <br />
    <div className='w-{14rem}'>
       <a href={Resume}
        download='Resume'
        target='blank'
        rel='noreferrer'>
            <div className='p-4 mt-2 w-[13rem] rounded-x1 text-orange-500 flex justify-center border-2 border-orange-500  border-radius-10 hover:border-violet-500 hover:shadow-pink-500  '> 
            <TiArrowDownOutline className='text-lg mr-3 mt-1 orange' />Resume

            </div>
        </a>
    </div>
  </div>
  <div className='flex flex-wrap'>
    <img src={Profile} alt='profile' className='element' />
  </div>
    </div>
  )
}

export default About