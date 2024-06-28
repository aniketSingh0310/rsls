"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Raleway } from "next/font/google";
import cnx from "classnames";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./logo";
import localFont from "next/font/local";
import { Download, Mail, Menu, Phone, X } from "lucide-react";

//font
const myFont = localFont({
  src: "../font/pilatLight.ttf",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const ScrollNavbar = () => {
  const router = useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setScrollPosition(window.scrollY);
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
    console.log("Hamburger clicked");
    console.log("Current isOpen state:", isOpen); // Log the current state
    setIsOpen(!isOpen); // Toggle the isOpen state based on previous state
    console.log("Updated isOpen state:", !isOpen);
  };

  const homFun = () => {
    setIsOpen(!isOpen);
    router.push("/");
  };
  const productsFun = () => {
    setIsOpen(!isOpen);
    router.push("/products");
  };
  const contactFun = () => {
    setIsOpen(!isOpen);
    router.push("/contact-us");
  };
  const aboutFun = () => {
    setIsOpen(!isOpen);
    router.push("/about");
  };
  return (
    <>
      {/* DEKSTOP VIEW */}
      <motion.nav
        className={`fixed top-0 w-full  transition-all duration-300 z-[100] hidden md:block ${
          scrollPosition > 0 ? "bg-gray-800" : "bg-transparent"
        } ease-in duration-150 transition-all`}
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
      >
        <div className={`w-full py-5  bg-transparent`}>
          <div className="flex flex-row px-16 justify-between items-center">
            <Logo />
            <div className="flex flex-col">
              <div className="flex justify-end gap-4 pb-2">
               <div className="flex gap-1 items-center"><Phone size={15}/><p className="text-sm">+971 58 553 4402</p></div>
               <div className="flex gap-1 items-center"><Mail size={15}/><p className="text-sm">info@metalinkauh.ae</p></div>
              
              </div>
              <div className="flex items-center md:justify-center md:space-x-10">
                <ul
                  className={cn(
                    "flex justify-center items-center gap-[50px] text-[16px] text-black/70 tracking-wide"
                  )}
                >
                  <Link href={"/"}>
                    {" "}
                    <li className="">Home</li>
                  </Link>
                  <Link href={"#sec3"}>
                    <li className="">Services</li>
                  </Link>
                  <Link href={"/about"}>
                    <li className="">About Us</li>
                  </Link>
                  <Link href={"/contact-us"}>
                    <li>Contact Us</li>
                  </Link>
                  <div
                    className="flex items-center gap-2 hover:brightness-110 hover:animate-pulse py-2 px-5 rounded-full bg-transparent  text-white text-sm cursor-pointer"
                    onClick={() => window.open("/brochure.pdf", "_blank")}
                  >
                    <Download size={17} /> Brochure
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE VIEW */}
      <motion.nav
        className="flex flex-col gap-0 fixed top-0 w-full  transition-all duration-300 z-[100] bg-black/40 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
      >
        <div
          className={cn(
            "md:hidden w-full shadow-md flex flex-row justify-between py-5 px-5 items-center"
          )}
        >
          <Logo />
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 hover:brightness-110 hover:animate-pulse py-2 px-5 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white font-semibold text-sm"
              onClick={() => window.open("/brochure.pdf", "_blank")}
            >
              <Download size={14} /> Brochure
            </button>{" "}
            {!isOpen ? (
              <Menu size={30} className="text-white" onClick={toggleNav} />
            ) : (
              <X size={30} className="text-white" onClick={toggleNav} />
            )}
          </div>
        </div>
        <div className="relative">
          {isOpen && (
            <motion.div
              className={cn(
                "h-max z-50 inset-x-0 md:hidden w-full bg-black/40 backdrop-blur-md shadow-lg py-3 px-3 transition-opacity duration-1000 opacity-100"
              )}
              initial={{ y: -20 }} // Start off-screen
              animate={{ y: isOpen ? 0 : -300 }}
              transition={{ duration: 0.5, type: "tween" }} // Adjust the duration here (in seconds)
            >
              <ul
                className={cn(
                  "flex flex-col space-y-5  text-white text-[18px] font-medium text-start px-7 pb-6 tracking-wide"
                )}
              >
                {" "}
                <li className="border-b-[1px] border-b-black/10 pb-1">Home</li>
                <li className="border-b-[1px] border-b-black/10 pb-1">
                  Products
                </li>
                <li className="border-b-[1px] border-b-black/10 pb-1">
                  About Us
                </li>
                <li className="border-b-[1px] border-b-black/10 pb-1">
                  Contact Us
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default ScrollNavbar;
