"use client";

import { useEffect, useRef } from "react";
import { Wordmark } from "./Wordmark";
import { CTAButton } from "./CTAButton";

/**
 * Hero — Bone surface, Wordmark eyebrow, architectural H1, restrained lede, single CTA.
 *
 * Composition rhythm (top to bottom):
 *   wordmark eyebrow (sm, drafting-block feel)
 *   H1 — clamp(2.75rem → 6.5rem), Space Grotesk Bold, leading-tight, max-width measured
 *   lede — Inter, ~21px, max-width 60ch, concrete-side of Steel
 *   CTA + meta-row ("$3,500 · 1 week · 1 founder")
 *
 * Animation: GSAP timeline on mount, staggered y+fade for each line.
 * Respects prefers-reduced-motion (skip the animation entirely).
 */
type HeroProps = {
  /** Reserved for the deferred "beat-up laptop on a sawhorse" hero image slot.
   *  page.tsx detects /public/hero.webp at build time and passes the flag in.
   *  Currently unused inside Hero - the type-only Hero is the fallback layout.
   *  When the image lands, branch on this to render the asymmetric image variant. */
  heroImageEnabled?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Hero({ heroImageEnabled: _heroImageEnabled = false }: HeroProps = {}) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let cleanup: (() => void) | undefined;

    // Dynamic import keeps GSAP out of the initial JS budget for users who
    // never trip the hero animation (reduced motion, or fast bounce).
    (async () => {
      const { gsap } = await import("gsap");

      const targets = root.querySelectorAll<HTMLElement>("[data-stagger]");
      // Set initial state synchronously so there's no flash.
      gsap.set(targets, { y: 14, autoAlpha: 0 });

      const ctx = gsap.context(() => {
        gsap.to(targets, {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.05,
        });
      }, root);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:px-12 lg:pt-36 lg:pb-44"
      aria-labelledby="hero-headline"
    >
      <div className="mx-auto max-w-6xl">
        <div data-stagger className="mb-14 sm:mb-20 lg:mb-24">
          <Wordmark height={36} ariaLabel="Trench Dev" />
        </div>

        <h1
          id="hero-headline"
          data-stagger
          className="font-display font-bold tracking-tight text-steel"
          style={{
            fontSize: "clamp(2.75rem, 7vw + 0.5rem, 6.5rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            maxWidth: "16ch",
          }}
        >
          AI automation for SMB construction.
        </h1>

        {/* Static Sodium moment — single 1px hairline under the H1, left-aligned, 80px.
            Picked option A over (B) audit-card-01-in-sodium and (C) sodium dot before
            meta-row: this echoes the wordmark cut-edge accent (also Sodium hairline),
            creating a deliberate visual rhyme between the brand mark and the headline.
            Option B fragments the audit-card visual unity; option C feels gimmicky on a
            meta-row that already has its own internal punctuation. Spec says exactly one
            static moment per page — this is it. */}
        <div
          data-stagger
          aria-hidden
          className="mt-7 h-px w-20 bg-sodium sm:mt-8"
        />

        <p
          data-stagger
          className="mt-7 font-sans text-steel/85 sm:mt-8"
          style={{
            fontSize: "clamp(1.0625rem, 0.75vw + 0.95rem, 1.3125rem)",
            lineHeight: 1.55,
            maxWidth: "58ch",
          }}
        >
          I spent the past year inside a $7M glazing sub &mdash; payroll, daily
          reports, change orders, compliance. I&rsquo;m a developer by background,
          so when AI got good I started automating the back office instead of
          growing the team. Got the owner 20+ hours a week back. Now I do this
          for other SMB subs.
        </p>

        {/* TODO Mon AM: when Cal.com URL lands, swap primary back to active
            <CTAButton href="..."> and remove the email ghost (or keep it as a
            secondary, but the disabled-soon copy goes away).

            Mobile audit round 3, finding #1: stretch container at <sm so the
            soon-CTA goes full-width (its internal classes do the rest). Ghost
            stays inline text below, still left-aligned. >=sm returns to
            inline pill + ghost side-by-side. */}
        <div
          data-stagger
          className="mt-10 flex flex-col items-stretch gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-6"
        >
          <CTAButton variant="soon">Booking opens Monday</CTAButton>
          <CTAButton
            variant="ghost"
            href="mailto:braden@trenchdev.com?subject=Trench Dev audit interest"
            className="self-start"
          >
            Email Braden
          </CTAButton>
        </div>

        <p
          data-stagger
          className="mt-8 font-sans text-sm leading-relaxed text-steel/65"
        >
          <span className="tabular-nums text-steel/80">$3,500</span>
          <span aria-hidden className="mx-2 text-steel/40">/</span>
          <span>1 week</span>
          <span aria-hidden className="mx-2 text-steel/40">/</span>
          <span>1 founder</span>
        </p>
      </div>

      {/* Hairline below the hero, indented to the content gutter — drafting-block move. */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-concrete/35 lg:left-12 lg:right-12"
      />
    </section>
  );
}
