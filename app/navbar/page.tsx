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
      <div className={"fixed w- lg:w-[68rem] top-0 left-1/2 -translate-x-1/2  bg-[#08090a08] bg-opacity-50 z-50 backdrop-blur-[20px] " }>
        <div className="flex justify-between items-center py-4 mx-auto px-4 sm:px-6 md:px-8 xl:px-0 max-w-[68rem] ">
          <Link href="/">
            <Logo />
          </Link>
          <NavigationBar />
        </div>
      </div>
   
  );
}

export default Navbar;