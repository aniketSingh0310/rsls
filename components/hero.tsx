"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import localFont from 'next/font/local'


//font
const myFont = localFont({
  src: '../font/pilatBold.ttf',
  display: 'swap',
})
const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        // style={{ backgroundImage: 'url("/ship.jpg")' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          {/* Provide the source of your video */}
          <source src="https://video.wixstatic.com/video/11062b_0222b74fadf544389c01621af73cfebd/1080p/mp4/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay "></div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content text-center w-full">
            
              <div
                id="sec1"
                className={cn(
                  "h-max text-[50px] md:leading-snug mt-10 text-white antialiased uppercase tracking-wide text-start",myFont.className)}
              >
                Navigating The Seas Of Global Trade<br/> With Precision And Prudence
              </div>
              
            
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
