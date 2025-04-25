import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface AnimatedShapeProps extends HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
}

const AnimatedShape = ({ className, style, ...props }: AnimatedShapeProps) => {
  return (
    <motion.div
      className={`hero-shape absolute rounded-full filter blur-[50px] z-[-1] ${className}`}
      style={style}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      {...props}
    />
  );
};

export default AnimatedShape;
