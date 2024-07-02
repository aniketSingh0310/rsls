import { Mail, MapPin, PhoneCallIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-yellow-400 px-32 py-16 text-black relative">
      
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold">
          Connect With Us
        </h1>
        <h3 className="text-base">
          We&apos;re here to help your business thrive. Reach out to us today.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between mt-20 gap-[40px]">
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center p-3 bg-white backdrop-blur-md rounded-full">
            <Mail size={25} className="" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Email</h3>
            <h4 className="font-normal">india@realityshipping.com</h4>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center p-3 bg-white backdrop-blur-md rounded-full">
            <MapPin size={25} className="" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Our Address</h3>
            <h4 className="font-normal">Mumbai India</h4>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center p-3 bg-white backdrop-blur-md rounded-full">
            <PhoneCallIcon size={25} className="" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Contact Us</h3>
            <h4 className="font-normal">+91 8291573141</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;