"use client"
import Image from "next/image";
import Container from "@/components/container";
import { Button } from "@/components/ui/button"

const Home = () => {
  return ( 
    <div className="bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container>
        <section id="beranda" className="pt-28 md:pt-24 md:pb-12 lg:pt-24 lg:pb-16 xl:pb-20 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-x-2 md:space-y-0">
            <div className="md:w-3/4 space-y-3">
              <h1 className="font-bold text-4xl lg:text-5xl lg:leading-[52px] xl:text-[3.5rem] xl:leading-[60px] tracking-title">Jelajahi Kursus Terbaik Kami & Kuasai Bidangmu</h1>
              <p className="text-desc text-base xl:text-deskripsi tracking-desc font-medium">Upgrade skill & kompetensi kamu  dalam mendapatkan pekerjaan, menaikkan income, dan memulai usaha secara profesional dengan materi pembelajaran berkualitas dengan harga yang terjangkau.</p>
              <div className="flex gap-x-3 pt-3">
                <Button variant="default">Gabung</Button>
                <Button variant="detail_outline">Lebih Lanjut</Button>
              </div>
            </div>

            <div className=" md:w-1/2 ">  
            <Image
                src="/assets/womanlaptop.png"
                width={500}
                height={800}
                alt="laptop"
              />
            </div>
           
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Home;