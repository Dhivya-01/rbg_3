



import { FaGithub } from "react-icons/fa6";

export default function Training() {
  return (
    <div className="font-sans px-5 min-h-screen max-w-7xl mx-auto py-20 bg-white">
      {/* Header Section */}
      <div className="text-center space-y-6 mb-20">
        <div className="overflow-visible">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 tracking-tight animate-fade-in-up">
            RBG AI Training
          </h1>
        </div>
        <div className="w-20 h-0.5 bg-red-500 mx-auto animate-expand"></div>
        <div className="overflow-visible">
          <h2 className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Upskill AI with MLloOps™ for simple, scalable enterprise adoption.
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
        
        {/* GitHub Icon Section */}
        <div className="flex flex-col items-center space-y-8 group">
          <div className="relative">
            {/* Animated circle background */}
            <div className="absolute inset-0 w-48 h-48 rounded-full bg-gray-50 transform scale-75 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute inset-0 w-48 h-48 rounded-full border border-gray-100 animate-pulse"></div>
            
            {/* GitHub Icon */}
            <div className="relative z-10 p-12 transform group-hover:scale-110 transition-transform duration-300 ease-out">
              <FaGithub 
                className="text-8xl text-gray-800 animate-float" 
              />
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://github.com/rbg-research/AI-Training"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-8 py-3 text-sm font-medium text-black bg-white border border-transparent rounded-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 group/button overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover/button:w-full"></span>
            <span className="relative flex items-center">
              AI Training Repository
              <svg className="ml-2 w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>

        {/* Description Card */}
        <div className="max-w-md">
          <div className="relative group/card">
            {/* Card shadow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg blur opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
            
            {/* Main card */}
            <div className="relative p-8 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
              {/* Decorative element */}
              <div className="absolute top-0 left-8 w-12 h-0.5 bg-red-500 transform -translate-y-0.5"></div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Open Source Learning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn, customize, and optimize AI workflows with MLloOps™ and MLStack.
                </p>
                
                {/* Feature highlights */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-1 bg-red-500 rounded-full mr-3"></div>
                    Product-Centric Curriculum – Structure unstructured data with our APIs.
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-1 bg-red-500 rounded-full mr-3"></div>
                    Practical AI Workflows – Hands-on exercises using MLloOps™
maker–checker pipelines.
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-1 bg-red-500 rounded-full mr-3"></div>
                    Community Knowledge Base – Best practices, case studies, and updates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
          width: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}