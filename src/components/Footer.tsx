const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="hex-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-sm font-medium text-foreground mb-1">
              HexQuarter
            </p>
            <p className="text-sm text-muted-foreground">
              Bitcoin-native engineering
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a 
              href="mailto:build@hexquarter.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              build@hexquarter.com
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} HexQuarter. <span className="text-primary">Bitcoin-only</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
