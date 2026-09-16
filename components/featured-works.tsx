"use client"

import { motion } from "motion/react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

type Reel = { url: string; label: string; featured?: boolean }

const reels: Reel[] = [
  { url: "https://www.instagram.com/reel/DXPN1jsEy1n/", label: "Scripted and performed reel" },
  { url: "https://www.instagram.com/reel/DaRk6TNhcuX/", label: "Scripted and performed reel" },
  { url: "https://www.instagram.com/reel/DaMbQ5oBgxX/", label: "Scripted and performed reel" },
  { url: "https://www.instagram.com/reel/DaSo6dgFSKp/", label: "Scripted and performed reel" },
  { url: "https://www.instagram.com/reel/DXPVszRkRxE/", label: "Scripted and performed reel" },
  { url: "https://www.instagram.com/reel/DY7KuR5AiWo/", label: "Scripted and performed reel" },
  { url: "https://www.instagram.com/reel/DaNB8xFDZqf/", label: "Ferrari Eccelenza collaboration", featured: true },
]

export function FeaturedWorks() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 grid gap-5 md:grid-cols-[1fr_2fr]">
        <Reveal><p className="text-lg text-muted-foreground">Selected work</p></Reveal>
        <div>
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight md:text-5xl">A mix of creative and performance work.</Reveal>
          <Reveal delay={0.08} as="p" className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I like working across the whole process, from finding the idea and writing the script to putting it in front of the right audience and learning from what happens next.
          </Reveal>
        </div>
      </div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-8">
        <motion.article variants={staggerItem} whileHover={cardHover} className="rounded-[2rem] bg-card p-6 shadow-sm md:p-10">
          <p className="text-sm font-medium text-muted-foreground">01 · Performance marketing</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Making the daily work count.</h3>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I ran more than 10 live Meta campaigns across automotive, real estate, fitness, and aviation. Together they generated 1,100+ leads at a blended CPL of about ₹40. On a fitness account, creative A/B testing brought CPL down 71%, from ₹97 to ₹28. The best single CPL was ₹25.53, and one automotive account generated 372 leads across three concurrent ad sets.
          </p>
          <p className="mt-5 max-w-3xl leading-relaxed">
            This meant checking budgets every day, rotating creatives before they went stale, and reconciling platform leads with what the sales team was actually receiving. I also built a Claude and Meta Ads API workflow on my own initiative to reduce manual reporting and leave more time for the parts that need judgment: testing, optimization, and deciding what to do next.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['Automotive', 'Real estate', 'Fitness', 'Aviation', 'Meta Ads'].map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-sm">{tag}</span>)}
          </div>
        </motion.article>

        <motion.article variants={staggerItem} whileHover={cardHover} className="rounded-[2rem] bg-card p-6 shadow-sm md:p-10">
          <p className="text-sm font-medium text-muted-foreground">02 · Content and creative strategy</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">From the first idea to the final take.</h3>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I wrote 100+ scripts and appeared on camera in 50+ videos, working across concept, research, scripting, direction, performance, and production. One self-written and self-performed reel reached 2.8M+ organic views. Four more independently reached between 30K and 2.5L views, so the result was not just one lucky spike.
          </p>
          <p className="mt-5 max-w-3xl leading-relaxed">
            I have also worked on commercial creative: I was selected as the on-camera lead for a national consumer electronics campaign that was later shelved for internal business reasons, shot as DOP for a regional podcast series in the same category, and wrote the talking-head script for a luxury real estate project created with Ferrari Eccelenza.
          </p>
          <div className="mt-10">
            <p className="text-sm font-medium text-muted-foreground">Scripted and performed</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reels.map((reel) => (
                <div key={reel.url} className={reel.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
                  <div className="overflow-hidden rounded-2xl bg-muted">
                    <blockquote className="instagram-media" data-instgrm-permalink={reel.url} data-instgrm-version="14" style={{ background: "#FFF", border: 0, margin: 0, maxWidth: "540px", minWidth: "280px", width: "calc(100% - 2px)" }}>
                      <a href={reel.url} target="_blank" rel="noreferrer">View this reel on Instagram</a>
                    </blockquote>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{reel.label}{reel.featured ? " · featured" : ""}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">If Instagram does not load the preview, each card still links directly to the reel.</p>
          </div>
        </motion.article>
      </motion.div>
      <script async src="https://www.instagram.com/embed.js" />
    </section>
  )
}
