import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Style } from '../utils/Style'
 import { technologies,services } from '../Constants/Index'
  

 import './style.css'
 

const OverView = () => {
  return (
    <div >
        <div className='flex-row items-center pl-5 justify-center pt-3 shadow-violet-500' id='Overview'> 
        <span className={Style.sectionHeadText}>
            Introduction
        </span>
        <hr  className='w-[35%]'/>
        <div className={Style.sectionText}>
            I'm a skilled web developer with experience in Javascript and expertise in framework like React.I'm a quick learner
            and collaborate,scalable and user-friendly solution that solve real-world  problems.Let's work together to bring your ideas to Life!
        </div>
        </div>
        <div className='flex flex-wrap justify-center'>
          {services.map((service)=>
          (
            <div>
              <Tilt 
              key={service.icon}
              
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.50}
              sale={1.02}
              gyroscope={true}>
              <div className='p-3 m-3 flex flex-col justify-evenly items-center shadow-violet-500'>
              <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title}/>
              <div className=' m-5 text-violet-500'>{service.title}
              </div>
              </div>

              </Tilt>
              </div>
              ))}
               </div>

               

              <div className="flex flex-wrap justify-center items-center">
                {technologies.map((technology)=>(
                  <div
                    key={technology.name}
                    className='m-4 mt-5 h-[100px] w-[100px] rounded-3x1 shadow-2x1 border-[1px] shadow-border-violet-400
                    hover:shadow-orange-300 ' >
                    <img  className='p-2'  src={technology.icon} alt={technology.name}/>
                     <div className='text-violet-600 justify-center flex'>
                      {technology.name}
                     </div>
                  </div>
                ))}
              
             
          
        </div>

       
    </div>
  
  )
}

export default OverView

//npm install framer-motion