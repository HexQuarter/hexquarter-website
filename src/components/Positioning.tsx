const Positioning = () => {
  return (
    <section className="hex-section">
      <div className="hex-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="hex-subheading">Bitcoin integration</h2>
            <p className="hex-body">
              Add Bitcoin payments to an existing product. 
              Bolt on crypto features. 
              The system works without Bitcoin.
            </p>
          </div>
          <div>
            <h2 className="hex-subheading text-foreground">
              <span className="hex-accent">→</span> Bitcoin-native
            </h2>
            <p className="hex-body">
              Bitcoin is the product's trust anchor. 
              Remove it and the guarantees disappear. 
              The system depends on Bitcoin.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="hex-body max-w-2xl">
            We build the second kind. Products where Bitcoin provides the security model, 
            not just the payment rail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
