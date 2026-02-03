import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import WhyBitcoin from "@/components/WhyBitcoin";
import HowBitcoinIsUsed from "@/components/HowBitcoinIsUsed";
import Approach from "@/components/Approach";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import { SimplePool } from '@nostr/tools/pool'
import { useEffect, useRef, useState } from "react";
import AnimatedCard from "@/components/animations/AnimatedCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";

const pool = new SimplePool()
const relays = ['wss://cache2.primal.net/v1', 'wss://nos.lol/', 'wss://nostr.mom/', 'wss://nostrelites.org/', 'wss://relay.damus.io/', 'wss://wot.nostr.party/']

type ArticleItem = {
  id: string,
  title: string
  date: Date
  summary: string
  image: string
}

const Blog = () => {

  const [articles, setArticles] = useState<ArticleItem[]>([])
  const ran = useRef(false);
  const navigate = useNavigate()

  useEffect(() => {
    const loadEvents = () => {
      pool.subscribe(relays, {
        authors: ['2c57a88b2895a5518c28fc5417721be67fac057bbc644de20a92e74ab61b6d30'],
        kinds: [30023]
      }, {
        onevent(e) {
          const { tags } = e
          const tagsMap = new Map(tags as any)

          const article = {
            id: e.id,
            date: new Date(e.created_at * 1000),
            title: tagsMap.get('title'),
            image: tagsMap.get('image'),
            summary: tagsMap.get('summary')
          } as ArticleItem

          setArticles((prev) => [article, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime()))
        }
      })
    }

    if (ran.current) return;
    ran.current = true;
    loadEvents()

  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col gap-10 ">
        <section className="hex-section">
          <div className="hex-container">
            <h2 className="hex-tag">Blog</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">Insights on Bitcoin engineering</h1>
          </div>
        </section>
        <div className="bg-card ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 hex-container p-10">
            {articles.map((a, i) => (
              <article key={a.id}>
                <AnimatedCard className="h-full p-6 bg-background/50 border border-border rounded-lg backdrop-blur-sm ">
                  <div className="flex flex-col gap-5">
                    <motion.h3
                      className="font-mono text-2xl font-medium text-foreground mb-3"
                      whileHover={{ color: "hsl(var(--primary))", cursor: 'pointer' }}
                      transition={{ duration: 0.2 }}
                      onClick={() => navigate(`/blog/${a.id}`)}
                    >
                      {a.title}
                    </motion.h3>
                    <h2 className="hex-tag">{a.date.toDateString()}</h2>
                    <img src={a.image} />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {a.summary}
                    </p>
                  </div>

                </AnimatedCard>
              </article>
            ))}
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
};

export default Blog;
