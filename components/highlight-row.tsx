"use client"

import { motion } from "motion/react"
import { Award, Quote, Check } from "lucide-react"
import { cardHover, staggerContainer, staggerItem } from "@/components/reveal"

export function HighlightRow() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {/* Award card */}
        <motion.div variants={staggerItem} whileHover={cardHover} className="rounded-3xl bg-card p-7 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold tracking-tight">J.</span>
            <Award className="h-6 w-6 text-amber-500" />
          </div>
          <h3 className="mt-6 text-xl font-semibold">2.8M+ views reel</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Written, directed, and performed by me. One organic piece reached more than 2.8M views.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <div className="rounded-2xl bg-muted px-4 py-4">
              <p className="text-xl font-semibold">2.8M+</p>
              <p className="text-xs text-muted-foreground">Views</p>
            </div>
            <div className="rounded-2xl bg-muted px-4 py-4">
              <p className="text-xl font-semibold">50+</p>
              <p className="text-xs text-muted-foreground">Organic views</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          variants={staggerItem}
          whileHover={cardHover}
          className="flex flex-col rounded-3xl bg-primary p-7 text-primary-foreground"
        >
          <Quote className="h-9 w-9 fill-current opacity-90" />
          <p className="mt-6 text-pretty text-xl font-medium leading-snug">
            The best work usually comes from being involved in the whole process, from the first line of the script to the final take.
          </p>
          <div className="mt-auto flex items-center gap-3 pt-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 text-sm font-semibold">
              SW
            </div>
            <div>
              <p className="font-medium">On-camera and creative work</p>
              <p className="text-sm text-primary-foreground/70">Education · Agency client</p>
            </div>
          </div>
        </motion.div>

        {/* Stat card */}
        <motion.div
          variants={staggerItem}
          whileHover={cardHover}
          className="flex flex-col justify-center gap-4 rounded-3xl bg-card p-7 shadow-sm"
        >
          <StatPill label="100+ scripts written" />
          <StatPill label="1,100+ leads generated" />
          <StatPill label="10+ live Meta campaigns" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function StatPill({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-muted px-5 py-4">
      <span className="font-medium">{label}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
        <Check className="h-3.5 w-3.5 text-accent-foreground" />
      </span>
    </div>
  )
}
