import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <Reveal>
          <p className="text-lg text-muted-foreground">About</p>
        </Reveal>
        <div>
          <Reveal as="h2" className="text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Hi, I&apos;m Jatin Manra
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m a creative-focused Social Media &amp; Content Creator who enjoys turning ideas into
              engaging visual content. I specialize in reels, posters, and storytelling that connects well
              with audiences. I care about both creativity and performance, making content that looks good
              and actually works.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              At Hashtag Agency (Feb to Apr 2026) I worked full-time across content, ads, production,
              and strategy for 30+ brands. I owned outcomes, from 12 scripts for a real
              estate client to a 1.8M+ views reel as on-camera talent, with 25+ videos, 25+
              scripts, and 10+ campaigns. My goal is simple: create clean, impactful, scroll-stopping
              content that supports a brand&apos;s growth.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
