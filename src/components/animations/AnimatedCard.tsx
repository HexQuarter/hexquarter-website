import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  glowOnHover?: boolean;
}

const AnimatedCard = ({ 
  children, 
  className = "", 
  hoverScale = 1.02,
  glowOnHover = true 
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {glowOnHover && (
        <motion.div
          className="absolute -inset-px rounded-lg border-white border-1 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
          aria-hidden="true"
        />
      )}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
