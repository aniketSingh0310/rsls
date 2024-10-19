"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Numbers = () => {
  const [startCount, setStartCount] = useState(false);

  const handleViewportEnter = () => {
    setStartCount(true);
  };

  const handleViewportLeave = () => {
    setStartCount(false);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-[5rem] space-y-10">
       <div id='title' className='w-full flex flex-col justify-center items-center text-center'>
        <h4 className='text-[2.5em] font-bold'>Results Speak For Themselves</h4>
        <div className='bg-yellow-400 p-1 w-[100px]'></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        onViewportEnter={handleViewportEnter}
        onViewportLeave={handleViewportLeave}
        className="md:max-w-7xl w-[90%] grid md:grid-cols-3 grid-cols-2 gap-5 text-center"
      >
        <div className="flex flex-col gap-1 justify-center items-center">
          <CountUp
            start={0}
            end={startCount ? 3 : 0}
            prefix=""
            suffix=" Hrs"
            duration={4}
            className="text-[40px] md:text-[3rem] font-extrabold text-yellow-500"
          />
          <h4 className="text-[16px] ">
            Average Inquiry Response Time
          </h4>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <CountUp
            start={0}
            end={startCount ? 27 : 0}
            suffix=" Days"
            duration={4}
            className="text-[40px] md:text-[3rem] font-extrabold text-yellow-500"
          />
          <h4 className="text-[16px]">
            Average Time between Vessel Departure and FDA
          </h4>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <CountUp
            start={0}
            end={startCount ? 4 : 0}
            duration={4}
            suffix=" %"
            className="text-[40px] md:text-[3rem] font-extrabold text-yellow-400"
          />
          <h4 className="text-[16px]">
            Discrepancy between PDA and FDA amount
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default Numbers;
