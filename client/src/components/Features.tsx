import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import AnimatedShape from "./AnimatedShape";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <AnimatedShape 
        className="bg-[hsl(var(--jupita-accent))]/10" 
        style={{width: '500px', height: '500px', top: '20%', right: '-250px'}} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 reveal"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Microfinance Banks</h2>
          <p className="text-[hsl(var(--jupita-gray))] text-lg max-w-2xl mx-auto">
            Our suite of fintech solutions streamlines operations and enhances customer experiences for microfinance institutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            title="Loan Origination Platform"
            description="Streamline your entire loan process from application to approval with our intuitive platform."
            benefits={[
              "Digital application forms",
              "Automated workflows",
              "Real-time status tracking"
            ]}
            delay={0}
            iconBgColor="bg-[hsl(var(--jupita-primary))]/10"
            iconTextColor="text-[hsl(var(--jupita-primary))]"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Identity Verification"
            description="Robust verification systems to ensure compliance and reduce fraud during customer onboarding."
            benefits={[
              "Biometric authentication",
              "Document verification",
              "Fraud detection algorithms"
            ]}
            delay={0.1}
            iconBgColor="bg-[hsl(var(--jupita-accent))]/10"
            iconTextColor="text-[hsl(var(--jupita-accent))]"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            title="Bank Statement Analysis"
            description="Extract and standardize financial data for faster and more accurate credit risk assessment."
            benefits={[
              "Automated data extraction",
              "Income verification",
              "Spending pattern analysis"
            ]}
            delay={0.2}
            iconBgColor="bg-[hsl(var(--jupita-secondary))]/10"
            iconTextColor="text-[hsl(var(--jupita-secondary))]"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
