import { cn } from "@/lib/utils";
import React from "react";
import localFont from "next/font/local";

//font
const myFont = localFont({
  src: "../font/pilatBold.ttf",
  display: "swap",
});
const Partner = () => {
  return (
    <div className="w-full flex flex-col gap-6  my-24">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <div className="w-[100px] h-[3px] bg-[#36afc8] flex justify-center text-transparent rounded-md">
          ,
        </div>
        <h1
          className={cn(
            "text-[40px] text-black uppercase antialiased",
            myFont.className
          )}
        >
          WHY CHOOSE US
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 max-w-5xl">
         <div className="col-"></div>
      </div>
    </div>
  );
};

export default Partner;
