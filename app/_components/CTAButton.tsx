import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAVariant = "primary" | "ghost" | "soon";

type CTAButtonBaseProps = {
  children: ReactNode;
  /**
   * primary = filled Steel pill with sodium hover underline.
   * ghost   = inline text link with sodium-grow underline.
   * soon    = visually-disabled primary-shaped pill that reads as a real CTA but is not interactive.
   *           Renders as <span>, not <button disabled> — the audit calls this out specifically.
   */
  variant?: CTAVariant;
  className?: string;
};

type CTALinkProps = CTAButtonBaseProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type CTASoonProps = CTAButtonBaseProps & {
  /** No href on `soon` — it's a non-interactive span styled as the button. */
  href?: never;
};

type CTAButtonProps = CTALinkProps | CTASoonProps;

/**
 * The single CTA pattern for Trench Dev.
 *
 * Primary: filled Steel pill. Sodium hairline underline draws across the bottom on hover.
 * Ghost: text link with sodium underline that grows from 1px to 2px on hover.
 * Soon: same visual chassis as Primary but at ~60% opacity, `aria-disabled`, cursor: not-allowed,
 *       no hover state, no underline animation. Communicates "this is the button, not yet live."
 *       Used pre-Cal.com-launch instead of a fake `#book` anchor that scrolls to nowhere.
 *
 * Discipline: pick one accent treatment, don't pile.
 */
export function CTAButton(props: CTAButtonProps) {
  const { children, variant = "primary", className } = props;

  if (variant === "ghost") {
    const { href, ...rest } = props as CTALinkProps;
    return (
      <a
        href={href}
        // py-3 -my-3 = ~44px tap target without disturbing visual rhythm.
        // Mobile audit round 3, finding #2 — WCAG 2.5.5 minimum.
        className={[
          "cta-ghost group inline-flex items-baseline gap-2 py-3 -my-3 font-display text-base font-medium text-steel",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        <span className="cta-ghost-label">{children}</span>
        <span
          aria-hidden
          className="cta-arrow inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
        >
          →
        </span>
      </a>
    );
  }

  if (variant === "soon") {
    // Non-interactive span styled like the primary CTA. Not a <button disabled>
    // (browsers strip pointer events on disabled buttons; we want the cursor
    // to indicate "deliberately inactive," not "broken"). Not an <a> without
    // href — that's still focusable and announces as a link to AT.
    //
    // Mobile audit round 3, finding #1: at <sm, render full-width with the
    // arrow pushed right (justify-between) so it reads as the page's button,
    // not a chip. At >=sm, returns to inline pill alongside ghost CTA.
    return (
      <span
        role="status"
        aria-disabled="true"
        aria-live="polite"
        className={[
          "flex w-full items-baseline justify-between gap-3 bg-steel/90 px-7 py-4 font-display text-base font-medium text-bone/60 opacity-60 cursor-not-allowed select-none sm:inline-flex sm:w-auto sm:justify-start",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span>{children}</span>
        <span aria-hidden className="inline-block opacity-70">
          →
        </span>
      </span>
    );
  }

  // primary
  const { href, ...rest } = props as CTALinkProps;
  return (
    <a
      href={href}
      className={[
        "cta-primary group relative inline-flex items-baseline gap-3 bg-steel px-7 py-4 font-display text-base font-medium text-bone transition-colors duration-200 ease-out hover:bg-steel/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sodium focus-visible:ring-offset-2 focus-visible:ring-offset-bone",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="cta-arrow inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
      >
        →
      </span>
    </a>
  );
}
