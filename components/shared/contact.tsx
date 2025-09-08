import { Mail, MapPin, PhoneCallIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-200 p-20 text-black flex flex-col md:flex-row justify-around items-center">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-5xl font-semibold">Connect With Us</h1>
        <h3 className="text-base max-w-md">
          We&apos;re here to help your business thrive. Reach out to us today.
        </h3>
      </div>
      <div className="flex flex-col gap-10 mt-10 md:mt-0">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center p-3 bg-white backdrop-blur-md rounded-full">
            <Mail size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Email</h3>
            <h4 className="font-normal">info@realityshipping.com</h4>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center p-3 bg-white backdrop-blur-md rounded-full">
            <MapPin size={25} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Our Address</h3>
            <h4 className="font-normal">Mumbai, India</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
