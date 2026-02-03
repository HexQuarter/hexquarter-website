import { motion } from "framer-motion";

interface FloatingOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const FloatingOrb = ({ className = "", size = "md", delay = 0 }: FloatingOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96"
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl pointer-events-none ${sizeClasses[size]} ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default FloatingOrb;
