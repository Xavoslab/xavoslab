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

const Home = () => {
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
    <div className="bg-gradient-to-tr from-mediumgreen to-pastel">
      <Container>
        <section className="py-10 md:py-10 lg:py-10 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2  md:space-y-0">
            <div className="md:w-3/4 lg:w-1/2 space-y-3">
              <h1 className="font-bold text-4xl lg:text-5xl tracking-title">Jelajahi Kursus Terbaik Kami & Kuasai Bidangmu</h1>
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-medium">Upgrade skill & kompetensi kamu  dalam mendapatkan pekerjaan, menaikkan income, dan memulai usaha secara profesional dengan materi pembelajaran berkualitas dengan harga yang terjangkau.</p>
              <Button variant="default">Gabung</Button>
              <Button variant="outline">Lebih Lanjut</Button>

            </div>
            <Carousel className="w-full sm:max-w-xs md:max-w-sm lg:max-w-lg  "
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {sourceImages.map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex aspect-square items-center justify-center md:p-6">
                      <Image
                        src={_.src}
                        width={_.width}
                        height={_.height}
                        alt={_.name}
                        className="rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}

              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Home;