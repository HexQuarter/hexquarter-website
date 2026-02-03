import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./animations/AnimatedCard";

const WhyBitcoin = () => {
  const reasons = [
    {
      title: "Durability",
      description: "15 years of uninterrupted operation. No chain reorgs, no consensus changes mid-flight, no foundation drama."
    },
    {
      title: "Neutrality",
      description: "No insider allocations, no governance tokens, no protocol politics. Just a predictable, ossifying base layer."
    },
    {
      title: "Long-term guarantees",
      description: "Build on something that will exist in 20 years. Your product's trust model shouldn't depend on VC runway."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="hex-section bg-card relative overflow-hidden">
      {/* Background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="hex-container relative z-10">
        <AnimatedSection>
          <p className="hex-tag">Why Bitcoin</p>
          <h2 className="hex-heading max-w-xl">
            We've built on altchains. < br />We stopped.
          </h2>
          <p className="hex-body max-w-2xl mb-12">
            After a decade of building on various protocols, we chose Bitcoin for production systems. 
            The reasons are practical, not ideological.
          </p>
        </AnimatedSection>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AnimatedCard className="h-full p-6 bg-background/50 border border-border rounded-lg backdrop-blur-sm">
                <motion.h3 
                  className="font-mono text-sm font-medium text-foreground mb-3"
                  whileHover={{ color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.2 }}
                >
                  {reason.title}
                </motion.h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBitcoin;
