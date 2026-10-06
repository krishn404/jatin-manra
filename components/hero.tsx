"use client"

import { motion } from "motion/react"
import { RevealText } from "@/components/reveal"

const easeOut = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="hero-theme relative isolate mx-auto h-auto min-h-[850px] w-full overflow-hidden bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white md:h-[calc(100svh-5rem)] md:min-h-[680px]">
      <motion.img
        src="/hero-light.png"
        alt="Portrait of Jatin Manra"
        initial={{ scale: 1.025 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        onError={(event) => { event.currentTarget.src = "/hero.png" }}
        className="hero-image pointer-events-none absolute left-1/2 top-0 z-0 h-[42%] w-full max-w-none -translate-x-1/2 object-contain object-top opacity-100 md:bottom-0 md:top-auto md:h-[98%] md:w-auto dark:opacity-0"
        style={{ maskImage: "linear-gradient(to bottom, black 54%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 54%, transparent 100%)" }}
      />
      <motion.img
        src="/hero.png"
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.025 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        className="hero-image pointer-events-none absolute left-1/2 top-0 z-0 h-[42%] w-full max-w-none -translate-x-1/2 scale-[1.04] object-contain object-top opacity-0 md:bottom-0 md:top-auto md:h-[98%] md:w-auto dark:opacity-100"
        style={{ maskImage: "linear-gradient(to bottom, black 54%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 54%, transparent 100%)" }}
      />
      <div aria-hidden="true" className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%] bg-gradient-to-t from-white via-white/90 to-transparent dark:opacity-0" />
      <div aria-hidden="true" className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%] bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent opacity-0 dark:opacity-100" />

      <div className="relative z-10 mx-auto flex min-h-[850px] max-w-[1600px] flex-col justify-end px-4 pb-8 pt-[360px] sm:px-8 md:h-full md:min-h-0 md:px-16 md:pb-12 md:pt-72 lg:px-20 xl:px-28">
        <div className="grid min-w-0 items-end gap-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,370px)] md:gap-12">
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
              className="text-pretty text-[2.35rem] font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
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
            <p className="mt-4 text-pretty text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
              I build content systems from research and hooks through short-form production, Meta Ads, measurement, and creative optimization, so brands can earn attention and generate enquiries.
            </p>
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
