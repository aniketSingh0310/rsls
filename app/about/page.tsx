"use client";
import { cn } from "@/lib/utils";
import { Kanit, Montserrat, Prompt } from "next/font/google";
import Image from "next/image";
import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import { motion,useInView } from "framer-motion";


//Font
const mont = Montserrat({ subsets: ["latin"], weight: ["300","400","600","700"] });
const prompt = Kanit({ subsets: ["latin"], weight: ["400", "600"] });

const About = () => {
  const image = "/bg2.jpg";
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
          <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1">
            <p className={cn("text-white text-3xl", mont.className)}>About</p>
            <p
              className={cn(
                "text-[#5ba7f9] font-extrabold md:text-[60px] text-[30px] antialiased tracking-[0.08em]",
                prompt.className
              )}
            >
              METALINK{" "}
            </p>
            {/* <Image src={"/metalink.svg"} width={500} height={60} alt='logo'/> */}
          </div>
        </div>
      </Parallax>
      <div
        className={cn(
          "md:flex flex-row max-w-4xl gap-20 mx-auto py-10 justify-between hidden",
          mont.className
        )}
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-black/80 text-[37px]">
            International Trade
            <br />
            Partner
          </h2>
          <div className="w-[30%] bg-[#237FD7] h-3"></div>
          <p className="text-xl font-medium tracking-wide">
            What sets us apart, beyond our wealth of knowledge and experience,
            is the ethos and determination of our team. We&apos;re driven to
            provide innovative solutions to our clients and partners worldwide,
            ensuring their needs are met with unwavering dedication and
            creativity.
          </p>
        </div>
        <div className="text-justify mt-[100px] tracking-wide font-light">
          Welcome to <span className="font-bold text-black">Metalink</span>, where expertise meets reliability in
          maritime solutions and chemical trading. With a steadfast focus on
          shipbuilding, cutting-edge technology management, and meticulous
          vessel inspection, we ensure the safety and efficiency of marine
          operations. Our seamless flag change and crew endorsement services
          streamline administrative processes, while our proficiency in
          petrochemical material handling and laboratory-grade chemical trading
          upholds the highest standards of quality and compliance. Trust us for
          comprehensive solutions tailored to your needs, delivered with
          integrity and professionalism.
        </div>
        
      </div>

      <div ref={ref} className={cn("md:max-w-5xl w-[80%] grid md:grid-cols-5 grid-cols-2 gap-3 mx-auto py-[100px]",mont.className)}>
       
       <div 
       style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
       className="flex flex-col gap-2 justify-center items-center">
        <Image src={"/ship.svg"} width={70} height={90} alt="lab" className="w-[55px] h-[55px]"/>
        <p className="border-gray-400 border-t pt-3 text-sm text-black/80 font-semibold text-center h-[73px]">New Ship Building and Tech Management</p>
       </div>
       <div 
       style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
      }}
       className="flex flex-col gap-2 justify-center items-center">
        <Image src={"/worker.svg"} width={70} height={90} alt="lab" className="w-[55px] h-[55px]"/>
        <p className="border-gray-400 border-t pt-3 text-sm text-black/80 font-semibold text-center h-[73px]">Flag Change And Crew Endorsement</p>
       </div>
       <div
       style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
      }}
       className="flex flex-col gap-2 justify-center items-center">
        <Image src={"/inspection.svg"} width={70} height={90} alt="lab" className="w-[55px] h-[55px]"/>
        <p className="border-gray-400 border-t pt-3 text-sm text-black/80 font-semibold text-center h-[73px]">Marine Vessel, Ship And Boat Inspection</p>
       </div>
       <div 
       style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
      }}
       className="flex flex-col gap-2 justify-center items-center">
        <Image src={"/lab.svg"} width={70} height={90} alt="lab" className="w-[55px] h-[55px]" />
        <p className="border-gray-400 border-t pt-3 text-sm text-black/80 font-semibold text-center h-[73px]">Lab And Factory Chemical Trading</p>
       </div>
       <div 
       style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
      }}
       className="flex flex-col gap-2 justify-center items-center">
        <Image src={"/oil.svg"} width={30} height={50} alt="lab" className="w-[50px] h-[50px]" />
        <p className="border-gray-400 border-t pt-2 text-sm text-black/80 font-semibold text-center h-[73px]">Petrochemical Material Handling</p>
       </div>
      </div>
    </div>
  );
};

export default About;
