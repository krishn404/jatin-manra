"use client"

import { motion } from "motion/react"
import { Palette, LineChart, MessagesSquare, Wrench } from "lucide-react"
import { Reveal, staggerContainer, staggerItem } from "@/components/reveal"

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
    skills: [
      "Scriptwriting",
      "Content Production",
      "Talking Head & UGC Videos",
      "Creative Direction",
      "Content Research",
    ],
  },
  {
    title: "Marketing & Analytical Skills",
    icon: <LineChart className="h-5 w-5 text-emerald-600" />,
    iconBg: "bg-emerald-100 dark:bg-emerald-500/20",
    skills: [
      "Meta Ads Management",
      "A/B Testing & Lead Gen",
      "CPL Tracking",
      "Lead-sheet Reconciliation",
      "Reporting & Optimization",
    ],
  },
  {
    title: "Communication & Operations",
    icon: <MessagesSquare className="h-5 w-5 text-sky-600" />,
    iconBg: "bg-sky-100 dark:bg-sky-500/20",
    skills: [
      "Creative Operations",
      "Team Leadership",
      "Production Coordination",
      "Deadline Management",
      "Brief Interpretation",
    ],
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
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.24, ease: "easeOut" } }}
            className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:bg-muted/40 sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${group.iconBg}`}>
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
              </div>
              <span className="text-xs font-medium text-muted-foreground">0{index + 1}</span>
            </div>
            <div className="my-5 h-px bg-border/80 transition-colors duration-300 group-hover:bg-border" />
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/70 bg-muted/50 px-3.5 py-2 text-sm text-foreground/80 transition-colors duration-300 group-hover:bg-background"
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
