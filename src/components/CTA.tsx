import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingOrb from "./animations/FloatingOrb";

const CTA = () => {
  return (
    <section className="hex-section bg-card relative overflow-hidden">
      {/* Background effects */}
      <FloatingOrb className="top-0 right-0" size="lg" delay={0} />
      <FloatingOrb className="bottom-0 left-1/4" size="md" delay={2} />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{ top: `${20 + i * 20}%` }}
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="hex-container relative z-10">
        <div className="max-w-2xl">
          <AnimatedSection>
            <h2 className="hex-heading">
              Discuss how Bitcoin fits into your product
            </h2>
            <p className="hex-body mb-8">
              We start with architecture. Understanding your product, your constraints, 
              and whether Bitcoin actually makes sense for your use case.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <motion.a 
              href="mailto:build@hexquarter.com"
              className="inline-flex items-center gap-3 font-mono text-sm font-medium bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10">Start a technical conversation</span>
              <motion.span 
                aria-hidden="true" 
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA;
