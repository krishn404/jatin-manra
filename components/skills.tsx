"use client"

import { motion } from "motion/react"
import { Palette, LineChart, MessagesSquare, Wrench } from "lucide-react"
import { Reveal, cardHover, staggerContainer, staggerItem } from "@/components/reveal"

type SkillGroup = {
  title: string
  icon: React.ReactNode
  iconBg: string
  skills: string[]
}

const groups: SkillGroup[] = [
  {
    title: "Creative Skills",
    icon: <Palette className="h-5 w-5 text-amber-600" />,
    iconBg: "bg-amber-100 dark:bg-amber-500/20",
    skills: ["Basic Designing", "Branding Basics", "Creative Direction Support", "Trend Research"],
  },
  {
    title: "Marketing & Analytical Skills",
    icon: <LineChart className="h-5 w-5 text-emerald-600" />,
    iconBg: "bg-emerald-100 dark:bg-emerald-500/20",
    skills: [
      "Google Analytics (GA4 Basics)",
      "Meta Ads (Beginner)",
      "Google Ads (Beginner)",
      "SEO Basics",
      "Campaign Documentation",
      "Analytics Reporting (mock)",
    ],
  },
  {
    title: "Communication & Operations",
    icon: <MessagesSquare className="h-5 w-5 text-sky-600" />,
    iconBg: "bg-sky-100 dark:bg-sky-500/20",
    skills: ["Communication Basics", "Team Collaboration", "Brief Interpretation", "Time Management"],
  },
  {
    title: "Tools & Workspace",
    icon: <Wrench className="h-5 w-5 text-violet-600" />,
    iconBg: "bg-violet-100 dark:bg-violet-500/20",
    skills: [
      "Canva",
      "CapCut / VN",
      "Notion",
      "Google Workspace",
      "Instagram Insights",
      "Content Planning Sheets",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="text-lg text-muted-foreground">Other Skills</p>
      </Reveal>
      <Reveal as="h2" delay={0.05} className="mt-4 max-w-2xl text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        A blend of creative craft and practical marketing know-how.
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-6 sm:grid-cols-2"
      >
        {groups.map((group) => (
          <motion.article
            key={group.title}
            variants={staggerItem}
            whileHover={cardHover}
            className="rounded-3xl bg-card p-7 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${group.iconBg}`}>
                {group.icon}
              </span>
              <h3 className="text-lg font-semibold">{group.title}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
