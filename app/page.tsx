import Beranda from "./beranda/page";
import Mitra from "./mitra/page";
import Keunggulan from "./keunggulan/page";
import Kursus from "./kursus/page";
import Testimonial from "./testimonial/page"
import Fitur from "./fitur/page";
import Mentor from "./mentor/page";
import Artikel from "./artikel/page";
import Faq from "./faq/page";
import Footer from "@/components/footer";
export default function Home() {
  return (
   <>
    <Beranda />
    <Mitra />
    <Keunggulan />
    <Kursus />
    <Testimonial />
    <Fitur />
    <Mentor />
    <Artikel />
    <Faq />

   
   </>
  )
}
