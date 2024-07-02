"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import '@/Embla/css/base.css'
// import '../css/sandbox.css'
 import '@/Embla/css/embla.css'
import EmblaCarousel from '@/Embla/EmblaCarousel'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



const Carousel = () => {
  return (
    <div className='bg-red-200'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}
export default Carousel
