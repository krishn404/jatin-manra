"use client"

import styles from "@/components/animated-gallery.module.css"
import GradualBlur from "@/components/gradual-blur"

function buildLoop(images: string[]) {
  if (images.length === 0) return []
  const repeats = Math.max(1, Math.ceil(6 / images.length))
  return Array.from({ length: repeats }, () => images).flat()
}

function imageAlt(src: string, index: number) {
  const filename = decodeURIComponent(src.split("/").pop() ?? "")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim()
  return filename ? `Portfolio work: ${filename}` : `Portfolio gallery image ${index + 1}`
}

export function AnimatedGallery({ images }: { images: string[] }) {
  const loopImages = buildLoop(images)
  if (loopImages.length === 0) return null

  return (
    <div className={styles.galleryViewport}>
      <div className={styles.galleryTrack}>
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.galleryGroup} aria-hidden={copy === 1}>
            {loopImages.map((src, index) => (
              <img
                key={`${copy}-${src}-${index}`}
                src={src}
                alt={copy === 0 ? imageAlt(src, index) : ""}
                loading="lazy"
                draggable={false}
                className={styles.galleryImage}
              />
            ))}
          </div>
        ))}
      </div>
      <GradualBlur
        position="left"
        width="clamp(3rem, 10vw, 9rem)"
        strength={2}
        divCount={8}
        curve="bezier"
        exponential
        opacity={0.9}
        animated="scroll"
        duration="0.7s"
        target="parent"
        zIndex={3}
        className={styles.edgeBlur}
      />
      <GradualBlur
        position="right"
        width="clamp(3rem, 10vw, 9rem)"
        strength={2}
        divCount={8}
        curve="bezier"
        exponential
        opacity={0.9}
        animated="scroll"
        duration="0.7s"
        target="parent"
        zIndex={3}
        className={styles.edgeBlur}
      />
    </div>
  )
}
