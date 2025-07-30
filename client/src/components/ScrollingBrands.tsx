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
            Trusted by:
          </span>
          <img
            src="https://res.cloudinary.com/dlyac7h41/image/upload/v1747354046/breezeLogo_izbo0w.jpg"
            className="w-24 h-8 bg-gray-300/30 rounded"
          />
          {/* <img
            src="https://res.cloudinary.com/dlyac7h41/image/upload/v1747354046/sharaLogo_wa78ax.jpg"
            className="w-32 h-8 bg-gray-300/30 rounded"
          /> */}
          <img
            src="https://res.cloudinary.com/dlyac7h41/image/upload/v1747354047/seamlessHrLogo_fv0kpr.jpg"
            className="w-28 h-8 bg-gray-300/30 rounded"
          />
          <span className="text-[hsl(var(--jupita-gray))] font-medium">
            Trusted by:
          </span>
          <img
            src="https://res.cloudinary.com/dlyac7h41/image/upload/v1747354046/breezeLogo_izbo0w.jpg"
            className="w-24 h-8 bg-gray-300/30 rounded"
          />
          <img
            src="https://res.cloudinary.com/dlyac7h41/image/upload/v1753876790/CarbonTechLogo_orjzfp.jpg"
            className="w-32 h-8 bg-gray-300/30 rounded"
          />
          <img
            src="https://res.cloudinary.com/dlyac7h41/image/upload/v1747354047/seamlessHrLogo_fv0kpr.jpg"
            className="w-28 h-8 bg-gray-300/30 rounded"
          />
          <img
            src="https://res.cloudinary.com/dlyac7h41/image/upload/c_crop,ar_16:9/v1753877448/CelerisLogo2Chatgpt_d1qkqa.png"
            className="w-28 h-8 bg-gray-300/30 rounded"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingBrands;
