import Image from "next/image";
import  Navbar  from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio"
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Footer from "@/components/Footer/Footer";
import { BentoGridDemo } from "@/components/BentoGrid/BentoGrid";





export default function Home() {
  return (
       <div className="scroll-smooth">
        <Navbar />
         <Portfolio />
         <CaseStudies />
         <BentoGridDemo  />
         <Footer />
       </div>

       
  );
}
