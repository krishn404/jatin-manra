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
              with audiences. I care about both creativity and performance   making content that looks good
              and actually works. With experience in planning content, leading a small creative team,
              analyzing trends, and improving engagement, I&apos;ve built a strong foundation in both
              creativity and marketing basics. My goal is simple: create clean, impactful, and
              scroll-stopping content that supports a brand&apos;s growth.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
