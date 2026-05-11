/**
 * Visible-on-focus skip link. Sodium ring + Steel pill so keyboard users land
 * somewhere obvious without polluting the visual default.
 *
 * Mobile audit (round 3, finding #3):
 *   - Tap target bumped to px-5 py-3 text-base (~44px) for WCAG 2.5.5.
 *   - top / left use max(1rem, env(safe-area-inset-*)) so the link clears the
 *     iPhone 14+ dynamic island when focused. Requires viewportFit: "cover"
 *     in app/layout.tsx (set in same round) for the env() values to resolve.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only fixed z-50 rounded-none bg-steel px-5 py-3 font-display text-base font-medium text-bone focus:not-sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-sodium focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
      style={{
        top: "max(1rem, env(safe-area-inset-top))",
        left: "max(1rem, env(safe-area-inset-left))",
      }}
    >
      Skip to content
    </a>
  );
}
