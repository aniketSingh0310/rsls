"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/bg2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/bg1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/lab.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-[400px] w-[500px]  flex items-center justify-center text-white">
        <Image
          src="/bg1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
//font
const myFont = localFont({
  src: "../font/pilatBold.ttf",
  display: "swap",
});
export function Services() {
  return (
    <div className="w-full flex flex-col  py-16 gap-6">
      <div className="w-full flex flex-col justify-center items-center gap-6">
      <div className="w-[100px] h-[2px] bg-[#36afc8] flex justify-center text-transparent">
        ,
      </div>

      <h1
        className={cn(
          "text-[20px] md:text-[40px] text-black uppercase antialiased",
          myFont.className
        )}
      >
        Our Experties
      </h1>
      </div>
      
      <StickyScroll content={content} />
    </div>
  );
}
