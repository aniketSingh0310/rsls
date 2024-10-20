import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo from "./logo";

//Font
const mont = Montserrat({ subsets: ["latin"], weight: "400" });
const Footer = () => {
  return (
    <div
      className={cn(
        "bg-gray-700 text-white flex flex-col py-5 px-4 sm:px-6 lg:py-8 lg:px-10 border-t-[1px] border-black/20",
        mont.className
      )}
    >
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center">
        <Logo />
        <div>
          <ul className="flex gap-4 md:text-base text-sm">
            <li className=" hover:text-yellow-400 hover:underline  hover:underline-offset-4 cursor-pointer transform ease-linear duration-300">
              Terms & Condition
            </li>
            <li className=" hover:text-yellow-400 hover:underline hover:underline-offset-4 cursor-pointer transform ease-linear duration-300">
              Privacy Policy
            </li>
            <li className=" hover:text-yellow-400 hover:underline hover:underline-offset-4 cursor-pointer transform ease-linear duration-300">
              Connect
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center  text-[10px] md:mt-o mt-3">
        COPYRIGHT © REALITY SHIPPING LOGISTICS 2024
      </p>
    </div>
  );
};

export default Footer;
