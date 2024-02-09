import React from 'react'
import HeroImg from '../../assets/AdobeStock_277241798.png'

export const Hero = () => {
  return (
    <div className='w-full h-full'>
        <div className='relative'>
        <img src={HeroImg} alt='hero img' 
        className='top-0 left-0 w-full h-[400px] md:h-[550px] object-cover' />
        <div className='absolute top-0 md:left-[10%] w-full h-full flex flex-col justify-center lg:w-[650px] md:w-[500px] '>
            <div className='text-center md:text-start  max-w-[1100px] w-auto  p-4'>
                <h1 className='text-[35px] sm:text-[40px] md:text-[55px] font-semibold text-primary'>Shop Hotel Pillows</h1>
                <h3 className='text-[14px] sm:text-[18px] md:text-[22px] font-semibold italic text-[#406C93] mb-3'>Experience hotel relaxation in the comfort of your home.</h3>
                <p className='text-[12px] sm:text-[14px] md:text-[18px] text-[#122230]'>Bring the same bedding featured in your favorite hotel or resort to your home. Find your favorite pillow from the most popular hotel chains: Marriott ®, Hampton Inn ®, Hilton ®, Four Seasons ®, Ritz-Carlton ®, and so much more!</p>
            </div>
            <div className='flex-col gap-5 flex justify-center p-4 md:flex-row md:justify-start'>
                <button className='bg-transparent hover:bg-[#406C93] text-[#406C93] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-[14px]  md:text-[16px]'>SHOP HOTEL PILLOWS</button>
                <button className='bg-transparent hover:bg-[#406C93] text-[#406C93] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-[14px]  md:text-[16px]'>FIND YOUR DREAM PILLOW</button>
            </div>
            </div>
        </div>
    </div>
  )
}
