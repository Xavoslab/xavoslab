"use client"

import Image from "next/image";
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "@/components/container";
import { Button } from "@/components/ui/button"
import { MdOutlineShoppingCart } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay";

import { IoPeople } from "react-icons/io5";
import { RiVerifiedBadgeFill, RiVideoFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";



const Keunggulan = () => {
  const sourceCards = [
    {
      title: "Pendaftaran Kursus",
      icon: <IoPeople />,
      count: "1.400.000",
    },
    {
      title: "Pengajar Ahli",
      icon: <RiVerifiedBadgeFill />,
      count: "256.000",
    },
    {
      title: "Video Online",
      icon: <RiVideoFill />,
      count: "201.000",
    },
    {
      title: "Kursus Beragam Bahasa",
      icon: <TbWorld />,
      count: "22.000",
    },
    
  ]

  return ( 
      <Container>
        <section className="py-10 md:py-10 lg:py-28 overflow-hidden">
          <div className="flex flex-col md:items-center justify-between md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2 text-center">
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Mengapa memilih kami?</h1>
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-normal">Ketahui alasan mengapa kami adalah pilihan terbaik untuk kebutuhan edukasi Anda</p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                  {sourceCards.map((_, idx) => (
                    <div className="" key={idx}>
                      <div className="min-h-[210px] relative border border-border rounded-xl" key={idx}>
                        <div className="text-[25px] m-5 text-primary bg-pastel p-4 py-3.5 w-fit rounded-lg">{_.icon}</div>
                        <div className="absolute bottom-0 p-5">
                          <h1 className="font-bold tracking-desc text-deskripsi">{_.title}</h1>
                          <p className="text-desc tracking-desc">{_.count}+</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
            
          </div>
        </section>
      </Container>
  );
}

export default Keunggulan;