import React from 'react'
import SleepImg from '../../assets/Icons/Group 35.png'
import reviewData from '../../data/ReviewData'
import { StarsComponent } from './StarsComponent'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const HappySleepers = () => {
  const settings = {
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '20px',
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div>
        <div>
            <div className='flex justify-center'>
                <img src={SleepImg} alt='sleep'className='flag-icon' />
            </div>
        <div className="flex justify-center">
          <h2 className="text-primary text-[30px] font-semibold">
          Happy Sleepers.
          </h2>
        </div>
        <div className="flex justify-center">
          <h2 className="text-[#122230] text-[16px] font-light text-center ">
          With over <b className='font-bold'>20,000 five-star reviews</b>, don’t take our word for it. Take theirs.
          </h2>
        </div>
        <div className='slider-container items-center  mt-5 md:mt-20 text-center md:justify-center  '>
        <Slider {...settings} >
            {reviewData.map((data) =>(
                <div key={data.id}  className='w-[333px]'>
                    <div className='pb-3 md:pb-8'>
                    <StarsComponent stars={data.stars}/>
                    </div>
                    <h1 className='text-primary font-bold text-[22px] pb-2'>{data.title}</h1>
                    <p className='text-[12px] pb-3 text-wrap '>{data.desc}</p>
                    <h2 className='text-[#406C93] italic mb-3'>{data.author}</h2>
                </div>
            ))}
            </Slider>
        </div>
        <div className="flex justify-center mt-20">
            <button className='bg-transparent hover:bg-[#406C93] text-[#406C93] font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-[13px]'>READ ALL REVIEWS</button>
         </div>
        </div>
    </div>
  )
}
