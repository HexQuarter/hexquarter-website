const CTA = () => {
  return (
    <section className="hex-section bg-card">
      <div className="hex-container">
        <div className="max-w-2xl">
          <h2 className="hex-heading">
            Discuss how Bitcoin fits into your product
          </h2>
          <p className="hex-body mb-8">
            We start with architecture. Understanding your product, your constraints, 
            and whether Bitcoin actually makes sense for your use case.
          </p>
          <a 
            href="mailto:build@hexquarter.com"
            className="inline-flex items-center gap-3 font-mono text-sm font-medium bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
          >
            Start a technical conversation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
