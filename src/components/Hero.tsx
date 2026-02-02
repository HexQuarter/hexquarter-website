import Video from "../../public/bg-video.mp4"

const Hero = () => {
  return (
    <section className="hex-section pt-24 md:pt-32 lg:pt-40 relative h-screen overflow-hidden">
      <video src={Video} loop muted preload="auto" playsInline autoPlay className="absolute top-0 object-cover inset-0 w-full h-full"/>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="hex-container relative z-10 ">
        <div className="max-w-3xl">
          <p className="hex-tag">Bitcoin Engineering</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">
            Bitcoin-native applications.
            <br />
            <span className="text-muted-foreground">Designed for permanence.</span>
          </h1>
          <p className="hex-body max-w-2xl mb-8 text-gray-100 text-sm">
            We build software where Bitcoin serves as the security, settlement, and trust layer. 
            <br />Not as an add-on. Not as a payment option. But <strong className="text-primary">as the foundation.</strong>
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            A <span className="text-primary">Bitcoin-only</span> engineering firm. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
