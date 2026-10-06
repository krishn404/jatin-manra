"use client"

import { useEffect, useId, useRef } from "react"
import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import type { CaseStudy } from "@/components/case-studies-data"

type CaseStudyModalProps = {
  study: CaseStudy | null
  onClose: () => void
  returnFocusTo: HTMLElement | null
}

export function CaseStudyModal({ study, onClose, returnFocusTo }: CaseStudyModalProps) {
  const dialogRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!study) return

    const oldOverflow = document.body.style.overflow
    const oldPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = "hidden"
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== "Tab" || !dialogRef.current) return
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = oldOverflow
      document.body.style.paddingRight = oldPaddingRight
      returnFocusTo?.focus()
    }
  }, [study, onClose, returnFocusTo])

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          key="case-study-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
        >
          <motion.section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.985, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] border border-border bg-background text-foreground shadow-2xl"
          >
            <header className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-border bg-background/95 px-5 py-5 backdrop-blur sm:px-8 sm:py-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">{study.category}</p>
                <h2 id={titleId} className="mt-2 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{study.title}</h2>
              </div>
              <button ref={closeRef} type="button" onClick={onClose} aria-label="Close case study" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </header>

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{study.summary}</p>

              <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-6 rounded-2xl bg-muted/70 p-5 sm:grid-cols-4 sm:p-6">
                {study.metrics.map((metric) => <div key={metric.label}><p className="text-xl font-semibold tracking-tight sm:text-2xl">{metric.value}</p><p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{metric.label}</p></div>)}
              </div>

              <div className="mt-8 grid gap-7 sm:grid-cols-2">
                <section>
                  <h3 className="text-sm font-medium text-muted-foreground">Challenge</h3>
                  <p className="mt-2 leading-relaxed">{study.challenge}</p>
                </section>
                <section>
                  <h3 className="text-sm font-medium text-muted-foreground">What I owned</h3>
                  <ul className="mt-2 space-y-2">{study.owned.map((item) => <li key={item} className="leading-relaxed text-foreground/90">{item}</li>)}</ul>
                </section>
                <section>
                  <h3 className="text-sm font-medium text-muted-foreground">Outcome</h3>
                  <p className="mt-2 leading-relaxed">{study.outcome}</p>
                </section>
                <section>
                  <h3 className="text-sm font-medium text-muted-foreground">What this proves</h3>
                  <p className="mt-2 leading-relaxed">{study.proves}</p>
                </section>
              </div>

              <div className="mt-8 border-t border-border pt-5">
                <p className="text-sm text-muted-foreground">{study.meta}</p>
                <div className="mt-4 flex flex-wrap gap-2">{study.tags.map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">{tag}</span>)}</div>
                <a href={study.href} target={study.href.startsWith("http") ? "_blank" : undefined} rel={study.href.startsWith("http") ? "noreferrer" : undefined} onClick={() => { if (!study.href.startsWith("http")) onClose() }} className="mt-6 inline-flex text-sm font-medium underline underline-offset-4">
                  {study.cta} →
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
