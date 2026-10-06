"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import type { CaseStudy } from "@/components/case-studies-data"

export function CaseStudyCard({ study, featured = false, onSelect }: { study: CaseStudy; featured?: boolean; onSelect: (study: CaseStudy) => void }) {
  const [active, setActive] = useState(false)
  const shownTags = study.tags.slice(0, 3)
  const cardMetrics = study.metrics.slice(0, 3)
  const moreCount = study.tags.length - shownTags.length

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(study)}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      aria-label={`Read case study: ${study.title}`}
      aria-haspopup="dialog"
      className={`group relative flex h-full w-full flex-col rounded-[1.75rem] border-[5px] p-1.5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 md:p-2 ${featured ? "z-10 border-neutral-950 bg-violet-600 shadow-[0_18px_35px_rgba(0,0,0,0.24)] hover:bg-violet-700 focus-visible:ring-offset-violet-600" : "border-neutral-100 bg-white shadow-none hover:bg-[#f1f1f1] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950"}`}
    >
      <span className={`flex w-full items-start justify-between gap-4 rounded-2xl px-3 py-2.5 ${featured ? "bg-violet-600" : "bg-white dark:bg-neutral-900"}`}>
        <span role="heading" aria-level={3} className={`grid h-[82px] flex-1 content-center text-lg font-semibold leading-snug tracking-tight transition-opacity duration-300 group-hover:opacity-80 ${featured ? "text-white" : "text-neutral-950 dark:text-neutral-50"}`}>
          <AnimatePresence initial={false}>
            <motion.span
              key={active ? "read" : study.title}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="col-start-1 row-start-1 block"
            >
              {active ? "Read Case Study" : study.title}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${featured ? "bg-white text-violet-700" : "bg-neutral-100 text-neutral-700 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-neutral-700"}`}>
          <motion.span animate={{ x: active ? 1 : 0, y: active ? -1 : 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </motion.span>
        </span>
      </span>

      <span className={`mt-3 px-3 text-[10px] font-medium uppercase tracking-[0.08em] ${featured ? "text-white/65" : "text-neutral-500 dark:text-neutral-400"}`}>{study.category}</span>
      <span className={`mt-2 min-h-[4.25rem] px-3 text-sm leading-relaxed transition-opacity duration-300 group-hover:opacity-75 ${featured ? "text-white/90" : "text-neutral-600 dark:text-neutral-300"}`}>
        {study.summary}
      </span>

      <span className="mt-4 grid min-w-0 grid-cols-2 gap-1.5 px-2 sm:grid-cols-3">
        {cardMetrics.map((metric) => (
          <span key={metric.label} className={`flex aspect-square min-w-0 flex-col justify-between rounded-xl p-2.5 transition-opacity duration-300 group-hover:opacity-80 sm:p-3 ${featured ? "bg-white/10 text-white ring-1 ring-white/10" : "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-neutral-50"}`}>
            <span className={`break-words text-[clamp(0.7rem,3.5vw,1.25rem)] font-semibold leading-tight tracking-tight ${metric.value.length > 7 ? "sm:text-base" : "sm:text-xl"}`}>{metric.value}</span>
            <span className={`break-words text-[10px] leading-snug sm:text-xs ${featured ? "text-white/70" : "text-neutral-500 dark:text-neutral-400"}`}>{metric.label}</span>
          </span>
        ))}
      </span>

      <span className="mt-auto flex flex-wrap gap-2 px-2 pb-2 pt-5">
        {shownTags.map((tag) => <span key={tag} className={`rounded-full px-3 py-1.5 text-xs ${featured ? "border border-white/50 text-white" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}`}>{tag}</span>)}
        {moreCount > 0 && <span className={`rounded-full px-3 py-1.5 text-xs ${featured ? "border border-white/50 text-white" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}`}>+{moreCount} more</span>}
      </span>
    </motion.button>
  )
}
