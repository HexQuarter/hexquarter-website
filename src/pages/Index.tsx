import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import WhyBitcoin from "@/components/WhyBitcoin";
import HowBitcoinIsUsed from "@/components/HowBitcoinIsUsed";
import Approach from "@/components/Approach";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="hex-divider hex-container" />
        <Positioning />
        <WhyBitcoin />
        <HowBitcoinIsUsed />
        <Approach />
        <WhoThisIsFor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
