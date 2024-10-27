"use client"
import Image from "next/image";
import Container from "@/components/container";
import { Button } from "@/components/ui/button"

const Home = () => {
  return ( 
    <div className="bg-gradient-to-tr h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container>
        <section className="py-28 md:py-10 lg:py-20 overflow-hidden">
          <div className="flex flex-col md:flex-row  md:items-center justify-between md:space-x-2  md:space-y-0">
            <div className="md:w-3/4 lg:w-3/4 space-y-3">
              <h1 className="font-bold text-4xl lg:text-[3.5rem] lg:leading-[60px] tracking-title">Jelajahi Kursus Terbaik Kami & Kuasai Bidangmu</h1>
              <p className="text-desc text-base lg:text-deskripsi tracking-desc font-medium">Upgrade skill & kompetensi kamu  dalam mendapatkan pekerjaan, menaikkan income, dan memulai usaha secara profesional dengan materi pembelajaran berkualitas dengan harga yang terjangkau.</p>
              <div className="flex gap-x-3">
                <Button variant="default">Gabung</Button>
                <Button variant="outline">Lebih Lanjut</Button>
              </div>
            </div>

            <div className="lg:w-1/2 ">
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