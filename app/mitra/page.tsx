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
import Autoplay from "embla-carousel-autoplay"

const Mitra = () => {
  const sourceImages = [
    {
      name: "bsion",
      width: 90,
      height: 41,
      src: "/assets/mitra/bsion.png"
    },
    {
      name: "jetrau",
      width: 90,
      height: 41,
      src: "/assets/mitra/jetrau.png"
    },
    {
      name: "zenl",
      width: 90,
      height: 41,
      src: "/assets/mitra/zenl.png"
    },
    {
      name: "ecole",
      width: 90,
      height: 41,
      src: "/assets/mitra/ecole.png"
    },
    {
      name: "teraspisce",
      width: 90,
      height: 41,
      src: "/assets/mitra/teraspisce.png"
    },
    {
      name: "orsoe",
      width: 90,
      height: 41,
      src: "/assets/mitra/orsoe.png"
    },
  ]

  return ( 
      <Container>
        <section className="py-10 md:py-10 lg:py-16 overflow-hidden">
          <div className="flex flex-col md:items-center justify-between md:space-x-2  md:space-y-0">
            <div className="md:w-3/4 lg:w-full text-center">
              <p className="text-foreground text-base lg:text-deskripsi tracking-desc font-semibold">Telah dipercaya oleh start-up & perusahaan</p>
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-normal">Digunakan oleh +50 perusahaan dari berbagai industri</p>
            </div>
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 mt-20">
                {sourceImages.map((_, idx) => (
                  <div className="flex justify-center">
                    
                    <Image
                      src="/assets/logo.png"
                      width={120}
                      height={60}
                      alt="logo"
                      className="w-[120px] h-[60px]"
                    />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>
      </Container>
  );
}

export default Mitra;