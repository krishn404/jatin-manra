"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "section" | "article" | "li" | "span" | "h2" | "p"
}

const easeOut = [0.16, 1, 0.3, 1] as const

export function Reveal({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: easeOut, delay }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealText({
  children,
  className,
  delay = 0,
  as = "h2",
  immediate = false,
}: {
  children: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p"
  immediate?: boolean
}) {
  const MotionTag = motion[as]
  const words = children.split(" ")

  return (
    <MotionTag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.28em] inline-block last:mr-0"
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          {...(immediate
            ? { animate: { opacity: 1, y: 0, filter: "blur(0px)" } }
            : { whileInView: { opacity: 1, y: 0, filter: "blur(0px)" } })}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: easeOut, delay: delay + i * 0.035 }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  )
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const cardHover = {
  y: -6,
  transition: { type: "spring" as const, stiffness: 320, damping: 22 },
}
