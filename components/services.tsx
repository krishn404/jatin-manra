"use client"

import { motion } from "motion/react"
import { BarChart3, CalendarRange, Clapperboard } from "lucide-react"
import { Reveal, staggerContainer, staggerItem } from "@/components/reveal"

const services = [
  {
    number: "01",
    title: "Social Media Strategy & Management",
    icon: <CalendarRange aria-hidden="true" className="h-4 w-4" />,
    description: "For brands that need consistency, structure, and a clearer content direction.",
    deliverables: ["Content pillars", "Monthly content calendar", "Reels, carousels, stories, and captions", "Trend and competitor research", "Publishing coordination", "Monthly insights review"],
  },
  {
    number: "02",
    title: "Content Strategy & Short-form Production",
    icon: <Clapperboard aria-hidden="true" className="h-4 w-4" />,
    description: "For brands that need better hooks, scripts, ideas, and platform-ready content.",
    deliverables: ["Content concepts", "Hook and script development", "Talking-head and UGC content", "Short-form direction", "Creative testing", "Repurposing strategy"],
  },
  {
    number: "03",
    title: "Meta Ads & Lead Generation",
    icon: <BarChart3 aria-hidden="true" className="h-4 w-4" />,
    description: "For brands that want disciplined testing and more efficient lead generation.",
    deliverables: ["Campaign monitoring", "Creative testing", "CPL tracking", "Lead-sheet reconciliation", "Creative rotation", "Reporting and optimization recommendations"],
  },
]

const pastelSurfaces = ["bg-[#f1ede5]", "bg-[#e9eeeb]", "bg-[#eeebf0]"]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr]">
        <Reveal><p className="text-lg text-muted-foreground">What I Can Help With</p></Reveal>
        <Reveal as="h2" delay={0.05} className="text-pretty text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          Three connected ways to build a stronger content and growth system.
        </Reveal>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((service) => (
          <motion.article
            key={service.number}
            variants={staggerItem}
            whileHover={{ y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
            className="flex h-full flex-col rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-neutral-900 sm:p-5"
          >
            <div className="flex min-h-[64px] items-start justify-between gap-3 rounded-2xl bg-neutral-50 px-4 py-3 dark:bg-neutral-800/80">
              <div>
                <span className="text-xs font-medium text-muted-foreground">{service.number}</span>
                <h3 className="mt-1 text-base font-semibold leading-snug tracking-tight text-foreground">{service.title}</h3>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-200">
                {service.icon}
              </span>
            </div>

            <p className="mt-4 min-h-[4.5rem] px-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

            <div className="mt-4 grid grid-cols-3 gap-2" aria-label={`${service.title} focus areas`}>
              {service.deliverables.slice(0, 3).map((item, index) => (
                <div key={item} className={`flex min-h-[104px] items-end rounded-2xl p-3 ${pastelSurfaces[index]}`}>
                  <span className="text-xs font-medium leading-snug text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {service.deliverables.slice(3).map((item) => (
                <span key={item} className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">{item}</span>
              ))}
            </div>

          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
