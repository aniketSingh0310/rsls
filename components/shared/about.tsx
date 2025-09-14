import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    
    <>
      <div className="w-full flex flex-col-reverse md:flex-row mx-auto justify-between py-10 md:py-32 px-6 md:px-20 gap-20">
        <div className="flex flex-col border-t md:border-t-0 md:border-r border-black/50">
          <div className="border-b border-black/50 space-y-4 p-10">
            <h1 className="text-4xl font-bold text-black">
              Fast And Reliable Shipping & Logistics Services
            </h1>
            <p>
              we provide comprehensive shipping and logistics solutions tailored
              to meet your unique needs.
            </p>
          </div>
          <Link href={"/services"} className="flex flex-row gap-2 p-10">
            <button
              title="Add New"
              className="group cursor-pointer outline-none hover:rotate-90 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className=" fill-blue-500 group-hover group-active:stroke-zinc-200 group-active:fill-white group-active:duration-0 duration-300"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke-width="1"
                ></path>
                <path d="M8 12H16" stroke-width="1" className="stroke-white"></path>
                <path d="M12 16V8" stroke-width="1" className="stroke-white"></path>
              </svg>
            </button>
            <p>View more about<br/>our services</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Image
            src={"/inComponents/port.jpg"}
            width={800}
            height={500}
            alt="port"
          />
        </div>
      </div>
    </>
  );
};

export default About;
