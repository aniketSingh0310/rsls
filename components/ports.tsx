import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { bangladesh, eastIndia, westIndia } from "@/data/ports";

//font
const myFont = localFont({
  src: "../font/pilatBold.ttf",
  display: "swap",
});
const myFont2 = localFont({
    src: "../font/pilatLight.ttf",
    display: "swap",
  });
  
const Ports = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <div className="w-[100px] h-[2px] bg-[#36afc8] flex justify-center text-transparent rounded-md"></div>
        <h1
          className={cn(
            "text-[40px] text-black uppercase antialiased",
            myFont.className
          )}
        >
          Port Coverage
        </h1>
      </div>
      <div className="md:max-w-7xl w-[80%] flex flex-row gap-5 mx-auto justify-evenly my-10">
        <div className="p-8 border-[#36afc8] border rounded-2xl flex flex-col space-y-3 bg-[#F4F7F8]">
          <h1 className={cn("text-2xl font-bold",myFont.className)}>West India</h1>
          {westIndia.map((port: any, index: any) => (
            <div key={index}>
              <p className={cn("font-thin text-center",myFont2.className)}>{port.name}</p>
            </div>
          ))}
        </div>
        <div className="p-8 border-[#36afc8] border rounded-2xl flex flex-col space-y-3 bg-[#F4F7F8]">
          <h1 className={cn("text-2xl font-bold",myFont.className)}>East India</h1>
          {eastIndia.map((port: any, index: any) => (
            <div key={index}>
              <p className={cn("font-thin text-center",myFont2.className)}>{port.name}</p>
            </div>
          ))}
        </div>
        <div className="p-8 border-[#36afc8] border rounded-2xl flex flex-col space-y-3 bg-[#F4F7F8]">
          <h1 className={cn("text-2xl font-bold",myFont.className)}>Bangladesh</h1>
          {bangladesh.map((port: any, index: any) => (
            <div key={index}>
              <p className={cn("font-thin text-center",myFont2.className)}>{port.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ports;
