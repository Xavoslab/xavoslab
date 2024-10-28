"use client"

import Image from "next/image";
import Container from "@/components/container";

const Mitra = () => {
  const sourceImages = [
    {
      name: "bsion",
      width: 100,
      height: 51,
      src: "/assets/mitra/bsion.png"
    },
    {
      name: "jetrau",
      width: 100,
      height: 48,
      src: "/assets/mitra/jetrav.png"
    },
    {
      name: "zenl",
      width: 91,
      height: 40,
      src: "/assets/mitra/zenl.png"
    },
    {
      name: "ecole",
      width: 61,
      height: 50,
      src: "/assets/mitra/ecole.png"
    },
    {
      name: "teraspisce",
      width: 140,
      height: 40,
      src: "/assets/mitra/teraspisce.png"
    },
    {
      name: "orsoe",
      width: 130,
      height: 43,
      src: "/assets/mitra/orsoe.png"
    },
  ]

  return ( 
      <Container>
        <section id="mitra" className="py-10 md:py-10 lg:py-16 overflow-hidden">
          <div className="flex flex-col md:items-center justify-between md:space-x-2 md:space-y-0">
            <div className="md:w-3/4 lg:w-full text-center">
              <p className="text-foreground text-base lg:text-deskripsi tracking-desc font-semibold">Telah dipercaya oleh start-up & perusahaan</p>
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-normal">Digunakan oleh +50 perusahaan dari berbagai industri</p>
            </div>
            <div >
              <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-x-8 gap-y-3  mt-16 text-center ">
                {sourceImages.map((_, idx) => (
                  <div className="flex justify-center items-center">
                    <Image
                      src={_}
                      width={_.width}
                      height={_.height}
                      alt="logo"
                      className={`w-[${_.width}px] h-[${_.height}px]`}
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