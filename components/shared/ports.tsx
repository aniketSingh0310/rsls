import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { bangladesh, eastIndia, westIndia } from "@/data/ports";
import Image from "next/image";

const Ports = () => {
  return (
    <div className="w-full relative">
      <Image src={"/inComponents/india.png"} width={300} height={550} className="absolute left-[-45px] top-[10rem] z-0" alt="india"/>
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <div className="w-[100px] h-[2px] bg-yellow-400 flex justify-center text-transparent rounded-md"></div>
        <h1 className={cn("text-[40px] text-black antialiased font-semibold")}>
          Port Coverage
        </h1>
      </div>
      <div className="relative md:max-w-7xl w-[80%] flex flex-col md:flex-row gap-5 mx-auto justify-evenly my-10 z-10">
        <div className="p-16 border-yellow-400 border  flex flex-col space-y-3 bg-[#F4F7F8]">
          <h1 className={cn("text-2xl font-bold tracking-wide")}>West India</h1>
          {westIndia.map((port: any, index: any) => (
            <div key={index}>
              <p className={cn("font-thin text-center")}>{port.name}</p>
            </div>
          ))}
        </div>
        <div className="p-16 border-yellow-400 border  flex flex-col space-y-3 bg-[#F4F7F8]">
          <h1 className={cn("text-2xl font-bold")}>East India</h1>
          {eastIndia.map((port: any, index: any) => (
            <div key={index}>
              <p className={cn("font-thin text-center")}>{port.name}</p>
            </div>
          ))}
        </div>
        <div className="p-14 border-yellow-400 border  flex flex-col space-y-3 bg-[#F4F7F8]">
          <h1 className={cn("text-2xl font-bold")}>Bangladesh</h1>
          {bangladesh.map((port: any, index: any) => (
            <div key={index}>
              <p className={cn("font-thin text-center")}>{port.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ports;
