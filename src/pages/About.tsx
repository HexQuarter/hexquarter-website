import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import WhyBitcoin from "@/components/WhyBitcoin";
import HowBitcoinIsUsed from "@/components/HowBitcoinIsUsed";
import Approach from "@/components/Approach";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import Founder from "../../public/founder.webp"

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col gap-10 ">
        <section className="hex-section">
          <div className="hex-container">
            <h2 className="hex-tag">About us</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">From blockchain to Bitcoin-first engineering.</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-mono text-sm font-medium text-foreground mb-3 text-primary">
                  Build to the Bitcoin Standard
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bitcoin isn’t just digital gold—it’s a foundation. We use it as the base security and settlement layer for products that need durability, neutrality, and global reach.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm font-medium text-foreground mb-3 text-primary">
                  Leverage the most secure network
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The most decentralized, battle-tested network is your best security partner. We anchor critical events on Bitcoin, so integrity isn’t a promise—it’s enforced.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm font-medium text-foreground mb-3 text-primary">
                  Security layer for data and financial trust
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Treat Bitcoin as the trust engine. Verifiable records on L1 provide tamper-evident history; your app and data services inherit provable integrity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="hex-section bg-card">
          <div className="hex-container">
            <p className="hex-tag">Our story</p>
            <h2 className="hex-heading max-w-xl">
              Discover founder's vision
            </h2>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="flex flex-col gap-5 w-full ">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I spent years deep in blockchain systems — early in the Ethereum dApps facing the ICO wave, building digital identity, supply chain smart contracts.
                  <br />Down in the rabbit hole of the peer-to-peer networking system, and designed applied cryptography protocols for freedom and privacy purposes.
                  <br />During that journey I designed and built - from scratch - much bigger and disruptive projects such as Layer 1 protocol and interoperabilities for this whole ecosystem.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  That experience shaped how I approached Bitcoin after a decade as a decentralized pioneer.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-white">Bitcoin is not just digital gold;</strong> it is a durable execution and settlement platform.
                  <br />
                  Its constrained model makes it possible to encode product rules that remain stable under scale, adversarial conditions, and long time horizons.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Now I'm working with founders and product teams building Bitcoin-native products where <strong className="text-primary">Bitcoin enforces critical business logic.</strong>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My focus is on execution-layer design, correctness, and translating product requirements into Bitcoin-backed guarantees.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Today, through <strong className="text-primary">HexQuarter</strong>, I help teams design and build products that rely on Bitcoin’s security, neutrality, and global reach — turning those properties into concrete product behavior.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <img src={Founder} className="rounded-xl"/>
                <span className="text-sm text-muted-foreground">Samuel Manzanera</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
