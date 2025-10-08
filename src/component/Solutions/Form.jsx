
import React, { useState, useEffect, useRef } from "react";
import {
  Shield, Database, Waves, Globe2, Brain, Fingerprint, MessageSquare, 
  LayoutDashboard, ChevronRight, Award, Building2, ArrowUpRight, 
  Zap, Lock, Cpu, Mic, Users, TrendingUp, CheckCircle, Play,
  Target, Clock, BarChart3, Eye, Radio, Volume2, Star, BookOpen,
  ArrowDown, Sparkles, LineChart, Activity,FileSearch,Eraser,ScrollText,Files
} from "lucide-react";

const DhvaniPage = () => {
  const [isVisible, setIsVisible] = useState({});
 
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  const cursorRef = useRef(null);

  const fullText = "Answer Sheet";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = ["hero", "stats", "features", "tech", "capabilities", "impact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({ 
  //       x: e.clientX,
  //       y: e.clientY
  //     });
  //   };
  //   const handleScroll = () => setScrollY(window.scrollY);
    
  //   window.addEventListener("mousemove", handleMouseMove);
  //   window.addEventListener("scroll", handleScroll);
    
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Enhanced typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Features data
  const features = [
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "High-Accuracy Extraction",
      description: "Captures key details from mortgage-deed documents with exceptional precision, minimizing manual effort and reducing errors.",
      metric: "99.9%",
      metricLabel: "Accuracy",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Eraser className="w-6 h-6" />,
      title: "Structured Organization",
      description: "Automatically sorts and sequences pages into well-organized digital files for faster review and improved productivity.",
      metric: "95%",
      metricLabel: "Efficiency",
      gradient: "white"
    },
    {
      icon: <ScrollText className="w-6 h-6" />,
      title: "Privacy-First Data Masking",
      description: "Redacts sensitive information to protect confidentiality and ensure compliance with legal and regulatory standards.",
      metric: "100%",
      metricLabel: "Compliance",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Seamless Deployment",
      description: "On-premise ready with centralized management and real-time dashboards, ensuring secure and always-available operations.",
      metric: "24/7 ",
      metricLabel: "Reliability",
      gradient: "white"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Automates extraction, grouping, and masking to reduce manual work and accelerate processing times by up to fivefold.",
      metric: "5×",
      metricLabel: "Faster",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Files className="w-6 h-6" />,
      title: "Resilient Processing",
      description: "Built-in duplicate detection, timely notifications, and a fault-tolerant design guarantee smooth and continuous operations.",
      metric: "99.5%",
      metricLabel: "Continuity",
      gradient: "white"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "Tracks processing status, performance, and document progress dynamically through an intuitive, easy-to-use dashboard.",
      metric: "24/7",
      metricLabel: "Insights",
      gradient: "white"
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Document Automation",
      description: "Leverages advanced algorithms to deliver scalable, reliable, and future-ready mortgage-deed processing for modern enterprises.",
      metric: "5×",
      metricLabel: "Scalability",
      gradient: "white"
    }
    
  ];

  const stats = [
    { value: "500K+", label: "Answer Sheets Processed", icon: <Activity className="w-5 h-5" /> },
    { value: "99%", label: "Data Extraction Accuracy", icon: <Target className="w-5 h-5" /> },
    { value: "3", label: "Colleges Implemented", icon: <Building2 className="w-5 h-5" /> },
    { value: "24/7", label: "System Availability", icon: <Clock className="w-5 h-5" /> }
  ];


  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
 
      
      {/* Ambient background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl transition-all duration-1000"
         
         
        />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced badge */}
          <div className="inline-flex items-center mb-12 group cursor-pointer">
            <div className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" />
              <Shield className="w-4 h-4 mr-3 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 tracking-wide">
                Trusted solution for accurate and secure answer sheet processing.
              </span>
              <Sparkles className="w-4 h-4 ml-3 text-blue-500 opacity-70" />
            </div>
          </div>

          {/* Animated title with enhanced effects */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 blur-3xl animate-pulse" />
            <h1 className="relative text-[6rem] md:text-[8rem] lg:text-[10rem] font-extralight leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 mb-8">
              {typedText}
              <span className="text-gray-400 animate-blink">|</span>
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24" />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-light text-gray-700 tracking-wide">
               Intelligent Processing of Student
                <span className="text-blue-600 font-medium"> Answer Sheets
</span>
              </h2>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32" />
                <div className="w-1 h-1 bg-purple-500 rounded-full" />
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32" />
              </div>
            </div>
          </div>

          {/* Enhanced subtitle */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto font-light opacity-0 animate-fade-in-delayed">
            Automates extraction, sequencing, and privacy for smooth exam management.
          </p>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              className="group relative overflow-hidden"
            
            >
              <div className="relative z-10 flex items-center px-8 py-4 bg-black text-white rounded-full transition-all duration-500 group-hover:bg-blue-600">
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium tracking-wide">Experience Demo</span>
                <div className="ml-3 w-6 h-6 border border-white/30 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              className="group relative"
          
              onClick={() => window.open('https://dhvani.rbg.ai/', '_blank')}
            >
              <div className="flex items-center px-8 py-4 border border-gray-200 rounded-full hover:border-gray-900 transition-all duration-500">
                <span className="font-medium text-gray-700 group-hover:text-black transition-colors duration-300 tracking-wide mr-3">
                  Explore Platform
                </span>
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-black group-hover:scale-110 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-xs text-gray-500 mb-4 tracking-widest uppercase">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent animate-pulse" />
          <ArrowDown className="w-4 h-4 text-gray-400 animate-bounce mt-2" />
        </div>
      </section>

      {/* Enhanced Stats */}
      <section
        id="stats"
        className={`py-24 px-6 ${isVisible.stats ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group cursor-pointer p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500"
                style={{ animation: `slideUp 1s ease-out ${index * 0.1}s both` }}
            
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium tracking-wide">
                    {stat.label}
                  </div>
                  <div className="w-0 h-0.5 bg-blue-500 mx-auto group-hover:w-full transition-all duration-700 mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features */}
      <section
        id="features"
        className={`py-24 px-6 ${isVisible.features ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Capabilities
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Discover the cutting-edge features that make DHVANI the most advanced voice analysis platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-gray-100 hover:border-gray-200 p-8 transition-all duration-700 hover:shadow-xl bg-gradient-to-br ${feature.gradient}`}
                style={{ animation: `slideUp 1s ease-out ${index * 0.1}s both` }}
              
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-75" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/80 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
                        {feature.metric}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-gray-600 font-medium">
                        {feature.metricLabel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    {feature.description}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technology Section */}
      <section
        id="tech"
        className={`py-24 px-6 ${isVisible.tech ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Technological 
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Advancements
                </span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "OCR & image processing for accurate data extraction",
                    desc: "Deep learning for precise student detail recognition",
                    icon: <FileSearch className="w-5 h-5" />
                  },
                  {
                    number: "02",
                    title: "Automated grouping & sequencing", 
                    desc: "Real-time processing and progress tracking",
                    icon: <Brain className="w-5 h-5" />
                  },
                  {
                    number: "03",
                    title: "Error detection & workflow analytics",
                    desc: "Privacy masking and secure handling",
                    icon: <LineChart className="w-5 h-5" />
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500"
                    style={{ animation: `slideUp 0.8s ease-out ${index * 0.2}s both` }}
                 
                  >
                    <div className="flex items-start">
                      <div className="flex items-center mr-6">
                        <span className="text-3xl font-extralight text-gray-300 mr-4 group-hover:text-blue-500 transition-colors duration-500">
                          {item.number}
                        </span>
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-4 shadow-lg overflow-hidden">
                {/* Header */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    <span className="text-blue-600">Powered by RBG.AI's </span> MLStack
                  </h3>
                  <p className="text-sm text-gray-600 font-light">Advanced AI Pipeline Components</p>
                </div>

                {/* Interactive ML Components */}
                <div className="space-y-6">
                  {[
                    { 
                      name: "Vision Transcriber",
                      description: "Extract student details from scanned answer sheets",
                      icon: <Volume2 className="w-5 h-5" />,
                      status: "Active",
                      color: "blue",
                      gradient: "from-blue-300 to-blue-500",
                      bgGradient: "from-blue-50 to-blue-100"
                    },
                    { 
                      name: "Text Extractor",
                      description: "Identify and extract key information like enrolment numbers and course codes",
                      icon: <Radio className="w-5 h-5" />,
                      status: "Processing",
                      color: "purple",
                       gradient: "from-blue-300 to-blue-500",
                      bgGradient: "white"
                    },
                    { 
                      name: "Text Classifier",
                      description: "Automatically organize and label answer sheets for evaluation",
                      icon: <Users className="w-5 h-5" />,
                      status: "Learning",
                      color: "green",
                       gradient: "from-blue-300 to-blue-500",
                      bgGradient: "from-blue-50 to-blue-100"
                    },
                    // { 
                    //   name: "Voice Classifier",
                    //   description: "Deep neural network for voice pattern classification",
                    //   icon: <Brain className="w-5 h-5" />,
                    //   status: "Optimized",
                    //   color: "indigo",
                    //    gradient: "from-blue-300 to-blue-500",
                    //   bgGradient: "white"
                    // },
                    // { 
                    //   name: "Voice Clustering",
                    //   description: "Unsupervised grouping of similar voice characteristics",
                    //   icon: <Target className="w-5 h-5" />,
                    //   status: "Training",
                    //   color: "pink",
                    //    gradient: "from-blue-300 to-blue-500",
                    //   bgGradient: "from-blue-50 to-blue-100"
                    // }
                  ].map((module, index) => (
                    <div
                      key={index}
                      className={`group cursor-pointer relative overflow-hidden rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg bg-gradient-to-r ${module.bgGradient}`}
                      style={{ animation: `slideUp 0.6s ease-out ${index * 0.1 + 0.3}s both` }}
                      onMouseEnter={() => setHoveredCard(`module-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Background gradient overlay */}
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm group-hover:bg-white/40 transition-all duration-500" />
                      
                      <div className="relative p-2">
                        <div className="flex items-start space-x-4">
                          {/* Icon */}
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${module.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            {module.icon}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-${module.color}-600 transition-colors duration-300`}>
                                {module.name}
                              </h4>
                              
                            </div>
                            
                            <p className="text-sm text-gray-700 leading-relaxed font-light">
                              {module.description}
                            </p>
                            
                            {/* Status indicator line */}
                           
                          </div>
                        </div>
                        
                     
                      </div>
                      
                      {/* Bottom accent line */}
                      {/* <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${module.gradient} group-hover:w-full transition-all duration-700`} /> */}
                    </div>
                  ))}
                </div>

           
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Capabilities */}
      <section
        id="capabilities"
        className={`py-24 px-6 ${isVisible.capabilities ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-20 leading-tight">
            Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Capabilities
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Processing",
                features: ["Live status monitoring", "Instant extraction of student details", "Automated grouping into PDFs"],
                icon: <Zap className="w-6 h-6" />,
                gradient: "from-blue-50 to-indigo-50"
              },
              {
                title: "Advanced Security",
                features: ["Privacy masking of personal info", "Secure storage &amp; access control", "Compliance ensured"],
                icon: <Lock className="w-6 h-6" />,
                gradient: "white"
              },
              {
                title: "Analytics & Insights",
                features: ["Error detection & correction", "Workflow tracking", "Actionable performance insights"],
                icon: <Brain className="w-6 h-6" />,
                gradient: "from-blue-50 to-indigo-50"
              }
            ].map((capability, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-gray-100 hover:border-gray-200 p-10 transition-all duration-700 hover:shadow-xl bg-gradient-to-br ${capability.gradient}`}
                style={{ animation: `slideUp 1s ease-out ${index * 0.2}s both` }}
             
              >
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-50" />
                
                <div className="relative z-10 text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="p-4 rounded-2xl bg-white/80 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      {capability.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
                    {capability.title}
                  </h3>

                  <ul className="space-y-3 text-left">
                    {capability.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-gray-700 text-sm font-light">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Impact Section */}
      <section
        id="impact"
        className={`py-24 px-6 ${isVisible.impact ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Exam Management
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto font-light">
            Automated answer sheet processing with measurable impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: "99.8%", label: "Extraction Accuracy", desc: "Fast, precise capture of student details", icon: <TrendingUp className="w-5 h-5" /> },
              { value: "5x", label: "Processing Speed", desc: "Automated grouping and sequencing", icon: <Zap className="w-5 h-5" /> },
              { value: "998%", label: "Workflow Success", desc: "Smooth and error-free exam management", icon: <Award className="w-5 h-5" /> }
            ].map((impact, index) => (
              <div
                key={index}
                className="group cursor-pointer p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-700"
                style={{ animation: `slideUp 1s ease-out ${index * 0.3}s both` }}
               
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                    {impact.icon}
                  </div>
                </div>
                <div className="text-5xl font-extralight text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-700">
                  {impact.value}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-500">
                  {impact.label}
                </h3>
                <p className="text-gray-600 text-sm font-light">{impact.desc}</p>
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto group-hover:w-16 transition-all duration-700 mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Ready to Transform Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Exam Management?
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              Experience the future of answer sheet processing with fast, accurate, and privacy-compliant automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              className="group relative overflow-hidden"
             
            >
              <div className="relative z-10 flex items-center px-8 py-4 bg-black text-white rounded-full transition-all duration-500 group-hover:bg-blue-600">
                <span className="font-medium tracking-wide mr-3">Schedule Consultation</span>
                <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <div className="w-px h-12 bg-gray-200" />

            <button 
              className="group relative"
             
            >
              <div className="flex items-center px-8 py-4 border border-gray-200 rounded-full hover:border-gray-900 transition-all duration-500">
                <BookOpen className="w-5 h-5 mr-3 text-gray-600 group-hover:text-black transition-colors duration-300" />
                <span className="font-medium text-gray-700 group-hover:text-black transition-colors duration-300 tracking-wide">
                  Download Whitepaper
                </span>
                <ArrowUpRight className="w-4 h-4 ml-3 text-gray-600 group-hover:text-black group-hover:scale-110 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
     

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }

        .animate-fade-in-up {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: slideUp 1s ease-out 1.5s forwards;
        }

        .animate-blink {
          animation: blink 1.2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Enhanced hover effects */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Magnetic effect for buttons */
        .magnetic {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .magnetic:hover {
          transform: scale(1.05);
        }

        /* Glassmorphism effect */
        .glass {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Staggered animations */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        /* Responsive typography */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
        }

        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .will-change-transform {
          will-change: transform;
        }

        .will-change-opacity {
          will-change: opacity;
        }
      `}</style>
    </div>
  );
};

export default DhvaniPage;
