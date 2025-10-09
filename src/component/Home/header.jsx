

import React, { useState, useEffect } from "react";
import { ChevronRight, Zap, Target, Layers, ArrowRight, CheckCircle, Play, Users, TrendingUp, Shield } from "lucide-react";

import ExternalLink from "../ExternalLink";

// Main MLloOps Component
export default function MLloOpsLanding() {
  const phrases = [
    "Confidence-Driven Workflows",
    "AI-Powered Automation", 
    "Structured Data Solutions",
    "Continuous Model Learning"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Processing",
      description: "Process data at unprecedented speeds with our optimized ML pipelines"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Accuracy",
      description: "Achieve human-level precision with AI-enhanced quality control"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Seamlessly scale from prototype to production with enterprise-grade infrastructure"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "10x", label: "Faster Processing" },
    { number: "500+", label: "Happy Clients" },
    { number: "24/7", label: "Support" }
  ];



  return (
    <div className="min-h-screen relative">
   

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 ">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
                <Zap className="w-4 h-4 mr-2" />
                Next-Gen ML Operations Platform
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                    AI Speed.
                  </span>
               
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                    Human Precision.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    MLloOps
                  </span>
                </h1>

                <div className="h-16 flex items-center">
                  <p className="text-xl text-slate-600 dark:text-slate-300">
                    Powered by{" "}
                    <span className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
                      <span className="relative">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                          {phrases[currentPhrase]}
                        </span>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-lg opacity-30 blur animate-pulse"></div>
                      </span>
                    </span>
                  </p>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  MLloOps™ transforms machine learning operations by combining AI automation with human expertise, delivering unmatched speed, accuracy, and scalability for data workflows.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                  Get Started with MLloOps
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button> */}
                   <ExternalLink
                  href="https://mlloops.rbg.ai/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Get Started with MLloOps™
                </ExternalLink>
                <button className="group bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  14-day free trial
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200 dark:border-slate-700">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}