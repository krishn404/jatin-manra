"use client"

import { motion } from "motion/react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

const glanceStats = [
  { value: "1,100+", label: "Leads generated" },
  { value: "~₹40", label: "Blended CPL" },
  { value: "100+", label: "Scripts written" },
  { value: "50+", label: "On-camera videos" },
]

export function Internship() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Reveal><p className="text-lg text-muted-foreground">Experience</p></Reveal>
        <div>
          <Reveal as="h2" className="text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-5xl">A hands-on mix of content, ads, and production.</Reveal>
          <Reveal delay={0.08} as="p" className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I have worked across automotive, real estate, fitness, aviation, consumer electronics, and F&B. The common thread has been owning the work closely, whether that meant writing the script, checking the campaign, or figuring out why something was not landing.
          </Reveal>
        </div>
      </div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {glanceStats.map((stat) => <motion.article key={stat.label} variants={staggerItem} whileHover={cardHover} className="rounded-3xl bg-card p-5 shadow-sm"><p className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</p><p className="mt-2 text-sm text-muted-foreground">{stat.label}</p></motion.article>)}
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal><article className="h-full rounded-3xl bg-card p-7 shadow-sm"><p className="text-sm font-medium text-muted-foreground">Performance marketing</p><p className="mt-3 text-pretty leading-relaxed">The strongest results came from staying close to the details. A fitness campaign moved from ₹97 to ₹28 CPL through creative testing, the best single CPL was ₹25.53, and an automotive account brought in 372 leads across three ad sets.</p></article></Reveal>
        <Reveal delay={0.08}><article className="h-full rounded-3xl bg-card p-7 shadow-sm"><p className="text-sm font-medium text-muted-foreground">Content and production</p><p className="mt-3 text-pretty leading-relaxed">I wrote 100+ scripts and appeared in 50+ videos, taking ideas from research through scripting, direction, performance, and delivery. I also worked as on-camera talent and DOP for commercial and podcast projects.</p></article></Reveal>
      </div>
    </section>
  )
}
