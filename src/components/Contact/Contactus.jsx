import React from 'react';
import './contact.css'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { BsMap } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { Button } from '@mui/material';
function Contactus() {
  const RedTextField = styled(TextField)`
  .MuiInputBase-root {
    color: grey; /* Change label color to red */

  }
  .MuiFormLabel-root {
    color: grey; /* Change label color to red */
  }
  .MuiInput-underline:before {
    border-bottom-color: grey; /* Set initial underline color to grey */
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: grey; /* Set underline color to grey on hover */
  }
  .MuiInput-underline:after {
    border-bottom-color: grey; /* Set underline color to grey initially */
  }
  .MuiInput-underline:hover:not(.Mui-disabled):after {
    border-bottom-color: red; /* Set underline color to red on hover */
  }
  .MuiInput-underline.Mui-focused:after {
    border-bottom-color: red; /* Set underline color to red when focused */
  }
`;
  return (
    <div className='mains'>
      <section id='bgcontact' className='bg-overlay bg-overlay-gradient pb-0 ng-section mb-0 '>
        <div id="heads" className="flex justify-center items-center " style={{ height: '445px' }}>
          <div className="relative w-2/3">
            <div className='w-full flex justify-center'>
              <div className="h-20 w-16 bg-red-600 ">
              </div>
            </div>
            <div className="absolute top-4 left-0 text-white text-2xl md:text-3xl w-full flex justify-center tracking-wide  z-10  font-bold "  >CONTACT US</div>
          </div>
        </div>
      </section>
      <div className='w-full  mt-0 bg-zinc-800'>
        <div id="formhead" className='w-full flex justify-start items-center'>
          <div className="relative">
            <div className='w-full ms-5 md:ms-16 lg:ms-16 mt-16'>
              <div className="h-24 w-20 border border-2 border-red-600 ">
              </div>
            </div>
            <div className=" w-full absolute top-2 mt-20 ms-14 md:ms-28 lg:ms-28  flex-col justify-center z-10   "  >
              <div className='text-sm text-[#7f7e7e] w-[200px] sm:w-80'>    We Wanna Hear From You!</div>
              <div id="contact" className=' w-[215px] sm:w-80 text-3xl font-bold tracking-wide text-white'> CONTACT US<span className='text-red-600'>.</span></div>

            </div>


          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row lg:flex-row justify-start md:justify-center items-start md:items-center'>
          <div className='w-full md:w-1/3 lg:w-1/3 pt-14 ps-5 pe-14 pb-14  md:ps-14 lg:ps-14  flex flex-col justify-between'>
            <div className='w-full flex  
            pb-10 '> 
            <div className='icon text-red-600 text-2xl md:text-4xl'>
            <BsMap />
                        </div>
            <div> 
              <h3 className='text-md ms-2 md:ms-7 text-[#7f7e7e] '>Visit Us</h3>
              <h3 className='text-lg ms-2 md:ms-7 text-[#7f7e7e] '>Jeddah , Saudi Arabia</h3>
            </div>
           
            </div>
            <div className='w-full flex   pb-10 '> 
            <div className='icon text-red-600  text-2xl md:text-4xl'>
            <GoMail />
                        </div>
            <div> 
              <h3 className='text-md ms-2 md:ms-7 text-[#7f7e7e] '>Email Us</h3>
              <h3 className='text-lg ms-2 md:ms-7 text-[#7f7e7e] '>mail@insaftech.com </h3>
            </div>
           
            </div> <div className='w-full flex  pb-10 '> 
            <div className='icon text-red-600  text-2xl md:text-4xl'>
            <MdPhoneInTalk />
                                        </div>
            <div> 
              <h3 className='text-md ms-2 md:ms-7 text-[#7f7e7e] '>Call Us</h3>
              <h3 className='text-lg ms-2 md:ms-7 text-[#7f7e7e] '>0562563000 </h3>
            </div>
           
            </div>
            
          </div>


          <div className='w-full md:w-2/3 lg:w-2/3 ps-4'>
          <div className='w-full flex flex-col p-8'>

            <div className='w-full mt-[-90px]  md:mt-0 flex flex-col md:flex-row lg:flex-row justify-around items-start'>
<div className='w-full  md:w-1/2 pt-4'> 
   <RedTextField className='p-4 w-9/12 ' id="standard-basic"  placeholder='Your Name' variant="standard" /></div>           
<div className='w-full md:w-1/2 pt-4'>
<RedTextField className='p-4  w-9/12' id="standard-basic"  placeholder='Your Email' variant="standard" /></div>           

            </div>
            <div className='w-full   md:mt-0 flex flex-col md:flex-row lg:flex-row justify-around items-start'>
<div className='w-full  md:w-1/2 pt-4'> 
   <RedTextField className='p-4 w-9/12 ' id="standard-basic"  placeholder='Telephone' variant="standard" /></div>           
<div className='w-full md:w-1/2 pt-4'>
<RedTextField className='p-4  w-9/12' id="standard-basic"  placeholder='Subject' variant="standard" /></div>           

            </div>
            <div className='w-full md:mt-0 flex flex-col  justify-start items-start'>
            <textarea
  rows="5"
  placeholder="Your Message"
  className="outline-none text-[#7f7e7e] mt-4 w-[75%] md:w-[88%] bg-transparent focus:ring-0 focus:border-transparent border-b border-[#7f7e7e] transition-transform duration-150 transform origin-bottom-left border-[#7f7e7e] focus:border-red-600"
/>

      </div>        
      <div className='mt-4 bg-white mt-4 w-[75%] md:w-[88%] hover:bg-red-600 text-red-600 hover:text-white'>
  <button className='w-full h-[50px]'>
Submit
  </button>
</div>



            </div>
           </div>
          </div>
        </div>
        <div >
        <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950648.0444793083!2d38.55159901812323!3d21.450109761842704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1712231236173!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> 
      </div>
  );
}

export default Contactus;
