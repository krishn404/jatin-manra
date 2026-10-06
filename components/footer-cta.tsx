"use client"

import { motion } from "motion/react"
import { Reveal, RevealText, staggerContainer, staggerItem } from "@/components/reveal"
import { contact } from "@/lib/contact"

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
      { label: contact.email, href: contact.emailHref },
      { label: contact.phone, href: contact.phoneHref },
      { label: "Instagram", href: contact.instagram },
      { label: "LinkedIn", href: contact.linkedin },
    ],
  },
  {
    title: "Start a conversation",
    links: [
      { label: "Book a Strategy Call", href: contact.whatsapp },
      { label: "Send an Enquiry", href: contact.emailHref },
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
            Tell me what you are trying to grow.
          </RevealText>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-white/65">
              Whether you need a content system, better short-form creative, or more disciplined Meta Ads execution, share your current goal and I will help identify the next practical step.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <motion.a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black"
            >
              Book a Strategy Call
            </motion.a>
          </Reveal>
          <a href={contact.emailHref} className="mt-4 text-sm text-white/80 underline underline-offset-4">Send an Enquiry</a>
          <p className="mt-4 text-sm text-white/45">I usually respond within 1–2 business days.</p>
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
          <p>Social Media Strategist &amp; Meta Ads Specialist</p>
        </Reveal>
      </div>
    </section>
  )
}
