"use client"
import React from 'react';
import Image from 'next/image'
interface LogoProps {
  variant?: "primary" | null;
}
const Logo: React.FC<LogoProps> = ({ variant }) => {
  return ( 
    <div className='flex items-center gap-1.5'>
      <Image
        src="/assets/logo.png"
        width={210}
        height={200}
        alt="logo"
        className="w-[28px] h-[22px]"
      />
      <div className='flex flex-col mt-1.5'>
        <span className={`text-[22px] tracking-title font-extrabold ${variant === "primary" ? "text-white" : "text-foreground"}`}>Xavoslab</span>
      </div>
    </div>
  );
}

export default Logo;