import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SimplePool } from '@nostr/tools/pool'
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Markdown from 'react-markdown';
import { ArrowLeft, ArrowLeftCircle } from "lucide-react";

const pool = new SimplePool()
const relays = ['wss://cache2.primal.net/v1', 'wss://nos.lol/', 'wss://nostr.mom/', 'wss://nostrelites.org/', 'wss://relay.damus.io/', 'wss://wot.nostr.party/']

type Article = {
  title: string
  content: string
  date: Date
  summary: string
  image: string
}

const BlogDetails = () => {

  const { id } = useParams()

  const [article, setArticle] = useState<Article | undefined>(undefined)
  const ran = useRef(false);
  const navigate = useNavigate()

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const e = await pool.get(relays, { ids: [id] })
        if (!e) return

        const { tags } = e
        const tagsMap = new Map(tags as any)

        const article = {
          id: e.id,
          date: new Date(e.created_at),
          title: tagsMap.get('title'),
          image: tagsMap.get('image'),
          summary: tagsMap.get('summary'),
          content: e.content
        } as Article

        setArticle(article)
      }
      catch (e) {
        alert(e)
      }
    }

    ran.current = true;
    loadEvents()

  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col gap-10 ">
        <section className="hex-section">
          <div className="hex-container">
            {article &&
              <div>
                <a href="/blog"><ArrowLeftCircle className="text-primary" /></a>
                <h2 className="hex-tag">{article.date.toDateString()}</h2>
                <div className="lg:grid lg:grid-cols-2 flex flex-col">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8 flex items-center">{article.title}</h1>
                  <img src={article.image} className="h-"/>
                </div>
              </div>
            }
            {!article && <span>Fetching from <span className="text-primary">Nostr</span>...yes completely decentralized :)</span>}
          </div>
        </section>
        {article &&
          <div className="hex-section bg-card">
            <div className="hex-container flex flex-col gap-5 text-muted-foreground text-sm">
              <Markdown components={{
                h2(p) {
                  const { node, ...rest } = p
                  return <h2 className="text-white text-2xl" {...rest} />
                },
                p(p) {
                  const { node, ...rest } = p
                  return <p {...rest} />
                },
                ul(p) {
                  const { node, ...rest } = p
                  return <ul className="list-disc" {...rest} />
                },
                strong(p) {
                  const { node, ...rest } = p
                  return <strong className="text-primary font-light" {...rest} />
                },
                ol(p) {
                  const { node, ...rest } = p
                  return <ul className="list-decimal" {...rest} />
                }
              }}>{article.content}</Markdown>
            </div>
          </div>
        }
        {/* <section className="hex-section bg-card">
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
        </section> */}
      </main >
      <Footer />
    </div >
  );
};

export default BlogDetails;
