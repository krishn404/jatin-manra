"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Plus, X } from "lucide-react"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "What kind of brands do you work with?",
    a: "I am best suited to brands that need a stronger short-form content system, consistent social media execution, or Meta Ads support. My experience includes automotive, real estate, fitness, aviation, consumer electronics, F&B, and institutional projects.",
  },
  {
    q: "Do you only create content?",
    a: "No. I work across strategy, scripting, production, publishing, Meta Ads, performance tracking, and creative optimization.",
  },
  {
    q: "Can you manage a content team?",
    a: "Yes. As Content Head for UIHTM during 2024–2025, I led a 5–6 person team across planning, shoot direction, editing, design, publishing, and event promotion.",
  },
  {
    q: "What results have you achieved?",
    a: "My selected results include 1,100+ leads generated, approximately ₹40 blended CPL, a 71% CPL reduction from ₹97 to ₹28, 2.8M+ organic views on one reel, 100+ scripts, 50+ on-camera videos, and 35+ brands handled.",
  },
  {
    q: "Do you offer complete social media management?",
    a: "Yes. Depending on the requirement, I can support content planning, creative direction, scripting, production, publishing coordination, insights review, and performance-led improvement.",
  },
  {
    q: "How do we start?",
    a: "Share your current goal, brand, and biggest content or campaign challenge. We can then identify whether you need strategy, content production, Meta Ads support, or a combination of all three.",
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-lg text-muted-foreground">FAQs</p>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-4 text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            <span className="text-muted-foreground">Answers to common questions</span> about how
            we can work together
          </Reveal>
          <Reveal delay={0.1}>
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="mt-8 inline-flex rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-black/10"
            >
              Book a Strategy Call
            </motion.a>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="rounded-3xl bg-muted/60 p-4 md:p-6">
          <div className="mb-4 flex justify-center">
            <span className="rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground">
              I&apos;m here to help you
            </span>
          </div>
          <ul className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q} className="rounded-2xl bg-card shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium">{item.q}</span>
                    {isOpen ? (
                      <X className="h-5 w-5 shrink-0 text-muted-foreground" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
