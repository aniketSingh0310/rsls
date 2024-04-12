"use client"
import Head from "next/head";
import Hero from "@/components/hero";
import { useEffect } from "react";
import About from "@/components/about";
import { Services } from "@/components/services";
import Partner from "@/components/partner";


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
          <title>Mast Marine Consultancy</title>
          <meta
            name="description"
            content="MGB serves as your MAST Consultancy has 35 years of hands-on experience in every facet of marine construction and Operations, we have the skills, knowledge, equipment infrastructure to deliver full- service offshore solutions.passport to unforgettable travel experiences. We make it effortless to discover, plan, and book cherished experiences,
          encompassing sightseeing, tours, food and beverages, adventure activities, shopping, and nightlife."
          />
        </Head>

        <Hero />
        <About/>
        {/* <ServiceNew/> */}
        <Services/>
        <Partner/>
      </div>
    </>
  );
}
