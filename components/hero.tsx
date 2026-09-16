"use client"

import { motion } from "motion/react"
import { RevealText } from "@/components/reveal"

const easeOut = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-6 md:pb-28">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto flex justify-center"
      >
        <img
          src="/confident-content-creator-portrait--white-shirt--.jpg"
          alt="Portrait of Jatin Manra"
          className="h-[560px] w-auto object-contain md:h-[680px]"
        />
      </motion.div>

      <div className="flex min-h-[560px] flex-col justify-end md:min-h-[680px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Open To Work
            </motion.div>
            <RevealText
              as="h1"
              immediate
              delay={0.08}
              className="text-pretty text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              Jatin Manra is turning ideas into scroll-stopping content
            </RevealText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.18 }}
            className="max-w-sm md:pb-2"
          >
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I&apos;m a creative-focused Social Media &amp; Content Creator. I write, perform, and produce short-form
              content, then use Meta Ads and performance data to make the work more useful.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="mt-6 inline-flex rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-black/10"
            >
              Email Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
