"use client"

import Container from "@/components/container";
import { IoPeople } from "react-icons/io5";
import { RiVerifiedBadgeFill, RiVideoFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  const sourceCards = [
    {
        title: "Apa yang dimaksud dengan platform belajar online?",
        description: "Platform belajar online adalah sistem yang memungkinkan pengguna untuk mengakses materi pendidikan melalui internet, sehingga mereka dapat belajar kapan saja dan di mana saja."
    },
    {
        title: "Apa itu Xavoslab?",
        description: "Situs web atau aplikasi yang menyediakan kursus dalam berbagai bidang yang dapat diakses secara daring. Pengguna dapat belajar sesuai dengan waktu dan lokasi yang mereka pilih."
    },
    {
        title: "Apakah kursus di Xavoslab gratis?",
        description: "Kursus di Xavoslab dapat beragam, dengan beberapa kursus yang tersedia secara gratis dan yang lainnya mungkin memerlukan biaya."
    },
    {
        title: "Apakah Xavoslab dapat diakses melalui perangkat seluler?",
        description: "Ya, Xavoslab dirancang agar dapat diakses melalui perangkat seluler, memungkinkan pengguna untuk belajar di mana saja."
    },
    {
        title: "Apakah ada batas waktu untuk menyelesaikan kursus?",
        description: "Batas waktu penyelesaian kursus dapat bervariasi tergantung pada masing-masing kursus yang ditawarkan di XavosLab."
    },
  ];


  return ( 
      <Container>
        <section className="py-10 md:py-10 lg:py-28 overflow-hidden">
          <div className="flex flex-col md:flex-row md:space-x-8 justify-between md:space-y-0">
            <div className="md:w-1/2 space-y-2">
              <h5 className="font-bold tracking-[0.2em] text-primary">FAQ</h5>
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Frequently Asked Questions</h1>
              <p className="text-desc text-base  tracking-desc font-medium">Punya pertanyaan terkait Xavoslab? Segala hal yang perlu Anda ketahui</p>
            </div> 
            <div className="w-full md:w-3/4">
              <Accordion type="single" collapsible>
                {sourceCards.map((_, idx) => (
                  <AccordionItem value={_.title}>
                    <AccordionTrigger>{_.title}</AccordionTrigger>
                    <AccordionContent>
                      {_.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
            </div>
            
          </div>
        </section>
      </Container>
  );
}

export default Faq;