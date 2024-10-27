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

import kursusList from "../../data/kursus.json"

interface kursusData {
  id?: number;
  title?: string;
  category?: string[];
  level?: number;
  durasi?: {
    jam?: number;
    menit?: number;
  };
  jumlah_kursus?: number;
}

const kursus_data = kursusList as kursusData[];

const Kursus = () => {
  const sourceCategories = ["popular", "desain grafis", "pengembangan web", "pengembangan android", "pemasaran digital", "data analisis", "uI & uX"]

  const filterKursus = (value: string) => {
    const filter = kursus_data.filter((kursus) => {
      return kursus.category?.includes(value);
    });

    return filter;
  };

  return ( 
      <Container>
        <section className="py-10 md:py-10 lg:py-28 overflow-hidden">
          <div className="flex flex-col md:items-center justify-center md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2 text-center">
              <h5 className="font-bold text-lg tracking-desc text-primary">KURSUS</h5>
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Temukan kursus unggulan</h1>
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-normal">Temukan pilihan yang sesuai dengan kebutuhan belajar anda dan capai tujuan anda!</p>
            </div>
            <div className="py-3 w-full">
              <Tabs defaultValue={sourceCategories[0]} className="w-full">
                <div className="flex flex-col md:items-center justify-center">
                  <TabsList>
                    {sourceCategories.map((kategori, idx) => (
                      <TabsTrigger key={idx} value={kategori}>{kategori}</TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <div className="">
                  {sourceCategories.map((kategori, idx) => (
                    <TabsContent key={kategori} value={kategori}>  
                        <div className="grid grid-cols-4 space-x-4">
                          {filterKursus(kategori).map((kursus) => (
                            <div key={kursus.id} className="border border-border rounded-xl p-4">
                              <div>
                                <Image
                                  src="/assets/osiska.png"
                                  width={500}
                                  height={800}
                                  alt="laptop"
                                  className="w-full min-h-[150px] rounded-lg object-cover"
                                />
                              </div>
                              <div className="mt-3 space-y-1">
                                {kursus.level === 1 && <Badge variant="secondary">PEMULA</Badge>}
                                {kursus.level === 2 && <Badge variant="warning">INTERMEDIATE</Badge>}
                                {kursus.level === 3 && <Badge variant="destructive">ADVANCED</Badge>}
                                <h5 className="font-bold tracking-desc">{kursus.title}</h5>
                                <div className="flex">
                                  <div className="flex">
                                    <FaRegClock />
                                    <p>{kursus.durasi.jam}j {kursus.durasi.menit}m</p>
                                  </div>
                                  <div className="flex">
                                    <FiVideo />
                                    <p>{kursus.durasi.jam}j {kursus.durasi.menit}m</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>


            </div>
          </div>
        </section>
      </Container>
  );
}

export default Kursus;