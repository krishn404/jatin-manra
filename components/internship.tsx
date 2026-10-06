"use client"

import { motion } from "motion/react"
import { Reveal, staggerContainer, staggerItem } from "@/components/reveal"

const stats = [
  ["1,100+", "Leads generated"],
  ["₹97 → ₹28", "CPL reduced through creative testing"],
  ["2.8M+", "Top organic reel"],
  ["35+", "Brands handled"],
  ["100+", "Scripts written"],
  ["10+", "Live Meta campaigns"],
]

export function Internship() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Reveal><p className="text-lg text-muted-foreground">Experience &amp; proof</p></Reveal>
        <div>
          <Reveal as="h2" className="text-pretty text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            Creative output, campaign discipline, and team ownership.
          </Reveal>
          <Reveal delay={0.08} as="p" className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Across agency, institutional, and commercial work, I pair hands-on creative production with performance tracking and content operations.
          </Reveal>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
      >
        {stats.map(([value, label], index) => (
          <motion.article
            key={label}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.24, ease: "easeOut" } }}
            className="group flex min-h-32 flex-col justify-between rounded-3xl border border-border bg-card p-5 shadow-sm transition-colors duration-300 hover:bg-muted/50 sm:min-h-36 sm:p-6"
          >
            <span className="text-xs font-medium tracking-wide text-muted-foreground">0{index + 1}</span>
            <div className="mt-5">
              <p className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-0.5 sm:text-3xl">{value}</p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{label}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
