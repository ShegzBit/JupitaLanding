import { Button } from "@/components/ui/button";
import FloatingDots from "./FloatingDots";
import AnimatedShape from "./AnimatedShape";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      <FloatingDots />

      {/* Animated shapes */}
      <AnimatedShape 
        className="bg-[hsl(var(--jupita-primary))]/30" 
        style={{width: '300px', height: '300px', top: '-100px', right: '-100px'}} 
      />
      <AnimatedShape 
        className="bg-[hsl(var(--jupita-accent))]/20" 
        style={{width: '400px', height: '400px', bottom: '-200px', left: '-200px'}} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="animate-slide-up"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[hsl(var(--jupita-primary))]/10 text-[hsl(var(--jupita-primary))] font-medium text-sm mb-5">
                Fintech Solutions for MFBs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your <br />
                <span className="text-[hsl(var(--jupita-primary))]">Microfinance</span> <br />
                Operations
              </h1>
              <p className="text-[hsl(var(--jupita-gray))] text-lg mb-8 max-w-lg">
                Jupita delivers tailored SaaS platforms that streamline loan origination, customer onboarding, and credit risk assessment for microfinance banks.
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up"
            >
              <a 
                href="https://getjupita.com" 
                className="button-glow inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-[hsl(var(--jupita-primary))] hover:bg-[hsl(var(--jupita-secondary))] transition shadow-lg hover:shadow-xl"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="https://app.getjupita.com" 
                className="inline-flex items-center justify-center px-8 py-4 border border-[hsl(var(--jupita-primary))] text-base font-medium rounded-lg text-[hsl(var(--jupita-primary))] bg-white hover:bg-[hsl(var(--jupita-primary))]/5 transition shadow-md hover:shadow-lg"
              >
                Get Started
              </a>
            </motion.div>
          </div>
          <div className="relative z-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative animate-float"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jupita-primary))]/20 to-[hsl(var(--jupita-accent))]/20 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
                <div className="gradient-background h-40"></div>
                <div className="px-6 pb-6 -mt-20">
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--jupita-primary))]/10 flex items-center justify-center text-[hsl(var(--jupita-primary))]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium">Loan Origination</h3>
                        <p className="text-[hsl(var(--jupita-gray))] text-sm">Simplified workflow</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-md h-2 mb-1">
                      <div className="bg-[hsl(var(--jupita-accent))] h-2 rounded-md w-4/5 animate-pulse-slow"></div>
                    </div>
                    <div className="text-right text-xs text-[hsl(var(--jupita-gray))]">80% complete</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--jupita-success))]/10 flex items-center justify-center text-[hsl(var(--jupita-success))]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium">Identity Verification</h3>
                        <p className="text-[hsl(var(--jupita-gray))] text-sm">Secure and compliant</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-10 bg-gray-100 rounded animate-pulse-slow"></div>
                      <div className="h-10 bg-gray-100 rounded animate-pulse-slow" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-10 bg-gray-100 rounded animate-pulse-slow" style={{animationDelay: '0.4s'}}></div>
                      <div className="h-10 bg-gray-100 rounded animate-pulse-slow" style={{animationDelay: '0.6s'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-3/5">
                      <div className="h-2 bg-gray-100 rounded-full mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded-full w-4/5"></div>
                    </div>
                    <div className="rounded-md py-2 px-4 bg-[hsl(var(--jupita-primary))] text-white text-sm font-medium">
                      View Demo
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
