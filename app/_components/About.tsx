import { SectionLabel } from "./SectionLabel";

/**
 * About section. Headshot placeholder treated as an intentional drafting-block —
 * hairline frame, Concrete fill, never just a flat gray rectangle.
 */
export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-12 px-6 py-24 sm:py-32 lg:px-12 lg:py-40"
      aria-labelledby="about-headline"
    >
      {/* Anchor target for the hero CTA (placeholder until Cal.com URL lands). */}
      <span id="book" className="sr-only" aria-hidden />
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04">About</SectionLabel>

        <h2
          id="about-headline"
          className="mt-6 font-display font-bold leading-[1.05] tracking-tight text-steel"
          style={{
            fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
            letterSpacing: "-0.015em",
          }}
        >
          Braden Freeman.
        </h2>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-[220px_1fr] sm:items-start sm:gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* TODO: headshot — replace with real image when ready.
              Treated as a hairline-framed drafting-block: feels intentional, not unfinished. */}
          <figure
            className="relative aspect-[4/5] w-full overflow-hidden border border-concrete/40"
            aria-label="Photo placeholder for Braden Freeman"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-concrete/25 to-concrete/40" />
            {/* Corner brackets — drafting-block detail. Replace with photo and these disappear. */}
            <span aria-hidden className="absolute left-2 top-2 h-3 w-3 border-l border-t border-steel/30" />
            <span aria-hidden className="absolute right-2 top-2 h-3 w-3 border-r border-t border-steel/30" />
            <span aria-hidden className="absolute left-2 bottom-2 h-3 w-3 border-l border-b border-steel/30" />
            <span aria-hidden className="absolute right-2 bottom-2 h-3 w-3 border-r border-b border-steel/30" />
            <figcaption className="absolute bottom-3 left-0 right-0 text-center font-sans text-[0.65rem] uppercase tracking-[0.18em] text-steel/65">
              Braden Freeman
            </figcaption>
          </figure>

          <div className="space-y-5 font-sans text-steel/85" style={{ fontSize: "clamp(1.0625rem, 0.4vw + 1rem, 1.1875rem)", lineHeight: 1.6, maxWidth: "62ch" }}>
            <p>
              I&rsquo;ve been the ops person, not a vendor with a deck. I know
              what dies on Friday afternoon when a foreman forgets a timesheet,
              and I know what it costs you when the GC kicks back a daily report
              three weeks running.
            </p>
            <p>
              Technical depth predates the construction year. React, Next.js,
              Supabase, Python. AI tooling fluent. Built the automation stack
              inside a real $7M sub. Not learning on your dime.
            </p>
            <p>
              Work alone, fast. No agency overhead. Small client, small
              contract. Get a quick win, decide if you want more.
            </p>

            <p className="pt-6">
              <a
                href="mailto:braden@trenchdev.com"
                // py-2 -my-2 = ~40px tap target without disturbing rhythm.
                // Mobile audit round 3, finding #2.
                className="cta-mail group inline-flex items-baseline gap-1 py-2 -my-2 font-display text-base font-medium text-steel"
              >
                <span className="cta-mail-label relative inline-block">
                  braden@trenchdev.com
                </span>
                <span aria-hidden className="ml-1 inline-block transition-transform duration-200 ease-out group-hover:translate-x-[2px]">
                  &rarr;
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
