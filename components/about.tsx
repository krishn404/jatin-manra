import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <Reveal><p className="text-lg text-muted-foreground">About</p></Reveal>
        <div>
          <Reveal as="h2" className="text-pretty text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Creative thinking. Performance awareness. Operational ownership.
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              I work across the full content and marketing process — from research, hooks, scripts, and production to Meta Ads, reporting, optimization, and team coordination.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Across agency, institutional, and commercial projects, I have written 100+ scripts, appeared in 50+ videos, worked with 35+ brands, generated 1,100+ leads, and led a 5–6 person content team.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              I do not believe in posting content without purpose. Every idea should earn attention, build trust, generate demand, or teach us what to improve next.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
