


import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  RefreshCw,
  Zap,
  Users,
  Cloud,
  Settings,
  FileText,
  Mic,
  Image,
  Download,
  ArrowRight,
  Play,
  Shield,
  Brain,
  Workflow,
  Database,
  Eye,
  UserCheck,
  Crown,
  User,
  ChevronDown,
  Monitor,
  Globe,
  Lock,
  Volume2,
  Maximize,
  ChevronLeft,
  ChevronRight,  Pause 
} from "lucide-react";
import ExternalLink from '../ExternalLink';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
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
    y: -2,
    transition: {
      duration: 0.2,
    },
  },
};

const pageSlideVariants = {
  hidden: { opacity: 0, x: '100vw' },  // start off-screen right
  visible: { 
    opacity: 1, 
    x: 0,                          // end at natural position
    transition: { duration: 1, ease: "easeOut" }
  },
};


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const MLloOpsContent = () => {
  const [activeProcessing, setActiveProcessing] = useState(0);
  const [expandedWorkflow, setExpandedWorkflow] = useState(null);

  // Processing types with input/output combinations
  const processingTypes = [
    {
      input: "PDF Documents",
      icon: <FileText className="w-6 h-6" />,
      processes: [
        { step: "PreProcessor", description: "Document parsing and structure analysis" },
        { step: "Transcriber", description: "Text extraction and recognition" },
        { step: "Extractor", description: "Data mining and content identification" },
        { step: "Post Processor", description: "Data cleaning and formatting" }
      ],
      outputs: ["JSON", "Structured Text", "Database Records", "CSV"],
      description: "Transform PDF documents into structured, searchable data formats"
    },
    {
      input: "Audio Files",
      icon: <Mic className="w-6 h-6" />,
      processes: [
        { step: "Audio Analysis", description: "Sound quality and format detection" },
        { step: "Speech Recognition", description: "Convert speech into accurate text transcripts" },
        { step: "Content Extraction", description: "Identify and extract key information from audio" },
        { step: "Translation", description: "Translate transcripts into multiple languages with AI precision" },
        { step: "Audio ↔ Text Conversion", description: "Convert audio to text and text to audio with multi-format accessibility" }
      ],
      outputs: ["Audio Files", "Text Transcripts", "Image Summaries", "JSON Data"],
      description: "Convert audio content into multiple accessible formats with AI precision"
    },
    {
      input: "Image Files",
      icon: <Image className="w-6 h-6" />,
      processes: [
        { step: "Computer Vision", description: "Visual content analysis" },
        { step: "Content Analysis", description: "Object and context identification" },
        { step: "Image Detection", description: "Detect if the image is AI-generated and classify it into the right category." }
      ],
      outputs: ["Extracted Text", "PDF Reports", "JSON Data", "Structured Tables"],
      description: "Extract and structure information from images using advanced computer vision"
    }
  ];

  // User roles
  const userRoles = [
    // {
    //   role: "Super Admin",
    //   icon: <Crown className="w-5 h-5" />,
    //   permissions: ["Complete system oversight", "User management across all levels", "Global configuration settings", "Advanced analytics and reporting"],
    //   responsibilities: "Manages the entire MLloOps ecosystem with full control over all operations and user access."
    // },
    {
      role: "Process Controller",
      icon: <Crown className="w-5 h-5" />,
      permissions: ["Add and assign users to projects", "Monitor process and status dashboards" , "Oversee progress and ensure quality"],
      responsibilities: "Oversees project workflows and team activities but does not upload files"
    },
    {
      role: "Data Validator",
      icon: <User className="w-5 h-5" />,
      permissions: ["Upload supported file formats","Track preprocessing, transcription, extraction, and postprocessing",
"Validate outputs and collaborate on tasks"],
      responsibilities: "Manages data workflows in MLloOps and ensures accurate processing"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "AI-Powered Processing",
      description: "AI handles data extraction, processing large volumes with speed and precision.",
      stats: "Process 1000+ files simultaneously."
    },
    {
  icon: <Users className="w-8 h-8 text-green-600" />,
  title: "Human Validation",
  description: "Expert reviewers ensure accuracy and add domain insights.",
  stats: "Accuracy > 95% with oversight."
},

    {
      icon: <RefreshCw className="w-8 h-8 text-green-600" />,
      title: "Continuous Improvement",
      description: "Machine learning evolves from human feedback to improve efficiency.",
      stats: "15% improvement monthly."
    },
  ];

const slideFromRight = {
  hidden: { opacity: 0, x: 100 }, // start off-screen right
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100 }, // start off-screen left
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.mp4',
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.jpg' // Auto-generated thumbnail
    },
    { 
      title: 'AI Processing Demo', 
      duration: '3:20',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.mp4', // Same video for demo
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.jpg'
    },
    { 
      title: 'Human Collaboration', 
      duration: '1:55',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.mp4',
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.jpg'
    },
    { 
      title: 'Results Dashboard', 
      duration: '2:10',
      url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.mp4', // Same video for demo
      thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.jpg'
    }
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

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Explore Our Platform
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
                  {/* Play/Pause Button */}
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

                  {/* Navigation Buttons */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleVideoChange(Math.max(0, currentVideo - 1))}
                    disabled={currentVideo === 0}
                    className="p-2 rounded-full bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleVideoChange(Math.min(videos.length - 1, currentVideo + 1))}
                    disabled={currentVideo === videos.length - 1}
                    className="p-2 rounded-full bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentVideo 
                    ? 'ring-4 ring-blue-500 shadow-lg' 
                    : 'hover:ring-2 hover:ring-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleVideoChange(index)}
              >
                <div className="relative aspect-video bg-gray-300">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className={`rounded-full p-2 ${
                      index === currentVideo ? 'bg-blue-500' : 'bg-white/80'
                    }`}>
                      <Play className={`w-4 h-4 ${
                        index === currentVideo ? 'text-white' : 'text-gray-700'
                      }`} fill="currentColor" />
                    </div>
                  </div>
                  {index === currentVideo && (
                    <div className="absolute top-2 left-2">
                      <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        {isPlaying ? 'Now Playing' : 'Selected'}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3 bg-white">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {video.title}
                  </h4>
                  <p className="text-xs text-gray-500">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentVideo ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => handleVideoChange(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};





  const workflow = [
    {
      id: 1,
      title: "Requirements Analysis",
      description: "Comprehensive understanding of client needs, data types, and desired outcomes",
      icon: <Eye className="w-5 h-5" />,
      details: [
        "Initial client consultation and needs assessment",
        "Data format analysis and compatibility review",
        "Output requirements specification",
        "Timeline and resource planning"
      ]
    },
    {
      id: 2,
      title: "Project Configuration",
      description: "Custom setup tailored to specific client requirements and data processing needs",
      icon: <Settings className="w-5 h-5" />,
      details: [
        "Custom workflow design and configuration",
        "User role assignment and access control",
        "Integration with client systems",
        "Quality parameters definition"
      ]
    },
    {
      id: 3,
      title: "Data Ingestion",
      description: "Secure upload and preprocessing of client data across multiple formats",
      icon: <Database className="w-5 h-5" />,
      details: [
        "Multi-format file upload and validation",
        "Data security and encryption protocols",
        "Batch processing capabilities",
        "Real-time status monitoring"
      ]
    },
    {
      id: 4,
      title: "AI Processing",
      description: "Advanced machine learning algorithms process and extract structured data",
      icon: <Workflow className="w-5 h-5" />,
      details: [
        "Automated content extraction and analysis",
        "Multi-stage processing pipeline",
        "Error detection and handling",
        "Progress tracking and reporting"
      ]
    },
    {
      id: 5,
      title: "Quality Validation",
      description: "Human experts review and refine AI-generated outputs for maximum accuracy",
      icon: <UserCheck className="w-5 h-5" />,
      details: [
        "Expert human review and validation",
        "Error correction and refinement",
        "Quality score assignment",
        "Feedback integration for AI learning"
      ]
    },
    {
      id: 6,
      title: "Output Delivery",
      description: "Processed data delivered in client-specified formats with comprehensive reporting",
      icon: <Download className="w-5 h-5" />,
      details: [
        "Multiple output format options",
        "Comprehensive processing reports",
        "Secure delivery mechanisms",
        "Post-delivery support and maintenance"
      ]
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enhanced Efficiency",
      description: "AI + human expertise for faster results",
      metric: "300% faster than traditional methods"
    },
   {
  icon: <CheckCircle className="w-6 h-6" />,
  title: "Superior Accuracy",
  description: "Human oversight ensures precision",
  metric: "Accuracy > 95%"
},

    {
      icon: <Globe className="w-6 h-6" />,
      title: "Flexible Deployment",
      description: "Deploy on-premise, private, or public cloud",
      metric: "Multiple deployment options"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Complete Visibility",
      description: "Real-time monitoring with analytics",
      metric: "24/7 system reporting"
    },
  ];

  const deploymentOptions = [
    {
      title: "On-Premise Deployment",
      icon: <Lock className="w-6 h-6" />,
      description: "Full control with maximum security",
      features: ["Full data control", "Custom security protocols", "Dedicated resources", "Offline capabilities"]
    },
    {
      title: "Private Cloud",
      icon: <Cloud className="w-6 h-6" />,
      description: "Secure, dedicated, and scalable",
      features: ["Dedicated infrastructure", "Enhanced security", "Scalable resources", "Remote accessibility"]
    },
    {
      title: "Public Cloud",
      icon: <Globe className="w-6 h-6" />,
      description: "Cost-effective with global access",
      features: ["Cost optimization", "Global access", "Automatic scaling", "Maintenance-free"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.div
    className="min-h-screen bg-white"
    variants={pageSlideVariants}
    initial="hidden"
    animate="visible"
  >
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4"
        {...fadeIn}
      >
        <div className="max-w-7xl mx-auto">
        
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              MLloOps
              <span className="text-xl align-super text-green-600">™</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI-Human Collaborative Platform for Advanced Machine Learning Workflows
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-200 flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </motion.button> */}
                      <ExternalLink
  href="https://mlloops.rbg.ai/"
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
>
  Get Started with MLloOps™
</ExternalLink>
              <Link to="/Contact"
         
          className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
        >
          Request for a Demo
        </Link>
            </motion.div>
          </div>
  <CarouselStyle/>
          {/* Platform Overview */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                AI and Human Expertise in Harmony

              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                MLloOps™ merges AI speed and scale with human precision, turning PDFs, audio, and images into structured, actionable data through a smart, self-improving workflow.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-gray-600">Files processed simultaneously</div>
                </div>
                <div>
                 <div className="text-3xl font-bold text-green-600">&gt;95%</div>
<div className="text-gray-600">Accuracy consistently maintained</div>

                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">300%</div>
                  <div className="text-gray-600">Faster than traditional methods</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        className="py-2 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={slideFromRight}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Core Features
          </motion.h2>
          
          <motion.div
            variants={slideFromLeft}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={slideFromRight}
                whileHover="hover"
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-green-600">
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Processing Types Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={slideFromLeft}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-4"
          >
            Multi-Format Processing
          </motion.h2>
          <motion.p
            variants={slideFromRight}
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          >
            Convert any data format into structured, actionable information with ease.
          </motion.p>
          
          {/* Processing Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 inline-flex border border-gray-200">
              {processingTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProcessing(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeProcessing === index 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {type.icon}
                  {type.input}
                </button>
              ))}
            </div>
          </div>

          {/* Active Processing Type Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProcessing}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {processingTypes[activeProcessing].input} Processing
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {processingTypes[activeProcessing].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-black mb-4">Output Formats:</h4>
                    <div className="flex flex-wrap gap-3">
                      {processingTypes[activeProcessing].outputs.map((output, oIndex) => (
                        <span
                          key={oIndex}
                          className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg font-medium"
                        >
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-black mb-6">Processing Pipeline:</h4>
                  <div className="space-y-4">
                    {processingTypes[activeProcessing].processes.map((process, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                          {pIndex + 1}
                        </div>
                        <div>
                          <h5 className="font-semibold text-black">{process.step}</h5>
                          <p className="text-gray-600 text-sm">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* User Roles Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={slideFromLeft}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Role-Based Access Control
          </motion.h2>
          
          <motion.div
            variants={slideFromRight}
            className="grid md:grid-cols-2 gap-8"
          >
            {userRoles.map((role, index) => (
              <motion.div
                key={index}
                variants={slideFromLeft}
                whileHover="hover"
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-green-600">{role.icon}</div>
                    <h3 className="text-xl font-bold text-black">{role.role}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{role.responsibilities}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-black mb-4">Key Permissions:</h4>
                  <ul className="space-y-3">
                    {role.permissions.map((permission, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Workflow Section */}
    {/* Workflow Section */}
<motion.section
  className="py-20 px-4 bg-gray-50"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto">
    <motion.h2
      variants={slideFromRight}
      className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
    >
      Complete MLloOps™ Workflow
    </motion.h2>
    
    <div className="space-y-4">
      {workflow.map((step, index) => (
        <motion.div
          key={step.id}
          variants={index % 2 === 0 ? slideFromLeft : slideFromRight} // Alternate left/right
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setExpandedWorkflow(expandedWorkflow === step.id ? null : step.id)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="text-left">
                <h3 className="font-bold text-black text-lg">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                expandedWorkflow === step.id ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          <AnimatePresence>
            {expandedWorkflow === step.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    <h4 className="font-semibold text-black mb-4">Detailed Process:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-3 text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={slideFromLeft}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Why Choose MLloOps™?
          </motion.h2>
          
          <motion.div
            variants={slideFromRight}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={slideFromLeft}
                whileHover="hover"
                className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-green-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                <div className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {benefit.metric}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Deployment Options */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={slideFromRight}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
          >
            Flexible Deployment Options
          </motion.h2>
          
          <motion.div
            variants={slideFromLeft}
            className="grid md:grid-cols-3 gap-8"
          >
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={slideFromRight}
                whileHover="hover"
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-green-600 mb-6">{option.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
    <motion.section
  className="py-20 px-6 bg-white text-black max-w-4xl mt-2 mb-4 mx-auto rounded-2xl shadow-lg"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div
    variants={slideFromLeft}
    className="text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Transform Your Data?
    </h2>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
     MLloOps™ combines AI and human expertise to process any format at any scale.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <ExternalLink
  href="https://mlloops.rbg.ai/"
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
>
  Get Started with MLloOps™
</ExternalLink>
              <Link to="/Contact"
         
          className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
        >
          Request for a Demo
        </Link>
    </div>
  </motion.div>
</motion.section>
 </motion.div>
    </div>
  );
};

export default MLloOpsContent;


// import { Link } from "react-router-dom";
// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   CheckCircle,
//   RefreshCw,
//   Zap,
//   Users,
//   Cloud,
//   Settings,
//   FileText,
//   Mic,
//   Image,
//   Download,
//   ArrowRight,
//   Play,
//   Shield,
//   Brain,
//   Workflow,
//   Database,
//   Eye,
//   UserCheck,
//   Crown,
//   User,
//   ChevronDown,
//   Monitor,
//   Globe,
//   Lock,
//   Volume2,
//   Maximize,
//   ChevronLeft,
//   ChevronRight,
//   Pause 
// } from "lucide-react";
// import ExternalLink from '../ExternalLink';

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   hover: {
//     y: -2,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };


// const slideVariants = {
//   hiddenLeft: { opacity: 0, x: -100 },
//   hiddenRight: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6 }
// };

// const pageSlideVariants = {
//   hidden: { opacity: 0, x: '100vw' },
//   visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
// };

// const MLloOpsContent = () => {
//   const [activeProcessing, setActiveProcessing] = useState(0);
//   const [expandedWorkflow, setExpandedWorkflow] = useState(null);

//   const videoRef = useRef(null);
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const processingTypes = [
//     {
//       input: "PDF Documents",
//       icon: <FileText className="w-6 h-6" />,
//       processes: [
//         { step: "PreProcessor", description: "Document parsing and structure analysis" },
//         { step: "Transcriber", description: "Text extraction and recognition" },
//         { step: "Extractor", description: "Data mining and content identification" },
//         { step: "Post Processor", description: "Data cleaning and formatting" }
//       ],
//       outputs: ["JSON", "Structured Text", "Database Records", "CSV"],
//       description: "Transform PDF documents into structured, searchable data formats"
//     },
//     {
//       input: "Audio Files",
//       icon: <Mic className="w-6 h-6" />,
//       processes: [
//         { step: "Audio Analysis", description: "Sound quality and format detection" },
//         { step: "Speech Recognition", description: "Convert speech into accurate text transcripts" },
//         { step: "Content Extraction", description: "Identify and extract key information from audio" },
//         { step: "Translation", description: "Translate transcripts into multiple languages with AI precision" },
//         { step: "Audio ↔ Text Conversion", description: "Convert audio to text and text to audio with multi-format accessibility" }
//       ],
//       outputs: ["Audio Files", "Text Transcripts", "Image Summaries", "JSON Data"],
//       description: "Convert audio content into multiple accessible formats with AI precision"
//     },
//     {
//       input: "Image Files",
//       icon: <Image className="w-6 h-6" />,
//       processes: [
//         { step: "Computer Vision", description: "Visual content analysis" },
//         { step: "Content Analysis", description: "Object and context identification" },
//         { step: "Image Detection", description: "Detect if the image is AI-generated and classify it into the right category." }
//       ],
//       outputs: ["Extracted Text", "PDF Reports", "JSON Data", "Structured Tables"],
//       description: "Extract and structure information from images using advanced computer vision"
//     }
//   ];

//   const userRoles = [
//     {
//       role: "Process Controller",
//       icon: <Crown className="w-5 h-5" />,
//       permissions: ["Add and assign users to projects", "Monitor process and status dashboards" , "Oversee progress and ensure quality"],
//       responsibilities: "Oversees project workflows and team activities but does not upload files"
//     },
//     {
//       role: "Data Validator",
//       icon: <User className="w-5 h-5" />,
//       permissions: ["Upload supported file formats","Track preprocessing, transcription, extraction, and postprocessing",
// "Validate outputs and collaborate on tasks"],
//       responsibilities: "Manages data workflows in MLloOps and ensures accurate processing"
//     }
//   ];

//   const features = [
//     {
//       icon: <Brain className="w-8 h-8 text-green-600" />,
//       title: "AI-Powered Processing",
//       description: "AI handles data extraction, processing large volumes with speed and precision.",
//       stats: "Process 1000+ files simultaneously."
//     },
//     {
//       icon: <Users className="w-8 h-8 text-green-600" />,
//       title: "Human Validation",
//       description: "Expert reviewers ensure accuracy and add domain insights.",
//       stats: "Accuracy > 95% with oversight."
//     },
//     {
//       icon: <RefreshCw className="w-8 h-8 text-green-600" />,
//       title: "Continuous Improvement",
//       description: "Machine learning evolves from human feedback to improve efficiency.",
//       stats: "15% improvement monthly."
//     },
//   ];

//   const workflow = [
//     {
//       id: 1,
//       title: "Requirements Analysis",
//       description: "Comprehensive understanding of client needs, data types, and desired outcomes",
//       icon: <Eye className="w-5 h-5" />,
//       details: [
//         "Initial client consultation and needs assessment",
//         "Data format analysis and compatibility review",
//         "Output requirements specification",
//         "Timeline and resource planning"
//       ]
//     },
//     {
//       id: 2,
//       title: "Project Configuration",
//       description: "Custom setup tailored to specific client requirements and data processing needs",
//       icon: <Settings className="w-5 h-5" />,
//       details: [
//         "Custom workflow design and configuration",
//         "User role assignment and access control",
//         "Integration with client systems",
//         "Quality parameters definition"
//       ]
//     },
//     {
//       id: 3,
//       title: "Data Ingestion",
//       description: "Secure upload and preprocessing of client data across multiple formats",
//       icon: <Database className="w-5 h-5" />,
//       details: [
//         "Multi-format file upload and validation",
//         "Data security and encryption protocols",
//         "Batch processing capabilities",
//         "Real-time status monitoring"
//       ]
//     },
//     {
//       id: 4,
//       title: "AI Processing",
//       description: "Advanced machine learning algorithms process and extract structured data",
//       icon: <Workflow className="w-5 h-5" />,
//       details: [
//         "Automated content extraction and analysis",
//         "Multi-stage processing pipeline",
//         "Error detection and handling",
//         "Progress tracking and reporting"
//       ]
//     },
//     {
//       id: 5,
//       title: "Quality Validation",
//       description: "Human experts review and refine AI-generated outputs for maximum accuracy",
//       icon: <UserCheck className="w-5 h-5" />,
//       details: [
//         "Expert human review and validation",
//         "Error correction and refinement",
//         "Quality score assignment",
//         "Feedback integration for AI learning"
//       ]
//     },
//     {
//       id: 6,
//       title: "Output Delivery",
//       description: "Processed data delivered in client-specified formats with comprehensive reporting",
//       icon: <Download className="w-5 h-5" />,
//       details: [
//         "Multiple output format options",
//         "Comprehensive processing reports",
//         "Secure delivery mechanisms",
//         "Post-delivery support and maintenance"
//       ]
//     },
//   ];

//   const benefits = [
//     { icon: <Zap className="w-6 h-6" />, title: "Enhanced Efficiency", description: "AI + human expertise for faster results", metric: "300% faster than traditional methods" },
//     { icon: <CheckCircle className="w-6 h-6" />, title: "Superior Accuracy", description: "Human oversight ensures precision", metric: "Accuracy > 95%" },
//     { icon: <Globe className="w-6 h-6" />, title: "Flexible Deployment", description: "Deploy on-premise, private, or public cloud", metric: "Multiple deployment options" },
//     { icon: <Monitor className="w-6 h-6" />, title: "Complete Visibility", description: "Real-time monitoring with analytics", metric: "24/7 system reporting" },
//   ];

//   const deploymentOptions = [
//     { title: "On-Premise Deployment", icon: <Lock className="w-6 h-6" />, description: "Full control with maximum security", features: ["Full data control", "Custom security protocols", "Dedicated resources", "Offline capabilities"] },
//     { title: "Private Cloud", icon: <Cloud className="w-6 h-6" />, description: "Secure, dedicated, and scalable", features: ["Dedicated infrastructure", "Enhanced security", "Scalable resources", "Remote accessibility"] },
//     { title: "Public Cloud", icon: <Globe className="w-6 h-6" />, description: "Cost-effective with global access", features: ["Cost optimization", "Global access", "Automatic scaling", "Maintenance-free"] }
//   ];

//   const CarouselStyle = () => {
//     const videos = [
//       { title: 'Platform Overview', duration: '2:45', url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.mp4', thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272819/Platform_Overview_yhlgmf.jpg' },
//       { title: 'AI Processing Demo', duration: '3:20', url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.mp4', thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272821/AI_Processing_Demo_p9i4f9.jpg' },
//       { title: 'Human Collaboration', duration: '1:55', url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.mp4', thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272818/Human_Collaboration_tydwy9.jpg' },
//       { title: 'Results Dashboard', duration: '2:10', url: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.mp4', thumbnail: 'https://res.cloudinary.com/datwcxi7y/video/upload/v1758272822/Results_Dashboard_dgt1iw.jpg' }
//     ];

//     const handlePlayClick = async () => {
//       if (!videoRef.current) return;
//       try {
//         setIsLoading(true);
//         if (isPlaying) {
//           videoRef.current.pause();
//           setIsPlaying(false);
//         } else {
//           await videoRef.current.load();
//           await videoRef.current.play();
//           setIsPlaying(true);
//         }
//       } catch (error) { console.error(error); } finally { setIsLoading(false); }
//     };

//     const handleVideoChange = (index) => {
//       if (videoRef.current) videoRef.current.pause();
//       setCurrentVideo(index);
//       setIsPlaying(false);
//       setIsLoading(false);
//     };

//     return (
//       <motion.section className="py-20 px-8 bg-gray-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <div className="max-w-5xl mx-auto">
//           <motion.div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-black mb-4">Explore Our Platform</h2>
//             <p className="text-gray-600 text-lg">Multiple perspectives, one powerful solution</p>
//           </motion.div>

//           {/* Main Video + Thumbnails */}
//           <div className="relative">
//             <motion.div className="bg-black rounded-xl overflow-hidden mb-8 shadow-xl" key={currentVideo} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
//               <div className="relative aspect-video bg-gray-900">
//                 <video ref={videoRef} className="w-full h-full object-cover" poster={videos[currentVideo].thumbnail} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} playsInline preload="metadata">
//                   <source src={videos[currentVideo].url} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>

//                 {/* Play Overlay */}
//                 <AnimatePresence>
//                   {!isPlaying && (
//                     <motion.div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10" onClick={handlePlayClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                       {isLoading ? (
//                         <div className="bg-white/90 rounded-full p-4"><div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-gray-900"></div></div>
//                       ) : (
//                         <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-all duration-300"><Play className="w-8 h-8 text-gray-900" fill="currentColor" /></div>
//                       )}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Video Info Bar */}
//               <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold">{videos[currentVideo].title}</h3>
//                   <span className="text-gray-400">{videos[currentVideo].duration}</span>
//                 </div>
//                 <div className="flex space-x-4">
//                   <button onClick={() => handleVideoChange((currentVideo - 1 + videos.length) % videos.length)}><ChevronLeft className="w-6 h-6" /></button>
//                   <button onClick={() => handleVideoChange((currentVideo + 1) % videos.length)}><ChevronRight className="w-6 h-6" /></button>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Thumbnails */}
//             <div className="grid grid-cols-4 gap-4">
//               {videos.map((video, index) => (
//                 <motion.div key={index} className={`cursor-pointer border-2 rounded-lg overflow-hidden ${index === currentVideo ? 'border-green-500' : 'border-transparent'}`} onClick={() => handleVideoChange(index)} whileHover={{ scale: 1.05 }}>
//                   <img src={video.thumbnail} alt={video.title} className="w-full h-20 object-cover" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     );
//   };

//   return (
//     <motion.div className="" variants={pageSlideVariants} initial="hidden" animate="visible">
//       {/* Features Section */}
//         <CarouselStyle />
//      <motion.section className="max-w-6xl mx-auto px-4 py-2 mb-2 mt-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//         <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeIn}>Key Features</motion.h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div key={index} variants={slideVariants} initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"} whileInView="visible" viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//               <p className="mt-2 text-green-600 font-bold">{feature.stats}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Workflow Section */}
//        <motion.section className="max-w-6xl mx-auto px-4 py-2 mb-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//         <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeIn}>Workflow</motion.h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {workflow.map((step, index) => (
//             <motion.div key={step.id} variants={slideVariants} initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"} whileInView="visible" viewport={{ once: true }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center mb-2">
//                 <div className="mr-3">{step.icon}</div>
//                 <h3 className="text-xl font-semibold">{step.title}</h3>
//               </div>
//               <p className="text-gray-600 mb-2">{step.description}</p>
//               <ul className="list-disc pl-6 text-gray-500">
//                 {step.details.map((detail, i) => <li key={i}>{detail}</li>)}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Benefits Section */}
//  <motion.section className="max-w-6xl mx-auto px-4 py-2 mb-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//         <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeIn}>Benefits</motion.h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {benefits.map((benefit, index) => (
//             <motion.div key={index} variants={slideVariants} initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"} whileInView="visible" viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4">
//               <div>{benefit.icon}</div>
//               <div>
//                 <h3 className="text-lg font-semibold">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//                 <p className="mt-1 font-bold text-green-600">{benefit.metric}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Deployment Section */}
//    <motion.section className="max-w-6xl mx-auto px-4 py-2 mb-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//         <motion.h2 className="text-3xl font-bold mb-8 text-center" {...fadeIn}>Deployment Options</motion.h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {deploymentOptions.map((option, index) => (
//             <motion.div key={index} variants={slideVariants} initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"} whileInView="visible" viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
//               <div className="mb-4">{option.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
//               <p className="text-gray-600 mb-2">{option.description}</p>
//               <ul className="list-disc pl-6 text-gray-500">
//                 {option.features.map((feat, i) => <li key={i}>{feat}</li>)}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Processing Carousel Section */}
//  <motion.section
//         className="py-20 px-6 bg-white/60 backdrop-blur-sm text-black max-w-4xl mt-8 mb-8 mx-auto rounded-2xl shadow-lg border border-gray-200 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50 rounded-2xl" />
//         <motion.div
//           variants={cardVariants}
//           className="text-center relative"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//             Ready to Transform Your Data Processing?
//           </h2>
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//             Experience the power of AI-human collaboration with MLStack™. Process any format,
//             manage any scale, deliver precise results—all through one intelligent platform.
//           </p>
    
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//                className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-200"
//             >
//               Start Free Trial
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//                className="border border-gray-600 text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
//             >
//               Schedule Demo
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.section>

//     </motion.div>
    
//   );
// };

// export default MLloOpsContent;
