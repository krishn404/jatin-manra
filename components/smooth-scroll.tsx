"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useRef } from "react"
import type { LenisRef } from "lenis/react"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute("href")
      if (!id || id === "#") return
      const el = document.querySelector(id)
      const lenis = lenisRef.current?.lenis
      if (el && lenis) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: -16 })
      }
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
