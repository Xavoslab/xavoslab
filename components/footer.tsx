import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/navbar/logo";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const socialmedia = [
    {
      name: "twitter",
      icon: <FaXTwitter size="20px" />,
      link: "",
    },
    {
      name: "instagram",
      icon: <FaInstagram size="20px"/>,
      link: "",
    },
    
    {
      name: "facebook",
      icon: <FaFacebook size = "18px" />,
      link: "",
    }
  ]

  const footerItem = [
    {
      id: 1,
      title: "Xavoslab",
      footer_item: [
        {
          name: "Tentang Kami",
          link: "#"
        }, 
        {
          name: "Mitra",
          link: "#mitra"
        },
        {
          name: "Kontak",
          link: "#",
        }
      ]
    },
    {
      id: 2,
      title: "Tautan",
      footer_item: [
        {
          name: "Kursus",
          link: "#kursus"
        }, 
        {
          name: "Mentor",
          link: "#mentor"
        },
        {
          name: "Fitur",
          link: "#fitur",
        }
      ]
    },
    {
      id: 3,
      title: "Bantuan & Panduan",
      footer_item: [
        {
          name: "Bantuan",
          link: "#"
        }, 
        {
          name: "Syarat & Kententuan",
          link: "#"
        },
        {
          name: "Karier",
          link: "#",
        },
        {
          name: "FAQ",
          link: "#faq",
        }
      ]
    },
  ]

  const currentYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return year;
  }
  
  return (
    <section className="bg-background" id="footer">
      <Container>
        <div className="py-8 lg:py-10">
          <div className="md:flex md:justify-between md:gap-x-3 pb-12 lg:pb-16">
            <div className="mb-8 md:mb-0 space-y-4">
              <Link href="https://smkxaverius.sch.id" target="_blank" className="flex items-center space-x-2">
                <Logo  />
              </Link>
              <p className="text-desc text-base md:text-xs lg:text-sm font-medium max-w-xs">XavosLab adalah platform edukasi online yang menawarkan berbagai kursus di bidang teknologi dan bisnis.</p>
            </div>
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {footerItem.map((_, idx) => (
                <div className="flex flex-col md:items-center" key={idx}>
                  <div className="">
                    <h2 className="mb-6 font-semibold text-desc text-sm dark:text-foreground">
                      {_.title}
                    </h2>
                    <ul className="text-lightgray dark:text-desc font-medium space-y-4">
                      {_.footer_item.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.link}
                            className="hover:underline text-sm hover:decoration-primary underline-offset-4 capitalize"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              {/* Hubungi Kami Item */}
              <div className="flex flex-col md:items-center">
                  <div className="">
                    <h2 className="mb-6 font-semibold text-desc dark:text-foreground">
                      Hubungi Kami
                    </h2>
                    <ul className="text-lightgray dark:text-desc font-medium space-y-4">
                      <li>
                        <Link
                          href="#"
                          className="hover:underline flex gap-x-2 items-center hover:decoration-primary underline-offset-4 break-all md:break-normal"
                        >
                          <BiLogoGmail className="text-lg" />
                          <span className="text-sm">xavoslab@gmail.com</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:underline text-sm flex gap-x-2 items-center hover:decoration-primary underline-offset-4"
                        >
                          <MdCall className="text-lg" />
                          +62 8080 8080 8080
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

            </div>

          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-desc dark:text-desc sm:text-center">
              © {currentYear()} {''} Created By {''}
              <Link href="/sekbid/3" className="hover:underline hover:decoration-primary underline-offset-4">
                Xavoslab
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
              {socialmedia.map((_, idx) => (
                <Link key={idx} href={_.link} target="_blank" className="text-desc hover:text-primary">
                    {_.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;