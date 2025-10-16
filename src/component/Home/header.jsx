

// import React, { useState, useEffect } from "react";
// import { ChevronRight, Zap, Target, Layers, ArrowRight, CheckCircle, Play, Users, TrendingUp, Shield } from "lucide-react";

// import ExternalLink from "../ExternalLink";

// // Main MLloOps Component
// export default function MLloOpsLanding() {
//   const phrases = [
//     "Confidence-Driven Workflows",
//     "AI-Powered Automation", 
//     "Structured Data Solutions",
//     "Continuous Model Learning"
//   ];

//   const [currentPhrase, setCurrentPhrase] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

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

//   const features = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Lightning Fast Processing",
//       description: "Process data at unprecedented speeds with our optimized ML pipelines"
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Precision Accuracy",
//       description: "Achieve human-level precision with AI-enhanced quality control"
//     },
//     {
//       icon: <Layers className="w-6 h-6" />,
//       title: "Scalable Architecture",
//       description: "Seamlessly scale from prototype to production with enterprise-grade infrastructure"
//     }
//   ];

//   const stats = [
//     { number: "99.9%", label: "Accuracy Rate" },
//     { number: "10x", label: "Faster Processing" },
//     { number: "500+", label: "Happy Clients" },
//     { number: "24/7", label: "Support" }
//   ];



//   return (
//     <div className="min-h-screen relative">
   

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Gradient Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 ">
//           <div className="grid lg:grid-cols-1 gap-12 items-center">
//             {/* Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
//                 <Zap className="w-4 h-4 mr-2" />
//                 Next-Gen ML Operations Platform
//               </div>

//               <div className="space-y-6">
//                 <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                   <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
//                     AI Speed.
//                   </span>
               
//                   <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
//                     Human Precision.
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                     MLloOps
//                   </span>
//                 </h1>

//                 <div className="h-16 flex items-center">
//                   <p className="text-xl text-slate-600 dark:text-slate-300">
//                     Powered by{" "}
//                     <span className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
//                       <span className="relative">
//                         <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
//                           {phrases[currentPhrase]}
//                         </span>
//                         <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-lg opacity-30 blur animate-pulse"></div>
//                       </span>
//                     </span>
//                   </p>
//                 </div>

//                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//                   MLloOps™ transforms machine learning operations by combining AI automation with human expertise, delivering unmatched speed, accuracy, and scalability for data workflows.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 {/* <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
//                   Get Started with MLloOps
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button> */}
//                    <ExternalLink
//                   href="https://mlloops.rbg.ai/"
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
//                 >
//                   Get Started with MLloOps™
//                 </ExternalLink>
//                 <button className="group bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
//                   <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
//                   Watch Demo
//                 </button>
//               </div>

//               <div className="flex items-center space-x-6 pt-4">
//                 <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
//                   <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                   No credit card required
//                 </div>
//                 <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
//                   <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                   14-day free trial
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200 dark:border-slate-700">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   {stat.number}
//                 </div>
//                 <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mt-2">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
// import {
//   Zap,
//   Target,
//   Layers,
//   ArrowRight,
//   Play,
//   Shield,
//   CheckCircle,
// } from "lucide-react";
// import ExternalLink from "../ExternalLink";

// export default function MLloOpsLanding() {
//   const phrases = [
//     "Confidence-Driven Workflows",
//     "AI-Powered Automation",
//     "Structured Data Solutions",
//     "Continuous Model Learning",
//   ];

//   const [currentPhrase, setCurrentPhrase] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

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

//   const stats = [
//     { number: "99.9%", label: "Accuracy Rate" },
//     { number: "10x", label: "Faster Processing" },
//     { number: "500+", label: "Happy Clients" },
//     { number: "24/7", label: "Support" },
//   ];

//   // Hover tilt effect setup for right-side card
//   const cardRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-100, 100], [15, -15]);
//   const rotateY = useTransform(x, [-100, 100], [-15, 15]);

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Background Blurs */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
//         {/* ========== HERO SECTION ========== */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE */}
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-10"
//           >
//             <motion.div
//               className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Zap className="w-4 h-4 mr-2" />
//               Next-Gen ML Operations Platform
//             </motion.div>

//             <div className="space-y-6">
//               <motion.h1
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 100 }}
//                 className="text-5xl lg:text-6xl font-bold leading-tight"
//               >
//                 <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
//                   AI Speed.
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
//                   Human Precision.
//                 </span>
//               </motion.h1>

//               <div className="h-16 flex items-center">
//                 <p className="text-xl text-slate-600 dark:text-slate-300">
//                   Powered by{" "}
//                   <AnimatePresence mode="wait">
//                     <motion.span
//                       key={currentPhrase}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.3 }}
//                       className="relative inline-block"
//                     >
//                       <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
//                         {phrases[currentPhrase]}
//                       </span>
//                     </motion.span>
//                   </AnimatePresence>
//                 </p>
//               </div>

//               <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
//                 MLloOps™ redefines AI infrastructure — blending automation, precision,
//                 and scale to accelerate every ML workflow with confidence.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <motion.div whileHover={{ scale: 1.05 }}>
//                 <ExternalLink
//                   href="https://mlloops.rbg.ai/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center"
//                 >
//                   Get Started
//                   <motion.div whileHover={{ x: 5 }} className="ml-2">
//                     <ArrowRight className="w-5 h-5" />
//                   </motion.div>
//                 </ExternalLink>
//               </motion.div>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
//                 }}
//                 className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center transition-all"
//               >
//                 <Play className="mr-2 w-5 h-5" />
//                 Watch Demo
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE — INTERACTIVE CARD */}
//           <motion.div
//             ref={cardRef}
//             style={{ rotateX, rotateY }}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-indigo-950 p-[2px] rounded-3xl shadow-2xl hover:shadow-blue-400/20 transition-all duration-500"
//           >
//             <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center flex flex-col items-center justify-center space-y-4">
//               <motion.div
//                 whileHover={{ scale: 1.2, rotate: 10 }}
//                 transition={{ type: "spring", stiffness: 150 }}
//               >
//                 <Shield className="w-14 h-14 text-blue-600 dark:text-blue-400" />
//               </motion.div>
//               <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Intelligent & Adaptive
//               </h2>
//               <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
//                 Experience adaptive ML pipelines that evolve with your data —
//                 faster, smarter, and built to scale with every iteration.
//               </p>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-lg"
//               >
//                 Explore Capabilities
//               </motion.div>

//               {/* Subtle animated gradient ring */}
//               <motion.div
//                 className="absolute inset-0 rounded-3xl border-[3px] border-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 opacity-30 blur-xl"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* STATS */}
//         {/* <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200 dark:border-slate-700"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="text-center transition-transform"
//             >
//               <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 {stat.number}
//               </div>
//               <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mt-2">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div> */}

//         {/* === AI ACTIVITY PANEL === */}
// <motion.div
//   initial={{ opacity: 0, y: 50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.5, duration: 0.8 }}
//   className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-700"
// >
//   <h3 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-10">
//     Real-Time AI Intelligence Feed
//   </h3>

//   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     {/* CARD 1 */}
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       transition={{ type: "spring", stiffness: 100 }}
//       className="relative bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl p-6 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 overflow-hidden"
//     >
//       <div className="flex justify-between items-center">
//         <h4 className="text-slate-700 dark:text-slate-200 font-semibold">Model Activity</h4>
//         <Target className="w-5 h-5 text-blue-500" />
//       </div>

//       {/* Animated Bars */}
//       <div className="mt-6 space-y-2">
//         {[60, 80, 45, 90, 70].map((height, idx) => (
//           <motion.div
//             key={idx}
//             className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
//           >
//             <motion.div
//               animate={{
//                 width: [`${height - 10}%`, `${height + 10}%`, `${height}%`],
//               }}
//               transition={{
//                 duration: 2 + idx,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//               }}
//               className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>

//     {/* CARD 2 */}
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="relative bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl p-6 backdrop-blur-xl border border-purple-200/30 dark:border-purple-800/30 overflow-hidden"
//     >
//       <div className="flex justify-between items-center">
//         <h4 className="text-slate-700 dark:text-slate-200 font-semibold">Data Stream</h4>
//         <Layers className="w-5 h-5 text-purple-500" />
//       </div>

//       {/* Pulsing Circles */}
//       <div className="flex items-center justify-center mt-6 space-x-3">
//         {[0, 0.3, 0.6].map((delay, i) => (
//           <motion.div
//             key={i}
//             className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//             animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               delay,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-4">
//         Live packet sync with adaptive nodes
//       </p>
//     </motion.div>

//     {/* CARD 3 */}
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="relative bg-gradient-to-br from-emerald-600/10 to-green-600/10 rounded-2xl p-6 backdrop-blur-xl border border-emerald-200/30 dark:border-emerald-800/30 overflow-hidden"
//     >
//       <div className="flex justify-between items-center">
//         <h4 className="text-slate-700 dark:text-slate-200 font-semibold">Confidence Score</h4>
//         <CheckCircle className="w-5 h-5 text-emerald-500" />
//       </div>

//       {/* Animated Line */}
//       <motion.div
//         className="relative mt-6 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
//       >
//         <motion.div
//           animate={{ x: ["0%", "100%"] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//           className="absolute w-1/3 h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
//         />
//       </motion.div>

//       <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-4">
//         Current accuracy: 99.9%
//       </p>
//     </motion.div>

//     {/* CARD 4 */}
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="relative bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl p-6 backdrop-blur-xl border border-yellow-200/30 dark:border-yellow-800/30 overflow-hidden"
//     >
//       <div className="flex justify-between items-center">
//         <h4 className="text-slate-700 dark:text-slate-200 font-semibold">System Load</h4>
//         <Zap className="w-5 h-5 text-yellow-500" />
//       </div>

//       {/* Rotating Ring */}
//       <div className="relative mt-6 flex items-center justify-center">
//         <motion.div
//           className="w-20 h-20 rounded-full border-4 border-yellow-300 border-t-transparent"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//         />
//         <span className="absolute text-yellow-600 dark:text-yellow-400 font-semibold text-sm">
//           62%
//         </span>
//       </div>

//       <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-4">
//         Resource utilization in real-time
//       </p>
//     </motion.div>
//   </div>
// </motion.div>

//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Zap, Target, Layers, ArrowRight, Play, Shield, CheckCircle } from "lucide-react";
import ExternalLink from "../ExternalLink";

export default function MLloOpsLanding() {
  const phrases = [
    "Confidence-Driven Workflows",
    "AI-Powered Automation",
    "Structured Data Solutions",
    "Continuous Model Learning",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Parent variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* HERO SECTION */}
        <motion.div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div variants={childVariants} className="space-y-10">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 mr-2" />
              Next-Gen ML Operations Platform
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                  AI Speed.
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                  Human Precision.
                </span>
              </motion.h1>

              <div className="h-16 flex items-center">
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Powered by{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentPhrase}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative inline-block"
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                        {phrases[currentPhrase]}
                      </span>
                    </motion.span>
                  </AnimatePresence>
                </p>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                MLloOps™ redefines AI infrastructure — blending automation, precision,
                and scale to accelerate every ML workflow with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <ExternalLink
                  href="https://mlloops.rbg.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center"
                >
                  Get Started
                  <motion.div whileHover={{ x: 5 }} className="ml-2">
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </ExternalLink>
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                }}
                className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center transition-all"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
         <Link to="/MLloOps">
  <motion.div
    variants={childVariants}
    ref={cardRef}
    style={{ rotateX, rotateY }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-indigo-950 p-[2px] rounded-3xl shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 cursor-pointer"
  >
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center flex flex-col items-center justify-center space-y-4">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <Shield className="w-14 h-14 text-blue-600 dark:text-blue-400" />
      </motion.div>
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Intelligent & Adaptive
      </h2>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
        Experience adaptive ML pipelines that evolve with your data —
        faster, smarter, and built to scale with every iteration.
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-lg"
      >
        Explore Capabilities
      </motion.div>

      {/* Subtle animated gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-[3px] border-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 opacity-30 blur-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </motion.div>
</Link>
        </motion.div>

        {/* AI ACTIVITY PANEL */}
        <motion.div variants={childVariants} className="mt-24">
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-700"
>
  <h3 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-10">
    Real-Time AI Intelligence Feed
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* CARD 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="relative bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl p-6 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-slate-700 dark:text-slate-200 font-semibold">Model Activity</h4>
        <Target className="w-5 h-5 text-blue-500" />
      </div>

      {/* Animated Bars */}
      <div className="mt-6 space-y-2">
        {[60, 80, 45, 90, 70].map((height, idx) => (
          <motion.div
            key={idx}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          >
            <motion.div
              animate={{
                width: [`${height - 10}%`, `${height + 10}%`, `${height}%`],
              }}
              transition={{
                duration: 2 + idx,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl p-6 backdrop-blur-xl border border-purple-200/30 dark:border-purple-800/30 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-slate-700 dark:text-slate-200 font-semibold">Data Stream</h4>
        <Layers className="w-5 h-5 text-purple-500" />
      </div>

      {/* Pulsing Circles */}
      <div className="flex items-center justify-center mt-6 space-x-3">
        {[0, 0.3, 0.6].map((delay, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-4">
        Live packet sync with adaptive nodes
      </p>
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-gradient-to-br from-emerald-600/10 to-green-600/10 rounded-2xl p-6 backdrop-blur-xl border border-emerald-200/30 dark:border-emerald-800/30 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-slate-700 dark:text-slate-200 font-semibold">Confidence Score</h4>
        <CheckCircle className="w-5 h-5 text-emerald-500" />
      </div>

      {/* Animated Line */}
      <motion.div
        className="relative mt-6 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
      >
        <motion.div
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute w-1/3 h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
        />
      </motion.div>

      <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-4">
        Current accuracy: 99.9%
      </p>
    </motion.div>

    {/* CARD 4 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl p-6 backdrop-blur-xl border border-yellow-200/30 dark:border-yellow-800/30 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-slate-700 dark:text-slate-200 font-semibold">System Load</h4>
        <Zap className="w-5 h-5 text-yellow-500" />
      </div>

      {/* Rotating Ring */}
      <div className="relative mt-6 flex items-center justify-center">
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-yellow-300 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <span className="absolute text-yellow-600 dark:text-yellow-400 font-semibold text-sm">
          62%
        </span>
      </div>

      <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-4">
        Resource utilization in real-time
      </p>
    </motion.div>
  </div>
</motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
