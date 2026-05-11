"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import { AuditCard } from "./AuditCard";

const AUDIT_DELIVERABLES = [
  {
    index: "01",
    title: "3-5 workflows audited",
    body:
      "Payroll, dailies, change orders, intake, AP. Whichever ones are bleeding. Real walkthroughs with your team, not a survey.",
  },
  {
    index: "02",
    title: "ROI-ranked roadmap",
    body:
      "Hours saved, build difficulty, risk. Ranked. You see the order of attack before signing anything bigger.",
  },
  {
    index: "03",
    title: "1 quick win shipped",
    body:
      "End of week one, at least one workflow is already saving hours. Proves the pattern before you commit to a build.",
  },
] as const;

/**
 * The Audit section. Eyebrow + section H2 + lede + 3 deliverable cards.
 *
 * Cards reveal with a scroll-triggered stagger when the section enters the viewport.
 * Animation respects prefers-reduced-motion.
 */
export function AuditSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const cards = root.querySelectorAll<HTMLElement>("[data-reveal]");
      gsap.set(cards, { y: 24, autoAlpha: 0 });

      const ctx = gsap.context(() => {
        gsap.to(cards, {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            // Once the cards arrive they stay arrived. No replays.
            once: true,
          },
        });
      }, root);

      // ctx.revert() tears down every animation AND ScrollTrigger created
      // inside this gsap.context. Do NOT add a ScrollTrigger.getAll().kill()
      // sweep here — that kills siblings' triggers too (none today, but a
      // landmine waiting for the next consumer).
      cleanup = () => ctx.revert();
    })();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="audit"
      className="scroll-mt-12 px-6 py-24 sm:py-32 lg:px-12 lg:py-40"
      aria-labelledby="audit-headline"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel index="01">The Audit</SectionLabel>

          <h2
            id="audit-headline"
            className="mt-6 font-display font-bold leading-[1.05] tracking-tight text-steel"
            style={{
              fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
              letterSpacing: "-0.015em",
            }}
          >
            <span className="tabular-nums">$3,500</span>. One week. You get a
            roadmap and a quick win.
          </h2>

          <p
            className="mt-7 font-sans text-steel/85"
            style={{
              fontSize: "clamp(1.0625rem, 0.5vw + 1rem, 1.1875rem)",
              lineHeight: 1.6,
              maxWidth: "62ch",
            }}
          >
            Before you spend real money on an automation build, you need to know
            exactly where your hours go and which workflows are worth touching
            first. That&rsquo;s what the audit is.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {AUDIT_DELIVERABLES.map((d) => (
            <AuditCard key={d.index} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}
