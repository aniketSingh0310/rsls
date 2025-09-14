"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import localFont from "next/font/local";

// Font
const myFont = localFont({
  src: '../font/pilatBold.ttf',
  display: 'swap',
});
const Hero = () => {
  return (
    <>
      <div
        className="hero h-[70vh] md:min-h-screen"
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
          <source src="/rslsVid.mp4" type="video/mp4" />
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
          <div className="flex flex-col hero-content text-center w-full">
            <div
              id="sec1"
              className={cn(
                "h-max text-[70px] font-bold md:leading-snug mt-10 antialiased tracking-tight text-center text-white "
              )}
            >
              A Modern Shipping Agency <br/> & Logistics Company
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;