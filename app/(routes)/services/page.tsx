import ServicesTab from "@/components/shared/servicesTab";
import React from "react";
import { Breadcrumb } from 'antd';
import Contact from "@/components/shared/contact";

const Services = () => {
  return (
    <div className="space-y-10">
      <div className="w-full h-[50vh] bg-yellow-400 flex justify-start items-center px-8 md:px-20">
        <div className="flex flex-col">
        <h2 className="text-4xl text-black font-bold">Services</h2>
        <Breadcrumb
    items={[
      {
        title: <a href="/">Home</a>,
      },
      {
        title: <a href="/services">Services</a>,
      },
      
    ]}
  />
        </div>
        
      </div>
      <div className="w-[90%] md:max-w-7xl mx-auto flex md:flex-row flex-col justify-center md:justify-between py-20 items-center space-y-4">
        <h3 className="text-4xl text-black font-bold md:border-r border-black/50 text-center md:text-start">
          Fast And Reliable Shipping & Logistics Services
        </h3>
        <p className="px-10 text-justify md:text-start">
          We offer a comprehensive array of specialized services for all types
          of vessels through our own offices in India, UAE, and Singapore.
          Additionally, our extensive network of trusted partners allows us to
          deliver services on a global scale.
        </p>
      </div>
      <ServicesTab />
      <Contact/>
    </div>
  );
};

export default Services;
