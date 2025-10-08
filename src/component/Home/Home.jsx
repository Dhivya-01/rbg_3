

import Clients from "./Clients";

import { useContext, useEffect } from "react";
import { HomeContext } from "../Context/Context";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import Carouselflow from "./Caurosal"




import Proof from "./Proof"
import Pricing from "./Pricing"
import FAQ from "./FAQ"
import Timelinedemo from "./Timeline"
import Testimonials from  "./ScrollCard"


import Hero from "./header"
   import { CTASection } from "@/components/blocks/cta-with-rectangle"
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  const data = {
    content:
      "Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows",
    description: "Let's Structure the Unstructured.",
    button: "Get Started",
  };

  const { section } = useContext(HomeContext);

  // Fade-in animation for the header
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
       
     
         
    <Hero/>
    
   
          
            <CTASection
      badge={{
        text: "Get started"
      }}
      title="Unleash MLloOps™"
      description="Confidence-Driven Automation Starts Here"
      action={{
        text: "Start here",
        href: "/docs",
        variant: "default"
      }}
    />
 <Carouselflow/>
            <Testimonials/>
           
    
       
         <Timelinedemo/>
         
        <Proof/>
        <Pricing/>
        {/* <FAQ/> */}
       
        

     
      </motion.div>

     





      

      <div data-aos="zoom-in" data-aos-duration="1000">
        <Clients />
      </div>
    </>
  );
}
