import type { CSSProperties } from "react";

/**
 * "Drafting Spec" wordmark — TRENCH | DEV.
 *
 * Built as outlined-glyph closed SVG paths (no <text>, no font-fallback risk).
 * Every letter is a hand-cut geometric form on a locked 1000x140 grid, so
 * cap-height, stem width, and tracking are stable at every size. This replaces
 * the v1 "Cut Steel" hybrid (T-path + RENCH DEV as <text>) that drifted —
 * see audit-design.md finding #1 and audit-quality.md finding #2.
 *
 * --- Direction (locked 2026-05-10) ---
 *
 * Aerospace / sci-fi geometric — DIN x Eurostile x Space Grotesk crossbreed,
 * machined and compressed. NOT modern-startup-clean. Mood is "infrastructure
 * software for real contractors, not SaaS for designers."
 *
 *   TRENCH   ->  Steel #1A1D21 (primary ink)
 *   |        ->  Sodium #F2B705 (signal pipe divider)
 *   DEV      ->  ConcreteDeep #5E646B (5.2:1 on Bone — AA pass)
 *
 * Letter treatments:
 *   T  - crossbar extends slightly left of stem; right edge cut at ~32° from
 *        horizontal (steel beam / finishing trowel reference)
 *   R  - parallelogram leg with parallel inner/outer edges (slope 10/46);
 *        chamfered top-right + mid-bar-right corners (both 10×10 = 45°)
 *   E  - three horizontal strokes (all 18u thick); middle is 12u shorter for
 *        a subtle "machined" voice without breaking the bar-thickness rule
 *   N  - three subpaths (left stem + right stem + diagonal), no curves
 *   C  - opens right with horizontal cuts at terminals (no rounded curves)
 *   H  - vertical stems with slightly-low crossbar (top-heavy reads taller)
 *   D  - flat top/bottom bars + 10×10 chamfered right corners (no curves);
 *        inner counter chamfered 4×4 to rhyme with R counter
 *   V  - angular converging diagonals; outer point has a 4u flat tip (optical
 *        correction — avoids the "pricked" reading at hero scale)
 *
 * --- Geometry grid ---
 *
 *   viewBox        1000 x 140  (rendered with 12u left & right padding via
 *                                viewBox origin shift to "-12 0 1000 140")
 *   content range  x 0-976
 *   cap-top        y = 20
 *   cap-bottom     y = 120
 *   cap-height     100
 *   stem width     18  (uniform across stems)
 *   bar thickness  18  (uniform across every horizontal in the system)
 *   letter advance ~88 (tight tracking, machined density)
 *
 * --- Variants ---
 *
 *   "full"   the full TRENCH | DEV mark (default)
 *   "mono"   a single T glyph for favicon / 16-pixel contexts where the full
 *            mark goes illegible. Shave angle (~32°) preserved across variants.
 *
 * --- Color model ---
 *
 *   Each letter group ("trench", "divider", "dev") is rendered in its own
 *   <g fill> so consumers can override per-group via props. Defaults pass
 *   through CSS tokens so dark mode / single-color print is a one-line
 *   change at the call site.
 *
 * --- Round-4 personal-audit iteration ---
 *
 * Original Drafting Spec wordmark (Opus brand specialist, 2026-05-10 evening)
 * was a good raw start with seven analytical issues caught on subsequent loupe:
 * R leg taper, R outer mid-bar chamfer angle, R/D inner-counter chamfer
 * mismatch, E mid-bar thickness off-system, asymmetric viewBox padding,
 * mono-T shave angle drift, V infinitely sharp point. All seven addressed
 * in this revision without changing the public API or the letter-by-letter
 * design intent.
 */

type WordmarkProps = {
  /** Pixel height of the wordmark. Width auto-scales. */
  height?: number;
  /** Override for the primary "TRENCH" letters. Defaults to Steel via CSS token. */
  color?: string;
  /** Override for the "|" divider. Defaults to Sodium via CSS token. */
  accent?: string;
  /** Override for "DEV". Defaults to ConcreteDeep (5.2:1 on Bone). */
  devColor?: string;
  /** When false, render the entire mark in a single color (uses `color`).
   *  Use for single-color print, stamps, monochrome favicons. */
  showAccent?: boolean;
  /** "full" = TRENCH | DEV. "mono" = single T glyph for favicon / 16px contexts. */
  variant?: "full" | "mono";
  className?: string;
  style?: CSSProperties;
  /** Accessible label. Pass empty string for decorative use. */
  ariaLabel?: string;
};

// =============================================================================
// LETTER PATHS - all on the 1000x140 grid. Cap top y=20, cap bottom y=120.
// Stems 18 wide, bars 18 thick. Letter advance ~88 (tight tracking).
// =============================================================================

// T - x range 0-104
//   crossbar: 0-104 x 20-38   (overhangs stem on left = "industrial sign")
//   stem:     43-61 x 38-120  (slightly left of center to enable the overhang)
//   shave:    right edge (104,20)→(104,28)→(88,38)
//             diagonal segment is Δx=-16, Δy=+10 → angle ≈ 32° from horizontal
const T_PATH = [
  "M 0 20",
  "L 104 20",
  "L 104 28",
  "L 88 38",
  "L 61 38",
  "L 61 120",
  "L 43 120",
  "L 43 38",
  "L 0 38",
  "Z",
].join(" ");

// R - x range 116-208
//   stem:            116-134 x 20-120
//   top bar:         134-198 x 20-38   (closes bowl at top)
//   top-right chamfer:  (198,20)→(208,30)   10×10 = 45°
//   right side bowl: 208-208 x 30-64   (vertical, 34u tall)
//   mid-bar-right chamfer: (208,64)→(198,74)   10×10 = 45°  ← matches top
//   mid bar bottom:  134-198 x 56-74  (18u thick)
//   leg:             parallelogram, top inner at (176,74), top outer at (198,74),
//                    bottom inner at (186,120), bottom outer at (208,120).
//                    Both edges slope Δx=10, Δy=46 → parallel ✓
//
// Outer outline clockwise from stem TL. Counter (the bowl hole) is a second
// subpath; fillRule="evenodd" carves it out.
const R_PATH = [
  "M 116 20",
  "L 198 20",
  "L 208 30",
  "L 208 64",
  "L 198 74",
  "L 208 120",
  "L 186 120",
  "L 176 74",
  "L 134 74",
  "L 134 120",
  "L 116 120",
  "Z",
  // Counter (bowl interior). Chamfered 4×4 at top-right & bottom-right to
  // visually rhyme with D's inner counter. (Was 2×2 in the raw draft —
  // invisible at hero size.)
  "M 134 38",
  "L 188 38",
  "L 192 42",
  "L 192 52",
  "L 188 56",
  "L 134 56",
  "Z",
].join(" ");

// E - x range 220-296
//   stem:    220-238 x 20-120
//   top bar: 220-296 x 20-38         (76u wide × 18u thick)
//   mid bar: 220-284 x 61-79         (64u wide × 18u thick — 12u shorter than
//                                     top/bot, but matches system bar thickness)
//   bot bar: 220-296 x 102-120
const E_PATH = [
  "M 220 20",
  "L 296 20",
  "L 296 38",
  "L 238 38",
  "L 238 61",
  "L 284 61",
  "L 284 79",
  "L 238 79",
  "L 238 102",
  "L 296 102",
  "L 296 120",
  "L 220 120",
  "Z",
].join(" ");

// N - x range 308-400
//   Three subpaths in a single <path>. No nesting, so fillRule="nonzero" works.
//     Left stem:   (308,20) (326,20) (326,120) (308,120)
//     Right stem:  (382,20) (400,20) (400,120) (382,120)
//     Diagonal:    (326,20) (344,20) (400,120) (382,120)
//                  parallelogram, top-edge x in [326,344], bottom-edge x in [382,400]
const N_PATH = [
  // Left stem
  "M 308 20",
  "L 326 20",
  "L 326 120",
  "L 308 120",
  "Z",
  // Right stem
  "M 382 20",
  "L 400 20",
  "L 400 120",
  "L 382 120",
  "Z",
  // Diagonal
  "M 326 20",
  "L 344 20",
  "L 400 120",
  "L 382 120",
  "Z",
].join(" ");

// C - x range 412-500
//   top bar:    412-500 x 20-38
//   left stem:  412-430 x 38-102
//   bottom bar: 412-500 x 102-120
//   Opens right. Terminals are flat horizontal cuts (no curves).
const C_PATH = [
  "M 412 20",
  "L 500 20",
  "L 500 38",
  "L 430 38",
  "L 430 102",
  "L 500 102",
  "L 500 120",
  "L 412 120",
  "Z",
].join(" ");

// H - x range 512-600
//   left stem:  512-530 x 20-120
//   right stem: 582-600 x 20-120
//   crossbar:   530-582 x 64-82  (centered 3u below cap mid for top-heavy read)
const H_PATH = [
  "M 512 20",
  "L 530 20",
  "L 530 64",
  "L 582 64",
  "L 582 20",
  "L 600 20",
  "L 600 120",
  "L 582 120",
  "L 582 82",
  "L 530 82",
  "L 530 120",
  "L 512 120",
  "Z",
].join(" ");

// | - Sodium pipe divider. x range 642-650 (8u wide), full cap-height.
//     Half of stem width (18u) so it reads as a divider, not a letter stem.
const DIVIDER_PATH = [
  "M 642 20",
  "L 650 20",
  "L 650 120",
  "L 642 120",
  "Z",
].join(" ");

// D - x range 692-784  (DEV group)
//   left stem:   692-710 x 20-120
//   top bar:     692-774 x 20-38   (with 10×10 outer chamfer to right side)
//   right side:  774-784 with 10u chamfers at top-right and bottom-right
//   bottom bar:  692-774 x 102-120
//   Internal counter is cut out via evenodd, with matching 4×4 inner chamfer.
const D_PATH = [
  // Outer
  "M 692 20",
  "L 774 20",
  "L 784 30",
  "L 784 110",
  "L 774 120",
  "L 692 120",
  "Z",
  // Counter cutout (4×4 inner chamfer matches R counter)
  "M 710 38",
  "L 762 38",
  "L 766 42",
  "L 766 98",
  "L 762 102",
  "L 710 102",
  "Z",
].join(" ");

// E2 - second E, x range 796-872 (geometry mirrors first E, shifted by +576)
const E2_PATH = [
  "M 796 20",
  "L 872 20",
  "L 872 38",
  "L 814 38",
  "L 814 61",
  "L 860 61",
  "L 860 79",
  "L 814 79",
  "L 814 102",
  "L 872 102",
  "L 872 120",
  "L 796 120",
  "Z",
].join(" ");

// V - x range 884-976
//   Two converging diagonals with a 4u flat tip at the outer bottom point
//   (optical correction — a perfectly sharp point looks "pricked" at display
//   scale; the flat tip reads as crisp without the prick).
//     Outer-left top:    (884,20)
//     Inner-left top:    (902,20)
//     Inner bottom:      (930,86)   (sharp interior notch is fine — concave)
//     Inner-right top:   (958,20)
//     Outer-right top:   (976,20)
//     Outer bottom right:(932,120)
//     Outer bottom left: (928,120)  (4u flat tip)
const V_PATH = [
  "M 884 20",
  "L 902 20",
  "L 930 86",
  "L 958 20",
  "L 976 20",
  "L 932 120",
  "L 928 120",
  "Z",
].join(" ");

// =============================================================================
// MONO variant - single T glyph for favicon / sub-24px contexts.
// Tighter geometry on a 24x24 viewBox. Shave preserved at the SAME angle as
// the full mark (~32° from horizontal), so the brand language survives the
// scale jump rather than morphing into a different cut.
// =============================================================================
const MONO_VIEWBOX = "0 0 24 24";
// T on a 24-unit canvas:
//   crossbar: 1-22 x 4-8  (4u thick)
//   stem:     9-13 x 8-22
//   shave:    (22,4)→(22,6)→(19,8)
//             diagonal Δx=-3, Δy=+2 → slope 2/3 = 0.667, angle ≈ 33.7°
//             matches full-mark T's 32° within 2° (sub-pixel difference at 16px)
const MONO_T_PATH = [
  "M 1 4",
  "L 22 4",
  "L 22 6",
  "L 19 8",
  "L 13 8",
  "L 13 22",
  "L 9 22",
  "L 9 8",
  "L 1 8",
  "Z",
].join(" ");

export function Wordmark({
  height = 48,
  color,
  accent,
  devColor,
  showAccent = true,
  variant = "full",
  className,
  style,
  ariaLabel = "Trench Dev",
}: WordmarkProps) {
  // Resolve colors with CSS-token fallbacks. Consumers can pass currentColor
  // explicitly if they want the whole mark to inherit text color.
  const inkColor = color ?? "var(--color-steel)";
  const sodiumColor = accent ?? "var(--color-sodium)";
  const devInkColor = devColor ?? "var(--color-concrete-deep)";

  // Single-color print mode: everything goes to `inkColor`.
  const trenchFill = inkColor;
  const dividerFill = showAccent ? sodiumColor : inkColor;
  const devFill = showAccent ? devInkColor : inkColor;

  if (variant === "mono") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={MONO_VIEWBOX}
        height={height}
        width={height}
        role={ariaLabel ? "img" : "presentation"}
        aria-label={ariaLabel || undefined}
        aria-hidden={ariaLabel ? undefined : true}
        className={className}
        style={style}
        shapeRendering="geometricPrecision"
      >
        <path d={MONO_T_PATH} fill={inkColor} />
      </svg>
    );
  }

  // Full TRENCH | DEV wordmark.
  // viewBox origin shifted to (-12, 0) so the 976u-wide content has symmetric
  // 12u padding on each side within the 1000u-wide viewBox. Width math
  // (aspect 1000/140 = 7.14) is unchanged — the shift is pure origin offset.
  const VB_W = 1000;
  const VB_H = 140;
  const aspect = VB_W / VB_H;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-12 0 ${VB_W} ${VB_H}`}
      height={height}
      width={height * aspect}
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel || undefined}
      aria-hidden={ariaLabel ? undefined : true}
      className={className}
      style={style}
      shapeRendering="geometricPrecision"
    >
      {/* TRENCH */}
      <g fill={trenchFill}>
        <path d={T_PATH} />
        <path d={R_PATH} fillRule="evenodd" />
        <path d={E_PATH} />
        <path d={N_PATH} />
        <path d={C_PATH} />
        <path d={H_PATH} />
      </g>

      {/* | divider — Sodium pipe */}
      <path d={DIVIDER_PATH} fill={dividerFill} />

      {/* DEV */}
      <g fill={devFill}>
        <path d={D_PATH} fillRule="evenodd" />
        <path d={E2_PATH} />
        <path d={V_PATH} />
      </g>
    </svg>
  );
}
