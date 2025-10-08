


import React, { useState, useEffect } from "react";
import { ChevronRight, Brain, BookOpen, Award, ArrowRight, CheckCircle, Play, Users, TrendingUp, Microscope, GraduationCap, FileText, Lightbulb } from "lucide-react";

export default function ResearchHeroPage() {
  const researchAreas = [
    "Data-Centric AI Workflows",
    "Intelligent Automation", 
    "Scalable AI Solutions",
  ];

  const [currentArea, setCurrentArea] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentArea((prev) => (prev + 1) % researchAreas.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [researchAreas.length]);

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Artificial Intelligence",
      description: "Smart AI to automate tasks and aid decision-making.",
      delay: "0ms"
    },
    {
      icon: <Microscope className="w-8 h-8 text-purple-600" />,
      title: "Data Intelligence",
      description: "Turn text, voice, images, and video into insights.",
      delay: "200ms"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      title: "Automation & Workflows",
      description: "AI workflows with human oversight for reliable results.",
      delay: "400ms"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "Language Technologies",
      description: "Global-ready NLP, translation, and conversation tools.",
      delay: "600ms"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Vision & Recognition",
      description: "Detect, classify, and verify visual content.",
      delay: "800ms"
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Enterprise Platforms",
      description: "Scalable, secure AI platforms for cloud, hybrid, or on-prem.",
      delay: "1000ms"
    },
  ];

  const achievements = [
    { number: "25+", label: "Research Papers", delay: "0ms" },
    { number: "500+", label: "Citations", delay: "200ms" },
    { number: "8", label: "Active Projects", delay: "400ms" },
    { number: "15+", label: "Collaborations", delay: "600ms" }
  ];

  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Main Content */}
            <div className="space-y-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium border border-blue-100 animate-fade-in-up hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                <BookOpen className="w-4 h-4 mr-2 animate-bounce-subtle" />
                Product & Innovation Hub
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up-delayed">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent animate-gradient-x">
                    AI-Driven Workflow Innovation
                  </span>
                  <br />
                  {/* <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.2s' }}>
                   Workflow
                  </span>
                  <br />
                    <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.2s' }}>
                   Innovation
                  </span> */}
                  {/* <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x animate-pulse-glow" style={{ animationDelay: '0.4s' }}>
                    AI-Driven Workflows
                  </span> */}
                </h1>

                <div className="h-16 flex items-center justify-center">
                  <p className="text-xl text-slate-600 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    Specializing in{" "}
                    <span className={`inline-block transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                      <span className="relative">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold animate-text-shimmer">
                          {researchAreas[currentArea]}
                        </span>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-lg blur animate-pulse-glow opacity-70"></div>
                      </span>
                    </span>
                  </p>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  RBG.AI advances AI through research and innovation, turning unstructured data into actionable insights to empower industries with automation and intelligenc
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center animate-bounce-subtle">
                  Explore Our Platform
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button className="group bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center">
                  <FileText className="mr-2 w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  View Use Cases
                </button>
              </div>

              <div className="flex items-center justify-center space-x-6 pt-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center text-sm text-slate-500 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 animate-pulse" />
                  Automated Workflows
                </div>
                <div className="flex items-center text-sm text-slate-500 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  Trusted Partnerships
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Counter */}
          <div className="mt-20 pt-16 border-t border-slate-100 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group cursor-pointer" style={{ animationDelay: achievement.delay }}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-110 transform hover:-translate-y-2 animate-fade-in-up">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-counter">
                      {achievement.number}
                    </div>
                    <div className="text-slate-600 mt-2 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
              Our Innovation Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="group relative animate-fade-in-up" style={{ animationDelay: highlight.delay }}>
                  <div className="bg-gradient-to-br from-white to-slate-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-slate-100 hover:border-blue-200 cursor-pointer overflow-hidden relative">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-indigo-50/0 group-hover:from-blue-50/30 group-hover:to-indigo-50/30 transition-all duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-md text-white mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {highlight.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Hover effect sparkles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 rounded-3xl p-8 lg:p-12 text-center shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up border border-blue-100/50" style={{ animationDelay: '2s' }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-text-shimmer">
              Join the MLloOps™ Research Network
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-4xl mx-auto">
              Shape the future of AI and turn data into real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center animate-pulse-button">
                <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Join Research Team
              </button>
              <button className="group border-2 border-blue-600 text-slate-700 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
                Explore Research Insights
              </button>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }

        @keyframes particle {
          0% { transform: translateY(0px) scale(0); opacity: 1; }
          50% { transform: translateY(-100px) scale(1); opacity: 0.7; }
          100% { transform: translateY(-200px) scale(0); opacity: 0; }
        }

        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }

        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes counter {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes pulseButton {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.7); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }

        .animate-text-shimmer {
          background: linear-gradient(90deg, #1f2937, #3b82f6, #1f2937);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-counter {
          animation: counter 0.8s ease-out forwards;
        }

        .animate-pulse-button {
          animation: pulseButton 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}