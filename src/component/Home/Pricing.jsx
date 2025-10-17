


// import React, { useState, useEffect, useRef } from 'react';
// import { Check, ArrowRight, Users, Shield, Zap, Building, Rocket, Mail, CheckCircle, AlertCircle } from 'lucide-react';

// const UltraMinimalPricingUI = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(1);
//   const [activeForm, setActiveForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [submitError, setSubmitError] = useState('');
//   const [formData, setFormData] = useState({
//     fullName: '',
//     workEmail: '',
//     company: '',
//     teamSize: '',
//     useCase: ''
//   });
//   const sectionRef = useRef(null);

//   const plans = [
//     {
//       id: 0,
//       name: "Starter",
//       desc: "Small teams",
//       icon: Rocket,
//       features: ["Essential tools", "Basic monitoring", "Community support", "3 members"]
//     },
//     {
//       id: 1,
//       name: "Professional", 
//       desc: "Growing teams",
//       icon: Building,
//       badge: "Popular",
//       features: ["Full platform", "Priority support", "Unlimited members", "Advanced features"]
//     },
//     {
//       id: 2,
//       name: "Enterprise",
//       desc: "Large organizations",
//       icon: Shield,
//       features: ["Custom platform", "On-premise", "24/7 support", "White glove service"]
//     }
//   ];

//   // EmailJS Configuration
//   const EMAILJS_CONFIG = {
//     serviceId: 'service_7a0tjbj', // Your EmailJS Service ID
//     userTemplateId: 'template_cn6b5ns', // Your User Template ID
//     adminTemplateId: 'template_cs5byic', // Your Admin Template ID
//     publicKey: 'QL2nASLUUeySGYSH1', // Your EmailJS Public Key
//     adminEmail: 'dhivyanagaraj2720@gmail.com' // Your admin email
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

  

//   // Load EmailJS script dynamically with better error handling
//   useEffect(() => {
//     const loadEmailJS = async () => {
//       if (typeof window !== 'undefined' && !window.emailjs) {
//         try {
//           // Load EmailJS SDK
//           const script = document.createElement('script');
//           script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
//           script.async = true;
          
//           await new Promise((resolve, reject) => {
//             script.onload = resolve;
//             script.onerror = reject;
//             document.head.appendChild(script);
//           });

//           // Initialize EmailJS with the correct method
//           if (window.emailjs) {
//             window.emailjs.init(EMAILJS_CONFIG.publicKey);
 
//           }
//         } catch (error) {
//           console.error('Failed to load Email:', error);
//         }
//       }
//     };

//     loadEmailJS();
//   }, []);

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (submitError) setSubmitError('');
//   };

//   const sendThankYouEmail = async (userData, planName) => {
//     const templateParams = {
//       user_name: userData.fullName,
//       user_email: userData.workEmail,
//       company_name: userData.company,
//       plan_name: planName,
//       team_size: userData.teamSize || 'Not specified',
//       request_id: `REQ-${Date.now()}`
//     };

//     try {
//       // Check if EmailJS is properly loaded and configured
//       if (!window.emailjs) {
//         throw new Error('Email is not loaded');
//       }

//       console.log('Sending user email with params:', templateParams);

//       const response = await window.emailjs.send(
//         EMAILJS_CONFIG.serviceId,
//         EMAILJS_CONFIG.userTemplateId,
//         templateParams
//       );

//       console.log('Thank you email sent successfully:', response);
//       return { success: true, response };
//     } catch (error) {
//       console.error('Failed to send thank you email:', error);
      
//       // Provide more specific error messages
//       if (error.status === 400) {
//         throw new Error('Email configuration error. Please check your template variables.');
//       } else if (error.status === 403) {
//         throw new Error('Email access denied. Please check your Public Key.');
//       } else {
//         throw new Error(`Email sending failed: ${error.text || error.message || 'Unknown error'}`);
//       }
//     }
//   };

//   const sendAdminNotification = async (userData, planName) => {
//     const templateParams = {
//       user_name: userData.fullName,
//       user_email: userData.workEmail,
//       company_name: userData.company,
//       plan_name: planName,
//       team_size: userData.teamSize || 'Not specified',
//       use_case: userData.useCase || 'Not specified',
//       current_date: new Date().toLocaleDateString(),
//       current_time: new Date().toLocaleTimeString(),
//       request_id: `REQ-${Date.now()}`,
//       priority_level: userData.useCase ? 'High (Use case provided)' : 'Normal'
//     };

//     try {
//       if (!window.emailjs) {
//         throw new Error('Email is not loaded');
//       }

//       console.log('Sending admin email with params:', templateParams);

//       const response = await window.emailjs.send(
//         EMAILJS_CONFIG.serviceId,
//         EMAILJS_CONFIG.adminTemplateId,
//         templateParams
//       );

//       console.log('Admin notification sent successfully:', response);
//       return { success: true, response };
//     } catch (error) {
//       console.error('Failed to send admin notification:', error);
      
//       // Provide more specific error messages
//       if (error.status === 400) {
//         throw new Error('Email configuration error. Please check your template variables.');
//       } else if (error.status === 403) {
//         throw new Error('Email access denied. Please check your Public Key.');
//       } else {
//         throw new Error(`Admin notification failed: ${error.text || error.message || 'Unknown error'}`);
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     if (!formData.fullName || !formData.workEmail || !formData.company) {
//       setSubmitError('Please fill in all required fields');
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.workEmail)) {
//       setSubmitError('Please enter a valid email address');
//       return;
//     }

//     if (!window.emailjs) {
//       setSubmitError('Email service is loading. Please wait a moment and try again.');
//       return;
//     }

//     if (EMAILJS_CONFIG.publicKey === '') {
//       setSubmitError('Email service is not configured. Please contact support.');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitError('');

//     try {
//       const planName = plans[selectedPlan].name;
      
//       // Send both emails with better error handling
//       const [userEmailResult, adminEmailResult] = await Promise.allSettled([
//         sendThankYouEmail(formData, planName),
//         sendAdminNotification(formData, planName)
//       ]);

//       // Check results
//       const userEmailSuccess = userEmailResult.status === 'fulfilled';
//       const adminEmailSuccess = adminEmailResult.status === 'fulfilled';

//       if (!userEmailSuccess && !adminEmailSuccess) {
//         // Both failed
//         throw new Error('Failed to send emails. Please try again.');
//       } else if (!userEmailSuccess) {
//         // User email failed but admin succeeded
//         console.warn('User email failed:', userEmailResult.reason);
//         setSubmitError('Request submitted but confirmation email failed. We\'ll contact you directly.');
//       } else if (!adminEmailSuccess) {
//         // Admin email failed but user succeeded
//         console.warn('Admin email failed:', adminEmailResult.reason);
//         // Still show success to user, log error for admin
//       }

//       // Show success if at least one email sent
//       if (userEmailSuccess || adminEmailSuccess) {
//         setIsSubmitted(true);
        
//         // Reset form after delay
//         setTimeout(() => {
//           setIsSubmitted(false);
//           setActiveForm(false);
//           setFormData({
//             fullName: '',
//             workEmail: '',
//             company: '',
//             teamSize: '',
//             useCase: ''
//           });
//         }, 4000);
//       }
      
//     } catch (error) {
//       console.error('Submission failed:', error);
//       setSubmitError(error.message || 'Failed to send request. Please try again or contact support.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section ref={sectionRef} className="py-16 bg-white">
//       <div className="max-w-4xl mx-auto px-4 relative bg-background rounded-2xl p-4 md:p-12 border isolate">
        
       
//         <div className={`text-center mb-12 transition-all duration-700 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div className="inline-block bg-gray-50 px-3 py-1 rounded-full text-xs font-medium text-gray-600 mb-4 text-lg">
//             Early Access
//           </div>
//           <h1 className="text-4xl font-extrabold text-red-600 mb-3">Request Access</h1>
//           <p className="text-gray-500 max-w-xl mx-auto">
//             Join our beta program for next-generation ML operations
//           </p>
//         </div>

//         {/* Compact Plan Selector */}
//         <div className={`mb-10 transition-all duration-700 delay-200 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div className="bg-gray-200 p-1 rounded-xl inline-flex w-full">
//             {plans.map((plan, idx) => {
//               const IconComponent = plan.icon;
//               const isActive = selectedPlan === idx;
              
//               return (
//                 <button
//                   key={plan.id}
//                   onClick={() => setSelectedPlan(idx)}
//                   className={`flex-1 relative px-4 py-3 rounded-lg transition-all duration-300 ${
//                     isActive 
//                       ? 'bg-white shadow-sm text-black' 
//                       : 'text-gray-600 hover:text-black'
//                   }`}
//                 >
//                   <div className="flex items-center justify-center gap-2">
//                     <IconComponent className="w-4 h-4 text-red-600" />
//                     <div className="text-left">
//                       <div className="text-sm font-medium flex items-center gap-1">
//                         {plan.name}
//                         {plan.badge && (
//                           <span className="text-xs bg-black text-white px-1 rounded">
//                             {plan.badge}
//                           </span>
//                         )}
//                       </div>
//                       <div className="text-xs text-gray-500">{plan.desc}</div>
//                     </div>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Compact Features Display */}
//         <div className={`mb-10 transition-all duration-700 delay-300 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div className="bg-white border border-gray-100 rounded-xl p-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {plans[selectedPlan].features.map((feature, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <Check className="w-3 h-3 text-gray-400 flex-shrink-0" />
//                   <span className="text-sm text-gray-700">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Compact Form */}
//         <div className={`transition-all duration-700 delay-400 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div className="bg-gray-50 rounded-xl p-6">
            
//             {/* Success State */}
//             {isSubmitted ? (
//               <div className="text-center py-8">
//                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted Successfully!</h3>
//                 <p className="text-gray-600 mb-4">
//                   Thank you for your interest in {plans[selectedPlan].name}. 
//                 </p>
//                 <div className="bg-white p-4 rounded-lg inline-block mb-4">
//                   <div className="flex items-center gap-2 text-sm text-gray-600">
//                     <Mail className="w-4 h-4" />
//                     <span>Confirmation email sent to {formData.workEmail}</span>
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-500">
//                   Our team will review your request within 24 hours and get back to you.
//                 </p>
//               </div>
//             ) : !activeForm ? (
//               /* Form Toggle */
//               <div className="text-center">
//                 <button
//                   onClick={() => setActiveForm(true)}
//                   className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
//                 >
//                   Get {plans[selectedPlan].name} Access
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//                 <div className="mt-3 text-xs text-gray-500">
//                   Response within 24 hours • No commitment required
//                 </div>
//               </div>
//             ) : (
//               /* Expanded Form */
//               <div className="space-y-4">
//                 {/* Error Message */}
//                 {submitError && (
//                   <div className="bg-red-50 border border-red-200 rounded-lg p-3">
//                     <div className="flex items-center gap-2">
//                       <AlertCircle className="w-4 h-4 text-red-600" />
//                       <span className="text-sm text-red-700">{submitError}</span>
//                     </div>
//                   </div>
//                 )}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input 
//                     type="text" 
//                     value={formData.fullName}
//                     onChange={(e) => handleInputChange('fullName', e.target.value)}
//                     className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
//                     placeholder="Full name *"
//                     required
//                   />
//                   <input 
//                     type="email" 
//                     value={formData.workEmail}
//                     onChange={(e) => handleInputChange('workEmail', e.target.value)}
//                     className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
//                     placeholder="Work email *"
//                     required
//                   />
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input 
//                     type="text" 
//                     value={formData.company}
//                     onChange={(e) => handleInputChange('company', e.target.value)}
//                     className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
//                     placeholder="Company *"
//                     required
//                   />
//                   <select 
//                     value={formData.teamSize}
//                     onChange={(e) => handleInputChange('teamSize', e.target.value)}
//                     className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
//                   >
//                     <option value="">Team size</option>
//                     <option value="1-5">1-5</option>
//                     <option value="6-20">6-20</option>
//                     <option value="21-100">21-100</option>
//                     <option value="100+">100+</option>
//                   </select>
//                 </div>
                
//                 <textarea 
//                   rows={3}
//                   value={formData.useCase}
//                   onChange={(e) => handleInputChange('useCase', e.target.value)}
//                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
//                   placeholder="Describe your ML use case and requirements..."
//                 />
                
//                 <div className="flex items-center gap-3 pt-2">
//                   <button 
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Sending Emails...
//                       </>
//                     ) : (
//                       'Submit Request'
//                     )}
//                   </button>
//                   <button 
//                     onClick={() => setActiveForm(false)}
//                     disabled={isSubmitting}
//                     className="px-4 py-3 text-gray-500 hover:text-black transition-colors disabled:opacity-50"
//                   >
//                     Cancel
//                   </button>
//                 </div>

//                 <div className="text-xs text-gray-500 mt-2">
//                   * Required fields. We'll send a confirmation email and our team will review your request within 24 hours.
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Minimal Trust Indicators */}
//         <div className={`mt-8 text-center transition-all duration-700 delay-500 ${
//           isVisible ? 'opacity-100' : 'opacity-0'
//         }`}>
//           <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
//             <div className="flex items-center gap-1">
//               <Users className="w-3 h-3" />
//               <span>500+ teams</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Shield className="w-3 h-3" />
//               <span>SOC 2</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Zap className="w-3 h-3" />
//               <span>99.9% uptime</span>
//             </div>
//           </div>
//         </div>

//         {/* Process Flow Indicator */}
//         <div className={`mt-12 transition-all duration-700 delay-600 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//         }`}>
//           <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-black rounded-full"></div>
//               <span>Submit</span>
//             </div>
//             <div className="w-8 h-px bg-gray-200"></div>
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//               <span>Review</span>
//             </div>
//             <div className="w-8 h-px bg-gray-200"></div>
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//               <span>Access</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UltraMinimalPricingUI;




"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Building,
  Rocket,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion"; // ✅ import motion

const UltraMinimalPricingUI = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [activeForm, setActiveForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    teamSize: "",
    useCase: "",
  });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      id: 0,
      name: "Starter",
      desc: "Small teams",
      icon: Rocket,
      features: [
        "Essential tools",
        "Basic monitoring",
        "Community support",
        "3 members",
      ],
    },
    {
      id: 1,
      name: "Professional",
      desc: "Growing teams",
      icon: Building,
      badge: "Popular",
      features: [
        "Full platform",
        "Priority support",
        "Unlimited members",
        "Advanced features",
      ],
    },
    {
      id: 2,
      name: "Enterprise",
      desc: "Large organizations",
      icon: Shield,
      features: [
        "Custom platform",
        "On-premise",
        "24/7 support",
        "White glove service",
      ],
    },
  ];

  const slideRightToLeft = {
    hidden: { opacity: 0, x: 150 }, // start from right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.workEmail || !formData.company) {
      setSubmitError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setActiveForm(false);
      }, 4000);
    }, 2000);
  };

  return (
    <motion.section
      ref={sectionRef}
      variants={slideRightToLeft}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="py-16 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 relative bg-background rounded-2xl p-4 md:p-12 border isolate">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-50 px-3 py-1 rounded-full text-xs font-medium text-gray-600 mb-4 text-lg">
            Early Access
          </div>
          <h1 className="text-4xl font-extrabold text-red-600 mb-3">
            Request Access
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join our beta program for next-generation ML operations
          </p>
        </div>

        {/* Plan Selector */}
        <div className="mb-10">
          <div className="bg-gray-200 p-1 rounded-xl inline-flex w-full">
            {plans.map((plan, idx) => {
              const IconComponent = plan.icon;
              const isActive = selectedPlan === idx;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(idx)}
                  className={`flex-1 relative px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-sm text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <IconComponent className="w-4 h-4 text-red-600" />
                    <div className="text-left">
                      <div className="text-sm font-medium flex items-center gap-1">
                        {plan.name}
                        {plan.badge && (
                          <span className="text-xs bg-black text-white px-1 rounded">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{plan.desc}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-10">
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {plans[selectedPlan].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="transition-all duration-700">
          <div className="bg-gray-50 rounded-xl p-6">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Request Submitted Successfully!
                </h3>
                <p className="text-gray-600 mb-4">
                  Thank you for your interest in {plans[selectedPlan].name}.
                </p>
              </div>
            ) : !activeForm ? (
              <div className="text-center">
                <button
                  onClick={() => setActiveForm(true)}
                  className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
                >
                  Get {plans[selectedPlan].name} Access
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="mt-3 text-xs text-gray-500">
                  Response within 24 hours • No commitment required
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-red-700">
                        {submitError}
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Full name *"
                    required
                  />
                  <input
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) =>
                      handleInputChange("workEmail", e.target.value)
                    }
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Work email *"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Company *"
                    required
                  />
                  <select
                    value={formData.teamSize}
                    onChange={(e) =>
                      handleInputChange("teamSize", e.target.value)
                    }
                    className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  >
                    <option value="">Team size</option>
                    <option value="1-5">1-5</option>
                    <option value="6-20">6-20</option>
                    <option value="21-100">21-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
                <textarea
                  rows={3}
                  value={formData.useCase}
                  onChange={(e) =>
                    handleInputChange("useCase", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  placeholder="Describe your ML use case..."
                />
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                  <button
                    onClick={() => setActiveForm(false)}
                    disabled={isSubmitting}
                    className="px-4 py-3 text-gray-500 hover:text-black transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UltraMinimalPricingUI;
