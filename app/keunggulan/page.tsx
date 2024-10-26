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

const Keunggulan = () => {
  const sourceCards = [
    {
      title: "Pendaftaran Kursus",
      icon: <IoPeople />,
      count: 1400000,
    },
    {
      title: "Pendaftaran Kursus",
      icon: <IoPeople />,
      count: 1400000,
    },
    
  ]

  return ( 
      <Container>
        <section className="py-10 md:py-10 lg:py-16 overflow-hidden">
          <div className="flex flex-col md:items-center justify-between md:space-x-2  md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2 text-center">
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Mengapa memilih kami?</h1>
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-normal">Ketahui alasan mengapa kami adalah pilihan terbaik untuk kebutuhan edukasi Anda</p>
            </div>
            <div className="test">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 mt-20">
                {sourceCards.map((_, idx) => (
                  <div className="flex justify-center">
                    <IoPeople className="text-foreground" />
                    {/* <Image
                      src="/assets/logo.png"
                      width={120}
                      height={60}
                      alt="logo"
                      className="w-[120px] h-[60px]"
                    /> */}
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