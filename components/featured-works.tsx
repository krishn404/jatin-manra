"use client"

import { motion } from "motion/react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

type CaseStudy = {
  kicker: string
  title: string
  summary: string
  tags: string[]
  stats: { value: string; label: string }[]
  did: string
  results: string[]
  brands: string[]
  quote: string
}

const caseStudies: CaseStudy[] = [
  {
    kicker: "Case study 01 · Content production",
    title: "25+ videos. 10+ brands.",
    summary:
      "Talking head, UGC, on-camera talent, and DOP. Scripted, directed, and delivered the same day across brands.",
    tags: ["Talking Head", "UGC", "On-Camera Talent", "DOP"],
    stats: [
      { value: "25+", label: "Videos produced" },
      { value: "10+", label: "Brands" },
      { value: "1.8M+", label: "Views on top reel" },
      { value: "2", label: "Cities" },
    ],
    did: "Took on a dual role as on-camera talent and DOP. Scripted the content, directed the shots, and delivered same-day across brands. Most intensive: a full production day in Gurgaon on 1 hour of sleep with 10+ videos delivered.",
    results: [
      "1.8M+ views on a single reel, written, directed, and performed",
      "200+ followers gained from one organic piece",
      "10+ videos in a single out-of-station production day",
      "UGC + talking head formats across 10+ brands",
    ],
    brands: ["Skywize", "Scoopwonder", "Garg Autos", "Hashtag", "DigiKard", "Kali Coffee", "AMPM", "Cremyo"],
    quote:
      "I don't just show up on camera. I script it, direct it, and deliver it. Same day, under pressure, across any brand.",
  },
  {
    kicker: "Case study 02 · Meta Ads management",
    title: "1,014+ leads. ₹40,374 managed.",
    summary:
      "Lead gen, A/B testing, pipeline tracking, and daily ops across 10+ live campaigns.",
    tags: ["Lead Gen", "A/B Testing", "Pipeline Tracking", "Daily Ops"],
    stats: [
      { value: "1,014+", label: "Total leads" },
      { value: "10+", label: "Campaigns" },
      { value: "~₹40", label: "Blended CPL" },
      { value: "71%", label: "CPL reduction" },
    ],
    did: "Managed 10+ live campaigns across 5 industries at once. Updated lead sheets daily, ran A/B tests on creatives, and optimized continuously. Daily ops for 8-12 brands by month 2.",
    results: [
      "₹25.53 CPL, best performer on a used-automobile campaign",
      "372 leads for Garg Autos across 3 campaigns",
      "71% CPL drop for Elevate, ₹97 → ₹28 via A/B test",
      "387 leads for Elevate in total",
    ],
    brands: ["Garg Autos", "Elevate", "Raj Assured", "Skywize", "JK Bhasin", "Hashtag", "Vinfast", "Winsolar"],
    quote: "I don't just run ads. I track, optimize, and deliver results.",
  },
]

export function FeaturedWorks() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12">
        <Reveal as="h2" className="text-3xl font-semibold tracking-tight md:text-5xl">
          Case studies
        </Reveal>
        <Reveal delay={0.08} as="p" className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
          Two sides of the same role: content I made in front of and behind the camera, and
          ads I ran, tracked, and optimized.
        </Reveal>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-8"
      >
        {caseStudies.map((study) => (
          <motion.article
            key={study.title}
            variants={staggerItem}
            whileHover={cardHover}
            className="rounded-[2rem] bg-card p-6 shadow-sm md:p-10"
          >
            <p className="text-sm font-medium text-muted-foreground">{study.kicker}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">{study.title}</h3>
            <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              {study.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {study.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-muted px-4 py-4">
                  <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">What I did</p>
                <p className="mt-3 leading-relaxed">{study.did}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Results</p>
                <ul className="mt-3 space-y-2">
                  {study.results.map((item) => (
                    <li key={item} className="leading-relaxed text-foreground/90">
                      → {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-muted-foreground">Brands</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {study.brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-border px-3 py-1.5 text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-pretty text-lg font-medium leading-snug">
              “{study.quote}”
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
