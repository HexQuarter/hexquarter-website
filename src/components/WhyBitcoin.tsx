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

  return (
    <section className="hex-section bg-card">
      <div className="hex-container">
        <p className="hex-tag">Why Bitcoin</p>
        <h2 className="hex-heading max-w-xl">
          We've built on altchains. We stopped.
        </h2>
        <p className="hex-body max-w-2xl mb-12">
          After a decade of building on various protocols, we chose Bitcoin for production systems. 
          The reasons are practical, not ideological.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index}>
              <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBitcoin;
