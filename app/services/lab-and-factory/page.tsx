"use client";
import { cn } from "@/lib/utils";
import { Kanit, Montserrat, Prompt } from "next/font/google";
import Image from "next/image";
import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import { motion, useInView } from "framer-motion";

//Font
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const prompt = Kanit({ subsets: ["latin"], weight: ["400", "600"] });

const PetroChem = () => {
  const image = "/petrochem.jpg";
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
      <Parallax bgImage={image} strength={-200}>
        <div style={{ height: 700 }}>
          <div className="absolute left-[40%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1">
            <p className={cn("text-yellow-400 text-3xl", mont.className)}>
              Services
            </p>
            <p
              className={cn(
                "text-white  font-bold md:text-[45px] text-[30px] antialiased tracking-[0.05em] leading-[45px] mt-2",
                mont.className
              )}
            >
              Lab And Factory Chemical Trading{" "}
            </p>
          </div>
        </div>
      </Parallax>
      <div
        className={cn(
          "flex flex-col w-[90%] md:flex-row max-w-4xl gap-20 mx-auto py-10 md:justify-between ",
          mont.className
        )}
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-black/80 text-[37px] whitespace-nowrap">
            Lab And Factory <br />
            Chemical Trading
          </h2>
          <div className="w-[30%] bg-[#237FD7] h-3"></div>
          <p className="text-xl font-medium tracking-wide">
            Individual project needs and client-specific preferences define our
            project-tailored engineering strategy. We build project specific
            engineering teams that can address all project technical needs.​
          </p>
        </div>
        <div className="text-justify md:mt-[100px] tracking-wide font-light">
          Ensure maritime safety and compliance with our comprehensive marine
          vessel, ship, and boat inspection services. Our expert team
          meticulously examines vessels of all sizes, rigorously assessing
          structural integrity, equipment functionality, and adherence to
          regulations. With meticulous attention to detail, we provide thorough
          reports to support smooth operations and regulatory compliance,
          safeguarding both your assets and the marine environment.
        </div>
      </div>
    </div>
  );
};

export default PetroChem;
