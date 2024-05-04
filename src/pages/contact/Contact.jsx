import React from 'react';
import './../../components/Contact/contact.css'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { BsMap } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { GoMail } from "react-icons/go";
import TypingAnimation from '../../components/TypingAnimation'
function Contact({language,content}) {
  const RedTextField = styled(TextField)`
  ${({ language }) => language === 'ar' && 'direction: rtl;'}
  .MuiInputBase-root {
    color: grey; /* Change text color to grey */
  }
  .MuiFormLabel-root {
    color: grey; /* Change label color to grey */
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

  input::placeholder {
    color: grey; /* Set placeholder color to grey */
  }
`;

const isRTL = language === 'ar';
  return (
    <div className='mains'>
      <section id='bgcontact' className='bg-overlay bg-overlay-gradient pb-0 ng-section mb-0 '>
        <div id="heads" className="flex justify-center items-center " style={{ height: '445px' }}>
          <div className="relative w-2/3">
            <div className='w-full flex justify-center'>
              <div className="h-20 w-16 bg-red-600 ">
              </div>
            </div>
            <div className="absolute top-4 left-0 text-white text-2xl md:text-3xl text-center w-full flex justify-center tracking-wide  z-10 font-bold"  >
            <TypingAnimation text={content.contact.heading} speed={120} />
            </div>          </div>
        </div>
      </section>
      <div className='w-full  mt-0 bg-zinc-800'>
        <div id="formhead" className='w-full flex  items-center'     style={{ justifyContent: isRTL ? 'center' : 'start'}}
>
<div className='w-full flex justify-center items-center pt-16  animate__animated animate__pulse animate__delay-2s'>
                    <div className='relative'>
                        <div className='h-24 w-20 border border-2 border-red-600 '></div>
                    </div>
                    <div className='absolute w-full z-10 flex flex-col justify-center items-center '>
                        <div className='text-sm sm:text-lg text-[#7f7e7e] w-full text-center'>{content.contact.subhead}</div>
                        <div id="contact" className=' w-full text-center text-3xl font-bold tracking-wide text-white'> {content.contact.heading}<span className='text-red-600'></span></div>
                    </div>
                </div>
        </div>

        <div className='w-full flex flex-col md:flex-row lg:flex-row justify-start md:justify-center items-start md:items-center' style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <div className={`w-full md:w-1/3 lg:w-1/3 pt-14 ps-5 pe-14 pb-14  md:ps-14 lg:ps-14  flex flex-col justify-between ${isRTL ? 'animate__animated animate__fadeInRightBig animate__delay-2s' : 'animate__animated animate__fadeInLeftBig animate__delay-2s'}`}>
            <div className='w-full flex  
            pb-10  ' style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}> 
            <div className='icon text-red-600 text-2xl md:text-4xl m-2'>
            <BsMap />
                        </div>
            <div className='flex flex-col' style={{ justifyContent: isRTL ? 'end' : 'start' }}> 
              <h3 className='text-md ms-2 md:ms-7 text-[#7f7e7e] flex me-2' style={{ justifyContent: isRTL ? 'end' : 'start' }} >{content.contact.visit}</h3>
              <h3 className='text-lg ms-2 md:ms-7 text-[#7f7e7e] '>{content.contact.place}</h3>
            </div>
           
            </div>
            
            <div className='w-full    pb-10 '> 
            <a href='mailto:sales@insaftech.com' className='flex' style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <div className='icon text-red-600  text-2xl md:text-4xl m-2'>
            <GoMail />
                        </div>
            <div className='flex flex-col' > 
              <h3 className='text-md ms-2 md:ms-7 text-[#7f7e7e] flex ' style={{ justifyContent: isRTL ? 'end' : 'start' }}>{content.contact.email}</h3>
              <h3 className='text-lg ms-2 md:ms-7 text-[#7f7e7e] '>sales@insaftech.com </h3>
              
            </div>
            </a>
            </div>
             <div className='w-full flex  pb-10 'style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}> 
            <div className='icon text-red-600  text-2xl md:text-4xl m-2'>
            <MdPhoneInTalk />
                                        </div>
            <div> 
              <h3 className='text-md ms-2 md:ms-7 text-[#7f7e7e] flex me-2' style={{ justifyContent: isRTL ? 'end' : 'start' }}>{content.contact.call}</h3>
              <div className='text-lg ms-2 md:ms-7 text-[#7f7e7e] flex flex-col '>
                <div  > <a href='tel:+0562563000'>0562563000</a> </div>
<div><a href='tel:+0550637750'>0550637750</a></div>
<div><a href='tel:+0503281836'>0503281836</a></div>
 
 </div>
            </div>
           
            </div>
            
          </div>


          <div className={`w-full md:w-2/3 lg:w-2/3 ps-4 ${isRTL ? 'animate__animated animate__fadeInLeftBig animate__delay-2s' : 'animate__animated animate__fadeInRightBig animate__delay-2s'}`}>
          <div className='w-full flex flex-col p-8'>

            <div className='w-full mt-[-90px]  md:mt-0 flex flex-col md:flex-row lg:flex-row justify-around items-start ' >
<div className='w-full  md:w-1/2 pt-4'> 
   <RedTextField className='p-4 w-9/12 ' id="standard-basic"  placeholder={content.contact.yourname} variant="standard"  dir={isRTL ? "rtl" : "ltr"}/></div>           
<div className='w-full md:w-1/2 pt-4'>
<RedTextField className='p-4  w-9/12' id="standard-basic"  placeholder={content.contact.yourmail} variant="standard"  dir={isRTL ? "rtl" : "ltr"}/></div>           

            </div>
            <div className='w-full   md:mt-0 flex flex-col md:flex-row lg:flex-row justify-around items-start'>
<div className='w-full  md:w-1/2 pt-4'> 
   <RedTextField className='p-4 w-9/12 ' id="standard-basic"  placeholder={content.contact.telephone} variant="standard"  dir={isRTL ? "rtl" : "ltr"}/></div>           
<div className='w-full md:w-1/2 pt-4'>
<RedTextField className='p-4  w-9/12' id="standard-basic"  placeholder={content.contact.subject} variant="standard"  dir={isRTL ? "rtl" : "ltr"}/></div>           

            </div>
            <div className='w-full md:mt-0 flex flex-col  justify-start items-start'>
            <div className='w-full md:mt-0 flex flex-col justify-start items-start'>
  <textarea
    rows="5"
    placeholder={content.contact.message}
    className="outline-none text-[#7f7e7e] mt-4 w-[75%] md:w-[88%] bg-transparent border-b border-[#7f7e7e] transition-colors duration-150 focus:outline-none focus:border-red-600"
    style={{ textAlign: isRTL ? 'end' : 'start'}}
  />
</div>
     
      <div className='mt-4 bg-white mt-4 w-[75%] md:w-[88%] hover:bg-red-600 text-red-600 hover:text-white'>
  <button className='w-full h-[50px]'>
  {content.contact.submit}
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
      </div>
  );
}

export default Contact;