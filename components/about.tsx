import React from 'react'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'


//font
const myFont = localFont({
  src: '../font/pilatBold.ttf',
  display: 'swap',
})
const About = () => {
  return (
    <div className='w-full flex justify-center items-center py-16 my-24 gap-6 bg-[#e8f3f5] flex-col'>
        <div className='w-[100px] h-[2px] bg-[#36afc8] flex justify-center text-transparent'>,</div>
        <h1 className={cn('text-[40px] text-black uppercase antialiased',myFont.className)}>About Us</h1>
      <p className='w-[80%] md:max-w-6xl text-[18px] text-black/70 text-center tracking-wide leading-relaxed'>At <span className='text-black font-bold'>Reality Shipping And Logistics Services</span>, we provide comprehensive shipping and logistics solutions tailored to meet your unique needs. With a focus on Ship Agency Services, Logistics & Clearance, Marine Services & Offshore Supply, Vessel Inspection, Surveys & Consultancy, and Marine Products Distribution & Sales, we are your trusted partner for all maritime requirements.</p>
    </div>
  )
}

export default About
