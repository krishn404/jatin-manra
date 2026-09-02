"use client"

import { motion } from "motion/react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

const steps = [
  {
    title: "Discovery Call",
    body: "We start with a conversation about your goals, audience, and brand voice. This is where we align on direction and make sure we're a great fit.",
  },
  {
    title: "Content Plan",
    body: "I map out a simple plan   pillars, formats, and a posting cadence   so every piece we make has a clear purpose and place.",
  },
  {
    title: "Create",
    body: "This is where the ideas take shape. I shoot, edit, and refine content based on your feedback until it feels unmistakably you.",
  },
  {
    title: "Publish",
    body: "Everything ships polished and platform-ready, with captions, hooks, and posting notes for a smooth, consistent rollout.",
  },
  {
    title: "Review & Improve",
    body: "After delivery, I check basic insights, share what's working, and use it to sharpen the next round of content.",
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grain rounded-[2rem] px-6 py-16 text-white md:px-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="text-lg text-white/50">How it works</p>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="text-pretty text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
            A simple, collaborative process to bring your ideas to the feed.{" "}
            <span className="text-white/45">
              From first call to final post, every step is built for clarity.
            </span>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              whileHover={cardHover}
              className={[
                "rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10",
                i % 2 === 1 ? "md:mt-10" : "",
              ].join(" ")}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white/70">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-white/55">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
