"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const content = [
  {
    title: "Ship Agency Services",
    description:
      "Our experienced team ensures smooth operations for vessels, handling all aspects of port calls, crew changes, and documentation.",
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
    title: "Logistics & Clearance",
    description:
      "We offer efficient logistics solutions, including customs clearance, warehousing, and transportation, to streamline your supply chain.",
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
    title: "Marine Services & Offshore Supply",
    description:
      "From offshore supply vessels to marine logistics support, we provide reliable services to the offshore industry.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
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
    title: "Vessel Inspection, Surveys & Consultancy",
    description:
      "Our certified inspectors conduct thorough inspections to ensure compliance with industry standards and regulations.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
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
    title: "Marine Products Distribution & Sales",
    description:
      "We distribute a wide range of marine products, including equipment, spare parts, and consumables, catering to the needs of shipowners and operators.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
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
    title: "Broking & Chartering",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
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
];
//font
const myFont = localFont({
  src: "../font/pilatBold.ttf",
  display: "swap",
});
export function Services() {
  return (
    <div className="w-full flex flex-col  py-16 gap-6">
      
      <StickyScroll content={content} />
    </div>
  );
}
