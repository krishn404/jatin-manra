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

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border/70 pt-5">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <div className="mt-2 max-w-3xl leading-relaxed">{children}</div>
    </div>
  )
}

export function FeaturedWorks() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 grid gap-5 md:grid-cols-[1fr_2fr]">
        <Reveal><p className="text-lg text-muted-foreground">Selected work</p></Reveal>
        <div>
          <Reveal as="h2" className="text-3xl font-semibold tracking-tight md:text-5xl">Content. Performance. Growth.</Reveal>
          <Reveal delay={0.08} as="p" className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Three bodies of work across paid media, content, production, automation, and team leadership.
          </Reveal>
        </div>
      </div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-8">
        <motion.article variants={staggerItem} whileHover={cardHover} className="rounded-[2rem] bg-card p-6 shadow-sm md:p-10">
          <p className="text-sm font-medium text-muted-foreground">01 · Performance marketing</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Turning paid media into a measurable growth system.</h3>
          <div className="mt-8 grid gap-6">
            <Detail label="The outcome">1,100+ leads from 10+ live Meta campaigns, at about ₹40 blended CPL. A fitness account moved from ₹97 to ₹28 CPL through creative testing, a 71% reduction.</Detail>
            <Detail label="The challenge">Multiple accounts needed daily attention. Budgets, creative fatigue, lead quality, and sales feedback all had to be looked at together.</Detail>
            <Detail label="What I owned">I managed delivery, budgets, creative rotation, A/B tests, lead reconciliation, and reporting across automotive, real estate, fitness, and aviation accounts.</Detail>
            <Detail label="Results">The best single CPL was ₹25.53. One automotive account generated 372 leads across three ad sets. I also built a Claude and Meta Ads API workflow to reduce manual reporting and create more time for optimization.</Detail>
          </div>
        </motion.article>

        <motion.article variants={staggerItem} whileHover={cardHover} className="rounded-[2rem] bg-card p-6 shadow-sm md:p-10">
          <p className="text-sm font-medium text-muted-foreground">02 · Content and creative strategy</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Building content that works on paper and on camera.</h3>
          <div className="mt-8 grid gap-6">
            <Detail label="The outcome">100+ scripts written, 50+ videos performed on camera, and 2.8M+ organic views on the strongest reel. Four more reached 30K to 2.5L views.</Detail>
            <Detail label="The challenge">Each project needed a different voice, format, audience, and production level. The creative had to fit the brief and still feel natural on camera.</Detail>
            <Detail label="What I owned">I worked across concept, research, script, direction, performance, and production. I was also selected as on-camera lead for a national consumer electronics campaign and shot DOP for a regional podcast series in the category.</Detail>
            <Detail label="Results">I wrote the talking-head script for a luxury real estate project made with Ferrari Eccelenza. The campaign was later shelved for internal business reasons, not creative execution.</Detail>
          </div>
          <div className="mt-10">
            <p className="text-sm font-medium text-muted-foreground">Scripted and performed</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reels.map((reel) => (
                <div key={reel.url} className={reel.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
                  <div className={reel.featured ? "overflow-hidden rounded-2xl bg-muted ring-2 ring-foreground/20" : "overflow-hidden rounded-2xl bg-muted"}>
                    <blockquote className="instagram-media" data-instgrm-permalink={reel.url} data-instgrm-version="14" style={{ background: "#FFF", border: 0, margin: 0, maxWidth: "540px", minWidth: "280px", width: "calc(100% - 2px)" }}>
                      <a href={reel.url} target="_blank" rel="noreferrer">View this reel on Instagram</a>
                    </blockquote>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{reel.label}{reel.featured ? " · featured" : ""}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">If Instagram does not load the preview, each card links directly to the reel.</p>
          </div>
        </motion.article>

        <motion.article variants={staggerItem} whileHover={cardHover} className="rounded-[2rem] bg-card p-6 shadow-sm md:p-10">
          <p className="text-sm font-medium text-muted-foreground">03 · Content leadership</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Managing a content operation, not just making posts.</h3>
          <div className="mt-8 grid gap-6">
            <Detail label="The outcome">12 months of continuous content ownership, with a 5 to 6 person team and online promotion for every institutional event.</Detail>
            <Detail label="The challenge">The work had to keep moving across an entire academic year, with multiple people, deadlines, formats, and events in progress at once.</Detail>
            <Detail label="What I owned">As Content Head for UIHTM during 2024 to 2025, I directed planning, shoots, editing, design, and publishing across the full content pipeline.</Detail>
            <Detail label="Results">I led the team through the year and designed the brochure for the 11th International Hosticon, an international-scale event that needed a formal, premium communication standard.</Detail>
          </div>
        </motion.article>
      </motion.div>
      <script async src="https://www.instagram.com/embed.js" />
    </section>
  )
}
