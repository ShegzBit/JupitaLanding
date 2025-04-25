import { motion } from "framer-motion";

const FloatingDots = () => {
  return (
    <div className="floating-dots absolute w-full h-full overflow-hidden z-0">
      <motion.div
        className="absolute rounded-full bg-white/20"
        style={{ top: '10%', left: '20%', width: '8px', height: '8px' }}
        animate={{
          y: [0, 30, -50, 20, 0],
          x: [0, 20, 30, -20, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute rounded-full bg-white/20"
        style={{ top: '70%', left: '80%', width: '12px', height: '12px' }}
        animate={{
          y: [0, -50, 20, -30, 0],
          x: [0, -20, 30, 20, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute rounded-full bg-white/20"
        style={{ top: '30%', left: '60%', width: '6px', height: '6px' }}
        animate={{
          y: [0, 20, -30, 10, 0],
          x: [0, 30, -20, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute rounded-full bg-white/20"
        style={{ top: '60%', left: '30%', width: '10px', height: '10px' }}
        animate={{
          y: [0, -20, 30, -10, 0],
          x: [0, 10, -30, 20, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute rounded-full bg-white/20"
        style={{ top: '20%', left: '90%', width: '7px', height: '7px' }}
        animate={{
          y: [0, 30, -20, 10, 0],
          x: [0, -30, 10, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default FloatingDots;
