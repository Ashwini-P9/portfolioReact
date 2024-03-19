import React from 'react'
import Main from  './Components/Main'
import About from './Components/About'
import Navbar from './Components/Navbar';
import OverView from './Components/OverView';
import  Project  from './Components/Project';
import Contact from './Components/Contact';
 import Footer from './Components/Footer'
 import { Toaster} from 'react-hot-toast';
const App = () => {
  return (
     <> 
     <Toaster
  position="top-center"
  reverseOrder={true}
/>
    <div className='flex flex-col overflow-x-hidden'>
      <div className='absolute w-screen'>
      <Navbar/>  </div> 
    <div className='min-h-screen'>
      <div className='absolute'>
      <Main/> 
      </div>
      <div className='relative'>
      <About/>
      </div>
    </div>
    <div className='flex flex-col relative bg-white'>
      <OverView/>
     <Project/>
     <Contact/>
     <Footer></Footer>
    </div>
   
 
   </div>
   </>
  )
}

export default App

 
 