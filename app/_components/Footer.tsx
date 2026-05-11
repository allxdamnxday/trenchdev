import { Wordmark } from "./Wordmark";

/**
 * Footer — drafting-title-block discipline. Small wordmark, 3 columns of meta
 * at desktop, stacks at mobile. Hairline above.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-concrete/35 px-6 pt-12 sm:pt-16 lg:px-12"
      style={{
        // Safe-area-inset-bottom (iOS home indicator) clears ~34px on notched
        // phones. max() floors at our existing rhythm so non-notched devices
        // keep the same py-12/py-16 they had. Requires viewportFit: "cover".
        paddingBottom: "max(3rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <Wordmark height={22} ariaLabel="Trench Dev" />
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-steel/65">
              AI automation for SMB construction
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-4 font-sans text-sm text-steel/80 sm:flex sm:items-start sm:gap-12"
          >
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-steel/65">
                Contact
              </span>
              <a
                href="mailto:braden@trenchdev.com"
                className="footer-link inline-block py-2 -my-2 transition-colors hover:text-steel"
              >
                braden@trenchdev.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-steel/65">
                Elsewhere
              </span>
              {/* TODO: swap to <a href="..."> once Braden's LinkedIn handle is locked.
                  Until then, rendered as a non-interactive span — an empty href="#"
                  is a focusable tab-trap that scrolls to top (worse than no link). */}
              <span
                className="text-steel/45 select-none"
                aria-disabled="true"
              >
                LinkedIn <span className="text-steel/35">(soon)</span>
              </span>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-concrete/25 pt-6 font-sans text-xs text-steel/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="tabular-nums">&copy; {year}</span> Trench Dev. Built
            in Vista, CA.
          </p>
          <p className="text-steel/55">
            <span className="tabular-nums">v1</span>
            <span aria-hidden className="mx-2 text-steel/35">/</span>
            Last revised <time dateTime="2026-05-10" className="tabular-nums">2026-05-10</time>
          </p>
        </div>
      </div>
    </footer>
  );
}
