import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="py-12 border-t border-border relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle gradient line */}
      <motion.div
        className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="hex-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-mono text-sm font-medium text-foreground mb-1">
              HexQuarter
            </p>
            <div className="flex flex-col mt-5">
              <motion.div
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 3 }}
              >
                <Link to='/about'>About</Link>
              </motion.div>
              <motion.div
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 3 }}
              >
                <Link to='/blog'>Blog</Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="mailto:build@hexquarter.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              whileHover={{ scale: 1.02 }}
            >
              build@hexquarter.com
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} HexQuarter. <motion.span
              className="text-primary inline-block"
              animate={{
                textShadow: [
                  "0 0 0px hsl(var(--primary))",
                  "0 0 10px hsl(var(--primary))",
                  "0 0 0px hsl(var(--primary))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Bitcoin-only engineering firm
            </motion.span>.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
