import Image from "next/image";
import  Navbar  from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio"
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Testimonials from "@/components/Testimonials/Testimonials"
import Footer from "@/components/Footer/Footer";
import TimelineDemo from "@/components/Timeline/TimelineDemo";



export default function Home() {
  return (
       <>
        <Navbar />
         <Portfolio />
         <CaseStudies/>
         <TimelineDemo />
         <Testimonials />
         <Footer />
       </>

       
  );
}
