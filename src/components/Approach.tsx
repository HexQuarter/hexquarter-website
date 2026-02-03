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

  return (
    <section className="hex-section bg-card">
      <div className="hex-container">
        <p className="hex-tag">Approach</p>
        <h2 className="hex-heading max-w-xl">
          Long-term reliability over short-term speed
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-12">
          {principles.map((item, index) => (
            <div key={index}>
              <h3 className="font-mono text-sm font-medium text-foreground mb-2">
                {item.principle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
