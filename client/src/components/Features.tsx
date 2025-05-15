import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import AnimatedShape from "./AnimatedShape";

const featureCards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
    title: "Decision Engine",
    description:
      "A flexible decision engine that lets you define variables, permitted values or value types, assign weights, and configure scoring to create a personalized loan approval process for your business.",
    benefits: [
      "Customizable variables and rules",
      "Weighted scoring system",
      "Personalized loan workflows",
    ],
    delay: 0.1,
    iconBgColor: "bg-[hsl(var(--jupita-accent))]/10",
    iconTextColor: "text-[hsl(var(--jupita-accent))]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Bank Statement Analysis",
    description:
      "Extract and standardize financial data for faster and more accurate credit risk assessment.",
    benefits: [
      "Automated data extraction",
      "Income verification",
      "Spending pattern analysis",
    ],
    delay: 0.2,
    iconBgColor: "bg-[hsl(var(--jupita-secondary))]/10",
    iconTextColor: "text-[hsl(var(--jupita-secondary))]",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <AnimatedShape
        className="bg-[hsl(var(--jupita-accent))]/10"
        style={{ width: "500px", height: "500px", top: "20%", right: "-250px" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 reveal"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Microfinance Banks
          </h2>
          <p className="text-[hsl(var(--jupita-gray))] text-lg max-w-2xl mx-auto">
            Our suite of fintech solutions streamlines operations and enhances
            customer experiences for microfinance institutions.
          </p>
        </motion.div>

        <div
          className={`
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-${featureCards.length > 2 ? 3 : featureCards.length}
            xl:grid-cols-${featureCards.length > 3 ? 3 : featureCards.length}
            justify-items-center
          `}
        >
          {featureCards.map((card, idx) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
