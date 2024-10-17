"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PencilIcon, Settings, Settings2Icon } from "lucide-react";
import localFont from "next/font/local";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

//font
const myFont = localFont({
  src: "../font/pilatBold.ttf",
  display: "swap",
});
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
                "h-max text-[50px] md:leading-snug mt-10 text-white antialiased uppercase tracking-wide text-center",
                myFont.className
              )}
            >
              Worldwide Logistics & Professional Services
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
