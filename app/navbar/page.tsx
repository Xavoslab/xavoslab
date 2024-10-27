"use client"

import { useState, useEffect } from "react";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const scrollNavbar = () => {
    if(window.scrollY >= 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar)
    return() => {
      window.addEventListener("scroll", scrollNavbar)
    }
  })
  return (  
      <div className={`fixed z-50  ${navbar ? "border-b border-accent dark:border-[#ffffff08] w-full py-1 bg-white dark:bg-[#ffffff08]" : "bg-[#08090a08] dark:bg-[#ffffff08] w-full md:w-[96%] lg:w-[80%] top-3 rounded-lg left-1/2 -translate-x-1/2" } dark:backdrop-blur-[20px]`}>
        <div className="flex justify-between items-center py-3 mx-auto px-4 sm:px-6 md:px-8 xl:pl-5 xl:pr-3 max-w-[68rem] ">
          <Link href="/">
            <Logo />
          </Link>
          <NavigationBar />
        </div>
      </div>
   
  );
}

export default Navbar;