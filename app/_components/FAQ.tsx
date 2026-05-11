import { SectionLabel } from "./SectionLabel";

/**
 * FAQ — native <details>/<summary> disclosure, server-rendered, zero JS.
 *
 * Q&A copy is verbatim from positioning.md "Common objections + answers"
 * (do NOT rewrite — see fix brief). The conversion audit (#3) flagged this
 * as the #1 silent-bounce neutralizer for $2-5M subs, which is the bulk of
 * the target range. Sits between AuditSection and About: objection clears
 * BEFORE the "who is this guy" answer.
 *
 * Keyboard-accessible by default (native disclosure widget). Closed by default.
 */
const FAQS = [
  {
    q: "We're too small for AI.",
    a: "That's exactly the point. Small ops teams have the most hours per person to reclaim. The audit tells us where.",
  },
  {
    q: "We tried Zapier and it broke.",
    a: "Zapier breaks when the workflow needs judgment. The new tools (Claude, GPT) handle judgment. Different category.",
  },
  {
    q: "What if the AI is wrong?",
    a: "Every output gets human sign-off in v1. Once we trust a workflow's accuracy we relax that. Same pattern as hiring a new admin.",
  },
  {
    q: "How long until we see value?",
    a: "Audit week 1 ends with a quick win already implemented. You'll see one workflow saving hours before you commit to a build.",
  },
] as const;

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-12 px-6 py-24 sm:py-32 lg:px-12 lg:py-40"
      aria-labelledby="faq-headline"
    >
      <div className="mx-auto max-w-3xl">
        <SectionLabel index="03">FAQ</SectionLabel>

        <h2
          id="faq-headline"
          className="mt-6 font-display font-bold leading-[1.05] tracking-tight text-steel"
          style={{
            fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
            letterSpacing: "-0.015em",
          }}
        >
          Common pushback.
        </h2>

        <div className="mt-12 border-t border-steel/15 sm:mt-14">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group border-b border-steel/15"
            >
              <summary
                className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 font-sans text-base font-medium text-steel transition-colors hover:text-steel/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sodium focus-visible:ring-offset-2 focus-visible:ring-offset-bone sm:text-lg [&::-webkit-details-marker]:hidden"
              >
                <span className="flex-1">{q}</span>
                <span
                  aria-hidden
                  className="text-steel/55 transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  {/* + glyph rotates to × on open */}
                  +
                </span>
              </summary>
              {/* Mobile audit round 3, finding #5: drop pr-8 below sm so the
                  4-line answer doesn't churn at 360px (was 280px measure / ~8
                  words per line). Bump base size to 16px on mobile so iOS
                  doesn't trigger zoom-on-focus and the measure feels less
                  cramped. */}
              <p className="pb-6 pr-0 font-sans text-base leading-relaxed text-steel/75 sm:pr-8 sm:text-base">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
