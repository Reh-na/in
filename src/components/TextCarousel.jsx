import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from "../images/left-arrow.svg";
import RightArrow from "../images/right-arrow.svg";
import Slider from 'react-slick';


const TextCarousel = () => {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
      autoplay : true,
      loop : true,
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      // prevArrow: <SlickArrowLeft />,
      // nextArrow: <SlickArrowRight />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
  };

  return (
    <div>
       <Slider {...settings} >
     
        
        <div  className='p-16 max-sm:p-0 sm:p-0 bg-white text-center rounded-xl'>
            <p className='pb-4'>asdfgjkl</p>
            <p className='pb-4'>sdfghjkl </p>
            <h3 className='font-bold text-[20px] pb-2'>asdjlasdfghjkl</h3>
            <h4 className='font-bold text-[15px]'>asdfghjkl</h4>
        </div>
    
      </Slider> 
    </div>
  )
}

export default TextCarousel;


