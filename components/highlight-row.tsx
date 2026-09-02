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
          <h3 className="mt-6 text-xl font-semibold">Recognition Placeholder</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Add a highlight, feature, or award here   swap in a real credit whenever you have one.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <img
              src="/collage-grid-of-vibrant-social-media-content-piece.jpg"
              alt="Grid of recent content pieces"
              className="h-44 w-full object-cover"
            />
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
            Add a short client testimonial here   a line or two about what it was like working
            together and the results the content helped create.
          </p>
          <div className="mt-auto flex items-center gap-3 pt-8">
            <img
              src="/professional-woman-founder-headshot.png"
              alt="Client portrait placeholder"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Client Name</p>
              <p className="text-sm text-primary-foreground/70">Role at Brand Name</p>
            </div>
          </div>
        </motion.div>

        {/* Stat card */}
        <motion.div
          variants={staggerItem}
          whileHover={cardHover}
          className="flex flex-col justify-center gap-4 rounded-3xl bg-card p-7 shadow-sm"
        >
          <StatPill label="X+ collabs" />
          <StatPill label="X+ years creating" />
          <StatPill label="X platforms managed" />
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
