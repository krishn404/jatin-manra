"use client"

import { motion } from "motion/react"
import { Reveal, RevealText, staggerContainer, staggerItem } from "@/components/reveal"

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#top" },
      { label: "Works", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/clipsbymanra" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/manrajatin" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Newsletter", href: "#contact" },
      { label: "Press Kit", href: "#contact" },
      { label: "Rates", href: "#contact" },
      { label: "Book a Call", href: "mailto:hello@jordanrivera.co" },
    ],
  },
]

export function FooterCta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-10">
      <div className="grain relative overflow-hidden rounded-[2rem] px-6 py-20 text-white md:px-16 md:py-28">
        <div className="flex flex-col items-center text-center">
          <RevealText
            as="h2"
            className="text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Book a call, and I'll take care of the rest
          </RevealText>
          <Reveal delay={0.12}>
            <motion.a
              href="mailto:hello@jordanrivera.co"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black"
            >
              Book a Call
            </motion.a>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 grid gap-10 sm:grid-cols-3 md:mt-28 md:max-w-2xl"
        >
          {columns.map((col) => (
            <motion.div key={col.title} variants={staggerItem}>
              <p className="text-sm text-white/40">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/90 transition-colors hover:text-white"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Jatin Manra. All rights reserved.</p>
          <p>Social Media &amp; Content Creator</p>
        </Reveal>
      </div>
    </section>
  )
}
