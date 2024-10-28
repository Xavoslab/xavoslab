"use client"
import Container from "@/components/container";
import React, { useEffect, useState } from "react"
import Image from "next/image";
import { useTheme } from 'next-themes';
import { FaHeadset } from "react-icons/fa";
import { RiSpeakLine, RiVerifiedBadgeFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const Fitur = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const setTheme = () => {
      const isWindowDefined = typeof window !== 'undefined';
      if (isWindowDefined) {
        const storedTheme = window.localStorage.getItem("theme");

        if (!storedTheme) {
          window.localStorage.setItem("theme", "dark");
        } else if (storedTheme === "system") {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
          window.localStorage.setItem("theme", systemTheme);
        }
      }
    };

    setTheme();
  }, []);

  const dataFitur = [
    {
      title: "E-Learning",
      icon: <FaHeadset />,
      size: 16,
      desc: "Pelajari Ratusan Skill Sekali Bayar. Praktik dan Bersertifikat. Belajar fleksibel via Video Materi, Bahan Bacaan, Project dan Studi Kasus",
    },
    {
      title: "Instruktur Berpengalaman",
      icon: <RiSpeakLine />,
      size: 16,
      desc: "Kursus dipandu oleh praktisi industri, memberikan wawasan praktis yang relevan.",
    },
    {
      title: "Bootcamp",
      icon: <RiVerifiedBadgeFill />,
      size: 16,
      desc: "Praktikal & Mendalam. Kombinasi Case Study, Diskusi dan Praktik di Tiap Sesi. Basic to Advanced",
    },
    {
      title: "Komunitas dan Mentorship",
      icon: <IoIosPeople />,
      size: 20,
      desc: "Memiliki komunitas belajar yang memungkinkan peserta saling berbagi pengalaman dan berdiskusi.",
    },
  ]

  return (
    <Container>
      <section id="fitur" className="py-10 md:pt-10 lg:pt-28 lg:pb-20 overflow-hidden">
        <div className="flex flex-col md:items-center justify-center md:space-y-0">
          <div className="md:w-3/4 lg:w-full space-y-2 text-center">
            <h5 className="font-bold tracking-[0.2em] text-primary">FITUR</h5>
            <h1 className="font-bold text-4xl lg:text-title2 tracking-title">Tingkatkan skill & kompetensi di <br className="hidden md:block" /> manapun dan kapanpun</h1>
            <p className="text-desc text-base tracking-desc font-normal">Dapatkan akses untuk materi pembelajaran video, bahan, project, dan studi <br className="hidden md:block" /> kasus yang ingin anda pilih di manapun dan kapanpun.</p>
          </div>
          <div className="w-full relative sm:-top-10 md:-top-12 lg:-top-16 border-b border-border pb-6">
            <Image
              src={`/assets/${theme === 'dark' ? 'dashboarddark.png' : 'dashboardlight.png'}`}
              width={1500}
              height={1500}
              alt="laptop"
            />
          </div>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 md:gap-x-2 lg:gap-x-1 gap-y-5 pt-8 sm:pt-2  lg:pt-0 relative md:-top-3 lg:-top-2 xl:-top-3 ">

            {dataFitur.map((_, idx) => (
              <div className="flex" key={idx}>
                <div className={`mt-1 text-[${_.size}px]`}>{_.icon}</div>
                <div className="ml-2">
                  <p className="font-semibold pb-1 md:pb-2.5">{_.title}</p>
                  <span className="text-sm text-desc ">{_.desc}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </Container>
  );
}

export default Fitur;