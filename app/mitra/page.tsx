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
      name: "foto bersama osis",
      width: 516,
      height: 341,
      src: "/assets/osis.png"
    },
    {
      name: "logo osis",
      width: 100,
      height: 100,
      src: "/assets/logo.png"
    },
  ]

  return ( 
      <Container>
        <section className="py-10 md:py-10 lg:py-10 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2  md:space-y-0">
            <div className="md:w-3/4 lg:w-1/2 space-y-3">
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-semibold">Telah dipercaya oleh start-Up & perusahaan</p>
              <Button variant="default">Gabung</Button>
              <Button variant="outline">Lebih Lanjut</Button>

            </div>
            
          </div>
        </section>
      </Container>
  );
}

export default Mitra;