import React from 'react'
import Background from '../../assets/AdobeStock_224508594.png'

export const ShopNow = () => {
  return (
    <div className='container mx-auto flex justify-center '>
        <div className=''>
            <img src={Background} alt='backgroundd' />
        </div>
        <div className='absolute t-0 left-0 mt-[150px] ml-[85px] '>
            <h3 className='text-[#406C93] text-[18px] font-semibold italic'>Need help picking out a pillow?</h3>
            <h1 className='text-primary text-[30px] font-semibold w-[70%] text-wrap'>Find the perfect pillow for you with our Pillow Finder.</h1>
            <p className='text-[#406C93] text-[13px] mt-5 font-semibold rounded-sm bg-white inline-block p-3'>LET’S GET STARTED</p>
        </div>
    </div>
  )
}
