// import { Link } from "react-router-dom";

// export default function Content() {
//   const content =
//     "Welcome to RBG, where innovation converges with technology to shape the future of artificial intelligence. Our dedicated research team is at the forefront of crafting the Machine Learning Service Stack (MLStack) utilizing cutting-edge AI technologies.Our vision extends beyond traditional boundaries, aiming to imbue MLStack with the transformative ability to structure unstructured information derived from diverse sources such as Text, Image, Video, Speech, and Numerical Data.At RBG, we recognize the dynamic challenges faced by industries in constant evolution across various sectors. Our service team harnesses the power of MLStack&#39;s primary technologies to address these challenges head-on, providing tailored solutions that propel businesses forward. By leveraging MLStack, we empower organizations to extract meaningful insights from data, unlocking the potential hidden within complex and diverse information streams.Our commitment extends beyond mere technological advancements; we are dedicated to democratizing disruptive AI solutions. Through our efforts, we strive to make these cutting-edge technologies accessible to businesses of all sizes, fostering sustainable growth and innovation. At RBG, we believe in the transformative power of AI, and our mission is to usher in a new era of intelligent solutions that drive progress and success in the ever-evolving landscape of modern industries. Join us on this journey towards a future where AI is not just a tool but a catalyst for sustainable business growth.";

//   return (
//     <div
//       className="flex flex-col max-w-7xl mx-auto px-4 sm:px-5 md:px-8 py-6 md:py-8 
//     bg-white rounded-xl text-justify font-medium text-zinc-500 
//     shadow-md hover:shadow-xl transition-all duration-300 ease-in-out
//     hover:bg-gradient-to-r hover:
//     font-Poppins md:mb-10 md:col-span-2 col-span-3"
//     >
//       {content}
//       <br />
//       <Link
//         to="https://forms.gle/ondZQJixKRACjBay7"
//         className="my-5 mx-auto px-4 py-2.5 
//       text-white bg-red-600 hover:bg-red-700 
//       rounded-lg shadow-md hover:shadow-lg
//       max-md:text-sm transition-all duration-300
//       hover:scale-105"
//       >
//         Join Us
//       </Link>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from "./Slider";
// Mock data for demonstration


function AboutSection() {
  return (
    <div className="bg-white p-6 mb-6">
      <h2 className="text-2xl font-bole text-red-700 mb-4">About RBG</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        RBG.AI: Creating human-centric AI systems that convert unstructured data into meaningful insights for enterprises and governments.
      </p>
      {/* <p className="text-gray-600 text-md leading-relaxed">
        We transform unstructured data from Text, Image, Video, Speech, and Numerical sources into meaningful insights.
      </p> */}
    </div>
  );
}

function ServicesSection() {
  const services = [
    "Machine Learning Solutions",
    "Data Processing & Analysis", 
    "AI Implementation",
    "Custom MLStack Development"
  ];

  return (
    <div className="bg-white p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div key={index} className="p-3 border border-red-200 text-md text-gray-600">
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisionSection() {
  return (
    <div className="bg-white p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        We democratize disruptive AI solutions, making cutting-edge technologies accessible to businesses of all sizes.
      </p>
      <div className="text-center mt-6">
        <a
          href="https://forms.gle/ondZQJixKRACjBay7"
          className="inline-block px-6 py-3 text-white bg-gray-700 hover:bg-red-700 font-medium text-sm transition-colors duration-200"
        >
          Join Our Mission
        </a>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="md:col-span-2 col-span-3 space-y-0">
      <AboutSection />
      <ServicesSection />
      <VisionSection />
    </div>
  );
}



export default function ExpertsPractitioners() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <h1 className="col-span-3 text-center font-bold text-gray-800 text-3xl md:text-4xl mb-8">
            Experts & Practitioners
          </h1>
          
          <Content />
          
          <div className="lg:col-span-1 col-span-3 flex items-start justify-center">
            <Slider  />
          </div>
        </div>
      </div>
    </div>
  );
}