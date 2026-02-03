import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Positioning = () => {
  return (
    <section className="hex-section">
      <div className="hex-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <AnimatedSection>
            <h2 className="hex-subheading">Bitcoin integration</h2>
            <p className="hex-body">
              Add Bitcoin payments to an existing product. 
              Bolt on crypto features. 
              The system works without Bitcoin.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h2 className="hex-subheading text-foreground">
              <motion.span 
                className="hex-accent inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span> Bitcoin-native
            </h2>
            <p className="hex-body">
              Bitcoin is the product's trust anchor. 
              Remove it and the guarantees disappear. 
              The system depends on Bitcoin.
            </p>
          </AnimatedSection>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        >
          <AnimatedSection delay={0.6}>
            <p className="hex-body max-w-2xl">
              We build the second kind. Products where Bitcoin provides the security model, 
              not just the payment rail.
            </p>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;
