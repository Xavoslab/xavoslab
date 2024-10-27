import Home from "./home";
import Anggota from "@/components/anggota";
// import mpkdata from "../../data/mpk.json"

interface MPKData {
  id?: number;
  name?: string;
  role?: string;
  profile?: string;
}

// const MPK_data = mpkdata as MPKData[]

const Beranda = () => {
  return (
    <>
      <Home />
   
    </>
  );
}

export default Beranda;