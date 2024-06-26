"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {Raleway } from "next/font/google";
import cnx from "classnames";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./logo";
import localFont from 'next/font/local'


//font
const myFont = localFont({
  src: '../font/pilatDemi.ttf',
  display: 'swap',
})
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});


const ScrollNavbar = () => {
  const router= useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(!isScrolledDown || currentScrollPos < 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  // Mobile Navbar style
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const homFun=()=>{
    setIsOpen(!isOpen);
    router.push("/")

  }
  const aboutFun=()=>{
    setIsOpen(!isOpen);
    router.push("/about")

  }
  const contactFun=()=>{
    setIsOpen(!isOpen);
    router.push("/contact-us")

  }
  return (
    <>
    <motion.nav
      className={`fixed top-0 w-full  transition-all duration-300 z-[100] hidden md:block`}
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
    >
      <div className={`w-full py-6 bg-transparent backdrop-blur-sm `}>
        <div className="flex flex-row px-16 justify-between items-center">
         <Logo/>
          <div className="flex">
            {" "}
            <div className="flex items-center md:justify-center md:space-x-10">
              <ul className={cnx("flex space-x-12 font-medium")}>
                <Link href={"/"}> 
                  {" "}
                  <button>
                    <li>Home</li>
                  </button>
                </Link>
                <Link href={"/about"}>
                  <button>
                    <li>About</li>
                  </button>
                </Link>
                <Link href={"/contact-us"}>
                  <button>
                    <li>Contact Us</li>
                  </button>
                </Link>
                
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
<motion.nav className="flex flex-col gap-0 fixed top-0 w-full  transition-all duration-300 z-[100]"
initial={{ y: -100 }}
animate={{ y: visible ? 0 : -100 }}>
    <div className={cn("md:hidden w-full bg-black/10 backdrop-blur-md shadow-md flex flex-row justify-between py-7 px-3 items-center")}>
    <Logo/>
    <div>
    <RxHamburgerMenu onClick={toggleNav} className="w-[30px] h-[30px] text-white"/>
    
    </div>
    </div>
    <div className="relative">
    {isOpen && (
        <motion.div className={cn("h-max z-50 inset-x-0 md:hidden w-full bg-black/10 backdrop-blur-md shadow-md py-3 px-3 transition-opacity duration-1000 opacity-100 rounded-b-3xl")}
        initial={{ y: 0 }}
      animate={{ y: isOpen ? 0 : -300 }}>
          <ul className={cnx("flex flex-col space-y-5 font-bold justify-center items-center text-white",myFont.className)}>
                
                  {" "}
                  <button onClick={homFun}> 
                    <li className="">Home</li>
                  </button>
                
                
                  <button onClick={aboutFun}>
                    <li className="">About</li>
                  </button>
                
                
                  <button onClick={contactFun}>
                    <li className="">Contact Us</li>
                  </button>
                
                
              </ul>
        </motion.div>
      )}
      </div>
      </motion.nav>
    </>
  );
};

export default ScrollNavbar;