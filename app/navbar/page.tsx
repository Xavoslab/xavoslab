"use client"

import { useState, useEffect } from "react";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import Link from "next/link";

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)
  // const scrollNavbar = () => {
  //   if(window.scrollY >= 1) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollNavbar)
  //   return() => {
  //     window.addEventListener("scroll", scrollNavbar)
  //   }
  // })
  return (  
      <div className={"fixed w-full md:w-[96%] lg:w-[80%] left-1/2 -translate-x-1/2 bg-[#08090a08] bg-opacity-50 z-50 backdrop-blur-[20px] top-3 rounded-lg " }>
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