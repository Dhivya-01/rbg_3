// import React from "react";
// import Slider from "../Slider";
// import img1 from "../../assests/Programs/img1.svg";
// import img2 from "../../assests/Programs/img2.svg";
// import img3 from "../../assests/Programs/img3.svg";
// import img4 from "../../assests/Programs/img4.svg";

// const data = [
//   {
//     venue:
//       "St Joseph's College Of Engineering, OMR, Semmancheri, Chennai, Tamil Nadu 600119.",
//     Date: "01 to 07, April 2025",
//     img: img1,
//     link: "",
//     disable: false,
//   },
//   {
//     venue: "SREC Campus, Coimbatore",
//     Date: "18, march 2025",
//     img: img1,
//     link: "",
//     disable: false,
//   },
//   {
//     venue: "Amrita University,Ettimadai Coimbatore",
//     Date: "18, October 2024",
//     img: img1,
//     link: "",
//     disable: false,
//   },
//   {
//     venue: "SREC Campus, Coimbatore",
//     Date: "17 to 19, September 2024",
//     img: img1,
//     link: "",
//     disable: false,
//   },
//   {
//     venue: "Amrita University,Ettimadai Coimbatore",
//     Date: "20 & 21, April 2022",
//     img: img2,
//     link: "",
//     disable: false,
//   },
//   {
//     venue:
//       "St Joseph's College Of Engineering, OMR, Semmancheri, Chennai, Tamil Nadu 600119.",
//     Date: "March 04 - 07, 2024",
//     img: img1,
//     link: "/llm-chennai",
//     disable: false,
//   },
//   {
//     venue:
//       "SREC SPARK Incubation Foundation,SREC Campus,Coimbatore, Tamil Nadu.",
//     Date: "Febrauary 23 - 24, 2024",
//     img: img4,
//     link: "/llm-cse",
//     disable: false,
//   },
//   {
//     venue:
//       "SREC SPARK Incubation Foundation,SREC Campus,Coimbatore, Tamil Nadu.",
//     Date: "January 08 - 12, 2024",
//     img: img1,
//     link: "/llm",
//     disable: false,
//   },
// ];

// export default function Workshop() {
//   return (
//     <div className="w-full py-8">
//       <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
//         Our Workshops
//       </h1>
//       <Slider data={data} />
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Users, BookOpen, X } from "lucide-react";

// Mock images for demo
const img1 = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center";
const img2 = "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop&crop=center";
const img3 = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center";
const img4 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center";

const data = [
  {
    venue: "St Joseph's College Of Engineering, OMR, Semmancheri, Chennai, Tamil Nadu 600119.",
    Date: "01 to 07, April 2025",
    img: img1,
    link: "",
    disable: false,
    duration: "7 Days",
    participants: "50+",
    status: "upcoming"
  },
  {
    venue: "SREC Campus, Coimbatore",
    Date: "18, march 2025",
    img: img2,
    link: "",
    disable: false,
    duration: "1 Day",
    participants: "30+",
    status: "upcoming"
  },
  {
    venue: "Amrita University,Ettimadai Coimbatore",
    Date: "18, October 2024",
    img: img3,
    link: "",
    disable: false,
    duration: "1 Day",
    participants: "75+",
    status: "completed"
  },
  {
    venue: "SREC Campus, Coimbatore",
    Date: "17 to 19, September 2024",
    img: img4,
    link: "",
    disable: false,
    duration: "3 Days",
    participants: "60+",
    status: "completed"
  },
  {
    venue: "Amrita University,Ettimadai Coimbatore",
    Date: "20 & 21, April 2022",
    img: img1,
    link: "",
    disable: false,
    duration: "2 Days",
    participants: "40+",
    status: "completed"
  },
  {
    venue: "St Joseph's College Of Engineering, OMR, Semmancheri, Chennai, Tamil Nadu 600119.",
    Date: "March 04 - 07, 2024",
    img: img2,
    link: "/llm-chennai",
    disable: false,
    duration: "4 Days",
    participants: "55+",
    status: "completed"
  },
  {
    venue: "SREC SPARK Incubation Foundation,SREC Campus,Coimbatore, Tamil Nadu.",
    Date: "Febrauary 23 - 24, 2024",
    img: img3,
    link: "/llm-cse",
    disable: false,
    duration: "2 Days",
    participants: "35+",
    status: "completed"
  },
  {
    venue: "SREC SPARK Incubation Foundation,SREC Campus,Coimbatore, Tamil Nadu.",
    Date: "January 08 - 12, 2024",
    img: img4,
    link: "/llm",
    disable: false,
    duration: "5 Days",
    participants: "45+",
    status: "completed"
  },
];

const ModernWorkshopSlider = () => {
  const [cards, setCards] = useState([...data, ...data]);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workshopDetails, setWorkshopDetails] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get dynamic card width based on screen size
  const getCardWidth = () => {
    if (typeof window === "undefined") return 350;
    const width = window.innerWidth;
    if (width < 380) return 280;
    if (width < 640) return 320;
    if (width < 768) return 340;
    return 360;
  };

  // Automatic scrolling for desktop only
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer || isPaused || isMobile) return;

    const animate = () => {
      const scrollAmount = 0.8;
      scrollContainer.scrollLeft += scrollAmount;

      if (
        scrollContainer.scrollLeft >=
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2
      ) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(animate, 25);
    return () => clearInterval(intervalId);
  }, [isPaused, isMobile]);

  // Workshop details mapping
  const getWorkshopDetails = (venue, date) => {
    const detailsMap = {
      "amrita university,ettimadai coimbatore-20 & 21, april 2022": {
        topic: "AI Essentials and Fundamentals",
        description: "The \"AI Essentials and Fundamentals\" workshop at Amrita University offered a comprehensive introduction to Artificial Intelligence, covering its core concepts and foundational techniques. Students were exposed to various AI models, machine learning algorithms, and the mathematics behind them.",
      },
      "srec spark incubation foundation,srec campus,coimbatore, tamil nadu.-january 08 - 12, 2024": {
        topic: "AI Essentials and Fundamentals",
        description: "This session at SREC SPARK served as an ideal starting point for individuals interested in entering the AI field. Participants gained an understanding of the fundamentals of machine learning, including supervised learning, unsupervised learning, and the basics of neural networks.",
      },
      "srec spark incubation foundation,srec campus,coimbatore, tamil nadu.-febrauary 23 - 24, 2024": {
        topic: "Generative AI from Essential AI",
        description: "Generative AI is one of the most transformative fields in artificial intelligence, and this workshop provided an in-depth exploration of its capabilities. Participants learned about Generative Adversarial Networks (GANs), transformers, and their applications in creative industries.",
      },
      "st joseph's college of engineering, omr, semmancheri, chennai, tamil nadu 600119.-march 04 - 07, 2024": {
        topic: "LLM Unleashed",
        description: "\"LLM Unleashed\" at St Joseph's College was an advanced exploration into the mechanics and applications of Large Language Models (LLMs). The event covered the intricacies of transformer models like GPT-3, BERT, and their capabilities in various NLP tasks.",
      },
      "srec campus, coimbatore-17 to 19, september 2024": {
        topic: "AI in Biomedical",
        description: "The \"AI in Biomedical\" workshop is designed to introduce participants to the transformative role of Artificial Intelligence in the field of healthcare and biomedical sciences. The session explores how machine learning, deep learning, and computer vision are revolutionizing diagnostics.",
      },
      "amrita university,ettimadai coimbatore-18, october 2024": {
        topic: "Jailbreaking LLM",
        description: "The LLM workshop at Amrita University focused on understanding the vulnerabilities of Large Language Models (LLMs) and the ethical challenges associated with their use. Participants learned how to identify and mitigate risks such as adversarial attacks.",
      },
      "srec campus, coimbatore-18, march 2025": {
        topic: "Generative AI Course on Chatbots with Text Analytics",
        description: "This specialized Gen AI course to SREC students, will teach participants how to design and develop intelligent chatbots integrated with text analytics capabilities. The course will cover the basics of conversational AI and natural language processing.",
      },
      "st joseph's college of engineering, omr, semmancheri, chennai, tamil nadu 600119.-01 to 07, april 2025": {
        topic: "Generative AI Workshop for ADS Students",
        description: "This advanced Generative AI workshop for ADS students will focus on creating cutting-edge AI solutions across multiple modalities — text, image, video, and audio. Participants will learn about generative models like GANs, VAEs, and transformers.",
      },
    };

    const key = `${venue.toLowerCase()}-${date.toLowerCase()}`;
    return detailsMap[key] || {
      topic: "Workshop Details",
      description: "Details for this workshop will be available soon.",
    };
  };

  const handleCardClick = (item) => {
    const details = getWorkshopDetails(item.venue, item.Date);
    setWorkshopDetails({ ...item, ...details });
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    
    const cardWidth = getCardWidth() + 24; // card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full py-12 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 font-medium animate-fadeInUp">
            <BookOpen className="w-4 h-4" />
            Professional Development
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-red-700">Workshops</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Hands-on AI workshops to boost your skills and advance your career.
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons - Desktop Only */}
        {!isMobile && (
          <>
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </button>
          </>
        )}

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className={`flex gap-6 transition-all duration-300 ${
              isMobile 
                ? "overflow-x-auto snap-x snap-mandatory px-4 -mx-4 scrollbar-hide" 
                : "overflow-x-hidden px-12"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
          >
            {cards.map((item, index) => (
              <div
                key={`${item.venue}-${index}`}
                className={`flex-shrink-0 transition-all duration-500 ${
                  isMobile ? "snap-center" : "hover:scale-[1.02]"
                } animate-slideInRight`}
                style={{ 
                  width: `${getCardWidth()}px`,
                  animationDelay: `${(index % data.length) * 0.1}s`
                }}
              >
                <div className={`
                  group relative h-full bg-white rounded-2xl overflow-hidden
                  border border-gray-100 transition-all duration-500
                  ${!isMobile 
                    ? "hover:shadow-2xl hover:shadow-gray-200/50 hover:border-gray-200" 
                    : "active:scale-95"
                  }
                `}>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide
                      ${item.status === 'upcoming' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-gray-50 text-gray-600 border border-gray-200'
                      }
                    `}>
                      {item.status}
                    </span>
                  </div>

                  {/* Image Section */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={item.img}
                      alt={item.venue}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Venue */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium">Venue</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 leading-relaxed line-clamp-2">
                        {item.venue}
                      </h3>
                    </div>

                    {/* Date and Details */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{item.Date}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{item.participants}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      disabled={item.disable}
                      onClick={() => !item.disable && handleCardClick(item)}
                      className={`
                        w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300
                        transform active:scale-95
                        ${item.disable
                          ? 'bg-red-100 text-gray-400 cursor-not-allowed'
                          : `bg-red-700 text-white hover:bg-red-600 
                             hover:shadow-lg hover:shadow-gray-900/25
                             focus:outline-none focus:ring-4 focus:ring-gray-900/20`
                        }
                      `}
                    >
                      {item.disable ? 'Coming Soon' : 'Explore Workshop'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicators */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-8">
            {data.slice(0, 5).map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300" 
              />
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={closeModal}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideInUp">
            {/* Modal Header */}
            <div className="relative p-6 md:p-8 border-b border-gray-100">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pr-12">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`
                    px-3 py-1 rounded-full text-sm font-semibold
                    ${selectedCard?.status === 'upcoming' 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-gray-50 text-gray-600'
                    }
                  `}>
                    {selectedCard?.status}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {workshopDetails.topic}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedCard?.Date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedCard?.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{selectedCard?.participants}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Workshop Venue
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedCard?.venue}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    About This Workshop
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {workshopDetails.description}
                  </p>
                </div>

                {selectedCard?.disable && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-amber-800 text-center font-medium">
                      This workshop is not yet open for registration. Please check back later.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-6 md:p-8">
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl font-semibold transition-colors duration-200"
                >
                  Close
                </button>
                {!selectedCard?.disable && (
                  <button className="px-6 py-3 bg-red-800 text-white hover:bg-red-700 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ModernWorkshopSlider;