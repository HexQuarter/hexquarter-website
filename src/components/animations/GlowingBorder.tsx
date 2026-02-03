import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
}

const GlowingBorder = ({ children, className = "" }: GlowingBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      <motion.div
        className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0%", "-200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative bg-card rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;
