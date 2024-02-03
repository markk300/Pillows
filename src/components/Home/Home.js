import React from 'react'
import { Hero } from './Hero'
import { MidlePart } from './MidlePart'
import { ProductSection } from './ProductSection'
import { ShopNow } from './ShopNow'

export const Home = () => {
  return (
    <>
    <Hero />
    <div className='pt-10 pb-10'>
    <MidlePart />
    </div>
    <div className='pt-10 pb-14'>
    <ProductSection />
    </div>
    <ShopNow />
    </>
  )
}
