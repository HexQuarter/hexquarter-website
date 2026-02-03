import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./animations/AnimatedCard";
import FloatingOrb from "./animations/FloatingOrb";

const Approach = () => {
  const principles = [
    {
      principle: "Architecture first",
      detail: "We determine where Bitcoin belongs in your system and where it brings value."
    },
    {
      principle: "L1 vs L2 intent",
      detail: "Layer 1 for finality and trust. Layer 2 for user experience and throughput. The choice is deliberate, not defaulted."
    },
    {
      principle: "Non-custodial by default",
      detail: "We design systems where you don't hold user funds. Custody is a liability. We help you avoid it."
    },
    {
      principle: "Production-grade",
      detail: "We ship systems that run in production, not demos that work on testnet. The difference is everything."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="hex-section bg-card relative overflow-hidden">
      {/* Floating orbs */}
      <FloatingOrb className="-top-20 -right-20" size="lg" delay={1} />
      <FloatingOrb className="bottom-20 -left-10" size="md" delay={3} />
      
      <div className="hex-container relative z-10">
        <AnimatedSection>
          <p className="hex-tag">Approach</p>
          <h2 className="hex-heading max-w-xl">
            Long-term reliability over short-term speed
          </h2>
        </AnimatedSection>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {principles.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AnimatedCard className="p-6 bg-background/30 border border-border/50 rounded-lg">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-mono text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    <motion.span 
                      className="inline-block text-primary mr-2"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      ◆
                    </motion.span>
                    {item.principle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
