"use client"
import Head from "next/head";
import Hero from "@/components/hero";
import { useEffect } from "react";
import About from "@/components/shared/about";
import { Services } from "@/components/services";
import Partner from "@/components/partner";
import Ports from "@/components/shared/ports";
import Contact from "@/components/shared/contact";
import { NewServices } from "@/components/newServices";


export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <>
      <div className="flex flex-col">
        <Head>
          <title>Reality Shipping & Logistics Services</title>
          <meta
            name="description"
            content=""
          />
        </Head>

        <Hero />
        <About/>
        <NewServices/>
        {/* <Services/> */}
        <Partner/>
        <Ports/>
        <Contact/>
      </div>
    </>
  );
}
