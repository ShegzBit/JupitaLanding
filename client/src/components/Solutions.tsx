import { motion } from "framer-motion";
import AnimatedShape from "./AnimatedShape";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-[hsl(var(--jupita-light))] relative overflow-hidden">
      <AnimatedShape 
        className="bg-[hsl(var(--jupita-primary))]/10" 
        style={{width: '500px', height: '500px', bottom: '-250px', left: '-250px'}} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 reveal"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions</h2>
          <p className="text-[hsl(var(--jupita-gray))] text-lg max-w-2xl mx-auto">
            Discover how our API-driven architecture empowers financial institutions to launch and scale digital lending operations efficiently.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1 reveal"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Modular & API-Driven Architecture</h3>
            <p className="text-[hsl(var(--jupita-gray))] mb-6">
              Our flexible platform allows you to integrate only the features you need and connect with your existing systems seamlessly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[hsl(var(--jupita-primary))] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">RESTful APIs</h4>
                  <p className="text-[hsl(var(--jupita-gray))]">
                    Connect Jupita to your core banking systems with our comprehensive API documentation.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[hsl(var(--jupita-accent))] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Customizable Workflows</h4>
                  <p className="text-[hsl(var(--jupita-gray))]">
                    Configure loan approval processes that match your business rules and regulatory requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[hsl(var(--jupita-secondary))] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Microservices Architecture</h4>
                  <p className="text-[hsl(var(--jupita-gray))]">
                    Deploy and scale individual components independently as your business grows.
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://getjupita.com" 
              className="inline-flex items-center text-[hsl(var(--jupita-primary))] font-medium hover:text-[hsl(var(--jupita-secondary))] transition"
            >
              Learn more about our architecture
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 scale-in"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--jupita-primary))]/20 to-[hsl(var(--jupita-accent))]/20 rounded-xl transform -rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="px-3 py-1 rounded bg-gray-100 text-[hsl(var(--jupita-gray))] text-xs">API Explorer</div>
                </div>
                
                <div className="mb-6">
                  <div className="rounded-lg bg-gray-100 p-4 font-mono text-sm overflow-x-auto">
                    <div className="text-pink-600">GET /api/v1/loans/:id</div>
                    <div className="text-gray-400 mt-3">// Response</div>
                    <div className="text-gray-700">{'{'}</div>
                    <div className="pl-4 text-green-600">"id": "loan_12345",</div>
                    <div className="pl-4 text-green-600">"status": "approved",</div>
                    <div className="pl-4 text-green-600">"customer_id": "cust_54321",</div>
                    <div className="pl-4 text-green-600">"amount": 50000,</div>
                    <div className="pl-4 text-green-600">"term_months": 12,</div>
                    <div className="pl-4 text-green-600">"interest_rate": 5.25,</div>
                    <div className="text-gray-700">{'}'}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                  <div className="p-2 bg-[hsl(var(--jupita-primary))]/10 rounded border border-[hsl(var(--jupita-primary))]/20 text-[hsl(var(--jupita-primary))]">GET /loans</div>
                  <div className="p-2 bg-gray-100 rounded border border-gray-200 text-[hsl(var(--jupita-gray))]">POST /loans</div>
                  <div className="p-2 bg-gray-100 rounded border border-gray-200 text-[hsl(var(--jupita-gray))]">GET /customers</div>
                  <div className="p-2 bg-gray-100 rounded border border-gray-200 text-[hsl(var(--jupita-gray))]">POST /verify</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[hsl(var(--jupita-gray))] text-sm">REST API v1.0</span>
                  <div className="text-[hsl(var(--jupita-primary))] text-sm font-medium">View Documentation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
