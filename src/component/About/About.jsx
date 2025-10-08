// import { useContext, useEffect } from "react";
// import Header from "../Header";
// import Section from "./Section";
// import Content from "./Content";
// import { AboutContext } from "../Context/Context";
// import Slider from "./Slider";
// import Timeline from "./Timeline";

// export default function About() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });

//   const data = {
//     title: "AI ",
//     content:
//       "RBG.AI is an enterprise-class, AI-native platform built to structure unstructured data and unlock business value.",
//     button: "Reach Us",
//   };

  // const { members } = useContext(AboutContext);
//   return (
//     <div className="">
//       <Header data={data} />
//       <Timeline />
      // {members.map((item, index) => (
      //   <Section key={index} data={item} />
      // ))}

//         <Content />
        
    
//       {/* <div className="max-w-7xl overflow-x-hidden mx-auto grid grid-cols-1 lg:grid-cols-3">
//         <h1 className="col-span-3 text-center font-Poppins capitalize font-bold text-zinc-700 text-2xl md:text-5xl my-10">
//           Experts & Practitioners
//         </h1>
//         <Content />
//         <Slider />
//       </div> */}
//     </div>
//   );
// }


// import Slider from "./Slider"
// import { AboutContext } from "../Context/Context";
// import Section from "./Section"
// import Timeline from "./Timeline"
// import React, { useState, useEffect ,useContext} from "react";
// import { 
//   ChevronRight, Zap, Target, Layers, ArrowRight, CheckCircle, 
//   Play, Users, TrendingUp, Shield, Award, Globe, Lightbulb,
//   Calendar, MapPin, Mail, Phone, Github, Linkedin, Twitter
// } from "lucide-react";

// export default function AboutMLloOps() {
//   const phrases = [
//     "Innovation Excellence",
//     "Data-Driven Solutions", 
//     "AI-First Approach",
//     "Future-Ready Technology"
//   ];

//   const [currentPhrase, setCurrentPhrase] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);
//    const { members } = useContext(AboutContext);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentPhrase((prev) => (prev + 1) % phrases.length);
//         setIsVisible(true);
//       }, 300);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [phrases.length]);

//   const coreValues = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Innovation First",
//       description: "We constantly push the boundaries of what's possible with AI and machine learning"
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Precision Focus",
//       description: "Every solution is crafted with meticulous attention to detail and accuracy"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Human-Centric",
//       description: "Technology that enhances human capabilities rather than replacing them"
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Trust & Security",
//       description: "Built on a foundation of security, privacy, and ethical AI practices"
//     }
//   ];

//   const timeline = [
//     {
//       year: "2020",
//       title: "The Vision",
//       description: "Founded with a mission to democratize AI and make machine learning accessible to everyone"
//     },
//     {
//       year: "2021",
//       title: "First Product Launch",
//       description: "Released MLloOps v1.0, revolutionizing how teams approach machine learning workflows"
//     },
//     {
//       year: "2022",
//       title: "Enterprise Expansion",
//       description: "Scaled to serve Fortune 500 companies with enterprise-grade ML operations platform"
//     },
//     {
//       year: "2023",
//       title: "AI Innovation Lab",
//       description: "Established dedicated R&D facility focused on next-generation AI technologies"
//     },
//     {
//       year: "2024",
//       title: "Global Reach",
//       description: "Expanded operations worldwide with offices in 15 countries and 500+ enterprise clients"
//     }
//   ];

//   const team = [
//     {
//       name: "Sarah Chen",
//       role: "CEO & Co-Founder",
//       image: "/api/placeholder/150/150",
//       bio: "Former AI researcher at Google with 10+ years in machine learning"
//     },
//     {
//       name: "Marcus Rodriguez",
//       role: "CTO & Co-Founder", 
//       image: "/api/placeholder/150/150",
//       bio: "Ex-Tesla engineer specializing in scalable AI infrastructure"
//     },
//     {
//       name: "Dr. Aisha Patel",
//       role: "Head of AI Research",
//       image: "/api/placeholder/150/150", 
//       bio: "PhD in Computer Science, published 50+ papers on neural networks"
//     },
//     {
//       name: "James Wilson",
//       role: "VP of Engineering",
//       image: "/api/placeholder/150/150",
//       bio: "Former Microsoft architect with expertise in distributed systems"
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Enterprise Clients" },
//     { number: "10M+", label: "Models Deployed" },
//     { number: "99.9%", label: "Uptime SLA" },
//     { number: "150+", label: "Team Members" }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Gradient Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
//           <div className="text-center space-y-8">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium border border-blue-200">
//               <Award className="w-4 h-4 mr-2" />
//               About MLloOps
//             </div>

//             <div className="space-y-6">
//               <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                 <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
//                   Building the Future
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
//                   of AI Operations
//                 </span>
//               </h1>

//               <div className="h-16 flex items-center justify-center">
//                 <p className="text-xl text-slate-600">
//                   Driven by{" "}
//                   <span className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
//                     <span className="relative">
//                       <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
//                         {phrases[currentPhrase]}
//                       </span>
//                       <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg opacity-20 blur animate-pulse"></div>
//                     </span>
//                   </span>
//                 </p>
//               </div>

//               <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
//                 At MLloOps, we're revolutionizing how organizations approach machine learning operations. 
//                 Our mission is to make AI accessible, scalable, and impactful for businesses of all sizes, 
//                 combining cutting-edge technology with human expertise to deliver unprecedented results.
//               </p>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   {stat.number}
//                 </div>
//                 <div className="text-slate-600 text-sm lg:text-base mt-2">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               The principles that guide everything we do and shape our approach to AI innovation
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {coreValues.map((value, index) => (
//               <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
// <Timeline/>
//       {/* Timeline Section */}
//       {/* <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
//               Our Journey
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               From startup to industry leader - the milestones that define our growth
//             </p>
//           </div>

//           <div className="relative">
       
//             <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

//             <div className="space-y-12">
//               {timeline.map((item, index) => (
//                 <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
//                   <div className={`w-full max-w-md ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
//                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
//                       <div className="flex items-center mb-4">
//                         {index % 2 === 0 ? (
//                           <>
//                             <h3 className="text-xl font-semibold text-slate-900 mr-3">{item.title}</h3>
//                             <div className="w-16 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
//                               <span className="text-white font-bold text-sm">{item.year}</span>
//                             </div>
//                           </>
//                         ) : (
//                           <>
//                             <div className="w-16 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-3">
//                               <span className="text-white font-bold text-sm">{item.year}</span>
//                             </div>
//                             <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
//                           </>
//                         )}
//                       </div>
//                       <p className="text-slate-600 leading-relaxed">{item.description}</p>
//                     </div>
//                   </div>

               
//                   <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Team Section */}
//       <section className="py-20 bg-slate-50">
//        {members.map((item, index) => (
//         <Section key={index} data={item} />
//       ))}
//         <Slider />
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
//                 Our Mission & Vision
//               </h2>
//               <div className="space-y-8">
//                 <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
//                   <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
//                     <Target className="w-5 h-5 mr-2 text-blue-600" />
//                     Mission
//                   </h3>
//                   <p className="text-slate-700 leading-relaxed">
//                     To democratize artificial intelligence by making advanced ML operations accessible, 
//                     reliable, and scalable for organizations worldwide, empowering them to harness the 
//                     full potential of their data.
//                   </p>
//                 </div>
//                 <div className="p-6 bg-indigo-50 rounded-2xl border-l-4 border-indigo-600">
//                   <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
//                     <Lightbulb className="w-5 h-5 mr-2 text-indigo-600" />
//                     Vision
//                   </h3>
//                   <p className="text-slate-700 leading-relaxed">
//                     To be the global leader in AI operations, creating a future where machine learning 
//                     seamlessly integrates into every business process, driving innovation and growth 
//                     across all industries.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="space-y-6">
//               <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
//                 <Globe className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Impact</h3>
//                 <p className="text-slate-600">Operating in 15+ countries with a diverse team of AI experts and engineers.</p>
//               </div>
//               <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
//                 <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
//                 <h3 className="text-xl font-semibold text-slate-900 mb-3">Continuous Growth</h3>
//                 <p className="text-slate-600">300% year-over-year growth with industry-leading customer satisfaction rates.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
      
//     </div>
//   );
// }



import Slider from "./Slider"
import { AboutContext } from "../Context/Context";
import Section from "./Section"
import Timeline from "./Timeline"
import React, { useState, useEffect, useContext, useRef } from "react";
import { 
  ChevronRight, Zap, Target, Layers, ArrowRight, CheckCircle, 
  Play, Users, TrendingUp, Shield, Award, Globe, Lightbulb,Brain,Database,Cpu,BarChart3,Rocket,
  Calendar, MapPin, Mail, Phone, Github, Linkedin, Twitter
} from "lucide-react";

// Custom Hook for Intersection Observer Animations
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting];
}


function RBGAboutSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            About RBG
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">RBG</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                RBG is where innovation meets technology to shape the future of artificial intelligence. 
                Our dedicated research team crafts the Machine Learning Service Stack (MLStack) using cutting-edge AI technologies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We transform unstructured data from Text, Image, Video, Speech, and Numerical sources into meaningful insights.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">Democratizing AI solutions for all businesses</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">Leading the future of AI operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function RBGSolutionsSection() {
  const solutions = [
    "Industry Challenge Analysis",
    "Custom AI Solutions",
    "MLStack Implementation", 
    "Business Growth Programs"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Industry Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Dynamic <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We deliver industry-specific solutions that drive growth using MLStack technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">{solution}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600 text-sm">Projects Delivered</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">99%</h3>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">24/7</h3>
              <p className="text-gray-600 text-sm">Support Available</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://forms.gle/ondZQJixKRACjBay7"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Join Our Mission
          </a>
        </div>
      </div>
    </div>
  );
}

// Simple RBG Section 2: MLStack Services
function RBGServicesSection() {
  const services = [
    { icon: Database, title: "Text Processing", desc: "Advanced NLP and text analysis" },
    { icon: Cpu, title: "Image & Video", desc: "Computer vision processing" },
    { icon: BarChart3, title: "Numerical Data", desc: "Statistical analysis and modeling" },
    { icon: Globe, title: "Speech Analysis", desc: "Audio processing and recognition" }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            MLStack Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming unstructured data from diverse sources into structured, actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function PractitionerSlider() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Our Practitioners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Expert <span className="text-blue-600">Practitioners</span>
            </h2>
          </div>
          
          <button className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Join Our Team
          </button>
        </div>

        <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-12 text-center">
          <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <p className="text-blue-600 text-lg">Your PractitionerSlider Component Goes Here</p>
          <p className="text-gray-500 text-sm mt-2">Replace this placeholder with your actual slider component</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutMLloOps() {
  const phrases = [
    "Innovation Excellence",
    "Data-Driven Solutions", 
    "AI-First Approach",
    "Future-Ready Technology"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { members } = useContext(AboutContext);

  // Animation refs
  const [heroRef, heroInView] = useIntersectionObserver();
  const [statsRef, statsInView] = useIntersectionObserver();
  const [valuesRef, valuesInView] = useIntersectionObserver();
  const [missionRef, missionInView] = useIntersectionObserver();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const coreValues = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation First",
      description: "Pushing the boundaries of AI and machine learning"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Focus",
      description: "Solutions crafted for accuracy and detail"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-Centric",
      description: "Technology that empowers people"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Security",
      description: "Secure, private, and ethical AI"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients" },
    { number: "10M+", label: "Models Deployed" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "150+", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div 
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-6 py-20 lg:py-32 transition-all duration-1000 ease-out ${
            heroInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}
        >
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium border border-blue-200 transition-all duration-700 delay-300 ${
              heroInView ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-4 scale-95'
            }`}>
              <Award className="w-4 h-4 mr-2" />
              About MLloOps
            </div>

            <div className="space-y-6">
              <h1 className={`text-5xl lg:text-7xl font-bold leading-tight transition-all duration-1000 delay-500 ${
                heroInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}>
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                  Future of AI Operations
                </span>
                {/* <br />
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                  of AI Operations
                </span> */}
              </h1>

              <div className={`h-16 flex items-center justify-center transition-all duration-1000 delay-700 ${
                heroInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
              }`}>
                <p className="text-xl text-slate-600">
                  Driven by{" "}
                  <span className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                        {phrases[currentPhrase]}
                      </span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg opacity-20 blur animate-pulse"></div>
                    </span>
                  </span>
                </p>
              </div>

              <p className={`text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
                heroInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}>
                At MLloOps, we make AI accessible, scalable, and impactful, blending technology and human expertise for outstanding results.
              </p>
            </div>
          </div>

          {/* Animated Stats Section */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200 transition-all duration-1000 ${
              statsInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 ${
                  statsInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm lg:text-base mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Core Values Section */}
      <section className="py-20 bg-slate-50">
        <div 
          ref={valuesRef}
          className="max-w-7xl mx-auto px-6"
        >
          <div className={`text-center mb-16 transition-all duration-1000 ${
            valuesInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our guiding principles for AI innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 ${
                  valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Timeline */}
      <div className="transition-all duration-1000 ease-out">
        <Timeline />
      </div>

      {/* Animated Team Section */}
      <section className="py-20 bg-slate-50">
           <RBGAboutSection />
            <RBGServicesSection />
               <RBGSolutionsSection />
        <div className="animate-fade-in-up">
          {members.map((item, index) => (
            <div 
              key={index}
              className="transition-all duration-700 ease-out"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <Section data={item} />
            </div>
          ))}
          <div className="mt-8 transition-all duration-1000 ease-out animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <Slider />
          </div>
        </div>
      </section>

      {/* Animated Mission & Vision Section */}
      <section className="py-20">
        <div 
          ref={missionRef}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${
              missionInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-12'
            }`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div className={`p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 transition-all duration-700 delay-300 ${
                  missionInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
                }`}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Mission
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Deliver trustworthy, fast, and inclusive AI for practical impact.Help organizations transform raw data into real-world decisions and growth.
                  </p>
                </div>
                <div className={`p-6 bg-indigo-50 rounded-2xl border-l-4 border-indigo-600 transition-all duration-700 delay-500 ${
                  missionInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
                }`}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-indigo-600" />
                    Vision
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Turn all forms of data into resilient, actionable intelligence.Build AI that works across industries, languages, and environments.
                  </p>
                </div>
              </div>
            </div>
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              missionInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
            }`}>
              <div className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 delay-500 ${
                missionInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Impact</h3>
                <p className="text-slate-600">Operating in 15+ countries with a diverse team of AI experts and engineers.</p>
              </div>
              <div className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 delay-700 ${
                missionInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}>
                <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Continuous Growth</h3>
                <p className="text-slate-600">300% year-over-year growth with industry-leading customer satisfaction rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}







// import { useState } from 'react';
// import { Webchat, Fab } from '@botpress/webchat';

// export default function App() {
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);

//   const toggleWebchat = () => {
//     setIsWebchatOpen((prev) => !prev);
//   };

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Fab onClick={toggleWebchat} />
      
//       {isWebchatOpen && (
//         <div
//           style={{
//             position: 'fixed',
//             bottom: '80px',
//             right: '20px',
//             width: '400px',
//             height: '600px',
//             boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
//             borderRadius: '12px',
//             overflow: 'hidden',
//             background: '#fff',
//           }}
//         >
//           <Webchat
//             botId="56bc7b05-885f-4aa9-8d14-139fa279cba8"
//            clientId = "de6fbeec-cc2a-4107-a53e-628d394619c9"
//             configuration={{
//               version: "v2",
//               color: '#3276EA',
//               variant: "solid",
//               headerVariant: "glass",
//               themeMode: 'light',
//               fontFamily: 'inter',
//               radius: 4,
//               feedbackEnabled: false,
//               footer: "[⚡ by Botpress](https://botpress.com/?from=webchat)",
//               soundEnabled: false,
//               showUserName: true
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }