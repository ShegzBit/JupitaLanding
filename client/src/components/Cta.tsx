import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="py-16 gradient-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to transform your microfinance operations?</h2>
              <p className="text-[hsl(var(--jupita-gray))] mb-6">
                Join leading microfinance banks already using Jupita to streamline operations and enhance customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://getjupita.com" 
                  className="button-glow inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[hsl(var(--jupita-primary))] hover:bg-[hsl(var(--jupita-secondary))] transition shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="https://app.getjupita.com" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-[hsl(var(--jupita-primary))] text-base font-medium rounded-lg text-[hsl(var(--jupita-primary))] bg-white hover:bg-[hsl(var(--jupita-primary))]/5 transition shadow-md hover:shadow-lg"
                >
                  Request Demo
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[hsl(var(--jupita-primary))]/20 to-[hsl(var(--jupita-accent))]/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working on financial software" 
                  className="rounded-xl shadow-lg relative z-10 w-full h-60 object-cover" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
