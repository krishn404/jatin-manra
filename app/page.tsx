import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Internship } from "@/components/internship"
import { FeaturedWorks } from "@/components/featured-works"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Faq } from "@/components/faq"
import { FooterCta } from "@/components/footer-cta"

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <About />
      <Internship />
      <Skills />
      <FeaturedWorks />
      <Services />
      <Gallery />
      <Faq />
      <FooterCta />
    </main>
  )
}
