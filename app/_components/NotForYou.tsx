import { SectionLabel } from "./SectionLabel";

/**
 * "Who this isn't for" — the qualifier. Sits between Audit and FAQ so the
 * offer is clear before unfit prospects bail, and the objection-handler (FAQ)
 * fires for the remaining well-matched readers. Saves both Braden and the
 * prospect a wasted call.
 *
 * Copy is verbatim from `20_Runway/positioning.md` "Whom NOT to chase" — do
 * not rewrite. The three items are the three things Braden has already
 * decided not to sell into; making that visible up front is the trench-buddy
 * move (no chase, no theater).
 *
 * Visual rhythm intentionally quieter than Audit/FAQ: numbered list at body
 * size, hairline divider above, concrete-tinted body via text-steel/65.
 * Round 2 spec reserves concrete itself for hairlines; the list text uses
 * steel/65 to read as deliberately backgrounded without breaking the rule.
 *
 * Server component — no JS, no client boundary.
 */
const NOT_FOR_YOU = [
  {
    index: "01",
    title: "GCs over $50M revenue",
    body: "different sale cycle, IT department, procurement",
  },
  {
    index: "02",
    title: "Construction tech vendors (Procore, Buildertrend)",
    body: "they have their own AI roadmaps",
  },
  {
    index: "03",
    title: "Pure design firms with no field ops",
    body: "no recurring data drudgery to automate",
  },
] as const;

export function NotForYou() {
  return (
    <section
      id="not-for-you"
      className="scroll-mt-12 px-6 py-24 sm:py-32 lg:px-12 lg:py-40"
      aria-labelledby="not-for-you-headline"
    >
      <div className="mx-auto max-w-3xl">
        <SectionLabel index="02">Not for everyone</SectionLabel>

        <h2
          id="not-for-you-headline"
          className="mt-6 font-display font-bold leading-[1.05] tracking-tight text-steel"
          style={{
            fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
            letterSpacing: "-0.015em",
          }}
        >
          Who this isn&rsquo;t for.
        </h2>

        <p
          className="mt-7 font-sans text-steel/85"
          style={{
            fontSize: "clamp(1.0625rem, 0.5vw + 1rem, 1.1875rem)",
            lineHeight: 1.6,
            maxWidth: "60ch",
          }}
        >
          Three groups I won&rsquo;t chase. If you&rsquo;re any of these,
          we&rsquo;ll both save a call.
        </p>

        {/* Numbered list — quieter than the Audit deliverable cards by design.
            Hairline top divider, then each row gets its own thin separator.
            Concrete reserved for the hairlines themselves; body uses steel/65. */}
        <ul className="mt-12 border-t border-concrete/35 sm:mt-14">
          {NOT_FOR_YOU.map(({ index, title, body }) => (
            <li
              key={index}
              className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-concrete/25 py-6 sm:gap-x-8 sm:py-7"
            >
              <span
                aria-hidden
                className="font-display text-xs font-medium tabular-nums tracking-[0.22em] text-steel/55 sm:pt-1"
              >
                {index}
              </span>
              <h3 className="font-display text-lg font-semibold leading-tight text-steel sm:text-xl">
                {title}
              </h3>
              <span aria-hidden className="col-start-2" />
              <p className="col-start-2 font-sans text-base leading-relaxed text-steel/65 sm:text-[0.975rem]">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
