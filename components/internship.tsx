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
          <Reveal as="h2" className="text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-5xl">A hands-on mix of content, ads, production, and leadership.</Reveal>
          <Reveal delay={0.08} as="p" className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I have worked across automotive, real estate, fitness, aviation, consumer electronics, and F&B. I have also led a 5 to 6 person content team at UIHTM for 12 months.
          </Reveal>
        </div>
      </div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {glanceStats.map((stat) => <motion.article key={stat.label} variants={staggerItem} whileHover={cardHover} className="rounded-3xl bg-card p-5 shadow-sm"><p className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</p><p className="mt-2 text-sm text-muted-foreground">{stat.label}</p></motion.article>)}
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal><article className="h-full rounded-3xl bg-card p-7 shadow-sm"><p className="text-sm font-medium text-muted-foreground">Content leadership</p><p className="mt-3 text-pretty leading-relaxed">As Content Head for UIHTM during 2024 to 2025, I managed planning, shoots, editing, design, and publishing with a 5 to 6 person team. Every institutional event was promoted online, including the 11th International Hosticon.</p></article></Reveal>
        <Reveal delay={0.08}><article className="h-full rounded-3xl bg-card p-7 shadow-sm"><p className="text-sm font-medium text-muted-foreground">Performance and creative</p><p className="mt-3 text-pretty leading-relaxed">I connect the creative and performance sides of the work, from writing and performing a script to managing campaigns, reading CPL, testing ideas, and improving the next version.</p></article></Reveal>
      </div>
    </section>
  )
}
