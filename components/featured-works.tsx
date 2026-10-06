"use client"

import { useCallback, useState } from "react"
import { motion } from "motion/react"
import { Reveal, staggerContainer, staggerItem } from "@/components/reveal"
import { caseStudies, type CaseStudy } from "@/components/case-studies-data"
import { CaseStudyCard } from "@/components/case-study-card"
import { CaseStudyModal } from "@/components/case-study-modal"

export function FeaturedWorks() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
  const [returnFocusTo, setReturnFocusTo] = useState<HTMLElement | null>(null)

  const openStudy = useCallback((study: CaseStudy) => {
    setReturnFocusTo(document.activeElement instanceof HTMLElement ? document.activeElement : null)
    setSelectedStudy(study)
  }, [])
  const closeStudy = useCallback(() => setSelectedStudy(null), [])

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr]">
        <Reveal as="h2" className="text-3xl font-semibold tracking-tight md:text-5xl">Selected Case Studies</Reveal>
        <Reveal delay={0.08} as="p" className="max-w-2xl text-pretty text-lg text-muted-foreground">
          A mix of performance marketing, content production, and content leadership.
        </Reveal>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {caseStudies.map((study, index) => (
          <motion.div key={study.category} variants={staggerItem} className="h-full">
            <CaseStudyCard study={study} featured={index === 1} onSelect={openStudy} />
          </motion.div>
        ))}
      </motion.div>

      <CaseStudyModal study={selectedStudy} onClose={closeStudy} returnFocusTo={returnFocusTo} />
    </section>
  )
}
