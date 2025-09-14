"use client"
import PortsCoverageDisplay from '@/components/shared/portsCoverage';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { Montserrat, Prompt } from 'next/font/google';
import Head from 'next/head';
import React, { useRef } from 'react'
import { Parallax } from "react-parallax";


//Font
const mont = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });
const prompt = Prompt({ subsets: ["latin"], weight: ["400", "600"] });


const Locations = () => {
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
        <div style={{ height: 400 }}>
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
            
          </div>
        </div>
      </Parallax>
        <PortsCoverageDisplay/>
      </div>

  )
}

export default Locations;