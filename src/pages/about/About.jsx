import React from 'react'
import TypingAnimation from '../../components/TypingAnimation'
function About({language,content}) {
    const isRTL = language === 'ar';

  return  (
    <div className='mains'>
        <section id='bgcontact' className='bg-overlay bg-overlay-gradient pb-0 ng-section mb-0 '>
            <div id="heads" className="flex justify-center items-center h-[345px] sm:h-[445px]">
                <div className="relative w-2/3">
                    <div className='w-full flex justify-center'>
                        <div className="h-20 w-16 bg-red-600 "></div>
                    </div>
                    <div className="absolute top-4 left-0 text-white text-2xl md:text-3xl text-center w-full flex justify-center tracking-wide  z-10 font-bold"  >
            <TypingAnimation text={content.about.heading} speed={120} />
            </div>                </div>
            </div>
        </section>
        <div className='w-full bg-zinc-800 p-12'>
<div className='flex flex-col justify-center items-center animate__animated animate__fadeInLeftBig animate__delay-1s'>
    <div className='text-xl sm:text-3xl pb-2 text-red-600'>{content.about.who}</div>
    <div className='text-lg sm:text-lg p-0 ms:p-8  text-center   text-white'>{content.about.whocon}</div>

</div>
<div className='flex  flex-col md:flex-row text-white justify-around items-center pt-8' style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
<div className={`w-full md:w-5/12 flex flex-col mb-4 md:mb-0 items-center justify-center bg-zinc-600 pt-4 pb-4 shadow-xl rounded-xl ${isRTL ? 'animate__animated animate__fadeInRightBig animate__delay-2s' : 'animate__animated animate__fadeInLeftBig animate__delay-2s'}`}>
        <div className='text-2xl text-center text-red-600 '> {content.about.vision}</div>
        <div className='text-lg text-center text-white  '> {content.about.ourvision}</div>
    </div>
    <div className={`w-full md:w-5/12 flex flex-col mb-4 md:mb-0 items-center justify-center bg-zinc-600 pt-4 pb-4 shadow-xl rounded-xl ${isRTL ? 'animate__animated animate__fadeInLeftBig animate__delay-2s' : 'animate__animated animate__fadeInRightBig animate__delay-2s'}`}>
        <div className='text-2xl text-center text-red-600'> {content.about.mission} </div>
        <div className='text-lg text-center text-white '> {content.about.ourmission}</div>
    </div>
  
</div>


        </div>
    </div>
  )
}

export default About