const WhoThisIsFor = () => {
  const audiences = [
    "Startups building Bitcoin-native products from day one",
    "Technical teams who don't want to become protocol experts",
    "Organizations exploring Bitcoin beyond simple payments",
    "Companies that need production systems, not experiments"
  ];

  return (
    <section className="hex-section">
      <div className="hex-container">
        <p className="hex-tag">Fit</p>
        <h2 className="hex-heading max-w-xl">
          Who this is for
        </h2>
        <ul className="space-y-4 mt-8">
          {audiences.map((audience, index) => (
            <li 
              key={index}
              className="flex items-start gap-4"
            >
              <span className="hex-accent font-mono text-sm">→</span>
              <span className="hex-body">{audience}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="hex-small">
            If you're looking for a general blockchain agency, token launches, or NFT projects—we're not the right fit. 
            We focus exclusively on Bitcoin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
