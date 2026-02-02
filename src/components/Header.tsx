import Logo from "../../public/logo.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="hex-container py-4 flex items-center justify-between">
        <a href="/" className="font-mono text-lg font-semibold text-foreground">
          <img src={Logo} className="h-4" />
        </a>
        <a 
          href="mailto:build@hexquarter.com"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          build@hexquarter.com
        </a>
      </div>
    </header>
  );
};

export default Header;
