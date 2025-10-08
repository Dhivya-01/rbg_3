// /* eslint-disable react/prop-types */
// export default function Section({ data }) {
//   return data ? (
//     <>
//       <h1 className="text-center font-Poppins capitalize font-bold text-zinc-700 text-2xl md:text-5xl py-10 my-10 transition-all duration-500 hover:text-zinc-900 hover:scale-105">
//         {data.title}
//       </h1>

//       <div className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 grid my-10 gap-10">
//         {data.data.map((item, index) => (
//           <div
//             key={index}
//             className="font-Poppins flex flex-col text-center p-6 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:bg-zinc-50"
//           >
//             <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4 shadow-md transition-transform duration-500 hover:scale-110">
//               <img
//                 src={item.img}
//                 className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
//                 alt={item.name}
//               />
//             </div>
//             <h1 className="text-md md:text-xl font-semibold transition-colors duration-300 hover:text-indigo-600">
//               {item.name}
//             </h1>
//             <p className="text-sm md:text-lg text-zinc-500 transition-colors duration-300 hover:text-zinc-700">
//               {item.role}
//             </p>
//           </div>
//         ))}
//       </div>
//       {data.content.length > 0 ? (
//         <p className="md:text-lg text-center py-5 rounded mb-10 text-zinc-500 transition-colors duration-300 hover:text-zinc-700 font-Poppins max-w-7xl mx-auto px-5 md:px-10">
//           {data.content}
//         </p>
//       ) : (
//         <></>
//       )}
//     </>
//   ) : (
//     <></>
//   );
// }



// import { useContext } from "react";
// import { AboutContext } from "../Context/Context";
// import { Users, Plus } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function PractitionerSlider() {
//   const { Practitioner } = useContext(AboutContext);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     pauseOnHover: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: { slidesToShow: 3 }
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2 }
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1 }
//       }
//     ]
//   };

//   return Practitioner ? (
//     <div className="py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Responsive Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
//           <div className="text-center sm:text-left">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
//               <Users className="w-4 h-4 mr-2" />
//               Our Practitioners
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
//               Expert <span className="text-blue-600">Practitioners</span>
//             </h2>
//           </div>
          
//           <button className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
//             <Plus className="w-4 h-4 mr-2" />
//             Join Our Team
//           </button>
//         </div>

//         {/* Consistent Height Slider */}
//         <Slider {...settings}>
//           {Practitioner.data.map((item, index) => (
//             <div key={index} className="px-2 sm:px-3">
//               <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-[400px] sm:h-[450px] flex flex-col">
                
//                 {/* Fixed Height Image Container */}
//                 <div className="relative h-[250px] sm:h-[280px] bg-gray-100 flex items-center justify-center p-2">
//                   <img 
//                     src={item.img || "/api/placeholder/250/250"} 
//                     alt={item.name}
//                     className="max-w-full max-h-full object-contain rounded-lg"
//                   />
                  
//                   {/* Hover overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//                 </div>

//                 {/* Fixed Height Content */}
//                 <div className="p-4 flex-1 flex flex-col text-center justify-between">
//                   <div>
//                     <h3 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">
//                       {item.name}
//                     </h3>
//                     <p className="text-blue-600 font-medium text-sm mb-3">{item.role}</p>
                    
//                     <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
//                       {item.bio || "Expert bringing innovation and excellence to the field."}
//                     </p>
//                   </div>

//                   {/* Rating at bottom */}
//                   <div className="flex items-center justify-center pt-3 border-t border-gray-100 mt-3">
//                     <div className="flex space-x-1">
//                       {[...Array(5)].map((_, i) => (
//                         <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Line clamp utility */}
//       <style jsx>{`
//         .slick-dots {
//           bottom: -40px;
//         }
//         .slick-dots li button:before {
//           font-size: 8px;
//           color: #cbd5e1;
//           opacity: 1;
//         }
//         .slick-dots li.slick-active button:before {
//           color: #3b82f6;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   ) : null;
// }




// /* eslint-disable react/prop-types */
// import { Users, Award, ArrowRight, Plus, Mail, Phone } from "lucide-react";

// export default function Section({ data }) {
//   return data ? (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
//       {/* Responsive Header */}
//       <div className="mb-8 sm:mb-12">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
//           <div className="text-center sm:text-left">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
//               <Users className="w-4 h-4 mr-2" />
//               {data.title}
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
//               {data.title}
//             </h2>
//             {data.content && (
//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto sm:mx-0">
//                 {data.content}
//               </p>
//             )}
//           </div>
          
//           {/* Join Button */}
//           <button className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
//             <Plus className="w-4 h-4 mr-2" />
//             Join Our Board
//             <ArrowRight className="w-4 h-4 ml-2" />
//           </button>
//         </div>
//       </div>

//       {/* Responsive Grid - Shows Complete Images */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
//         {data.data.map((item, index) => (
//           <div key={index} className="group">
//             <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              
//               {/* Complete Image Display */}
//               <div className="relative bg-gray-100 overflow-hidden p-2">
//                 <img 
//                   src={item.img} 
//                   alt={item.name}
//                   className="w-full h-auto object-contain rounded-lg min-h-[200px] max-h-[280px]"
//                 />
                
//                 {/* Expert Badge */}
//                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
//                   <div className="flex items-center text-xs font-medium text-blue-600">
//                     <Award className="w-3 h-3 mr-1" />
//                     Expert
//                   </div>
//                 </div>

//                 {/* Contact Icons */}
//                 <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
//                     <Mail className="w-3 h-3 text-white" />
//                   </button>
//                   <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
//                     <Phone className="w-3 h-3 text-white" />
//                   </button>
//                 </div>

//                 {/* Hover overlay */}
//                 <div className="absolute inset-2 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//               </div>

//               {/* Content Section */}
//               <div className="p-4 sm:p-5 flex-1 flex flex-col text-center">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                   {item.name}
//                 </h3>
//                 <p className="text-blue-600 font-medium text-sm mb-3">{item.role}</p>
                
//                 <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
//                   {item.bio || "Expert professional bringing years of experience and innovation to drive meaningful results."}
//                 </p>
                
//                 {/* Experience Bar */}
//                 {/* <div className="flex items-center justify-between text-sm pt-3 border-t border-gray-100 mt-auto">
//                   <span className="text-gray-500 font-medium">Experience</span>
//                   <span className="font-bold text-blue-600">30+ Years</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Join Us Card */}
//         <div className="group">
//           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-300 p-6 text-center hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 h-full flex flex-col justify-center min-h-[350px] sm:min-h-[400px]">
//             <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
//               <Plus className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Team</h3>
//             <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
//               Share your expertise and help shape the future of our organization with your professional experience.
//             </p>
//             <button className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
//               Apply Now →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
//       <div className="text-center">
//         <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Users className="w-8 h-8 text-gray-400" />
//         </div>
//         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Team Data Available</h3>
//         <p className="text-gray-500">Team information will be displayed here once available.</p>
//       </div>
//     </div>
//   );
// }




/* eslint-disable react/prop-types */
import { Users, Award, ArrowRight, Plus, ExternalLink } from "lucide-react";

export default function Section({ data }) {
  const handleLinkedInClick = (linkedinUrl) => {
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return data ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Responsive Header */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              {data.title}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {data.title}
            </h2>
            {data.content && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto sm:mx-0">
                {data.content}
              </p>
            )}
          </div>
          
          {/* Join Button */}
          <button className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Join Our Board
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Responsive Grid - Shows Complete Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {data.data.map((item, index) => (
          <div key={index} className="group">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              
              {/* Complete Image Display */}
              <div className="relative bg-gray-100 overflow-hidden p-2">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-auto object-contain rounded-lg min-h-[200px] max-h-[280px]"
                />
                
                {/* Expert Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <div className="flex items-center text-xs font-medium text-blue-600">
                    <Award className="w-3 h-3 mr-1" />
                    Expert
                  </div>
                </div>

                {/* LinkedIn Icon */}
                

                {/* Hover overlay */}
                <div className="absolute inset-2 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{item.role}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                  {item.bio }
                </p>
                
                {/* LinkedIn Link at Bottom */}
              {/* {item.link && (
  <button 
    onClick={() => {
      const url = item.link.startsWith("http")
        ? item.link
        : `https://${item.link}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }}
    className="inline-flex items-center justify-center text-[#0077B5] hover:text-[#005885] font-medium text-sm transition-colors duration-200 group/link"
  >
    <span>View LinkedIn Profile</span>
    <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform duration-200" />
  </button>
)} */}

              </div>
            </div>
          </div>
        ))}

        {/* Join Us Card */}
        <div className="group">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-300 p-6 text-center hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 h-full flex flex-col justify-center min-h-[350px] sm:min-h-[400px]">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
              <Plus className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Team</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
              Share your expertise and help shape the future of our organization with your professional experience.
            </p>
            <button className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">No Team Data Available</h3>
        <p className="text-gray-500">Team information will be displayed here once available.</p>
      </div>
    </div>
  );
}