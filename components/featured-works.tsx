"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

type Project = {
  title: string
  image: string
  alt: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Brand Name",
    image: "/skincare-brand-campaign-flatlay-warm-tones.jpg",
    alt: "Content campaign placeholder",
    tags: ["Brand Campaign", "Reels"],
  },
  {
    title: "Brand Name",
    image: "/premium-headphones-product-launch-moody-studio.jpg",
    alt: "Product launch placeholder",
    tags: ["Product Launch", "Short-Form"],
  },
  {
    title: "Brand Name",
    image: "/live-music-event-crowd-golden-hour.jpg",
    alt: "Event coverage placeholder",
    tags: ["Event Coverage"],
  },
  {
    title: "Brand Name",
    image: "/coffee-brand-lifestyle-content-cafe-morning.jpg",
    alt: "Lifestyle content placeholder",
    tags: ["Lifestyle", "UGC"],
  },
]

export function FeaturedWorks() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <Reveal as="h2" className="text-3xl font-semibold tracking-tight md:text-5xl">
          Featured works
        </Reveal>
        <Reveal delay={0.1}>
          <motion.a
            href="#work"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-medium"
          >
            All Works
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </Reveal>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project, i) => (
          <motion.article
            key={i}
            variants={staggerItem}
            whileHover={cardHover}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-sm"
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/40 px-3 py-1.5 text-sm text-white backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
