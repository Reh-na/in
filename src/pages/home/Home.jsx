import React from 'react'
import bearing from '../../images/ball-bearing.jpg'
import seals from '../../images/oil-seals.jpg'
import tool from '../../images/hand-tools.jpg'
import filters from '../../images/hydraulic-filter.jpg'
import fittings from '../../images/aluminium-couplings.jpg'
import hoses from '../../images/hydraulic-hoses.jpg'
import vbelt from '../../images/v-belts.jpg'
import oring from '../../images/o-rings.jpg'
import safety from '../../images/safety-items.jpg'
import { Link } from 'react-router-dom'
import 'animate.css';
import TextCarousel from '../../components/TextCarousel'
import TypingAnimation from '../../components/TypingAnimation'
import Slider from "react-slick";
function Home({language,content}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
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
            <TypingAnimation text={content.home.slogan} speed={120} />
            </div>    
          </div>
        </div>
      </section>
      <div className='bg-zinc-800 w-full p-12 '>
      <div className='flex flex-col justify-center items-center animate__animated animate__fadeInLeftBig animate__delay-1s'>
    <div className='text-xl sm:text-3xl pb-2 text-red-600'>{content.home.who}</div>
    <div className='text-lg sm:text-lg p-0 ms:p-8  text-center   text-white'>{content.home.whocon}</div>

</div>
      </div>
  <div className='w-full bg-zinc-900 p-12'>
        <div className=' flex flex-col items-center justify-center'>
          <div className='text-xl sm:text-3xl pb-2 text-red-600 '>{content.home.productcategories}</div>
          <div className='w-full  md:w-9/12 flex flex-col sm:flex-row flex-wrap justify-center item-center p-0 sm:p-2'>
          <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]   relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={bearing} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.bearing}</div>
         </div>
         <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]   relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={seals} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.seals}</div>
         </div>
          <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]  relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={tool} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.tools}</div>
         </div> <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]   relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={filters} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.filters}</div>
         </div> <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]  relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={fittings} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.fittings}</div>
         </div> <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]   relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={hoses} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.hoses}</div>
         </div> <div className='pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]   relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={vbelt} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.vbelts}</div>
         </div> <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]   relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={oring} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.oring}</div>
         </div> <div className=' pic flex flex-col items-center justify-center p-0 sm:p-2' >
              <div className='w-[200px] sm:w-[250px]  relative'>
              <div className="image-container" >
                <img className='w-full rounded-xl' src={safety} />
              </div>
            </div>
            <div className='text-red-600 text-center text-xl' > {content.home.safety}</div>
         </div>
          </div>
          <Link className=' text-xl p-2 border-2 bg-white  hover:bg-red-600 text-red-600 hover:text-white border-white  hover:border-red-600   'to="/products">{content.home.explore}</Link>
        </div>
  </div>
      <div className='bg-zinc-800 w-full p-12'>
      <div className='flex flex-col justify-center items-center p-0 sm:p-2 animate__animated animate__fadeInRightBig animate__delay-3s'>
    <div className='text-xl sm:text-3xl pb-2 text-red-600 text-center'>{content.home.make}</div>
   
   
    <div className='w-full p-4' >    
      <Slider {...settings}>
        <div className='flex flex-row justify-center items-center'>
        <h3 className='text-sm sm:text-lg p-0   text-center font-extrabold  text-white'> {content.home.makehead1}</h3>
          <h3 className='text-sm sm:text-lg p-0   text-center   text-white'>{content.home.makecon1}</h3>
        </div>
        <div className='flex flex-row justify-center items-center'>
        <h3 className='text-sm sm:text-lg p-0   text-center font-extrabold  text-white'> {content.home.makehead2}</h3>
          <h3 className='text-sm sm:text-lg p-0   text-center   text-white'>{content.home.makecon2}</h3>
        </div>
        <div className='flex flex-row justify-center items-center'>
        <h3 className='text-sm sm:text-lg p-0   text-center font-extrabold  text-white'> {content.home.makehead3}</h3>
          <h3 className='text-sm sm:text-lg p-0   text-center   text-white'>{content.home.makecon3}</h3>
        </div>

     <div className='flex flex-row justify-center items-center'>
        <h3 className='text-sm sm:text-lg p-0   text-center font-extrabold  text-white'> {content.home.makehead4}</h3>
          <h3 className='text-sm sm:text-lg p-0   text-center   text-white'>{content.home.makecon4}</h3>
        </div>
    
      </Slider>
    </div>
    </div>
      </div>
  
      </div>
  )
}

export default Home