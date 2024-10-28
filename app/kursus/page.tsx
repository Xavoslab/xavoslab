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
import { FaRegClock } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

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
  gambar?: string;
  kreator?: string;
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
      <section id="kursus" className="py-10 md:py-10 lg:py-28 overflow-hidden">
        <div className="flex flex-col md:items-center justify-center md:space-y-0">
          <div className="md:w-3/4 lg:w-full space-y-2 text-center">
            <h5 className="font-bold tracking-[0.2em] text-primary">KURSUS</h5>
            <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Temukan kursus unggulan</h1>
            <p className="text-desc text-base tracking-desc font-normal">Temukan pilihan yang sesuai dengan kebutuhan belajar <br /> anda  dan capai tujuan anda!</p>
          </div>
          <div className="py-3 w-full">
            <Tabs defaultValue={sourceCategories[0]} className="">
              <div className="mt-8 flex flex-col lg:items-center justify-center snap-proximity snap-x overflow-x-auto tab-container scroll-my-1 pb-2.5">
                <TabsList>
                  {sourceCategories.map((kategori, idx) => (
                    <TabsTrigger key={idx} value={kategori} className="snap-center">{kategori}</TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="">
                {sourceCategories.map((kategori, idx) => (
                  <TabsContent key={kategori} value={kategori}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {filterKursus(kategori).map((kursus) => (
                        <div key={kursus.id} className="border cursor-pointer relative border-border dark:bg-card rounded-xl p-4">
                          <div>
                            <Image
                              src={kursus.gambar ? kursus.gambar : "/assets/kursus/img.png"}
                              width={1200}
                              height={800}
                              alt="laptop"
                              className="w-full min-h-[150px] rounded-lg object-cover"
                            />
                          </div>
                          <div className="mt-3 space-y-1.5">
                            {kursus.level === 1 && <Badge variant="secondary">PEMULA</Badge>}
                            {kursus.level === 2 && <Badge variant="warning">INTERMEDIATE</Badge>}
                            {kursus.level === 3 && <Badge variant="destructive">ADVANCED</Badge>}
                            <h5 className="font-bold tracking-desc leading-tight line-clamp-2">{kursus.title}</h5>
                            <div className="durasi-kursus pb-9 flex items-center space-x-1.5">
                              <div className="flex items-center space-x-1 text-lightgray">
                                <FaRegClock className="text-sm font-semibold" />
                                <p className="text-xs font-semibold">
                                  {kursus.durasi && `${kursus.durasi.jam}j ${kursus.durasi.menit}m`}
                                </p>
                              </div>
                              <GoDotFill className="text-[8px] font-semibold text-lightgray" />
                              <div className="flex items-center space-x-1 text-lightgray">
                                <FiVideo className="text-sm font-semibold" />
                                <p className="text-xs font-semibold">
                                  {kursus.durasi && `${kursus.durasi.jam}j ${kursus.durasi.menit}m`}
                                </p>
                              </div>
                            </div>
                            <p className="text-desc font-medium text-xs absolute bottom-0 pb-4">oleh <span className="text-secondary-foreground text-sm font-bold">{kursus.kreator}</span></p>
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