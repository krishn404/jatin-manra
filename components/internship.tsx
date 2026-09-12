"use client"

import { motion } from "motion/react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

const glanceStats = [
  { value: "30+", label: "Brands touched" },
  { value: "15+", label: "Industries" },
  { value: "1.1k+", label: "Total leads" },
  { value: "100+", label: "Scripts written" },
  { value: "50+", label: "On-camera videos" },
]

const adRows = [
  {
    campaign: "Ad 1",
    industry: "Automobile",
    leads: "197",
    reach: "92,356",
    cpl: "₹26.52",
    spend: "₹5,224",
    highlight: true,
  },
  {
    campaign: "Ad 2",
    industry: "Automobile",
    leads: "98",
    reach: "71,322",
    cpl: "₹53.12",
    spend: "₹5,205",
  },
  {
    campaign: "Ad 3",
    industry: "Automobile",
    leads: "77",
    reach: "64,837",
    cpl: "₹66.51",
    spend: "₹5,121",
  },
  {
    campaign: "A/B Test A",
    industry: "Fitness",
    leads: "190",
    reach: "1,33,948",
    cpl: "₹28.48",
    spend: "₹5,411",
    highlight: true,
  },
  {
    campaign: "A/B Test B",
    industry: "Fitness",
    leads: "161",
    reach: "1,29,855",
    cpl: "₹33.70",
    spend: "₹5,425",
  },
  {
    campaign: "Lead gen",
    industry: "Used Automobile",
    leads: "83",
    reach: "18,795",
    cpl: "₹25.53",
    spend: "₹2,121",
    highlight: true,
  },
  {
    campaign: "Lead gen",
    industry: "Education",
    leads: "69",
    reach: "22,588",
    cpl: "₹49.00",
    spend: "₹3,394",
  },
  {
    campaign: "Lead gen",
    industry: "Marketing",
    leads: "49",
    reach: "28,984",
    cpl: "₹39.00",
    spend: "₹1,959",
  },
  {
    campaign: "Lead gen",
    industry: "Real Estate",
    leads: "54",
    reach: "10,831",
    cpl: "₹55.00",
    spend: "₹2,998",
  },
]

const brandFields = [
  "Automobile",
  "Used Automobile",
  "Real Estate",
  "Food",
  "Beverage",
  "Coffee",
  "Fitness",
  "Education",
  "EdTech",
  "Marketing",
  "Solar & Energy",
  "Furniture",
  "Finance",
  "Mortgage",
  "Aviation",
  "Hospitality",
  "Fashion & Beauty",
  "Healthcare",
  "Electronics",
  "SaaS",
  "Travel",
  "QSR",
]

export function Internship() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="text-lg text-muted-foreground">Hashtag Agency · Panchkula</p>
        </Reveal>
        <div>
          <Reveal as="h2" className="text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            At a glance
          </Reveal>
          <Reveal delay={0.08} as="p" className="mt-3 text-sm text-muted-foreground">
            Full-time · Feb 19 to Apr 30, 2026 · Content · Ads · Production · Strategy
          </Reveal>
          <Reveal delay={0.12} as="p" className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            2 months. 30+ brands. I didn&apos;t just execute tasks, I owned outcomes. From writing
            12 scripts for a single real estate client to producing a 1.8M+ views reel and
            on-camera talent. Every deliverable was built on raw creative output with minimal AI
            involvement.
          </Reveal>
          <Reveal delay={0.16} as="p" className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            I didn&apos;t join to fill a seat. I came to prove what I&apos;m worth.
          </Reveal>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {glanceStats.map((stat) => (
          <motion.article
            key={stat.label}
            variants={staggerItem}
            whileHover={cardHover}
            className="rounded-3xl bg-card p-5 shadow-sm"
          >
            <p className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-3xl bg-card p-7 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">Hard skills proven</p>
            <p className="mt-3 text-pretty text-lg font-medium leading-snug">
              Meta Ads Management · Scriptwriting · Content Production · Talking Head &amp; UGC
              Videos
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-3xl bg-card p-7 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">Soft skills demonstrated</p>
            <p className="mt-3 text-pretty text-lg font-medium leading-snug">
              Performance under pressure · Creative problem solving · Speed without compromising
              quality · Adaptability across 13 industries · Ownership mentality · Team support
              across 4 seniors
            </p>
          </article>
        </Reveal>
      </div>


      
     
      <Reveal as="h2" className="mt-16 text-2xl font-semibold tracking-tight md:text-3xl">
        Meta Ads campaign results
      </Reveal>
      <Reveal delay={0.05} as="p" className="mt-2 max-w-3xl text-muted-foreground">
        Live campaigns run in-house on a roughly monthly timeline. Focus was lead
        generation efficiency. Next up is deeper lead qualification and conversion tracking.
      </Reveal>

      <div className="mt-6 overflow-x-auto rounded-3xl bg-card shadow-sm">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 font-medium text-muted-foreground">Campaign</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">Industry</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">Leads</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">Reach</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">CPL</th>
              <th className="px-6 py-4 font-medium text-muted-foreground">Spend</th>
            </tr>
          </thead>
          <tbody>
            {adRows.map((row, i) => (
              <tr key={`${row.industry}-${row.campaign}-${i}`} className="border-b border-border last:border-0">
                <td className="px-6 py-3.5 font-medium">{row.campaign}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{row.industry}</td>
                <td className="px-6 py-3.5">{row.leads}</td>
                <td className="px-6 py-3.5">{row.reach}</td>
                <td className="px-6 py-3.5">
                  {row.cpl}
                  {row.highlight ? (
                    <span className="ml-2 text-xs text-emerald-600 dark:text-emerald-400">best</span>
                  ) : null}
                </td>
                <td className="px-6 py-3.5">{row.spend}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-muted/60">
              <td className="px-6 py-4 font-semibold" colSpan={2}>
                Total
              </td>
              <td className="px-6 py-4 font-semibold">1,014+</td>
              <td className="px-6 py-4 font-semibold">5.88L</td>
              <td className="px-6 py-4 font-semibold">~₹40</td>
              <td className="px-6 py-4 font-semibold">₹40,374+</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <Reveal as="h2" className="mt-16 text-2xl font-semibold tracking-tight md:text-3xl">
        Brand fields
      </Reveal>
      <Reveal delay={0.05} className="mt-6 flex flex-wrap gap-2">
        {brandFields.map((field) => (
          <span
            key={field}
            className="rounded-full bg-card px-3 py-1.5 text-sm text-foreground/80 shadow-sm"
          >
            {field}
          </span>
        ))}
      </Reveal>
    </section>
  )
}
