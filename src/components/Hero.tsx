const Hero = () => {
  return (
    <section className="hex-section pt-24 md:pt-32 lg:pt-40">
      <div className="hex-container">
        <div className="max-w-3xl">
          <p className="hex-tag">Bitcoin Engineering</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">
            Bitcoin-native applications.
            <br />
            <span className="text-muted-foreground">Designed for permanence.</span>
          </h1>
          <p className="hex-body max-w-2xl mb-8">
            HexQuarter builds software where Bitcoin serves as the security, settlement, and trust layer. 
            Not as an add-on. Not as a payment option. As the foundation.
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            A niche engineering firm. Bitcoin-only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
