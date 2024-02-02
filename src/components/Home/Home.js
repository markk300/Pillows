import React from 'react'
import { Hero } from './Hero'
import { MidlePart } from './MidlePart'
import { ProductSection } from './ProductSection'

export const Home = () => {
  return (
    <>
    <Hero />
    <div className='pt-10 pb-10'>
    <MidlePart />
    </div>
    <ProductSection />
    </>
  )
}
