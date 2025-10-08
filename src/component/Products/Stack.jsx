

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  FileText,
  MessageCircle,
  Camera,
  Database,
  Cloud,
  Settings,
  Network,
  X,
  ArrowRight,
  ChevronDown,
  Check,
  ExternalLink,
  BookOpen,
  Eye,
  Zap,
  Shield,
  Users,
  Target,
  Award,
  TrendingUp,
  Play,
  Code2,
  Sparkles,ChevronLeft,ChevronRight,Pause
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    },
  },
};

// Floating particles animation
const FloatingParticles = ({ count = 6 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-300 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Service Images Data - Replace with your actual Cloudinary URLs
const serviceImages = {
  "Text Classifier": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348885/Text_Classifier_vjct5m.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348885/Text_Classifier_vjct5m.png",
    ]
  },
  "Text Extractor": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348978/Text_Extractor_tvsoim.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758348978/Text_Extractor_tvsoim.png",
    ]
  },
  "Text Translator": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349030/Text_Translator_m6cmif.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349030/Text_Translator_m6cmif.png",
    ]
  },
  "Text Summarizer": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349084/Text_Summarizer_c5rjuw.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349084/Text_Summarizer_c5rjuw.png",
    ]
  },
  "Voice Transcriber": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349129/Voice_Transcriber_pe5obo.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758349129/Voice_Transcriber_pe5obo.png",
    ]
  },
  "Voice Enhancer": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196834/Audio_to_Audio_qfjdt7.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758196834/Audio_to_Audio_qfjdt7.png",
    ]
  },
  "Voice Recognition": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352016/Voice_Recognition_db0pxf.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352016/Voice_Recognition_db0pxf.png",
    ]
  },
  "Voice Synthesizer": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758974026/Image8_whvg0u.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758974026/Image8_whvg0u.png",
    ]
  },
  "Vision Transcriber": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758974123/Image9_ldln6l.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758974123/Image9_ldln6l.png",
    ]
  },
  "Vision Classifier": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352186/Vision_Classifier_psxvaa.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352186/Vision_Classifier_psxvaa.png",
    ]
  },
  "Vision Detector": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758974200/Image11_rdmssp.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758974200/Image11_rdmssp.png",
    ]
  },
  "Table Extractor": {
    preview: "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352267/Table_Extractor_jcm8m0.png",
    gallery: [
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1758352267/Table_Extractor_jcm8m0.png",
    ]
  }
};

const CarouselStyle = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  
   const videos = [
    { 
      title: 'Platform Overview', 
      duration: '2:45',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758358981/MLloOps_Changed_images_wzknfo.mp4',
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758358981/MLloOps_Changed_images_wzknfo.jpg' // Auto-generated thumbnail
    },
  
  ];

  const handlePlayClick = async () => {
    if (!videoRef.current) return;
    
    try {
      setIsLoading(true);
      
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure video is loaded
        await videoRef.current.load();
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Video play error:', error);
      // Fallback: try to play without await
      if (!isPlaying) {
        videoRef.current.play().catch(e => console.error('Fallback play failed:', e));
      }
    } finally {
      setIsLoading(false);
    }
  };
    const handleVideoChange = (index) => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setCurrentVideo(index);
      setIsPlaying(false);
      setIsLoading(false);
    };
  
    // Video event handlers
    const handleVideoPlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
  
    const handleVideoPause = () => {
      setIsPlaying(false);
    };
  
    const handleVideoEnded = () => {
      setIsPlaying(false);
    };
  
    const handleVideoLoadStart = () => {
      setIsLoading(true);
    };
  
    const handleVideoCanPlay = () => {
      setIsLoading(false);
    };
  
    return (
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto bg-gray-50">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Explore Our Stack Platform
            </h2>
            <p className="text-gray-600 text-lg">
              Multiple perspectives, one powerful solution
            </p>
          </motion.div>
  
          <div className="relative">
            {/* Main video player */}
            <motion.div
              className="bg-black rounded-xl overflow-hidden mb-8 shadow-xl"
              key={currentVideo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-video bg-gray-900">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={videos[currentVideo].thumbnail}
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={handleVideoEnded}
                  onLoadStart={handleVideoLoadStart}
                  onCanPlay={handleVideoCanPlay}
                  playsInline
                  preload="metadata"
                  style={{ display: isPlaying ? 'block' : 'block' }}
                >
                  <source src={videos[currentVideo].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
  
                {/* Large Play Button Overlay - Fixed Click Handler */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
                      onClick={handlePlayClick}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="relative flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isLoading ? (
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-gray-900"></div>
                          </div>
                        ) : (
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:bg-white transition-all duration-300">
                            <Play className="w-8 h-8 text-gray-900 ml-2" fill="currentColor" />
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
  
                {/* Video Controls Overlay (when playing) */}
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div 
                      className="absolute inset-0 bg-transparent cursor-pointer z-5"
                      onClick={handlePlayClick}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              
              {/* Video Info Bar */}
              <div className="p-6 bg-gray-900 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{videos[currentVideo].title}</h3>
                    <span className="text-gray-400">{videos[currentVideo].duration}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                   
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayClick}
                      disabled={isLoading}
                      className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      ) : isPlaying ? (
                        <Pause className="w-5 h-5" fill="currentColor" />
                      ) : (
                        <Play className="w-5 h-5" fill="currentColor" />
                      )}
                    </motion.button>
  
               
                   
                  </div>
                </div>
              </div>
            </motion.div>
  
         
          </div>
        </div>
      </motion.section>
    );
  };

// Enhanced Service Card with subtle animations
// Enhanced Service Card with light hover animation and visible background
const ServiceCard = ({ service, stackTitle, onServiceClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const serviceImageData = serviceImages[service.name];
  const previewImage = serviceImageData?.preview || "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <motion.div
      className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50" />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-2 -right-2 w-20 h-20 bg-gray-100 rounded-full opacity-30"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.4 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-200 rounded-full opacity-20"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.3 : 0.2,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </div>

      {/* Main Content - Always Visible */}
      <div className="relative p-6 z-10"  onClick={(e) => {
                  e.stopPropagation();
                  onServiceClick({
                    stackTitle,
                    ...service,
                    images: serviceImageData
                  });
                }}>
        {/* Service Preview Image */}
        <div className="mb-4 overflow-hidden rounded-lg bg-gray-50">
          <motion.img
            src={previewImage}
            alt={`${service.name} preview`}
            className="w-full h-32 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x200?text=Service+Preview";
            }}
          />
        </div>

        {/* Service Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            {service.name}
          </h3>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
              rotate: isHovered ? 45 : 0
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </motion.div>
        </div>
        
        {/* Service Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {service.description}
        </p>
        
        {/* Service Metrics */}
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="text-gray-700 font-medium">{service.metrics?.accuracy} accuracy</span>
          <span className="text-gray-500">{service.metrics?.speed}</span>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features?.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200"
            >
              {feature}
            </span>
          ))}
          {service.features?.length > 2 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-50 text-gray-500 border border-gray-200">
              +{service.features.length - 2} more
            </span>
          )}
        </div>

        {/* View Details Button - Only shows on hover with light animation */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut",
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              className="flex justify-center"
            >
              <motion.button
                 className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onServiceClick({
                    stackTitle,
                    ...service,
                    images: serviceImageData
                  });
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Eye className="w-4 h-4" />
                </motion.div>
                <span>View Details</span>
                <motion.div
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Light Hover Effect Overlay - Very subtle */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-100/10 via-transparent to-gray-200/10 pointer-events-none rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle border glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 pointer-events-none rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Decorative corner elements that animate on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div 
              className="absolute top-2 right-2 w-2 h-2 bg-gray-400 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div 
              className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gray-500 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;
  const modalRef = useRef(null);

  const serviceImageData = service.images || serviceImages[service.name];
  const galleryImages = serviceImageData?.gallery || [];

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
      {/* Background with backdrop filter - content remains visible */}
      <motion.div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        ref={modalRef}
        className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden border border-gray-200"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Compact Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{service.name}</h3>
              <p className="text-gray-600 font-medium text-sm">{service.stackTitle} Service</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(95vh-80px)]">
          {/* Large Image Gallery - Primary Focus */}
          {galleryImages.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Service Preview</h4>
              
              {/* Single Large Featured Image for Mobile, Grid for Desktop */}
              <div className="space-y-4">
                {/* Main Featured Image - Extra Large */}
                <motion.div
                  className="w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={galleryImages[0]}
                    alt={`${service.name} main preview`}
                    className="w-full h-full object-contain bg-white filter grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/1200x600?text=Service+Preview";
                    }}
                  />
                </motion.div>

                {/* Additional Images - Larger Grid */}
                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {galleryImages.slice(1).map((src, index) => (
                      <motion.div
                        key={index}
                        className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={src}
                          alt={`${service.name} feature ${index + 2}`}
                          className="w-full h-full object-contain bg-white filter grayscale hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x450?text=Service+Image";
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Compact Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Description</h4>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{service.description}</p>
          </div>

          {/* Compact Performance Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">{service.metrics?.accuracy}</div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">{service.metrics?.speed}</div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Response</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-150 p-3 md:p-4 rounded-lg border border-gray-200">
            <div className="text-xl md:text-2xl font-bold text-gray-700">&gt;95%</div>
<div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Uptime</div>

            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 md:p-4 rounded-lg border border-gray-200">
              <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">24/7</div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Support</div>
            </div>
          </div>

          {/* Compact Features */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {service.features?.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2 p-2 md:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                >
                  <Check className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compact API Example */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">API Integration</h4>
            <div className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
              <div className="text-gray-400 mb-2 font-sans font-medium text-xs">cURL Example:</div>
              <div className="space-y-1">
                <div className="text-green-400 break-all">curl -X POST "https://api.rbg.ai/v1/{service.name.toLowerCase().replace(' ', '-')}" \</div>
                <div className="ml-2 text-blue-300">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="ml-2 text-blue-300">-H "Content-Type: application/json" \</div>
                <div className="ml-2 text-yellow-300">-d '{"{"}"data": "your_input_data"{"}"}'</div>
              </div>
            </div>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 pt-4 border-t border-gray-200">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Documentation</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors font-medium text-sm">
              <ExternalLink className="w-4 h-4" />
              <span>Try Demo</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm">
              <Code2 className="w-4 h-4" />
              <span>Code Samples</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Stack = () => {
  const [highlightedId, setHighlightedId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [expandedStack, setExpandedStack] = useState(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const slugify = (value) =>
    String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const stacks = [
    {
      title: "TextStack",
      icon: FileText,
      description: "Turn unstructured text into actionable insights with NLP APIs.",
      longDescription: "Advanced text processing capabilities including classification, extraction, translation, and summarization. Built with state-of-the-art transformer models for enterprise applications with multilingual support and custom domain adaptation.",
      stats: [
        { label: "Accuracy", value: ">95%" },
        { label: "Languages", value: "100+" },
        { label: "Processed Daily", value: "1B+ docs" }
      ],
      services: [
        {
          name: "Text Classifier",
          description: "Automatically organize and label text by content, context, or tone with high accuracy.",
          features: ["Multi-class classification", "Sentiment analysis", "Intent recognition", "Custom taxonomy"],
          metrics: { accuracy: ">95%", speed: "< 200ms" }
        },
        {
          name: "Text Extractor", 
          description: "Extract key information like entities, keywords, or fields from documents.",
          features: ["Named Entity Recognition", "Key phrase extraction", "Custom field extraction", "Multi-format support"],
          metrics: { accuracy: ">95%", speed: "< 150ms" }
        },
        {
          name: "Text Translator",
          description: "Translate across 100+ languages with cultural context awareness.",
          features: ["Real-time translation", "Batch processing", "Context preservation", "Domain-specific models"],
          metrics: { accuracy: ">95%", speed: "< 300ms" }
        },
        {
          name: "Text Summarizer",
          description: "Summarize long texts into concise, informative insights.",
          features: ["Extractive summarization", "Abstractive summarization", "Custom length control", "Multi-document synthesis"],
          metrics: { accuracy: ">95%", speed: "< 500ms" }
        },
      ],
    },
    {
      title: "VoiceStack",
      icon: MessageCircle,
      description: "Leverage voice data for transcription, enhancement, and speech synthesis.",
      longDescription: "Comprehensive voice processing suite enabling real-time transcription, speaker identification, voice enhancement, and synthesis. Optimized for enterprise applications with noise reduction, multi-language support, and custom voice models.",
      stats: [
        { label: "Accuracy", value: ">95%" },
        { label: "Languages", value: "85+" },
        { label: "Hours Processed", value: "10M+" }
      ],
      services: [
        {
          name: "Voice Transcriber",
          description: "Convert speech to text accurately in real time.",
          features: ["Real-time transcription", "Speaker identification", "Punctuation insertion", "Custom vocabulary"],
          metrics: { accuracy: ">95%", speed: "Real-time" }
        },
        {
          name: "Voice Enhancer",
          description: "Enhance voice clarity by reducing noise with AI.",
          features: ["Noise reduction", "Echo cancellation", "Volume normalization", "Quality enhancement"],
          metrics: { accuracy: ">95%", speed: "< 1s" }
        },
        {
          name: "Voice Recognition",
          description: "Identify speakers and analyze voice patterns.",
          features: ["Speaker verification", "Voice biometrics", "Emotion detection", "Age/gender classification"],
          metrics: { accuracy: ">95%", speed: "< 2s" }
        },
        {
          name: "Voice Synthesizer",
          description: "Generate natural-sounding speech with customizable voices.",
          features: ["Neural voice synthesis", "Custom voice cloning", "SSML support", "Multiple formats"],
          metrics: { accuracy: ">95%", speed: "< 2s" }
        },
      ],
    },
    {
      title: "VisionStack",
      icon: Camera,
      description: "Turn visual data into structured insights with computer vision APIs.",
      longDescription: "Advanced computer vision capabilities for object detection, image classification, OCR, and visual content analysis. Supports real-time processing with high accuracy for enterprise applications across various industries.",
      stats: [
       { label: "Accuracy", value: ">95%" },
        { label: "Formats", value: "20+" },
        { label: "Images Processed", value: "500M+" }
      ],
      services: [
        {
          name: "Vision Transcriber",
          description: "Extract text and info from visuals using OCR for accessibility and archiving.",
          features: ["Multi-language OCR", "Handwriting recognition", "Document structure analysis", "PDF processing"],
          metrics: { accuracy: ">95%", speed: "< 1s" }
        },
        {
          name: "Vision Classifier",
          description: "Identify and categorize objects in images for recognition and management.",
          features: ["Object classification", "Scene understanding", "Custom categories", "Batch processing"],
          metrics: { accuracy: ">95%", speed: "< 400ms" }
        },
        {
          name: "Vision Detector",
          description: "Detect objects or faces in real time for security, retail, and automation.",
          features: ["Real-time detection", "Multi-object tracking", "Face recognition", "Custom object training"],
          metrics: { accuracy: ">95%", speed: "< 100ms" }
        },
        {
          name: "Table Extractor",
          description: "Convert tables and structured visuals into precise digital formats.",
          features: ["Table structure recognition", "Cell content extraction", "Format preservation", "Excel export"],
          metrics: { accuracy: ">95%", speed: "< 2s" }
        },
      ],
    },
  ];

  const features = [
    {
      icon: Database,
      title: "Dockerized Microservices",
      description: "Auto-scalable containers with Kubernetes for large workloads",
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Deployment", 
      description: "Deploy across AWS, Azure, GCP, or on-premises with consistency",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC2, GDPR, encryption, and audit trails",
    },
    {
      icon: Network,
      title: "MLOps Integration",
      description: "Integrates with MLOps for automated model monitoring and deployment",
    },
  ];

  const metrics = [
    { label: "API Calls Processed", value: "10B+", icon: Database },
    { label: "Uptime Guarantee", value: ">95%", icon: Shield },
    { label: "Average Response", value: "<200ms", icon: Zap },
    { label: "Enterprise Clients", value: "500+", icon: Users },
  ];

  // Scroll to target section
  useEffect(() => {
    if (!location.pathname.match(/\/MLStack$/i)) return;
    const target = searchParams.get("stack");
    if (!target) return;

    const id = slugify(target);
    const el = document.getElementById(id);
    if (el) {
      setHighlightedId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.scrollBy({ top: -80, left: 0, behavior: "auto" });
      }, 400);
      const timeout = setTimeout(() => setHighlightedId(null), 2200);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, searchParams]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedService(null);
        setExpandedStack(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating background particles */}
      <FloatingParticles count={8} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-Primary mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              MLStack
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Stack of Machine Learning APIs for Structuring Unstructured Data
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link to="/Contact">
                <motion.button
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <motion.button
                 className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Documentation
              </motion.button>
            </motion.div>
              <CarouselStyle/>
            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  <metric.icon className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-green-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stack Sections */}
      {stacks.map((stack, index) => {
        const sectionId = slugify(stack.title);
        const isHighlighted = highlightedId === sectionId;
        const isExpanded = expandedStack === index;
        
        return (
          <motion.section
            key={stack.title}
            id={sectionId}
            className={`py-20 px-4 relative ${index % 2 === 1 ? 'bg-white/50' : 'bg-gray-100/30'} ${
              isHighlighted ? 'ring-2 ring-gray-400 ring-inset' : ''
            }`}
            {...fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            {/* Section background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-200/20" />
            
            <div className="max-w-6xl mx-auto relative">
              {/* Stack Header */}
              <div className="text-center mb-16">
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200">
                    <stack.icon className="w-10 h-10 text-green-800" />
                  </div>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {stack.title}
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {stack.description}
                </motion.p>

                {/* Stack Stats */}
                <motion.div 
                  className="flex justify-center space-x-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {stack.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-semibold text-green-700">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                <motion.button
                  onClick={() => setExpandedStack(isExpanded ? null : index)}
                  className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-sm font-medium">
                    {isExpanded ? 'Show Less' : 'Learn More'}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-16"
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{stack.longDescription}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Services Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {stack.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={service.name}
                    service={service}
                    stackTitle={stack.title}
                    onServiceClick={setSelectedService}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Features Section */}
      <motion.section className="py-20 px-4 bg-white/30 relative" {...fadeIn}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-transparent to-gray-100/50" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built for scalable, secure, high-performance operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:bg-white/80 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-green-800" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-white/60 backdrop-blur-sm text-black max-w-4xl mt-8 mb-8 mx-auto rounded-2xl shadow-lg border border-gray-200 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50 rounded-2xl" />
        <motion.div
          variants={cardVariants}
          className="text-center relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Data Processing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-human collaboration with MLStack™. Process any format,
            manage any scale, deliver precise results—all through one intelligent platform.
          </p>
    
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
               className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-200"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
               className="border border-gray-600 text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Stack;
