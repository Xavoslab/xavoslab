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
import Autoplay from "embla-carousel-autoplay"
 
import testimonialList from "../../data/testimonial.json"

interface testiData {
  id?: number;
  name?: string;
  role?: string;
  testi?: string;
  profile?: string;
}

const testi_data = testimonialList as testiData[];

const Testimonial = () => {
  return ( 
      <div className="bg-second-background">
        <Container>
          <section id="testimoni"  className="py-10 md:py-10 lg:py-20 overflow-hidden">
            <div className="flex flex-col md:items-center justify-center md:space-y-0">
              <div className="md:w-3/4 lg:w-full space-y-2 text-center">
                <h5 className="font-bold tracking-[0.2em] text-primary">TESTIMONI</h5>
                <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Apa yang dikatakan customer?</h1>
                <p className="text-desc text-base tracking-desc font-normal">Simak pendapat pengguna tentang Xavoslab</p>
              </div>
              <div className="py-8 w-full">
                <Carousel className="w-full z-0 hover:cursor-pointer"  
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}>
                  <CarouselContent className="pl-4 pr-3">
                    {testi_data.map((_, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-5 bg-background dark:bg-card rounded-xl h-full">
                          <div className="flex space-x-2.5 items-center">
                            <div className="">
                              <Image
                                src="/assets/osiska.png"
                                width={50}
                                height={50}
                                alt="laptop"
                                className="w-[50px] h-[50px] object-cover rounded-full"
                              />
                            </div>
                            <div>
                              <p className="font-bold tracking-desc leading-tight">{_.name}</p>
                              <p className="text-desc text-sm tracking-desc">{_.role}</p>
                            </div>
                          </div>
                          <p className="text-sm mt-3 text-desc tracking-desc">{_.testi}</p>
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
      </div>
  );
}

export default Testimonial;