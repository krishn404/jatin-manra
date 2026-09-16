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
I have worked across content, ads, production, and strategy for projects in automotive, real estate,
              fitness, aviation, consumer electronics, and F&B. I wrote 100+ scripts, appeared in 50+
              videos, and ran campaigns that generated 1,100+ leads. My goal is simple: make clean,
              useful creative that earns attention and supports growth.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
