"use client"
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { Montserrat, Prompt } from 'next/font/google';
import Head from 'next/head';
import React, { useRef } from 'react'
import { Parallax } from "react-parallax";


//Font
const mont = Montserrat({ subsets: ["latin"], weight: ["300","400","600","700"] });
const prompt = Prompt({ subsets: ["latin"], weight: ["400", "600"] });


const ContactUs = () => {
    const image = "/bg1.jpg";
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
        <Head>
        <title>Contact Us</title>
        {/* Include any necessary meta tags */}
      </Head>
      <Parallax bgImage={image} strength={-200} className=''>
        <div style={{ height: 700 }}>
          <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1">
            <p className={cn("text-white text-3xl", mont.className)}>Contact</p>
            <p
              className={cn(
                "text-white font-extrabold md:text-[60px] text-[30px] tracking-[0.03em]",
                prompt.className
              )}
            >
              Contact Us
            </p>
            {/* <Image src={"/metalink.svg"} width={500} height={60} alt='logo'/> */}
          </div>
        </div>
      </Parallax>

      <div className={cn('md:max-w-3xl w-[80%] gap-7 flex md:flex-row flex-col justify-between mx-auto items-center py-10',mont.className)}>
  <h1 className='text-black/80 text-[40px] whitespace-nowrap font-semibold'>Contact Form</h1>
  <p className='text-black/70 text-sm  md:w-[400px] md:mt-[200px]'>Please feel free to reach out to us if you&apos;re interested in learning more about our endeavors or have any other questions.</p>
      </div>
      {/* Insert your Typeform embed code here */}
      <iframe title="Contact Form" src="https://9k71pyog3q8.typeform.com/to/Ewnaxz7C"  width="100%" height="500px"></iframe>
    </div>
    
  )
}

export default ContactUs;