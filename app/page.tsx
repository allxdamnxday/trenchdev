import fs from "node:fs";
import path from "node:path";
import { Hero } from "./_components/Hero";
import { AuditSection } from "./_components/AuditSection";
import { NotForYou } from "./_components/NotForYou";
import { FAQ } from "./_components/FAQ";
import { About } from "./_components/About";
import { Footer } from "./_components/Footer";
import { SkipLink } from "./_components/SkipLink";

/**
 * Hero image feature flag — server-side filesystem check at build time.
 *
 * Until Braden generates /public/hero.webp (via the GPT Image 2 prompts in
 * hero-imagery-direction.md), Hero renders type-only — the existing
 * mobile-audit-clean layout. The instant the file lands, the image slot
 * lights up on the next build with no code change needed.
 *
 * Why filesystem-detect instead of an env var: env vars require Braden to
 * remember to flip a flag; filesystem detection is the same act (drop the
 * file in /public). One less moving part.
 *
 * page.tsx is a server component, so this runs at build time and the boolean
 * is baked into the static HTML. No client-side fs probe, no hydration cost.
 */
const HERO_IMAGE_PATH = path.join(process.cwd(), "public", "hero.webp");
const HAS_HERO_IMAGE = fs.existsSync(HERO_IMAGE_PATH);

export default function Home() {
  return (
    <>
      <SkipLink />
      <main id="main" className="bg-bone text-steel">
        <Hero heroImageEnabled={HAS_HERO_IMAGE} />
        {/* Section index: 01 Audit / 02 NotForYou / 03 FAQ / 04 About.
            Order: offer → qualifier → objections → who's the guy. The
            qualifier lands while the offer is still fresh; FAQ then closes
            objections for the remaining well-matched readers. */}
        <AuditSection />
        <NotForYou />
        <FAQ />
        <About />
      </main>
      <Footer />
    </>
  );
}
