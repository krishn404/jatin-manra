"use client"

import { motion } from "motion/react"
import { ThemeToggle } from "@/components/theme-toggle"

const easeOut = [0.16, 1, 0.3, 1] as const

export function SiteNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="w-full bg-white text-neutral-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-white"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:py-8">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Jatin Manra
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm md:flex">
          {[
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Work", href: "#work" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-black/10"
          >
            Book a Call
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
