import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Insaf-Logo.png';

function Footer({ language, content }) {
  const isRTL = language === 'ar';

  return (
    <div>
      <footer className='bg-black text-white p-2 md:p-4'>
        <div className='flex flex-col'>
          {/* first row */}
          <div className='flex flex-col justify-between'>
            {/* Tailwind classes for responsive flex-direction */}
            <div className={`flex  md:flex-row lg:flex-row justify-around flex-md flex-lg flex-wrap`}>
          
              <div className={`w-full md:w-8/12 lg:w-9/12 p-2 md:p-4 lg:p-10 flex flex-col md: justify-around md:flex-row-reverse `} >
                <div className={`text-lg text-[#7f7e7e] flex justify-center `}>
                  <img className='w-1/2 sm:w-9/12 sm:h-[60px]' src={logo} alt='Logo'/>
                </div>

                <div className={`p-1 flex flex-col ${isRTL ? 'text-end' : 'text-start'}`}>
                  <h2 className='font-extrabold text-base md:text-xl lg:text-xl p-1 tracking-widest text-red-600'>{content.footer.discover}</h2>
                  <Link to='/products' className='p-1 tracking-wide text-[#7f7e7e]'>{content.footer.product}</Link>
                  <Link to='/contact' className='p-1 tracking-wide text-[#7f7e7e]'>{content.footer.contact}</Link>
                </div>
              </div>

              {/* second col */}
              <div className={`w-full md:w-4/12 lg:w-3/12 p-2 md:p-4 lg:p-10 ${isRTL ? 'flex-col' : ''} `}   >
                <div className={`p-1   ${isRTL ? 'text-end' : 'text-start'}`}>
                  <h3 className='text-base md:text-xl lg:text-xl font-bold text-red-600 '  style={{ justifyContent: isRTL ? 'end' : 'start' }} >{content.footer.call}</h3>
                  <div className='text-lg text-[#7f7e7e] flex flex-col'>
                    <div><a href='tel:+0562563000' className='p-1'>0562563000</a></div>
                    <div><a href='tel:+0550637750' className='p-1'>0550637750</a></div>
                    <div><a href='tel:+0503281836' className='p-1'>0503281836</a></div>
                  </div>
                </div>
                <div className={`p-1   ${isRTL ? 'text-end' : 'text-start'}`}>
                  <h3 className='text-base md:text-xl lg:text-xl font-bold text-red-600'>{content.footer.mail} </h3>
                  <h3 className='text-lg text-[#7f7e7e] '>sales@insaftech.com </h3>
                </div>
                <div className={`p-1   ${isRTL ? 'text-end' : 'text-start'}`}>
                  <h3 className='text-base md:text-xl lg:text-xl font-bold text-red-600'>{content.footer.branch}</h3>
                  <p className='text-lg text-[#7f7e7e]'>{content.footer.place}</p>
                </div>
              </div>
            </div>
            <hr />
            {/* second row */}
            <div className='flex w-full justify-center'>
              <div className='p-2 text-center'>© 2024 All rights reserved By Insaftech<br />
                Powered By Codepublicist </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
