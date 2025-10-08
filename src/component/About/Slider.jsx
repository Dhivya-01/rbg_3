// import { useContext } from "react";
// import { AboutContext } from "../Context/Context";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function PractitionerSlider() {
//   const { Practitioner } = useContext(AboutContext);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   // Enables continuous scrolling in both directions
  //   waitForAnimate: false,
  //   swipeToSlide: true,
  // };

//   return Practitioner ? (
//     <div className="h-[18rem] w-[18rem] md:h-[25rem] mx-auto md:w-[25rem] text-md text-center font-Poppins">
//       <Slider {...settings}>
//         {Practitioner.data.map((item, index) => (
//           <div
//             key={index}
//             className=" font-Poppins text-zinc-700 flex  items-center justify-center flex-col text-center mt-20"
//           >
//             <div className="rounded-full mx-auto w-[12rem] h-[12rem] md:w-[12rem] md:h-[12rem] overflow-hidden">
//               <img src={item.img} className="object-fit w-full h-full" alt="" />
//             </div>

//             <h1 className="text-md md:text-xl font-semibold">{item.name}</h1>
//             <p className="text-sm md:text-lg">{item.role}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   ) : null;
// }


import { useContext } from "react";
import { AboutContext } from "../Context/Context";
import { Users, Plus } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PractitionerSlider() {
  const { Practitioner } = useContext(AboutContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return Practitioner ? (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clean Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Our Practitioners
            </div>
            <h2 className="text-4xl font-bold text-slate-900">
              Expert <span className="text-blue-600">Practitioners</span>
            </h2>
          </div>
          
          <button className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Join Our Team
          </button>
        </div>

        {/* Clean Slider */}
        <Slider {...settings}>
          {Practitioner.data.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{item.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.bio || "Expert bringing innovation and excellence to the field."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li button:before {
          font-size: 8px;
          color: #cbd5e1;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          color: #3b82f6;
        }
      `}</style>
    </div>
  ) : null;
}
