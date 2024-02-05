import React from 'react'
import Background from '../../assets/AdobeStock_224508594.png'


export const ShopNow = () => {
  return (
    <div className='flex justify-center '>
        <div className='relative'>
            <img src={Background} alt='backgroundd' className=' h-[350px] object-cover md:h-full' />
        
        <div className='absolute top-0 mx-20 my-20   '>
            <h3 className='text-[#406C93] md:text-[18px] font-semibold italic'>Need help picking out a pillow?</h3>
            <h1 className='text-primary md:text-[30px] font-semibold w-[70%] text-wrap'>Find the perfect pillow for you with our Pillow Finder.</h1>
            <p className='text-[#406C93] md:text-[13px] mt-5 font-semibold rounded-sm bg-white inline-block p-3'>LET’S GET STARTED</p>
        </div>
        </div>
    </div>
  )
}
