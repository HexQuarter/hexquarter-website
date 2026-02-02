const HowBitcoinIsUsed = () => {
  const useCases = [
    {
      layer: "Settlement layer",
      description: "Payments, payouts, reconciliation. When you need finality, not just confirmation.",
      examples: ["Multi-party settlements", "Cross-border payouts", "Programmatic treasury"]
    },
    {
      layer: "Coordination layer",
      description: "Programmable logic and automation. Contracts that execute without intermediaries.",
      examples: ["Escrow and custody", "Automated agreements", "State anchoring"]
    },
    {
      layer: "Product foundation",
      description: "End-to-end Bitcoin-native systems. The entire product built on Bitcoin's trust model.",
      examples: ["Non-custodial applications", "Lightning-native services", "Bitcoin-first marketplaces"]
    }
  ];

  return (
    <section className="hex-section">
      <div className="hex-container">
        <p className="hex-tag">Applications</p>
        <h2 className="hex-heading max-w-xl">
          How we use Bitcoin in products
        </h2>
        <div className="space-y-8 mt-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="hex-card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <h3 className="font-mono text-lg font-medium text-foreground mb-2">
                    {useCase.layer}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {useCase.examples.map((example, i) => (
                      <li 
                        key={i}
                        className="font-mono text-sm text-secondary-foreground"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowBitcoinIsUsed;
