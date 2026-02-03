import { motion } from "framer-motion";
import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="hex-container py-4 flex items-center justify-between">
        <motion.a 
          href="/" 
          className="font-mono text-lg font-semibold text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={Logo} className="h-4" alt="HexQuarter" />
        </motion.a>
        <motion.a 
          href="mailto:build@hexquarter.com"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
          whileHover={{ scale: 1.02 }}
        >
          <span>build@hexquarter.com</span>
          <motion.span
            className="absolute -bottom-1 left-0 h-px bg-primary"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
