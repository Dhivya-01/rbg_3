

// import { useEffect, useState, useRef } from "react";
// import { Upload, Settings, FileText, Database, Shield, Users, CheckCircle, Download } from "lucide-react";

// // Section Data
// const sections = [
//   {
//     id: 1,
//     title: "Upload",
//     description: "Upload any format: text, scanned PDFs, images, or audio",
//     detail:
//       "Upload any format: text, scanned PDFs, images, or audio. The platform accepts multiple file types for seamless data ingestion.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1760085768/mlloops.rbg.ai_Upload_3_gnossb.png",
//     icon: Upload,
//   },
//   {
//     id: 2,
//     title: "Preprocessing",
//     description:
//       "Data standardization, compression, and cleaning for accurate processing",
//     detail:
//       "The system standardizes, compresses, and cleans data for accurate processing, ensuring consistent quality across all inputs.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg",
//     icon: Settings,
//   },
//   {
//     id: 3,
//     title: "Transcription",
//     description: "Converting images and audio into machine-readable text",
//     detail:
//       "Files like images or audio are converted into machine-readable text, with AI ensuring high accuracy across languages and formats.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg",
//     icon: FileText,
//   },
//   {
//     id: 4,
//     title: "Extraction",
//     description:
//       "LLMs extract key data points and generate structured JSON output",
//     detail:
//       "Large Language Models extract key data points and generate structured JSON outputs, categorizing and organizing information precisely.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg",
//     icon: Database,
//   },
//   {
//     id: 5,
//     title: "Post-Processing",
//     description: "Validation, normalization, and compliance checks for accuracy",
//     detail:
//       "Low-confidence AI outputs are routed to human reviewers, who validate and correct data, improving the system continuously.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg",
//     icon: Shield,
//   },
//   {
//     id: 6,
//     title: "Human in the Loop",
//     description: "Human reviewers validate and correct low-confidence AI outputs",
//     detail:
//       "The JSON output undergoes validation, normalization, and compliance checks, producing verified files reviewed by humans for accuracy.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1758276459/CLIENT_APPROVAL_IMAGE_jmcau4.svg",
//     icon: Users,
//   },
//   {
//     id: 7,
//     title: "Client Approval",
//     description: "Clients review and approve final output based on requirements",
//     detail:
//       "Clients review the final output and approve or reject it, ensuring complete satisfaction and quality control before delivery.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg",
//     icon: CheckCircle,
//   },
//   {
//     id: 8,
//     title: "Report Download",
//     description: "Download final structured output in Excel format",
//     detail:
//       "Once approved, reports can be downloaded in Excel format for analysis, sharing, and system integration.",
//     image:
//       "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg",
//     icon: Download,
//   },
// ];

// const ProcessFlow = () => {
//   const [activeSection, setActiveSection] = useState(0);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const observers = [];

//     sectionRefs.current.forEach((section, index) => {
//       if (!section) return;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveSection(index);
//             }
//           });
//         },
//         { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
//       );

//       observer.observe(section);
//       observers.push(observer);
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   const currentSection = sections[activeSection];

//   const prevSection = () => {
//     setActiveSection((prev) =>
//       prev > 0 ? prev - 1 : sections.length - 1
//     );
//   };

//   const nextSection = () => {
//     setActiveSection((prev) =>
//       prev < sections.length - 1 ? prev + 1 : 0
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-black transition-colors duration-700">
//       <div className="container mx-auto px-4 lg:px-12">
//         {/* Header Section */}
//         <div className="text-center pt-12 pb-2 lg:pt-16 lg:pb-12 space-y-4">
//           <h1 className="text-5xl lg:text-8xl font-extrabold text-gray-900 dark:text-white leading-tight">
//             How It Works
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Our intelligent document processing pipeline transforms your unstructured data into actionable insights through an 8-step automated workflow
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 pb-16">
//           {/* Desktop Sticky Image */}
//           <div className="hidden lg:flex lg:sticky lg:top-10 h-[50vh] lg:h-[85vh] items-center justify-center order-1 lg:order-2">
//             <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 key={currentSection.image}
//                 src={currentSection.image}
//                 alt={currentSection.title}
//                 className="w-full h-full object-cover transition-opacity duration-700"
//               />
//             </div>
//           </div>

//           {/* Text Section */}
//           <div className="space-y-16 order-2 lg:order-1">
//             {/* Mobile Carousel */}
//             <div className="lg:hidden relative">
//               <div className="relative w-full h-80 sm:h-96 md:h-[30rem] rounded-2xl mb-6 overflow-hidden">
//                 <img
//                   key={currentSection.image}
//                   src={currentSection.image}
//                   alt={currentSection.title}
//                   className="w-full h-full object-contain transition-opacity duration-500"
//                 />
//               </div>

//               {/* Arrows */}
//               <button
//                 onClick={prevSection}
//                 className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={nextSection}
//                 className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Mobile Text */}
//             <div className="lg:hidden space-y-5 transition-all duration-600">
//               <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
//                 {currentSection.title}
//               </h2>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
//                 {currentSection.description}
//               </p>
//               <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl pt-3">
//                 {currentSection.detail}
//               </p>
//             </div>

//             {/* Desktop Scrollable Sections */}
//             <div className="hidden lg:block">
//               {sections.map((section, index) => {
//                 const isActive = activeSection === index;
//                 const IconComponent = section.icon;

//                 return (
//                   <section
//                     key={section.id}
//                     ref={(el) => (sectionRefs.current[index] = el)}
//                     className={`min-h-[85vh] flex flex-col justify-center transition-all duration-500 ${
//                       isActive ? "opacity-100 scale-100" : "opacity-60 scale-[0.98]"
//                     }`}
//                   >
//                     <div
//                       className="space-y-5 transition-all duration-600"
//                       style={{
//                         opacity: isActive ? 1 : 0.4,
//                       }}
//                     >
//                       {isActive && (
//                         <div className="flex items-center gap-3">
//                           <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl shadow-md">
//                             <IconComponent className="w-6 h-6" />
//                           </div>
//                           <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
//                             Step {section.id}
//                           </span>
//                         </div>
//                       )}

//                       <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
//                         {section.title}
//                       </h2>

//                       <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
//                         {section.description}
//                       </p>

//                       {isActive && (
//                         <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl pt-3 transition-all duration-600">
//                           {section.detail}
//                         </p>
//                       )}
//                     </div>

//                     {/* Progress Indicator */}
//                     {isActive && (
//                       <div className="flex items-center gap-2 mt-6">
//                         {sections.map((_, idx) => {
//                           let widthClass = "w-6";
//                           let bgClass = "bg-gray-300 dark:bg-gray-700";

//                           if (idx === index) {
//                             widthClass = "w-12";
//                             bgClass = "bg-blue-600";
//                           } else if (idx < index) {
//                             widthClass = "w-8";
//                             bgClass = "bg-blue-300";
//                           }

//                           return (
//                             <div
//                               key={idx}
//                               className={`h-1 rounded-full transition-all duration-300 ${widthClass} ${bgClass}`}
//                             />
//                           );
//                         })}
//                       </div>
//                     )}
//                   </section>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessFlow;





import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Settings,
  FileText,
  Database,
  Shield,
  Users,
  CheckCircle,
  Download,
} from "lucide-react";

// Section Data
const sections = [
  {
    id: 1,
    title: "Upload",
    description: "Upload any format: text, scanned PDFs, images, or audio",
    detail:
      "Upload any format: text, scanned PDFs, images, or audio. The platform accepts multiple file types for seamless data ingestion.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1760085768/mlloops.rbg.ai_Upload_3_gnossb.png",
    icon: Upload,
  },
  {
    id: 2,
    title: "Preprocessing",
    description:
      "Data standardization, compression, and cleaning for accurate processing",
    detail:
      "The system standardizes, compresses, and cleans data for accurate processing, ensuring consistent quality across all inputs.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976821/Preprocessing_not_edited_dlyxso.svg",
    icon: Settings,
  },
  {
    id: 3,
    title: "Transcription",
    description: "Converting images and audio into machine-readable text",
    detail:
      "Files like images or audio are converted into machine-readable text, with AI ensuring high accuracy across languages and formats.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976808/Transcription_not_edited_tclx0o.svg",
    icon: FileText,
  },
  {
    id: 4,
    title: "Extraction",
    description:
      "LLMs extract key data points and generate structured JSON output",
    detail:
      "Large Language Models extract key data points and generate structured JSON outputs, categorizing and organizing information precisely.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976775/extractror_not_edited_h96ppg.svg",
    icon: Database,
  },
  {
    id: 5,
    title: "Post-Processing",
    description: "Validation, normalization, and compliance checks for accuracy",
    detail:
      "Low-confidence AI outputs are routed to human reviewers, who validate and correct data, improving the system continuously.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1756976797/post_processingg_not_edited_ac9iy8.svg",
    icon: Shield,
  },
  {
    id: 6,
    title: "Human in the Loop",
    description: "Human reviewers validate and correct low-confidence AI outputs",
    detail:
      "The JSON output undergoes validation, normalization, and compliance checks, producing verified files reviewed by humans for accuracy.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758276459/CLIENT_APPROVAL_IMAGE_jmcau4.svg",
    icon: Users,
  },
  {
    id: 7,
    title: "Client Approval",
    description: "Clients review and approve final output based on requirements",
    detail:
      "Clients review the final output and approve or reject it, ensuring complete satisfaction and quality control before delivery.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073564/Report_Setup_not_edited_m3io5y.svg",
    icon: CheckCircle,
  },
  {
    id: 8,
    title: "Report Download",
    description: "Download final structured output in Excel format",
    detail:
      "Once approved, reports can be downloaded in Excel format for analysis, sharing, and system integration.",
    image:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1757073684/output_1_jfdihf.svg",
    icon: Download,
  },
];

const ProcessFlow = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(index);
          });
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const currentSection = sections[activeSection];

  const prevSection = () =>
    setActiveSection((prev) => (prev > 0 ? prev - 1 : sections.length - 1));

  const nextSection = () =>
    setActiveSection((prev) => (prev < sections.length - 1 ? prev + 1 : 0));

  // Framer Motion animation variants
 const slideLeftToRight = {
  hidden: { opacity: 0, x: -150 }, // 👈 start from the left side
  visible: {
    opacity: 1,
    x: 0, // move to original position
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-black transition-colors duration-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={slideLeftToRight}
    >
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header Section */}
        <motion.div
          className="text-center pt-12 pb-2 lg:pt-16 lg:pb-12 space-y-4"
          variants={slideLeftToRight}
        >
          <h1 className="text-5xl lg:text-8xl font-extrabold text-gray-900 dark:text-white leading-tight">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our intelligent document processing pipeline transforms your
            unstructured data into actionable insights through an 8-step
            automated workflow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 pb-16">
          {/* Desktop Sticky Image */}
          <motion.div
            className="hidden lg:flex lg:sticky lg:top-10 h-[50vh] lg:h-[85vh] items-center justify-center order-1 lg:order-2"
            variants={slideLeftToRight}
          >
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                key={currentSection.image}
                src={currentSection.image}
                alt={currentSection.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="space-y-16 order-2 lg:order-1">
            {/* Mobile Carousel */}
            <motion.div
              className="lg:hidden relative"
              variants={slideLeftToRight}
            >
              <div className="relative w-full h-80 sm:h-96 md:h-[30rem] rounded-2xl mb-6 overflow-hidden">
                <motion.img
                  key={currentSection.image}
                  src={currentSection.image}
                  alt={currentSection.title}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, x: 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              {/* Arrows */}
              <button
                onClick={prevSection}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSection}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Desktop Scrollable Sections */}
            <motion.div
              className="hidden lg:block"
              variants={slideLeftToRight}
            >
              {sections.map((section, index) => {
                const isActive = activeSection === index;
                const IconComponent = section.icon;

                return (
                  <motion.section
                    key={section.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideLeftToRight}
                    className={`min-h-[85vh] flex flex-col justify-center transition-all duration-500 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-60 scale-[0.98]"
                    }`}
                  >
                    <div className="space-y-5">
                      {isActive && (
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl shadow-md">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                            Step {section.id}
                          </span>
                        </div>
                      )}

                      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        {section.title}
                      </h2>

                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                        {section.description}
                      </p>

                      {isActive && (
                        <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl pt-3 transition-all duration-600">
                          {section.detail}
                        </p>
                      )}
                    </div>
                  </motion.section>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessFlow;
