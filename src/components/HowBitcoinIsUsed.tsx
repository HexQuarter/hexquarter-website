import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import GlowingBorder from "./animations/GlowingBorder";

const HowBitcoinIsUsed = () => {
  const useCases = [
    {
      layer: "Settlement layer",
      description: "Payments, payouts, reconciliation. When you need finality, not just confirmation.",
      examples: ["Multi-party settlements", "Cross-border payouts", "Programmatic treasury"]
    },
    {
      layer: "Coordination layer",
      description: "Programmable logic and automation. Contracts that execute without intermediaries.",
      examples: ["Escrow and custody", "Automated agreements", "State anchoring"]
    },
    {
      layer: "Product foundation",
      description: "End-to-end Bitcoin-native systems. The entire product built on Bitcoin's trust model.",
      examples: ["Non-custodial applications", "Lightning-native services", "Bitcoin-first marketplaces"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="hex-section">
      <div className="hex-container">
        <AnimatedSection>
          <p className="hex-tag">Applications</p>
          <h2 className="hex-heading max-w-xl">
            How we use Bitcoin in products
          </h2>
        </AnimatedSection>
        
        <motion.div 
          className="space-y-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={cardVariants}>
              <GlowingBorder>
                <motion.div 
                  className="hex-card"
                  whileHover={{ backgroundColor: "hsl(var(--secondary))" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <div className="md:w-1/3">
                      <motion.h3 
                        className="font-mono text-lg font-medium text-foreground mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {useCase.layer}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground">
                        {useCase.description}
                      </p>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {useCase.examples.map((example, i) => (
                          <motion.li 
                            key={i}
                            className="font-mono text-sm text-secondary-foreground"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            whileHover={{ 
                              color: "hsl(var(--primary))",
                              x: 3
                            }}
                          >
                            <span className="text-primary mr-2">•</span>
                            {example}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </GlowingBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowBitcoinIsUsed;
