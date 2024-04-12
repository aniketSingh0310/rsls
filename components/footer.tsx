import React from 'react'
import Logo from './logo';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';


//Font
const mont= Montserrat({ subsets: ["latin"],weight:"400" });
const Footer = () => {
  return (
    <div className={cn('flex flex-col py-5 px-4 sm:px-6 lg:py-8 lg:px-10 border-t-[1px] border-black/20',mont.className)}>
<div className='flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center'>
<Logo/>
<div>
    <ul className='flex gap-4 text-black/50'>
        <li className=' hover:text-[#237FD7] hover:underline  hover:underline-offset-4 cursor-pointer transform ease-linear duration-300'>Terms & Condition</li>
        <li className=' hover:text-[#237FD7] hover:underline hover:underline-offset-4 cursor-pointer transform ease-linear duration-300'>Privacy Policy</li>
        <li className=' hover:text-[#237FD7] hover:underline hover:underline-offset-4 cursor-pointer transform ease-linear duration-300'>Connect</li>
    </ul>
</div>
</div>
<p className='text-center text-black/40 text-[10px] md:mt-o mt-3'>COPYRIGHT © METALINK GENERAL TRADING LLC UAE 2024</p>
    </div>
  )
}

export default Footer;