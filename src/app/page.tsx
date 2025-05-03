import Image from "next/image";
import  Navbar  from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio"
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Testimonials from "@/components/Testimonials/Testimonials"
import Footer from "@/components/Footer/Footer";
import { BentoGridDemo } from "@/components/BentoGrid/BentoGrid";
import TimelineDemo from "@/components/Timeline/TimelineDemo";




export default function Home() {
  return (
       <div className="scroll-smooth">
        <Navbar />
         <Portfolio />
         <CaseStudies />
         <BentoGridDemo  />
         {/* <TimelineDemo /> */}
         {/* <Testimonials /> */}
        
         <Footer />
       </div>

       
  );
}
