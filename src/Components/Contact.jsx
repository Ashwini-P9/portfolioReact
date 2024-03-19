import React, { useState } from 'react';
import { Style } from '../utils/Style';
import contact from '../assets/contact-us.jpeg';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    detail: ''
  });

  const { name, email, detail } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (name === "" && email === "") {
      alert("Please Enter all Fields")
     }
     
     else {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted'); 

    try {
      const userData = { name, email, detail };
      await axios.post("http://localhost:5002/details", userData);
      toast.success('Thanks for contacting👍');
      
      // Reset form data on successful submission
      setData({
        name: "",
        email: "",
        detail: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };
  }
  return (
    <>
      <div className='flex-row items-center pl-5 justify-center pt-3 shadow-violet-500' id='Contact'> 
        <span className={Style.sectionHeadText}>
          Contact 
        </span>
        <hr className='w-[35%]'/>
      </div> 
      <div className='mt-5'>
        <div className='flex flex-wrap flex-row justify-around'>
          <div className='lg:w-[40%]'>
            <form className='m-5 flex flex-col gap-3'>
              <label htmlFor="name" className='flex flex-col gap-3'>
                <span className='text-violet-700 font-medium mb-2'>
                  Your Name
                </span>
                <input 
                  type="text" 
                  value={name} 
                  name="name" 
                  id="name" 
                  placeholder='What is your name?' 
                  onChange={handleChange} 
                  
                  className='bg-orange-200 py-4 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium' 
                />
              </label>
              <label htmlFor="email" className='flex flex-col gap-3'>
                <span className='text-violet-700 font-medium mb-2'>
                  Your Email
                </span>
                <input 
                  type="email" 
                  value={email} 
                  name="email" 
                  id="email" 
                  placeholder='What is your email?' 
                  onChange={handleChange} 
                  required
                  className='bg-orange-200 py-4 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium' 
                />
              </label>
              <label htmlFor="detail" className='flex flex-col gap-3'>
                <span className='text-violet-700 font-medium mb-2'>
                  Your Message 
                </span>
                <textarea 
                  rows={5} 
                  value={detail} 
                  name="detail" 
                  id="detail" 
                  placeholder='What do you want to say?' 
                  onChange={handleChange} 
                 
                  className='bg-orange-200 py-4 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium' 
                />
              </label>
              <button  
                onClick={handleSubmit}  
                type='submit' 
                className='bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-x1 outline-none w-fit text-black font-bold shadow-md shadow-primary'
              >
                Submit  
              </button>
            </form>
          </div>
          <div className='lg:w-[50%]'>
            <img src={contact} height={400} width={900} alt="any img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;