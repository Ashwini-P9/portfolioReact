import React from 'react'
import {Style} from '../utils/Style'
import  Tilt from 'react-parallax-tilt';
import { projects } from '../Constants/Index';

import {SiGithub,SiNetlify } from 'react-icons/si'

const Project = () => {
  return (
    <div> <div className='flex-row items-center pl-5 justify-center pt-3 shadow-violet-500' id='Project'> 
    <span className={Style.sectionHeadText}>
        Projects
    </span>
    <hr  className='w-[35%]'/>
    <div className={Style.sectionText}>
  Following projects showcases my skills and experience through real-world examples of my woek.
  Each project will briefly described with links to code repositories and live demos in it.
  reflects my ability to solve complex problems,work with different technologies,
  amd manage projects effectively.
    </div>
    </div>
   <div className='flex flex-wrap p-8 justify-evenly items-center'>
    {projects.map((project)=>
    (
        <Tilt key={project.name} 
        className='text-center w-[300px] h-[500px] flex flex-col justify-evenly  shadow-2x1 m-10
        items-center hover:shadow-2x1 hover:shadow-violet-400 shadow-pink-300 p-3 rounded-half
        border-2 border-violet-900 '>
            <div>
                <div className='flex justify-center items-center mb-3'>
                <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                flex justify-center items-center'>
                    <a href={project.source_deploy_link} target='blank'>
                        <SiNetlify className="  h-[34px] w-[34px] text-3x1 font-bold text-violet-600"></SiNetlify>
                    </a>
                    </div>
                    
                    <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                 flex justify-center items-center'>
                    <a href={project.source_code_link} target='blank'>
                        <SiGithub className="  h-[34px] w-[34px] text-3x1 font-bold text-violet-600"></SiGithub>
                    </a>
                    </div>
                     </div>
                 
                    <img src={project.image} alt={project.name} className='h-[200px] w-[250px] self-center pl-5  border-pink-200 
                      
                rounded-2x1 '/>
                    <div className='text-2x1 text-violet-600 font-extrabold  '>
                 {project.name}
                    </div>
                    <div className='text-center'>
                        <span className='text-center text-orange-500'>
                            {project.description}
                        </span>
                    </div>
                    </div>
                   
        </Tilt>

    ))}
   </div>
    </div>
  )
}

export default Project