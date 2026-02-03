import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const WhoThisIsFor = () => {
  const audiences = [
    "Startups building Bitcoin-native products from day one",
    "Technical teams who don't want to become protocol experts",
    "Organizations exploring Bitcoin beyond simple payments",
    "Companies that need production systems, not experiments"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="hex-section">
      <div className="hex-container">
        <AnimatedSection>
          <p className="hex-tag">Fit</p>
          <h2 className="hex-heading max-w-xl">
            Who this is for
          </h2>
        </AnimatedSection>
        
        <motion.ul 
          className="space-y-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {audiences.map((audience, index) => (
            <motion.li 
              key={index}
              className="flex items-start gap-4 group cursor-default"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="hex-accent font-mono text-sm"
                animate={{ 
                  x: [0, 5, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                →
              </motion.span>
              <motion.span 
                className="hex-body group-hover:text-foreground transition-colors duration-300"
              >
                {audience}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ transformOrigin: "left" }}
        >
          <AnimatedSection delay={0.8}>
            <p className="hex-small">
              While having intensive expertize on general blockchain technology, token and NFT project, we focus exclusively on Bitcoin.
            </p>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
