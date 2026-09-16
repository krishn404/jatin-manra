"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Plus, X } from "lucide-react"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "What kind of content do you create?",
    a: "Mostly short-form video   reels and shorts   along with posters, carousels, and visual stories built to grab attention and drive engagement.",
  },
  {
    q: "Do you only edit, or can you plan content too?",
    a: "Both. I can plan content calendars and strategy, and I handle the creation and editing   from hook to final, platform-ready cut.",
  },
  {
    q: "What tools do you work with?",
    a: "Canva, CapCut/VN, Notion, and Google Workspace day to day, plus Instagram Insights and content planning sheets to stay organized.",
  },
  {
    q: "Can you work with my existing brand style?",
    a: "Yes. I adapt to your voice, palette, and tone so every post feels native to your brand across platforms.",
  },
  {
    q: "Do you understand analytics and ads?",
    a: "Yes. I have managed 10+ Meta Ads campaigns, generated 1,100+ leads at around ₹40 blended CPL, and used creative A/B tests to bring a fitness account from ₹97 to ₹28 CPL. I also built a Claude and Meta Ads API workflow to reduce manual reporting.",
  },
  {
    q: "What's the best way to reach you?",
    a: "Email is fastest for new projects. Once we're working together, we can set up a shared channel for quick updates.",
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
              Email Me
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
