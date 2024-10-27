"use client"
import Image from "next/image";
import Container from "@/components/container";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { IoPeople } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

import { RiVerifiedBadgeFill, RiVideoFill } from "react-icons/ri";

import artikelList from "../../data/artikel.json"

interface artikelData {
  id?: number;
  title?: string;
  category?: string[];
  description?: string;
  creator?: string;
  level?: number;
  createdAt?: string;
  coer?: string;
}

const artikel_data = artikelList as artikelData[];

const Artikel = () => {


  const convertTanggal = (tanggal: string) => {
    const date = tanggal.split(", ");
    const dateObject = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

    const day = dateObject.toLocaleString('id-ID', { day: 'numeric' });
    const month = dateObject.toLocaleString('id-ID', { month: 'long' });
    const year = dateObject.getFullYear();
    const fullDate = `${day} ${month} ${year}`;
    
    return fullDate;
  }

  return (
    <div className="bg-second-background">
      <Container>
        <section id="artikel" className="py-10 md:py-10 lg:py-28 overflow-hidden">
          <div className="flex flex-col md:items-center justify-center md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2 text-center">
              <h5 className="font-bold tracking-[0.2em] text-primary">ARTIKEL</h5>
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Jelajahi tips dan tutorial</h1>
              <p className="text-desc text-base tracking-desc font-normal">Tingkatkan keterampilan dan pengetahuan Anda</p>
            </div>
            <div className="py-7 w-full">
              <h2 className="font-bold tracking-title text-[28px]">Artikel Terbaru</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2 mb-4">
                {artikel_data.map((artikel) => (
                  <div key={artikel.id} className="bg-background cursor-pointer dark:bg-accent min-h-[400px] relative rounded-xl">
                    <div className="p-5">
                      <div className="">
                        <Image
                          src="/assets/osiska.png"
                          width={500}
                          height={400}
                          alt="laptop"
                          className="w-full h-[170px] rounded-lg object-cover"
                        />
                      </div>
                      <div className="mt-3 space-y-1.5">
                        <Badge variant="secondary" className="uppercase">{artikel.category}</Badge>
                        <h5 className="font-bold text-deskripsi tracking-[-.04em] leading-tight line-clamp-2">{artikel.title}</h5>
                        <p className="text-desc tracking-desc text-sm line-clamp-2">{artikel.description}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 pb-5 px-5 w-full">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex space-x-1.5 items-center">
                          <div>
                            <Image
                              src="/assets/osiska.png"
                              width={25}
                              height={25}
                              alt="laptop"
                              className="w-[25px] h-[25px] object-cover rounded-full"
                            />
                          </div>
                          <p className="font-semibold text-foreground text-sm">{artikel.creator}</p>
                        </div>
                        <p className="text-desc text-sm">{convertTanggal(artikel.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="default" className="float-right">Lihat Selanjutnya</Button>
              
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Artikel;