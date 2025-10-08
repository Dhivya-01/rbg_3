


"use client";
import React, { useState, useEffect, useRef } from "react";
import { Zap, Target, RotateCcw, Globe, Shield, TrendingUp, Eye, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Proof({ 
  withGlow = true,
  className 
}) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Zap,
      value: 40,
      suffix: "%",
      label: "Faster Deployment",
      description: "Launch and scale models quickly with MLStack APIs."
    },
    {
      icon: Target,
      value: 99.9,
      suffix: "%",
      label: "Platform Uptime",
      description: "Built-in compliance, audit logs, and governance."
    },
    {
      icon: RotateCcw,
      value: 500,
      suffix: "+",
      label: "Models Managed", 
      description: "Human feedback keeps models improving."
    },
    {
      icon: Globe,
      value: 25,
      suffix: "+",
      label: "Enterprise Clients",
      description: "Run on cloud, on-premise, or hybrid setups."
    }
  ];

  const benefits = [
    {
      title: "Human + AI",
      description: "AI speeds tasks, human expertise ensures accuracy.",
      icon: Shield
    },
    {
      title: "Confidence & Oversight",
      description: "Low-confidence cases go to humans for review and learning.",
      icon: TrendingUp
    },
    {
      title: "Real Workflows",
      description: "Built for industries where errors have real impact.",
      icon: Eye
    },
    {
      title: "Learning from People",
      description: "Reviewer corrections continuously improve the system.",
      icon: Headphones
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleItems(prev => new Set(prev).add(index));
            
            // Start counter animation for stats
            if (entry.target.classList.contains('stat-item')) {
              const targetValue = stats[index].value;
              let currentValue = 0;
              const increment = targetValue / 60;
              
              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(timer);
                }
                setCounters(prev => ({
                  ...prev,
                  [index]: Math.floor(currentValue * 10) / 10
                }));
              }, 16);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('.animated-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={cn("overflow-hidden py-20", className)}>
      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-muted-foreground">Platform Performance</span>
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Built for
            <span className="block text-muted-foreground mt-2">
              Performance & Scale
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform is engineered for speed, reliability, and enterprise-grade scalability — so your critical processes run without compromise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                data-index={idx}
                className={`stat-item animated-item relative text-center p-8 bg-background rounded-xl  transition-all duration-300 group isolate ${
                  visibleItems.has(idx) 
                    ? 'animate-fade-in-up opacity-100' 
                    : 'opacity-0 translate-y-10'
                } group hover:shadow-glow hover:border-foreground/30 cursor-pointer`}
                style={{ 
                  animationDelay: `${idx * 150}ms`,
                  isolation: 'isolate'
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-muted rounded-lg  transition-colors">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {counters[idx] || 0}{stat.suffix}
                </div>
                <div className="text-base font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
                
                {/* Individual card glow effect - isolated */}
                {withGlow && (
                  <div className="pointer-events-none absolute inset-0 rounded-xl shadow-glow opacity-0  transition-opacity duration-300 z-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-background rounded-2xl p-8 md:p-12 border isolate">
            
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
                Why Enterprises Choose MLloOps™
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Purpose-built for enterprises that demand accuracy, compliance, and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    data-index={idx + 10}
                    className={`animated-item relative flex items-start gap-4 p-6 bg-muted/50 rounded-xl border group isolate ${
                      visibleItems.has(idx + 10) 
                        ? 'animate-slide-in-left opacity-100' 
                        : 'opacity-0 translate-x-10'
                    } group hover:shadow-glow hover:border-foreground/30 cursor-pointer`}
                    style={{ 
                      animationDelay: `${(idx + 4) * 150}ms`,
                      isolation: 'isolate'
                    }}
                  >
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center border flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                    
                    {/* Individual benefit glow effect - isolated */}
                    {withGlow && (
                      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-glow opacity-0 transition-opacity duration-300 z-0" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t">
              <Button 
              
                size="lg" 
                className="group isolate"
                asChild
              >
                <a href="#demo">
                  <span>Request Enterprise Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
            </div>

            {/* Main container glow effect - isolated */}
            {withGlow && (
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-30 z-0" />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        /* Prevent hover effects from affecting siblings */
        .isolate {
          isolation: isolate;
        }
        
        /* Ensure hover effects only apply to current element */
        .group:hover ~ .group {
          /* Reset any inherited hover effects */
        }
      `}</style>
    </section>
  );
}

export default Proof;
