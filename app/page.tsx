import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Internship } from "@/components/internship"
import { FeaturedWorks } from "@/components/featured-works"
import { HighlightRow } from "@/components/highlight-row"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
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
      <HighlightRow />
      <Services />
      <HowItWorks />
      <Faq />
      <FooterCta />
    </main>
  )
}
