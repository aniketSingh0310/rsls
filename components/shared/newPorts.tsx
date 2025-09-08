import React from 'react';
import { bangladesh, eastIndia, westIndia,others } from "@/data/ports";
const NewPorts = () => {
  return (
    <div className='w-[90%] md:max-w-7xl mx-auto space-y-16 py-10'>
        <div id='title' className='w-full flex flex-col justify-center items-center text-center'>
        <h4 className='text-[2.5em] font-bold'>Global Ports Network</h4>
        <div className='bg-blue-400 p-1 w-[100px]'></div>
      </div>
      <div id='EastIndia'>
       <h2 className='text-[2em] md:text-[3em] font-bold'>East India</h2>
       <div className='py-8 border-t border-b grid grid-cols-2 md:grid-cols-4 space-y-3'>
       {eastIndia.map((port: any, index: any) => (
            <div key={index}>
              <p className='text-[1.2rem] font-semibold'>{port.name}</p>
            </div>
          ))}
       </div>
      </div>
      <div id='WestIndia'>
       <h2 className='text-[2em] md:text-[3em] font-bold'>West India</h2>
       <div className='py-8 border-t border-b grid grid-cols-2 md:grid-cols-4 space-y-3'>
       {westIndia.map((port: any, index: any) => (
            <div key={index}>
              <p className='text-[1.2rem] font-semibold'>{port.name}</p>
            </div>
          ))}
       </div>
      </div>
      <div id='Bangladesh'>
       <h2 className='text-[2em] md:text-[3em] font-bold'>Bangladesh</h2>
       <div className='py-8 border-t border-b grid grid-cols-2 md:grid-cols-4 space-y-3'>
       {bangladesh.map((port: any, index: any) => (
            <div key={index}>
              <p className='text-[1.2rem] font-semibold'>{port.name}</p>
            </div>
          ))}
       </div>
      </div>
      <div id='Others'>
       <h2 className='text-[2em] md:text-[3em] font-bold'>International Ports</h2>
       <div className='py-8 border-t border-b grid grid-cols-2 md:grid-cols-4 space-y-3'>
       {others.map((port: any, index: any) => (
            <div key={index}>
              <p className='text-[1.2rem] font-semibold'>{port.name}</p>
            </div>
          ))}
       </div>
      </div>
    </div>
  );
}

export default NewPorts;
