import { Space_Grotesk, Inter } from "next/font/google";

/**
 * Single source of truth for the brand fonts.
 *
 * Both `layout.tsx` (variable wiring + global CSS vars) and `Wordmark.tsx`
 * (inline SVG `<text>` font-family literal — see audit-quality.md finding #2)
 * import these so the font stack stays in lockstep. Calling `next/font` twice
 * for the same family with identical options is de-duped by Next, so this is
 * free; but a single export removes the drift risk entirely.
 */
export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
