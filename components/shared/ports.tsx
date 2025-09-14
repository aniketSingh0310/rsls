import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { bangladesh, eastIndia, westIndia } from "@/data/ports";

const Ports = () => {
  // Show only first 2 ports as preview
  const previewPorts = (ports: any[]) => ports.slice(0, 2);

  return (
    <div className="w-full relative py-12 bg-white">
      {/* India Image */}
      <Image
        src={"/inComponents/india.png"}
        width={300}
        height={550}
        className="absolute left-[-45px] top-[10rem] z-0 hidden md:block"
        alt="india"
      />

      {/* Title */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="w-[100px] h-[2px] bg-blue-200 rounded-md"></div>
        <h1 className={cn("text-[40px] text-black antialiased font-semibold")}>
          Port Coverage Preview
        </h1>
      </div>

      {/* Preview Cards */}
      <div className="relative md:max-w-7xl w-[90%] flex flex-col md:flex-row gap-6 mx-auto justify-center items-start z-10">
        
        {/* West India */}
        <div className="p-8 border-blue-200 border rounded-lg flex flex-col space-y-3 bg-[#F4F7F8] flex-1">
          <h1 className={cn("text-2xl font-bold tracking-wide text-center")}>West India</h1>
          {previewPorts(westIndia).map((port, index) => (
            <p key={index} className={cn("font-thin text-center")}>{port.name}</p>
          ))}
          <p className="text-center text-sm text-gray-500">and more...</p>
        </div>

        {/* East India */}
        <div className="p-8 border-blue-200 border rounded-lg flex flex-col space-y-3 bg-[#F4F7F8] flex-1">
          <h1 className={cn("text-2xl font-bold tracking-wide text-center")}>East India</h1>
          {previewPorts(eastIndia).map((port, index) => (
            <p key={index} className={cn("font-thin text-center")}>{port.name}</p>
          ))}
          <p className="text-center text-sm text-gray-500">and more...</p>
        </div>

        {/* Bangladesh */}
        <div className="p-8 border-blue-200 border rounded-lg flex flex-col space-y-3 bg-[#F4F7F8] flex-1">
          <h1 className={cn("text-2xl font-bold tracking-wide text-center")}>Bangladesh</h1>
          {previewPorts(bangladesh).map((port, index) => (
            <p key={index} className={cn("font-thin text-center")}>{port.name}</p>
          ))}
          <p className="text-center text-sm text-gray-500">and more...</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <Link href="/locations" passHref>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
            Explore All Locations
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ports;
