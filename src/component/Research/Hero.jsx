import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [inView, setInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setInView(true);
  }, []);

  // Enhanced animation variants with more fluid motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Pastel gradient backgrounds for cards
  const gradients = [
    "bg-white dark:from-red-950/20 dark:via-pink-950/20 dark:to-rose-950/20",
    "bg-white dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20",
    "bg-white dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20",
    "bg-white dark:from-orange-950/20 dark:via-amber-950/20 dark:to-yellow-950/20",
    "bg-white dark:from-violet-950/20 dark:via-purple-950/20 dark:to-fuchsia-950/20",
    "bg-white dark:from-cyan-950/20 dark:via-sky-950/20 dark:to-blue-950/20",
    "bg-white dark:from-rose-950/20 dark:via-pink-950/20 dark:to-red-950/20"
  ];

  // Simple animated icons
  const BrainIcon = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </motion.svg>
  );

  const BuildingIcon = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
    </motion.svg>
  );

  const MicIcon = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
    </motion.svg>
  );

  const CogIcon = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.5 }}
    >
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </motion.svg>
  );
  const RiTranslate  = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.5 }}
    >
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </motion.svg>
  );
  const RiGlobalLine = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.5 }}
    >
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </motion.svg>
  );

  const LanguageIcon = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.6 }}
    >
      <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.395-.399-.614-.607L7 12v2a1 1 0 11-2 0v-2l-.293.293a1 1 0 01-1.414-1.414L7 7.172V3a1 1 0 011-1z" clipRule="evenodd" />
    </motion.svg>
  );

  const DocumentIcon = () => (
    <motion.svg 
      className="w-6 h-6" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
    </motion.svg>
  );

  const data = [
    {
      title: "Medical AI – SMM4H",
      content: "Predict insomnia and extract info from clinical notes",
      link: "https://github.com/rbg-research/SMM4H-2025",
      icon: BrainIcon,
      category: "Medical AI",
      type: "medical"
    },
    {
      title: "Computer Vision – Floor-Plan Detection",
      content: "Detect objects in architectural floor plans",
      link: "https://github.com/rbg-research/Floor-Plan-Detection",
      icon: BuildingIcon,
      category: "Computer Vision",
      type: "vision"
    },
    {
      title: "Audio AI – D-Voice Detection",
      content: "Identify speakers with deep voice embeddings",
      link: "",
      icon: MicIcon,
      category: "Audio AI",
      type: "audio",
      disabled: true,
    },
    {
      title: "Manufacturing – MFR",
      content: "Retrieve machining features without training data",
      link: "https://github.com/rbg-research/Machining-Feature-Retrieval",
      icon: CogIcon,
      category: "Manufacturing",
      type: "engineering"
    },
    {
      title: "NLP – CoRePooL",
      content: "Build corpora for low-resource languages",
      link: "https://github.com/rbg-research/CoRePooL",
      icon: LanguageIcon,
      category: "NLP",
      type: "nlp"
    },
    {
      title: "Document AI – OCR Enhancer",
      content: "Improve OCR with optimized text segmentation",
      link: "https://github.com/rbg-research/OCR-Enhancer",
      icon: DocumentIcon,
      category: "Document AI",
      type: "vision"
    },
    {
      title: "Speech AI – EACL",
      content: "Evaluate speech models for low-resource languages",
      link: "https://github.com/rbg-research/EACL-2024",
      icon: MicIcon,
      category: "Speech AI",
      type: "audio"
    },
    {
      title: "NLP: Code-Mix Survey",
      content: "Multilingual Transformers in Code-Mixed Speech and Text: A Survey Across Core NLP Tasks",
      link: "https://github.com/rbg-research/code-mixed-survey",
      icon: RiTranslate,
      category: "NLP",
      type: "NLP"
    },
    {
      title: "EMNLP-2025",
      content: "Evaluate speech models for low-resource languages",
      link: "https://github.com/rbg-research/EMNLP-2025",
      icon: RiGlobalLine,
      category: "Speech AI",
      type: "audio"
    },
    
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'medical', label: 'Medical' },
    { id: 'vision', label: 'Vision' },
    { id: 'audio', label: 'Audio' },
    { id: 'nlp', label: 'NLP' },
    { id: 'engineering', label: 'Engineering' }
  ];

  const filteredData = activeFilter === 'all' 
    ? data 
    : data.filter(item => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 via-pink-50/20 to-rose-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-200/20 to-pink-200/20 dark:from-red-900/10 dark:to-pink-900/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-blue-200/20 dark:from-purple-900/10 dark:to-blue-900/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-teal-200/20 dark:from-green-900/10 dark:to-teal-900/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Animated accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-red-300 via-pink-300 to-rose-300 dark:from-red-700 dark:via-pink-700 dark:to-rose-700 mx-auto mb-8"
          />
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-200 mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Researchg
            </motion.span>
            <br />
            <motion.span 
              className="text-3xl sm:text-5xl lg:text-6xl text-red-500 dark:text-red-300 font-bold"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Contributions
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Structuring the unstructured through innovative AI solutions
          </motion.p>
        </motion.div>

        {/* Animated Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-500 ${
                activeFilter === filter.id
                  ? 'bg-red-600 text-white shadow-lg '
                  : 'bg-white/70 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 "
          key={activeFilter}
        >
          {filteredData.map((item, index) => {
            const IconComponent = item.icon;
            const gradientClass = gradients[index % gradients.length];
            
            return (
              <motion.div
                key={`${activeFilter}-${index}`}
                variants={itemVariants}
                className="group cursor-pointer shadow-md rounded-3xl"
                onClick={() => {
                  if (item.link && !item.disabled) {
                    window.open(item.link, '_blank');
                  }
                }}
              >
                <motion.div
                  className={`
                    relative h-full p-6 sm:p-8 rounded-3xl border border-white/20 dark:border-gray-800/50 transition-all duration-500
                    ${gradientClass}
                    ${!item.disabled ? 'hover:shadow-2xl hover:shadow-red-200/20 dark:hover:shadow-red-900/20' : ''}
                    ${item.disabled ? 'opacity-60' : ''}
                  `}
                  whileHover={!item.disabled ? { 
                    y: -8, 
                    scale: 1.02,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  } : {}}
                  initial={{ opacity: 0, rotateX: 20 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Floating icon */}
                  <motion.div
                    className="flex items-center justify-between mb-8"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl text-red-500 dark:text-red-400  shadow-lg"
                      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent />
                    </motion.div>
                    
                    <motion.span 
                      className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-white/30 dark:bg-gray-800/30 px-3 py-1 rounded-full "
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.category}
                    </motion.span>
                  </motion.div>

                  {/* Content with enhanced animations */}
                  <div className="mb-8">
                    <motion.h3 
                      className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-500"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {item.content}
                    </motion.p>
                  </div>

              
                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 dark:from-red-500/10 dark:to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ 
                      background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)"
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Footer with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20 pt-16"
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-red-200 dark:via-red-800 to-transparent mb-12"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
          
          <motion.p 
            className="text-gray-500 dark:text-gray-400 text-kg mb-8 font-bold"
            whileHover={{ scale: 1.02 }}
          >
            Interested in collaboration?
          </motion.p>
          
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-400 text-white font-medium rounded-full shadow-lg shadow-red-200/50 dark:shadow-red-900/50 hover:shadow-xl hover:shadow-red-300/50 dark:hover:shadow-red-800/50 transition-all duration-500"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}