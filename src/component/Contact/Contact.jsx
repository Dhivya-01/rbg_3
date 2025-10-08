// import { useEffect, useState } from "react";
// import { FaDirections } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { WorldMap } from "./WorldMap";

// export default function Contact() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [alert, setAlert] = useState(false);

//   const address = [
//     {
//       place: "Coimbatore",
//       name: "SREC Spark Incubation Foundation",
//       location: "AIDC-1 ",
//       address:
//         "Sri Ramakrishna Engineering College, Coimbatore, Tamil Nadu 641022, IN.",
//       direction:
//         "https://www.bing.com/maps?osid=3ff44d05-5746-41ec-a03a-0459c9e165ed&cp=11.060858~76.944651&lvl=13.32&pi=0&imgid=fed65f40-8ac6-4624-84b6-1b5216585a90&v=2&sV=2&form=S00027",
//     },
//     {
//       place: "Hyderabad",
//       name: "ITIC Incubator, Indian Institute of Technology",
//       location: "AIDC-2",
//       address: "Hyderabad Kandi, Sangareddy, Telangana INDIA – 502284",
//       direction:
//         "https://www.bing.com/maps?&ty=30&q=Hyderabad%20Kandi%2C%20Sangareddy%2C%20Telangana%20INDIA%20%E2%80%93%20502284&vdpid=7462382632966291457&mb=17.711327~78.070854~17.427224~78.218826&cardbg=%23F98745&dt=1758882600000&tt=Kandi%2C%20Sangareddy%20District%2C%20Telangana&tsts0=%2526ty%253D30%2526q%253DHyderabad%252520Kandi%25252C%252520Sangareddy%25252C%252520Telangana%252520INDIA%252520%2525E2%252580%252593%252520502284%2526vdpid%253D7462382632966291457%2526mb%253D17.711327~78.070854~17.427224~78.218826%2526cardbg%253D%252523F98745%2526dt%253D1758882600000&tstt0=Kandi%2C%20Sangareddy%20District%2C%20Telangana&cp=17.569411~78.059578&lvl=12&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027",
//     },
//     {
//       place: "Coimbatore",
//       name: "Amrita's Innovation and Incubation Centre",
//       location: "AIDC-3",
//       address:
//         "Amritanagar, Ettimadai, CIR Building, Coimbatore, Tamil Nadu 641112, IN.",
//       direction:
//         "https://www.bing.com/maps?osid=a2c00aa8-da48-44f9-bd55-ab114bc9059e&cp=11.001355~76.962597&lvl=16&pi=0&imgid=a6736469-886d-4928-9776-6cbf9036f3de&v=2&sV=2&form=S00027",
//     },
//     {
//       place: "Coimbatore",
//       name: "Forge Innovation & Ventures",
//       location: "AIDC-4",
//       address:
//         "KCT Tech Park, Saravanampatty, Coimbatore, Tamil Nadu 641049, IN.",
//       direction:
//         "https://www.bing.com/maps?osid=4cbe2795-5a05-46dd-aa06-47dbf9bc7a55&cp=11.308381~77.691879&lvl=11&pi=0&v=2&sV=2&form=S00027",
//     },
//   ];

//   const handleCopyToClipboard = () => {
//     const email = "contact@rbg.ai";

//     navigator.clipboard
//       .writeText(email)
//       .then(() => {
//         setAlert(true);
//         setTimeout(() => {
//           setAlert(false);
//         }, 2000);
//       })
//       .catch((err) => {});
//   };

//   return (
//     <div className="md:px-20 py-5 px-5 max-w-7xl mx-auto flex flex-col items-start space-y-12 text-left font-Inter text-zinc-600">
//       <h1 className="text-2xl md:text-4xl text-zinc-800 mt-10 md:mt-20">
//         How Can We Help You Today?
//       </h1>

//       <p className="text-base md:text-xl">
//         Whether you have a specific requirement or need to structure unstructured data with
// MLStack and MLloOps™, we’ve got you covered.
//       </p>

//       <button
//         onClick={handleCopyToClipboard}
//         className="relative bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         contact@rbg.ai
//         {alert ? (
//           <p className="absolute text-left top-full left-0 w-[15rem] text-red-400">
//             Text copied to Clipboard!🫡
//           </p>
//         ) : (
//           <></>
//         )}
//       </button>

//       {/* Add the world map component here */}
//       <div className="w-full">
//         <h2 className="text-2xl font-semibold mb-4 text-zinc-800">
//           Our Global Presence
//         </h2>
//         <WorldMap />
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 font-medium font-Poppins text-md md:text-lg">
//         {address.map((item, index) => (
//           <div key={index} className="text-left rounded p-4 ">
//             <h1 className="font-semibold text-zinc-800 text-2xl">
//               {item.place}-<span className="font-semibold ">{item.name}</span>
//             </h1>
//             <h3 className="font-medium text-zinc-500 ">{item.location}</h3>
//             <span className=" font-light">
//               {item.name}, {item.address}
//             </span>
//             <br />
//             <Link
//               className="flex items-center gap-2 text-blue-600 py-2 "
//               to={item.direction}
//             >
//               <FaDirections />
//               Get Direction
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className="space-y-5 text-zinc-800 border-2 p-5 rounded">
//         <h1 className="text-4xl font-semibold font-Poppins">
//           Registered Address
//         </h1>
//         <h2 className="text-2xl text-zinc-600 font-medium font-Poppins">
//           Resilience Business Grids LLP
//         </h2>
//         <p className="text-zinc-600 font-light font-Poppins text-xl">
//           C/O H. D. Usha H.H Balakrishnan, D. NO. 57, T.R.S, Vijayalakshmi Park,
//           Karamadai, Coimbatore, Tamil Nadu, 641104, India
//           <br />
//           <span className="mr-5 font-medium ">GST# 33ABDFR5937P1ZM</span>
//           <span className="ml-5 font-medium ">LLP# AAY-1911</span>
//         </p>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { Mail, Copy, Check, Building2, Navigation, MapPin, Phone, Clock, Users ,Brain,BarChart2} from "lucide-react";
// import { Loop } from "@mui/icons-material";

// export default function Contact() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [copiedEmail, setCopiedEmail] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);

//   const locations = [
//     {
//       id: 1,
//       place: "Coimbatore",
//       name: "SREC Spark Incubation Foundation",
//       location: "AIDC-1",
//       address: "Sri Ramakrishna Engineering College, Coimbatore, Tamil Nadu 641022, IN.",
//       direction: "https://www.bing.com/maps?osid=3ff44d05-5746-41ec-a03a-0459c9e165ed&cp=11.060858~76.944651&lvl=13.32&pi=0&imgid=fed65f40-8ac6-4624-84b6-1b5216585a90&v=2&sV=2&form=S00027",
//       color: "blue",
//       icon: "🚀",
//       description: "Innovation Hub for AI/ML Research"
//     },
//     {
//       id: 2,
//       place: "Hyderabad",
//       name: "ITIC Incubator, Indian Institute of Technology",
//       location: "AIDC-2",
//       address: "Hyderabad Kandi, Sangareddy, Telangana INDIA – 502284",
//       direction: "https://www.bing.com/maps?&ty=30&q=Hyderabad%20Kandi%2C%20Sangareddy%2C%20Telangana%20INDIA%20%E2%80%93%20502284&vdpid=7462382632966291457&mb=17.711327~78.070854~17.427424~78.218826&cardbg=%23F98745&dt=1758882600000&tstt0=Kandi%2C%20Sangareddy%20District%2C%20Telangana&cp=17.569411~78.059578&lvl=12&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027",
//       color: "purple",
//       icon: "🎯",
//       description: "Technology Incubation Center"
//     },
//     {
//       id: 3,
//       place: "Coimbatore",
//       name: "Amrita's Innovation and Incubation Centre",
//       location: "AIDC-3",
//       address: "Amritanagar, Ettimadai, CIR Building, Coimbatore, Tamil Nadu 641112, IN.",
//       direction: "https://www.bing.com/maps?osid=a2c00aa8-da48-44f9-bd55-ab114bc9059e&cp=11.001355~76.962597&lvl=16&pi=0&imgid=a6736469-886d-4928-9776-6cbf9036f3de&v=2&sV=2&form=S00027",
//       color: "emerald",
//       icon: "🌟",
//       description: "Research & Development Center"
//     },
//     {
//       id: 4,
//       place: "Coimbatore",
//       name: "Forge Innovation & Ventures",
//       location: "AIDC-4",
//       address: "KCT Tech Park, Saravanampatty, Coimbatore, Tamil Nadu 641049, IN.",
//       direction: "https://www.bing.com/maps?osid=4cbe2795-5a05-46dd-aa06-47dbf9bc7a55&cp=11.308381~77.691879&lvl=11&pi=0&v=2&sV=2&form=S00027",
//       color: "orange",
//       icon: "⚡",
//       description: "Startup Acceleration Hub"
//     },
//   ];

//   const handleCopyEmail = async () => {
//     const email = "contact@rbg.ai";
//     try {
//       await navigator.clipboard.writeText(email);
//       setCopiedEmail(true);
//       setTimeout(() => setCopiedEmail(false), 2000);
//     } catch (err) {
//       console.error('Failed to copy email:', err);
//     }
//   };

//   const getColorClasses = (color) => {
//     const colorMap = {
//       blue: {
//         gradient: "from-blue-500 to-blue-600",
//         light: "bg-blue-50",
//         border: "border-blue-200",
//         text: "text-blue-600",
//         ring: "ring-blue-500/20"
//       },
//       purple: {
//         gradient: "from-blue-500 to-blue-600",
//         light: "bg-blue-50",
//         border: "border-blue-200",
//         text: "text-blue-600",
//         ring: "ring-blue-500/20"
//       },
//       emerald: {
//         gradient: "from-blue-500 to-blue-600",
//         light: "bg-blue-50",
//         border: "border-blue-200",
//         text: "text-blue-600",
//         ring: "ring-blue-500/20"
//       },
//       orange: {
//         gradient: "from-blue-500 to-blue-600",
//         light: "bg-blue-50",
//         border: "border-blue-200",
//         text: "text-blue-600",
//         ring: "ring-blue-500/20"
//       }
//     };
//     return colorMap[color] || colorMap.blue;
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-white">
      
//         <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
//           <div className="space-y-8">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
//               <Users className="w-4 h-4 mr-2" />
//               Ready to collaborate? Let's connect!
//             </div>
            
//             <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight">
//               Get In
//               <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
//                 Touch
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Transform your data challenges into intelligent solutions. Let's structure the unstructured with 
//               <span className="font-semibold text-blue-600"> MLStack</span> and 
//               <span className="font-semibold text-blue-600"> MLloOps™</span>
//             </p>
            
//             {/* Contact Actions */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
//               <button
//                 onClick={handleCopyEmail}
//                 className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
//               >
//                 <Mail className="w-5 h-5" />
//                 contact@rbg.ai
//                 {copiedEmail ? (
//                   <Check className="w-5 h-5 text-green-200" />
//                 ) : (
//                   <Copy className="w-5 h-5 opacity-70 group-hover:opacity-100" />
//                 )}
                
//                 {copiedEmail && (
//                   <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium animate-fade-in">
//                     Email Copied! ✓
//                   </div>
//                 )}
//               </button>
              
//               <div className="flex items-center gap-2 text-gray-500">
//                 <Clock className="w-4 h-4" />
//                 <span className="text-sm">We'll respond within 24 hours</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Why Partner With Us?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We're not just another tech company. We're your partners in AI transformation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
//             <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-6">
//               {/* <span className="text-2xl">🧠</span> */}
//               <Brain className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Expertise</h3>
//             <p className="text-gray-600">Cutting-edge machine learning solutions tailored for your business needs</p>
//           </div>

//           <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:shadow-lg transition-all duration-300">
//             <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-6">
//               <Loop className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">MLloOps Excellence</h3>
//             <p className="text-gray-600">Streamlined ML workflows with our proprietary MLloOps™ platform</p>
//           </div>

//           <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 hover:shadow-lg transition-all duration-300">
//             <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-6">
//               <BarChart2 className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Intelligence</h3>
//             <p className="text-gray-600">Transform unstructured data into actionable business insights</p>
//           </div>
//         </div>
//       </div>

//       {/* Locations Section with Creative Layout */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our Innovation Centers
//           </h2>
//           <p className="text-xl text-gray-600">
//             Strategically located across India's tech hubs
//           </p>
//         </div>

//         {/* Creative Hexagonal Layout */}
//         <div className="relative">
//           {/* Center Connection Lines */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-40 h-40 border-2 border-gray-200 rounded-full flex items-center justify-center">
//               <div className="text-2xl font-bold text-gray-400">RBG.AI</div>
//             </div>
//           </div>

//           {/* Location Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
//             {locations.map((location, index) => {
//               const colors = getColorClasses(location.color);
//               const isActive = activeCard === location.id;
              
//               return (
//                 <div
//                   key={location.id}
//                   className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 p-8 transform hover:scale-105 transition-all duration-500 cursor-pointer ${isActive ? `${colors.ring} ring-4` : ''}`}
//                   onMouseEnter={() => setActiveCard(location.id)}
//                   onMouseLeave={() => setActiveCard(null)}
//                 >
//                   {/* Floating Icon */}
//                   {/* <div className={`absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
//                     <span className="text-white text-xl">{location.icon}</span>
//                   </div> */}
                  
//                   {/* Card Content */}
//                   <div className="space-y-6">
//                     <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.light} text-blue-600 text-sm font-semibold`}>
//                       <MapPin className="w-4 h-4 mr-1" />
//                       {location.location}
//                     </div>
                    
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.place}</h3>
//                       <p className="text-lg font-semibold text-gray-700 mb-2">{location.name}</p>
//                       <p className={`text-sm ${colors.text} font-medium mb-4`}>{location.description}</p>
//                     </div>
                    
//                     <p className="text-gray-600 leading-relaxed">{location.address}</p>
                    
//                     <a
//                       href={location.direction}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`inline-flex items-center gap-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
//                     >
//                       <Navigation className="w-4 h-4" />
//                       Get Directions
//                     </a>
//                   </div>

//                   {/* Animated Background Pattern */}
//                   <div className="absolute inset-0 overflow-hidden rounded-3xl">
//                     <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-full -translate-y-16 translate-x-16 opacity-50`}></div>
//                     <div className={`absolute bottom-0 left-0 w-20 h-20 ${colors.light} rounded-full translate-y-10 -translate-x-10 opacity-30`}></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Registered Address Section */}
//       <div className="max-w-7xl mx-auto px-6 pb-20">
//         <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden relative">
//           <div className="absolute inset-0 bg-white"></div>
//           <div className="absolute inset-0 bg-white"></div>
          
//           <div className="relative p-12 text-center">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-black/80 text-sm font-medium mb-8">
//               <Building2 className="w-4 h-4 mr-2" />
//               Legal Information
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
//               Registered Address
//             </h2>
            
//             <div className="max-w-4xl mx-auto space-y-8">
//               <h3 className="text-2xl md:text-3xl font-semibold text-blue-300">
//                 Resilience Business Grids LLP
//               </h3>
              
//               <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//                 C/O H. D. Usha H.H Balakrishnan, D. NO. 57, T.R.S, Vijayalakshmi Park,<br/>
//                 Karamadai, Coimbatore, Tamil Nadu, 641104, India
//               </p>
              
//               <div className="flex flex-col sm:flex-row justify-center gap-6">
//                 <div className="bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-blue-400/30">
//                   <span className="text-grey-500 font-semibold">GST# 33ABDFR5937P1ZM</span>
//                 </div>
//                 <div className="bg-white backdrop-blur-sm px-6 py-3 rounded-xl border border-purple-400/30">
//                   <span className="text-grey-500 font-semibold">LLP# AAY-1911</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(45deg); }
//           50% { transform: translateY(-10px) rotate(45deg); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0) rotate(45deg); }
//           50% { transform: translateY(-8px) rotate(45deg); }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 4s ease-in-out infinite 1s;
//         }
        
//         .animate-float-slow {
//           animation: float-slow 5s ease-in-out infinite 2s;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { Mail, Copy, Check, Building2, Navigation, MapPin, Clock, Users, Brain, BarChart2, ExternalLink } from "lucide-react";
import { Loop } from "@mui/icons-material";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const locations = [
    {
      id: 1,
      place: "Coimbatore",
      name: "SREC Spark Incubation Foundation",
      location: "AIDC-1",
      address: "Sri Ramakrishna Engineering College, Coimbatore, Tamil Nadu 641022, IN.",
      direction: "https://www.bing.com/maps?osid=3ff44d05-5746-41ec-a03a-0459c9e165ed&cp=11.060858~76.944651&lvl=13.32&pi=0&imgid=fed65f40-8ac6-4624-84b6-1b5216585a90&v=2&sV=2&form=S00027",
      color: "blue",
      icon: "🚀",
      description: "Innovation Hub for AI/ML Research"
    },
    {
      id: 2,
      place: "Hyderabad",
      name: "ITIC Incubator, Indian Institute of Technology",
      location: "AIDC-2",
      address: "Hyderabad Kandi, Sangareddy, Telangana INDIA – 502284",
      direction: "https://www.bing.com/maps?&ty=30&q=Hyderabad%20Kandi%2C%20Sangareddy%2C%20Telangana%20INDIA%20%E2%80%93%20502284&vdpid=7462382632966291457&mb=17.711327~78.070854~17.427424~78.218826&cardbg=%23F98745&dt=1758882600000&tstt0=Kandi%2C%20Sangareddy%20District%2C%20Telangana&cp=17.569411~78.059578&lvl=12&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027",
      color: "purple",
      icon: "🎯",
      description: "Technology Incubation Center"
    },
    {
      id: 3,
      place: "Coimbatore",
      name: "Amrita's Innovation and Incubation Centre",
      location: "AIDC-3",
      address: "Amritanagar, Ettimadai, CIR Building, Coimbatore, Tamil Nadu 641112, IN.",
      direction: "https://www.bing.com/maps?osid=a2c00aa8-da48-44f9-bd55-ab114bc9059e&cp=11.001355~76.962597&lvl=16&pi=0&imgid=a6736469-886d-4928-9776-6cbf9036f3de&v=2&sV=2&form=S00027",
      color: "emerald",
      icon: "🌟",
      description: "Research & Development Center"
    },
    {
      id: 4,
      place: "Coimbatore",
      name: "Forge Innovation & Ventures",
      location: "AIDC-4",
      address: "KCT Tech Park, Saravanampatty, Coimbatore, Tamil Nadu 641049, IN.",
      direction: "https://www.bing.com/maps?osid=4cbe2795-5a05-46dd-aa06-47dbf9bc7a55&cp=11.308381~77.691879&lvl=11&pi=0&v=2&sV=2&form=S00027",
      color: "orange",
      icon: "⚡",
      description: "Startup Acceleration Hub"
    },
  ];

  const handleCopyEmail = async () => {
    const email = "contact@rbg.ai";
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleDirectionClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        ring: "ring-blue-500/20",
        shadow: "shadow-blue-500/25"
      },
      purple: {
        gradient: "from-blue-500 to-blue-600",
        light: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        ring: "ring-blue-500/20",
        shadow: "shadow-blue-500/25"
      },
      emerald: {
        gradient: "from-blue-500 to-blue-600",
        light: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-600",
        ring: "ring-blue-500/20",
        shadow: "shadow-blue-500/25"
      },
      orange: {
        gradient: "from-blue-500 to-blue-600",
        light: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        ring: "ring-blue-500/20",
        shadow: "shadow-blue-500/25"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        {/* Animated Background Elements */}
       
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 text-center relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4 sm:mb-6 animate-fade-in-up">
              <Users className="w-4 h-4 mr-2" />
              Ready to collaborate? Let's connect!
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight animate-fade-in-up animation-delay-200">
              Get In
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
                Touch
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Transform your data challenges into intelligent solutions. Let's structure the unstructured with 
              <span className="font-semibold text-blue-600"> MLStack</span> and 
              <span className="font-semibold text-blue-600"> MLloOps™</span>
            </p>
            
            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 animate-fade-in-up animation-delay-600">
              <button
                onClick={handleCopyEmail}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 animate-pulse-slow"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">contact@rbg.ai</span>
                {copiedEmail ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-200" />
                ) : (
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100" />
                )}
                
                {/* {copiedEmail && (
                  <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-xs sm:text-sm font-medium animate-bounce-in">
                    Email Copied! ✓
                  </div>
                )} */}
              </button>
              
              <div className="flex items-center gap-2 text-gray-500 animate-fade-in">
                <Clock className="w-4 h-4" />
                <span className="text-sm">We'll respond within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up">
            Why Partner With Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We're not just another tech company. We're your partners in AI transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animation-delay-300 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Expertise</h3>
            <p className="text-gray-600 leading-relaxed">Cutting-edge machine learning solutions tailored for your business needs</p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animation-delay-500 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Loop className="w-8 h-8 text-purple-600 animate-spin-slow" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MLloOps Excellence</h3>
            <p className="text-gray-600 leading-relaxed">Streamlined ML workflows with our proprietary MLloOps™ platform</p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animation-delay-700 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <BarChart2 className="w-8 h-8 text-emerald-600 animate-bounce-gentle" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Intelligence</h3>
            <p className="text-gray-600 leading-relaxed">Transform unstructured data into actionable business insights</p>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up">
            Our Innovation Centers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            Strategically located across India's tech hubs
          </p>
        </div>

        {/* Creative Network Layout */}
        <div className="relative">
          {/* Center Hub */}
          <div className="absolute inset-0 flex items-center justify-center z-0 hidden lg:block">
            <div className="w-32 h-32 xl:w-40 xl:h-40 border-2 border-gray-200 rounded-full flex items-center justify-center animate-pulse-gentle bg-white shadow-lg">
              <div className="text-lg xl:text-2xl font-bold text-gray-400">RBG.AI</div>
            </div>
          </div>

          {/* Connection Lines (Hidden on mobile) */}
          {/* <div className="absolute inset-0 hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <line x1="200" y1="150" x2="400" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" />
              <line x1="600" y1="150" x2="400" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-dash animation-delay-500" />
              <line x1="200" y1="450" x2="400" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-dash animation-delay-300" />
              <line x1="600" y1="450" x2="400" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-dash animation-delay-700" />
            </svg>
          </div> */}

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
            {locations.map((location, index) => {
              const colors = getColorClasses(location.color);
              const isActive = activeCard === location.id;
              
              return (
                <div
                  key={location.id}
                  className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 p-6 sm:p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in-up ${isActive ? `${colors.ring} ring-4 ${colors.shadow} shadow-2xl` : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveCard(location.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Floating Icon */}
                  {/* <div className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-float`}>
                    <span className="text-white text-lg sm:text-xl">{location.icon}</span>
                  </div> */}
                  
                  {/* Card Content */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-500 text-sm font-semibold animate-fade-in`}>
                      <MapPin className="w-4 h-4 mr-1" />
                      {location.location}
                    </div>
                    
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{location.place}</h3>
                      <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2">{location.name}</p>
                      <p className={`text-sm text-blue-600 font-medium mb-4`}>{location.description}</p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{location.address}</p>
                    
                    <button
                      onClick={() => handleDirectionClick(location.direction)}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 `}
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </button>
                  </div>

                  {/* Animated Background Pattern */}
                  {/* <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 ${colors.light} rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-30 animate-pulse-gentle`}></div>
                    <div className={`absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 ${colors.light} rounded-full translate-y-8 sm:translate-y-10 -translate-x-8 sm:-translate-x-10 opacity-20 animate-float-slow`}></div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Registered Address Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-gray-200 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
          
          <div className="relative p-8 sm:p-12 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
              <Building2 className="w-4 h-4 mr-2" />
              Legal Information
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 animate-fade-in-up">
              Registered Address
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 animate-fade-in-up animation-delay-200">
                Resilience Business Grids LLP
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
                C/O H. D. Usha H.H Balakrishnan, D. NO. 57, T.R.S, Vijayalakshmi Park,<br/>
                Karamadai, Coimbatore, Tamil Nadu, 641104, India
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-600">
                <div className="bg-blue-100 px-4 sm:px-6 py-3 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">GST# 33ABDFR5937P1ZM</span>
                </div>
                <div className="bg-purple-100 px-4 sm:px-6 py-3 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300">
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">LLP# AAY-1911</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-8px) rotate(45deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: translateY(-20px) translateX(-50%) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) translateX(-50%) scale(1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.02); opacity: 1; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes dash {
          0% { stroke-dashoffset: 10; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-dash {
          animation: dash 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}