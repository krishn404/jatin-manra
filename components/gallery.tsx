import { existsSync, readdirSync } from "node:fs"
import path from "node:path"
import { AnimatedGallery } from "@/components/animated-gallery"

const galleryDirectory = path.join(process.cwd(), "public", "gallery")
const supportedImage = /\.(avif|gif|jpe?g|png|webp)$/i

function getGalleryImages() {
  if (!existsSync(galleryDirectory)) return []

  try {
    return readdirSync(galleryDirectory)
      .filter((file) => supportedImage.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/gallery/${encodeURIComponent(file)}`)
  } catch {
    return []
  }
}

export function Gallery() {
  const images = getGalleryImages()
  if (images.length === 0) return null

  return (
    <section
      className="w-full overflow-hidden bg-[#F8F8F8] py-8 sm:py-10 md:py-12"
      aria-label="Portfolio image gallery"
    >
      <AnimatedGallery images={images} />
    </section>
  )
}
