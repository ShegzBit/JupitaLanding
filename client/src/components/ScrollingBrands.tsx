import { motion } from 'framer-motion';
// import Image from "next/image";

const ScrollingBrands = () => {
  return (
    <section className="bg-[hsl(var(--jupita-light))] py-6 overflow-hidden">
      <div className="scrolling-text-container my-4">
        <motion.div
          className="flex items-center space-x-16"
          animate={{
            x: [0, "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          <span className="text-[hsl(var(--jupita-gray))] font-medium">
            Trusted by leading microfinance institutions
          </span>
          <img
            src="../../images/breezeLogo.jpg"
            className="w-24 h-8 bg-gray-300/30 rounded"
          />
          <img
            src="../../images/sharaLogo.jpg"
            className="w-32 h-8 bg-gray-300/30 rounded"
          />
          <img
            src="../../images/seamlessHrLogo.jpg"
            className="w-28 h-8 bg-gray-300/30 rounded"
          />
          <span className="text-[hsl(var(--jupita-gray))] font-medium">
            Trusted by leading microfinance institutions
          </span>
          <img
            src="../../images/breezeLogo.jpg"
            className="w-24 h-8 bg-gray-300/30 rounded"
          />
          <img
            src="../../images/sharaLogo.jpg"
            className="w-32 h-8 bg-gray-300/30 rounded"
          />
          <img
            src="../../images/seamlessHrLogo.jpg"
            className="w-28 h-8 bg-gray-300/30 rounded"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingBrands;
