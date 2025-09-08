"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PencilIcon, Settings, Settings2Icon } from "lucide-react";
import localFont from "next/font/local";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

// Font
const myFont = localFont({
  src: '../font/pilatBold.ttf',
  display: 'swap',
});

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen hero">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-blue-300 to-yellow-200"></div>
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'url("/BGs/lines.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        {/* Content */}
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
          className="relative z-10"
        >
          <div className="flex flex-col hero-content text-center w-full">
            {/* <Settings className="h-[100px] w-[100px] animate-bounce"/> */}
            <div
              id="sec1"
              className={cn(
                "h-max text-[70px] font-bold md:leading-snug mt-10 antialiased tracking-tight text-center text-black/80 "
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
