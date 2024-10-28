"use client"
import Image from "next/image";
import Container from "@/components/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { RiVerifiedBadgeFill } from "react-icons/ri";

import Autoplay from "embla-carousel-autoplay"
 
import mentorList from "../../data/mentor.json"

interface mentorData {
  id?: number;
  name?: string;
  role?: string;
  testi?: string;
  profile?: string;
  perusahaan?: string;
}

const mentor_data = mentorList as mentorData[];

const Mentor = () => {
  return ( 
      <Container>
        <section id="mentor"  className="py-10 md:py-10 lg:py-16 overflow-hidden">
          <div className="flex flex-col md:items-center justify-center md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2 text-center">
              <h5 className="font-bold tracking-[0.2em] text-primary">MENTOR</h5>
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Belajar dari ahlinya</h1>
              <p className="text-desc text-base tracking-desc font-normal">Xavoslab diajar oleh para ahli industri yang bersemangat untuk berbagi perjalanan profesional dengan Anda</p>
            </div>
            <div className="py-8 w-full">
              <Carousel className="w-full z-0 hover:cursor-pointer"  
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}>
                <CarouselContent className="pl-4 pr-3">
                  {mentor_data.map((_, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                      <div className="px-5 py-7 border border-border bg-card rounded-xl h-full">
                        
                        <div className="flex flex-col gap-4 justify-center w-full items-center">
                          <div className="">
                            <Image
                              src="/assets/osiska.png"
                              width={50}
                              height={50}
                              alt="laptop"
                              className="w-[50px] h-[50px] object-cover rounded-full"
                            />
                          </div>
                          <div className="w-full flex flex-col justify-center space-y-1">
                            <div className="flex space-x-1 justify-center items-center">
                                <p className="font-bold tracking-desc leading-tight">{_.name}</p>
                                <RiVerifiedBadgeFill className="text-primary" />
                            </div>
                            <p className="text-desc text-center text-sm tracking-desc">{_.role}</p>
                            <p className="text-secondary-foreground text-center text-xs tracking-desc">@ {_.perusahaan}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

          </div>
        </section>
      </Container>
  );
}

export default Mentor;