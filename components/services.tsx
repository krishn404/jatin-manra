"use client"

import { motion } from "motion/react"
import { Clapperboard, CalendarRange, PenLine, BarChart3, Check } from "lucide-react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

type Service = {
  number: string
  title: string
  icon: React.ReactNode
  iconBg: string
  description: string
  how: string[]
  featured?: boolean
}

const services: Service[] = [
  {
    number: "01",
    title: "Content Creation & Video Editing",
    icon: <Clapperboard className="h-5 w-5 text-amber-600" />,
    iconBg: "bg-amber-100 dark:bg-amber-500/20",
    description:
      "I create clean, engaging, and platform-ready content for social media. This includes reels, short-form videos, posters, and visual stories that grab attention quickly. My focus is on strong hooks, smooth pacing, and formats that drive reach and engagement.",
    how: [
      "I research formats and trends before creating anything.",
      "I focus on strong hooks, fast pacing, and clean visuals.",
      "I keep videos short, platform-ready, and attention-grabbing.",
      "I revise until the final output feels polished and purposeful.",
    ],
  },
  {
    number: "02",
    title: "Social Media Management & Strategy",
    icon: <CalendarRange className="h-5 w-5 text-white" />,
    iconBg: "bg-white/20",
    description:
      "I plan and organize content in a structured way to build consistency and growth. This includes creating content calendars, maintaining visual identity, studying trends, and aligning content with goals like reach, awareness, and audience interaction. I aim to make pages look cohesive, active, and relevant.",
    how: [
      "I plan content in advance using simple weekly calendars.",
      "I maintain visual consistency and tone across posts.",
      "I study what performs well and adapt content accordingly.",
    ],
    featured: true,
  },
  {
    number: "03",
    title: "Copywriting & Creative Direction",
    icon: <PenLine className="h-5 w-5 text-emerald-600" />,
    iconBg: "bg-emerald-100 dark:bg-emerald-500/20",
    description:
      "I write hooks, captions, short-form copy, and scripts that improve retention and deliver a clear message. I also help shape ideas, themes, and storytelling angles to match the tone of the brand. My approach is simple: creative visuals supported by sharp communication.",
    how: [
      "I write hooks and captions that fit the platform and audience.",
      "I shape ideas into clear, simple, and engaging messages.",
      "I prioritize storytelling over random posting.",
    ],
  },
  {
    number: "04",
    title: "Marketing Fundamentals (Beginner-Level)",
    icon: <BarChart3 className="h-5 w-5 text-sky-600" />,
    iconBg: "bg-sky-100 dark:bg-sky-500/20",
    description:
      "I have a beginner-level understanding of analytics and ads through certifications. I can read basic insights, understand how content performance connects to reach and engagement, and use this knowledge to refine content decisions. I combine creative work with a basic understanding of how metrics shape online growth.",
    how: [
      "I check basic insights to understand reach and engagement.",
      "I connect data with content decisions (what to post, what to avoid).",
      "I focus on learning practical analytics instead of pretending to be an ads expert.",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-14 grid gap-6 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="text-lg text-muted-foreground">Services</p>
        </Reveal>
        <Reveal as="h2" delay={0.05} className="text-pretty text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          What I offer.{" "}
          <span className="text-muted-foreground">
            Creative content backed by strategy, storytelling, and the basics of what makes it perform.
          </span>
        </Reveal>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </motion.div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const featured = service.featured
  return (
    <motion.article
      variants={staggerItem}
      whileHover={cardHover}
      className={[
        "flex flex-col rounded-3xl p-2 shadow-sm",
        featured ? "bg-accent text-accent-foreground shadow-lg" : "bg-card",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <span className={featured ? "text-sm font-medium text-accent-foreground/60" : "text-sm font-medium text-muted-foreground"}>
            {service.number}
          </span>
          <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
        </div>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${service.iconBg}`}>
          {service.icon}
        </span>
      </div>

      <div className="flex flex-1 flex-col rounded-2xl bg-transparent p-5">
        <p
          className={[
            "leading-relaxed",
            featured ? "text-accent-foreground/90" : "text-muted-foreground",
          ].join(" ")}
        >
          {service.description}
        </p>

        <div className="mt-6">
          <p className={featured ? "text-sm font-medium text-accent-foreground/70" : "text-sm font-medium text-muted-foreground"}>
            How I Work
          </p>
          <ul className="mt-3 space-y-2.5">
            {service.how.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className={[
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                    featured ? "bg-white/15" : "bg-muted",
                  ].join(" ")}
                >
                  <Check className={featured ? "h-3 w-3 text-accent-foreground" : "h-3 w-3 text-foreground/70"} />
                </span>
                <span className={featured ? "text-sm leading-relaxed text-accent-foreground/90" : "text-sm leading-relaxed text-foreground/80"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}
