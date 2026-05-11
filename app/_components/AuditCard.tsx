type AuditCardProps = {
  index: string;
  title: string;
  body: string;
};

/**
 * Single audit deliverable card. Hairline border, numbered prefix in tabular figures,
 * deliberate vertical rhythm. The whole card is a `data-reveal` target for the
 * scroll-triggered stagger in the parent section.
 *
 * Mobile audit round 3:
 *   - finding #4: hover lift (border, hairline) gated to (hover: hover). On
 *     touch, resting border thickens to concrete/45 so the card reads as a
 *     discrete unit without needing the hover state. See the .audit-card
 *     classes in globals.css.
 *   - finding #5: body bumps to text-base on mobile (avoids iOS zoom-on-focus
 *     and gives a saner measure), scales back to 15.2px (text-[0.95rem]) at
 *     sm and above where horizontal real estate isn't the bottleneck.
 */
export function AuditCard({ index, title, body }: AuditCardProps) {
  return (
    <article
      data-reveal
      className="audit-card group relative flex h-full flex-col gap-5 border bg-bone/60 p-7 transition-colors duration-200 ease-out sm:p-8"
    >
      <header className="flex items-baseline gap-4">
        <span
          aria-hidden
          className="font-display text-xs font-medium tabular-nums tracking-[0.22em] text-steel/65"
        >
          {index}
        </span>
        <span
          aria-hidden
          className="audit-card-rule h-px flex-1 translate-y-[-2px] transition-colors duration-200"
        />
      </header>

      <h3 className="font-display text-xl font-semibold leading-tight text-steel sm:text-2xl">
        {title}
      </h3>

      <p className="font-sans text-base leading-relaxed text-steel/80 sm:text-[0.95rem]">
        {body}
      </p>
    </article>
  );
}
