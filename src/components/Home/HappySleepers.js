import React from 'react'
import SleepImg from '../../assets/Icons/Group 35.png'
import reviewData from '../../data/ReviewData'
import { StarsComponent } from './StarsComponent'


export const HappySleepers = () => {
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
        <div className='flex flex-row mt-20 text-center justify-center  '>
            {reviewData.map((data) =>(
                <div key={data.id} className='w-[390px]'>
                    <div className='pb-8'>
                    <StarsComponent stars={data.stars}/>
                    </div>
                    <h1 className='text-primary font-bold text-[22px] pb-2'>{data.title}</h1>
                    <p className='text-[12px] pb-3'>{data.desc}</p>
                    <h2 className='text-[#406C93] italic'>{data.author}</h2>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}
