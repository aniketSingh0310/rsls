import React from 'react'
import { FaChartLine, FaReact, FaRegHandshake } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';



const Partner = () => {
  return (
    <div className='w-[90%] md:max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 py-20'>
      <h3 className=' text-base text-center'>Your Partner in Success</h3>
      <h2 className='text-[2.5em] font-bold text-center'>Why Choose Reality Shipping & Logistics</h2>
      <p className='text-gray-600 text-base text-center'>Our comprehensive Shipping & Logistics services are designed to address all aspects of your business needs.</p>
      <div className='max-w-6xl grid grid-cols-1 md:grid-cols-2  justify-center gap-[4rem] mt-14'>
       {/* 1 */}
        <div className='flex gap-5 items-start'>
           <div className='p-2 bg-yellow-300 flex justify-center items-center rounded-xl'><FaChartLine size={25} className='text-white'/></div>
           <div className='flex flex-col gap-2'>
            <p className='text-lg text-black font-semibold'>Commitment to Efficiency</p>
            <p className='text-base text-black/60'>We aim for operational excellence by streamlining processes to provide efficient and dependable logistics solutions.</p>
           </div>
        </div>
        {/* 2 */}
        <div className='flex gap-5 items-start'>
           <div className='p-2 bg-yellow-300 flex justify-center items-center rounded-xl'><FaRegHandshake size={25} className='text-white'/></div>
           <div className='flex flex-col gap-2'>
            <p className='text-lg text-black font-semibold'>Industry Expertise and Connections</p>
            <p className='text-base text-black/60'>With extensive experience in the ports business, we leverage our strong industry connections to deliver expert insights and superior services.</p>
           </div>
        </div>
        {/* 3 */}
        <div className='flex gap-5 items-start'>
           <div className='p-2 bg-yellow-300 flex justify-center items-center rounded-xl'><FaPeopleGroup size={25} className='text-white'/></div>
           <div className='flex flex-col gap-2'>
            <p className='text-lg text-black font-semibold'>People-Oriented</p>
            <p className='text-base text-black/60'>We place a high priority on the well-being and satisfaction of our team members, clients, and partners. Your success is a reflection of our success.</p>
           </div>
        </div>
        {/* 4 */}
        <div className='flex gap-5 items-start'>
           <div className='p-2 bg-yellow-300 flex justify-center items-center rounded-xl'><FaReact size={25} className='text-white'/></div>
           <div className='flex flex-col gap-2'>
            <p className='text-lg text-black font-semibold'>Transparency & Loyalty</p>
            <p className='text-base text-black/60'>We uphold open communication and honesty, building trust and fostering long-lasting relationships with all stakeholders.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Partner;
