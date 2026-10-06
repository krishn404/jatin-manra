"use client"

import { motion } from "motion/react"
import { RevealText } from "@/components/reveal"

const easeOut = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="hero-theme relative isolate mx-auto h-[calc(100svh-5rem)] min-h-[680px] w-full overflow-hidden bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <motion.img
        src="/hero-light.png"
        alt="Portrait of Jatin Manra"
        initial={{ scale: 1.025 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        onError={(event) => { event.currentTarget.src = "/hero.png" }}
        className="hero-image pointer-events-none absolute bottom-0 left-1/2 z-0 h-[82%] w-auto max-w-none -translate-x-1/2 object-contain opacity-100 md:h-[98%] dark:opacity-0"
        style={{ maskImage: "linear-gradient(to bottom, black 54%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 54%, transparent 100%)" }}
      />
      <motion.img
        src="/hero.png"
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.025 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        className="hero-image pointer-events-none absolute bottom-0 left-1/2 z-0 h-[82%] w-auto max-w-none -translate-x-1/2 scale-[1.04] object-contain opacity-0 md:h-[98%] dark:opacity-100"
        style={{ maskImage: "linear-gradient(to bottom, black 54%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 54%, transparent 100%)" }}
      />
      <div aria-hidden="true" className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%] bg-gradient-to-t from-white via-white/90 to-transparent dark:opacity-0" />
      <div aria-hidden="true" className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%] bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent opacity-0 dark:opacity-100" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-8 pt-72 sm:px-10 md:px-16 md:pb-12 lg:px-20 xl:px-28">
        <div className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,370px)] md:gap-12">
          <div className="max-w-[620px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/75 px-3 py-1.5 text-sm text-neutral-600 backdrop-blur-sm dark:border-white/15 dark:bg-neutral-950/70 dark:text-neutral-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for selected projects
            </motion.div>
            <RevealText
              as="h1"
              immediate
              delay={0.08}
              className="text-pretty text-[2.6rem] font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            >
              I turn content into attention, enquiries, and growth.
            </RevealText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.18 }}
            className="max-w-sm md:justify-self-end"
          >
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Social Media Strategist &amp; Meta Ads Specialist</p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm">
              Content strategy · Short-form production · Lead generation · Creative operations
            </p>
            {/* <p className="mt-4 text-pretty text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
              I combine content strategy, short-form production, Meta Ads, and creative operations to help brands build content that performs beyond the feed.
            </p> */}
            <p className="mt-3 text-xs font-medium leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-sm">
              1,100+ leads generated · ₹97 → ₹28 CPL · 2.8M+ organic views · 35+ brands handled
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/15 dark:bg-white dark:text-neutral-950 dark:shadow-white/10"
              >
                Book a Strategy Call
              </motion.a>
              <a href="#work" className="inline-flex text-sm font-medium text-neutral-800 underline underline-offset-4 dark:text-neutral-200">
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
