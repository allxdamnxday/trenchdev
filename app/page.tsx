export default function Home() {
  return (
    <main className="bg-bone text-steel">
      {/* Hero */}
      <section className="px-6 py-24 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-concrete">
            Trench Dev
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            AI automation for SMB construction.
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-steel/80 sm:text-xl">
            I spent the past year inside a $7M glazing sub — payroll, daily
            reports, change orders, compliance. I&apos;m a developer by background,
            so when AI got good I started automating the back office instead of
            growing the team. Got the owner 20+ hours a week back. Now I do this
            for other SMB subs.
          </p>
          <div className="mt-10">
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-steel px-7 py-4 font-display text-base font-medium text-bone transition hover:bg-steel/90"
            >
              Book a 30-min audit consult
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-concrete/40" />

      {/* The Audit */}
      <section className="px-6 py-24 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-concrete">
            The Audit
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            $3,500. One week. You get a roadmap and a quick win.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-steel/80">
            Before you spend real money on an automation build, you need to know
            exactly where your hours go and which workflows are worth touching
            first. That&apos;s what the audit is.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "3–5 workflows audited",
                body: "Payroll, daily reports, change orders, intake, AP — whichever ones are bleeding. Real walkthroughs with your team, not surveys.",
              },
              {
                title: "ROI-ranked roadmap",
                body: "Each workflow gets hours-saved estimate, build difficulty, and risk. You see the order of attack before signing anything bigger.",
              },
              {
                title: "1 quick win shipped",
                body: "By end of week one, at least one workflow is already saving hours. Proves the pattern before you commit further.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="border border-concrete/40 bg-bone p-6"
              >
                <p className="font-display text-lg font-semibold">{c.title}</p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-steel/80">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-concrete/40" />

      {/* About */}
      <section id="book" className="px-6 py-24 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-concrete">
            About
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Braden Freeman
          </h2>

          <div className="mt-12 grid gap-12 sm:grid-cols-[180px_1fr] sm:items-start">
            <div
              className="aspect-square w-full bg-concrete/30"
              aria-label="Photo placeholder"
            />
            <div className="space-y-4 font-sans text-base leading-relaxed text-steel/85 sm:text-lg">
              <p>
                I&apos;ve been the ops person, not a vendor with a deck. I know
                what dies on Friday afternoon when a foreman forgets a timesheet,
                and I know what it costs you when the GC kicks back a daily report
                three weeks running.
              </p>
              <p>
                Technical depth predates the construction year —
                React/Next.js/Supabase/Python, AI tooling fluent. Built the
                automation stack inside a real $7M sub. Not learning on your dime.
                I work alone, fast. Small client, small contract — get a quick
                win, decide if you want more.
              </p>
              <p className="pt-4">
                <a
                  href="mailto:braden@trenchdev.com"
                  className="border-b-2 border-sodium pb-1 font-medium hover:text-sodium"
                >
                  braden@trenchdev.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-concrete/40 px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 font-sans text-sm text-concrete sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Trench Dev</p>
          <div className="flex gap-6">
            <a
              href="mailto:braden@trenchdev.com"
              className="transition hover:text-steel"
            >
              braden@trenchdev.com
            </a>
            <a
              href="#"
              className="transition hover:text-steel"
              aria-label="LinkedIn (update once Braden's handle is locked)"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
