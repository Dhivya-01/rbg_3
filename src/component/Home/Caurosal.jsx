
// "use client";
// import  {Link} from "react-router-dom"
// import { Webchat, Fab } from '@botpress/webchat';
// import React, { useEffect, useState } from "react";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import TextType from "../../components/ui/Text";
// // import { useNavigate } from "react-router-dom"; // Commented out for artifact compatibility
// import { ArrowRight, ExternalLink, Phone, Mail, MessageCircle, Rocket, X } from "lucide-react";

// export function Carouselflow() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isContactOpen, setIsContactOpen] = useState(false);
// // const [isWebchatOpen, setIsWebchatOpen] = useState(false);
//   // Add Botpress state
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);
//   // const navigate = useNavigate(); // Commented out for artifact compatibility

//   useEffect(() => {
//     setIsLoaded(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//     // Updated openChatbot function
//   const openChatbot = () => {
//     setIsWebchatOpen(true);
//     setIsContactOpen(false); // Close contact panel when opening chat
//   };

//   const contactOptions = [
//     { 
//       id: 'phone',
//       icon: Phone, 
//       label: "Call", 
//       detail: "+1-555-0123", 
//       action: () => window.open('tel:+15550123'),
//       color: 'from-blue-500 to-blue-600'
//     },
//     { 
//       id: 'email',
//       icon: Mail, 
//       label: "Email", 
//       detail: "hr@rbg.ai", 
//       action: () => window.open('hr@rbg.ai'),
//       color: 'from-green-500 to-green-600'
//     },
//     { 
//       id: 'chat',
//       icon: MessageCircle, 
//       label: "Chat", 
//       detail: "Live support", 
//       action: openChatbot,
//       color: 'from-purple-500 to-purple-600'
//     },
//     { 
//       id: 'start',
//       icon: Rocket, 
//       label: "Start", 
//       detail: "Free trial", 
//       action: openChatbot,
//       color: 'from-orange-500 to-orange-600'
//     }
//   ];

//   return (
//     <div className="relative overflow-hidden">
//       {/* Background animations - keep your existing code */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)`
//           }}
//         />
        
//         <div className="absolute inset-0 opacity-[0.03]" 
//              style={{
//                backgroundImage: `linear-gradient(rgba(251, 113, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 113, 133, 0.3) 1px, transparent 1px)`,
//                backgroundSize: '50px 50px',
//                animation: 'gridMove 20s linear infinite'
//              }} 
//         />
        
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-rose-400 to-red-400 rounded-full opacity-20 animate-float-random"
//           />
//         ))}
//       </div>


//      {isWebchatOpen && (
//   <>
//     {/* Backdrop overlay for mobile */}
//     <div
//       onClick={() => setIsWebchatOpen(false)}
//       className="fixed inset-0 bg-black/50 z-40 md:hidden"
//     />
    
//     {/* Chat Container */}
//     <div className="fixed bottom-8 right-0 md:bottom-16 md:right-6 w-full h-full md:w-96 md:h-[600px] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 bg-[#8ba3c4] text-white rounded-t-2xl md:rounded-t-2xl flex-shrink-0">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 bg-[#8ba3c4] rounded-full flex items-center justify-center">
//             <MessageCircle size={18} />
//           </div>
//           <div>
//             <h3 className="font-semibold">Support Chat</h3>
//             <p className="text-xs opacity-75">Online</p>
//           </div>
//         </div>
        
//         <button
//           onClick={() => setIsWebchatOpen(false)}
//           className="p-2 hover:bg-gray-700 rounded-full transition-colors"
//         >
//           <X size={18} />
//         </button>
//       </div>
      
//       {/* Botpress Webchat - Full height container */}
//       <div className="flex-1 relative" style={{ height: 'calc(100% - 72px)' }}>
//         <Webchat
//           botId="56bc7b05-885f-4aa9-8d14-139fa279cba8"
//           clientId="de6fbeec-cc2a-4107-a53e-628d394619c9"
//           configuration={{
//             version: "v2",
//             color: '#8ba3c4',
//             variant: "solid",
//             headerVariant: "none",
//             themeMode: 'light',
//             fontFamily: 'inter',
//             radius: 4,
//             feedbackEnabled: false,
//             soundEnabled: false,
//             showUserName: true,
//             showPoweredBy: false,
//             botName: "RBG.AI",
//             botAvatar: "",
//             composerPlaceholder: "Type your message..."
//           }}
//         />
//       </div>
//     </div>
//   </>
// )}

//       {/* Mobile Floating Contact Button */}
//       <div className="md:hidden fixed bottom-6 right-6 z-50">
//         <div className="relative">
//           {/* Backdrop overlay when open */}
//           {isContactOpen && (
//             <div 
//               className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
//               onClick={() => setIsContactOpen(false)}
//             />
//           )}
          
//           {/* Contact options - Mobile */}
//           <div className={`absolute bottom-16 right-0 transition-all duration-500 transform ${
//             isContactOpen 
//               ? 'opacity-100 translate-y-0 scale-100' 
//               : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
//           }`}>
//             <div className="flex flex-col space-y-3">
//               {contactOptions.map((option, idx) => {
//                 const IconComponent = option.icon;
//                 return (
//                   <div
//                     key={option.id}
//                     className="transform transition-all duration-300"
//                     style={{
//                       transitionDelay: isContactOpen ? `${idx * 100}ms` : '0ms'
//                     }}
//                   >
//                     <button
//                       onClick={() => {
//                         option.action();
//                         setIsContactOpen(false);
//                       }}
//                       className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative`}
//                     >
//                       <IconComponent size={20} />
                      
//                       {/* Tooltip */}
//                       <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//                         <div className="font-semibold text-xs">{option.label}</div>
//                         <div className="text-gray-300 text-xs">{option.detail}</div>
//                       </div>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Main contact button - Mobile */}
//           <button
//             onClick={() => setIsContactOpen(!isContactOpen)}
//             className={`w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
//               isContactOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
//             }`}
//           >
//             {isContactOpen ? (
//               <X size={24} />
//             ) : (
//               <MessageCircle size={24} />
//             )}
//           </button>
//         </div>
//       </div>


//       {/* Desktop Floating Contact Panel */}
// <div className="hidden md:flex fixed bottom-6 right-6 z-50">
//   <div className="relative">
//     {/* Contact options - Desktop */}
//     <div
//       className={`absolute bottom-16 right-0 transition-all duration-500 transform ${
//         isContactOpen
//           ? "opacity-100 translate-y-0 scale-100"
//           : "opacity-0 translate-y-4 scale-95 pointer-events-none"
//       }`}
//     >
//       <div className="flex flex-col space-y-3 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50">
//         {contactOptions.map((option, idx) => {
//           const IconComponent = option.icon;
//           return (
//             <div
//               key={option.id}
//               className="transform transition-all duration-300"
//               style={{
//                 transitionDelay: isContactOpen ? `${idx * 100}ms` : "0ms",
//               }}
//             >
//               <button
//                 onClick={() => {
//                   option.action();
//                   setIsContactOpen(false);
//                 }}
//                 className={`w-12 h-12 rounded-xl bg-gradient-to-r ${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative`}
//               >
//                 <IconComponent size={18} />

//                 {/* Tooltip */}
//                 <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//                   <div className="font-semibold text-sm">{option.label}</div>
//                   <div className="text-gray-300 text-xs">{option.detail}</div>
//                 </div>
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>

//     {/* Main contact button - Desktop */}
//     <button
//       onClick={() => setIsContactOpen(!isContactOpen)}
//       className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
//         isContactOpen ? "rotate-45 scale-110" : "hover:scale-110"
//       }`}
//     >
//       {isContactOpen ? <X size={24} /> : <MessageCircle size={24} />}
//     </button>
//   </div>
// </div>


//       {/* Your existing content sections */}
//       <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//         <div className="pt-8 pb-4">
         
//           <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black dark:text-white">
//               MLloOps™ <br />
//               <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
//                 Transformation
//               </span>
//             </h1>
//           </>
//         }
//       >
//         <img
//           src={`https://res.cloudinary.com/datwcxi7y/image/upload/v1758274580/GIF_V2_wqinhg.gif`}
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top"
//           draggable={false}
//         />
//       </ContainerScroll>
//         </div>

//         {/* Rest of your existing content */}
//         <section className="py-8 px-4 pb-24 md:pb-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                 <TextType 
//                   text={["Why choose MLloOps?"]}
//                   typingSpeed={80}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={false}
//                 />
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
//                 <TextType 
//                   text={["Streamline your ML operations with our intelligent platform"]}
//                   typingSpeed={40}
//                   loop={false}
//                   pauseDuration={0}
//                   showCursor={false}
//                 />
//               </p>
//             </div>

//             {/* Feature cards and main CTA section */}
//             <div className="bg-gradient-to-r from-rose-50/50 via-white/80 to-red-50/50 backdrop-blur-md rounded-2xl border border-white/50 p-6 sm:p-8 text-center">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
//               <p className="text-sm sm:text-base text-gray-600 mb-6">Join thousands of ML engineers worldwide</p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                
//  <Link
//   to="/Contact"
//   className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center"
// >
// Get Started Today
// <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
// </Link>
//                 <a
//                   href="https://mlloops.rbg.ai/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group border-2 border-slate-300 hover:border-red-300 text-slate-700 hover:text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50"
//                 >
//                   <ExternalLink className="w-5 h-5 mr-2" />
//                   Let's Start with MLloOps
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* CSS animations */}
//       <style jsx>{`
//         @keyframes gridMove {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }
        
//         @keyframes float-random {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-20px) translateX(10px); }
//           50% { transform: translateY(-10px) translateX(-15px); }
//           75% { transform: translateY(-30px) translateX(5px); }
//         }
        
//         .animate-float-random {
//           animation: float-random 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Carouselflow;



"use client";
import { Link } from "react-router-dom";
import { Webchat, Fab } from '@botpress/webchat';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import TextType from "../../components/ui/Text";
import { ArrowRight, ExternalLink, Phone, Mail, MessageCircle, Rocket, X } from "lucide-react";

export function Carouselflow() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openChatbot = () => {
    setIsWebchatOpen(true);
    setIsContactOpen(false);
  };

  const contactOptions = [
    { id: 'phone', icon: Phone, label: "Call", detail: "+1-555-0123", action: () => window.open('tel:+15550123'), color: 'from-blue-500 to-blue-600' },
    { id: 'email', icon: Mail, label: "Email", detail: "hr@rbg.ai", action: () => window.open('hr@rbg.ai'), color: 'from-green-500 to-green-600' },
    { id: 'chat', icon: MessageCircle, label: "Chat", detail: "Live support", action: openChatbot, color: 'from-purple-500 to-purple-600' },
    { id: 'start', icon: Rocket, label: "Start", detail: "Free trial", action: openChatbot, color: 'from-orange-500 to-orange-600' }
  ];

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 113, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 113, 133, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-rose-400 to-red-400 rounded-full opacity-20 animate-float-random"
          />
        ))}
      </div>

      {/* Webchat */}
      {isWebchatOpen && (
        <>
          <div onClick={() => setIsWebchatOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden" />
          <div className="fixed bottom-8 right-0 md:bottom-16 md:right-6 w-full h-full md:w-96 md:h-[600px] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-[#8ba3c4] text-white rounded-t-2xl md:rounded-t-2xl flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#8ba3c4] rounded-full flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">Support Chat</h3>
                  <p className="text-xs opacity-75">Online</p>
                </div>
              </div>
              <button onClick={() => setIsWebchatOpen(false)} className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 relative" style={{ height: 'calc(100% - 72px)' }}>
              <Webchat
                botId="56bc7b05-885f-4aa9-8d14-139fa279cba8"
                clientId="de6fbeec-cc2a-4107-a53e-628d394619c9"
                configuration={{
                  version: "v2",
                  color: '#8ba3c4',
                  variant: "solid",
                  headerVariant: "none",
                  themeMode: 'light',
                  fontFamily: 'inter',
                  radius: 4,
                  feedbackEnabled: false,
                  soundEnabled: false,
                  showUserName: true,
                  showPoweredBy: false,
                  botName: "RBG.AI",
                  botAvatar: "",
                  composerPlaceholder: "Type your message..."
                }}
              />
            </div>
          </div>
        </>
      )}

      {/* Floating contact button (mobile + desktop) */}
      {/* ...Your existing contact button code remains unchanged ... */}

      {/* Main content */}
      <motion.div variants={childVariants} className="pt-8 pb-4">
        <ContainerScroll
          titleComponent={
            <motion.div variants={childVariants}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black dark:text-white">
                MLloOps™ <br />
                <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
                  Transformation
                </span>
              </h1>
            </motion.div>
          }
        >
          <motion.img
            src="https://res.cloudinary.com/datwcxi7y/image/upload/v1758274580/GIF_V2_wqinhg.gif"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            variants={childVariants}
          />
        </ContainerScroll>
      </motion.div>

      {/* CTA Section */}
      <motion.section variants={childVariants} className="py-8 px-4 pb-24 md:pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <motion.h2 variants={childVariants} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              <TextType text={["Why choose MLloOps?"]} typingSpeed={80} loop={false} pauseDuration={0} showCursor={false} />
            </motion.h2>
            <motion.p variants={childVariants} className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              <TextType text={["Streamline your ML operations with our intelligent platform"]} typingSpeed={40} loop={false} pauseDuration={0} showCursor={false} />
            </motion.p>
          </div>

          <motion.div variants={childVariants} className="bg-gradient-to-r from-rose-50/50 via-white/80 to-red-50/50 backdrop-blur-md rounded-2xl border border-white/50 p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Join thousands of ML engineers worldwide</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/Contact"
                className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://mlloops.rbg.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-slate-300 hover:border-red-300 text-slate-700 hover:text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Let's Start with MLloOps
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        .animate-float-random { animation: float-random 8s ease-in-out infinite; }
      `}</style>
    </motion.div>
  );
}

export default Carouselflow;
