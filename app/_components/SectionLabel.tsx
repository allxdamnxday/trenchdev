import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  /** Numeric prefix in tabular figures — e.g. "01" for section 01. */
  index?: string;
  /** Tag to render — defaults to <p>. Use "span" inline. */
  as?: "p" | "span" | "h2";
  className?: string;
};

/**
 * The eyebrow label — uppercase, tracked, Concrete on Bone.
 * Optional numeric prefix renders in tabular nums so the digits sit on a grid.
 * Mirrors the drafting-block discipline: "01 — Section name".
 */
export function SectionLabel({
  children,
  index,
  as: Tag = "p",
  className,
}: SectionLabelProps) {
  return (
    <Tag
      className={[
        "font-sans text-xs font-medium uppercase tracking-[0.22em] text-steel/65",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {index && (
        <span className="mr-3 inline-block tabular-nums text-steel/65">
          {index}
        </span>
      )}
      {index && (
        <span aria-hidden className="mr-3 inline-block text-steel/40">
          /
        </span>
      )}
      <span>{children}</span>
    </Tag>
  );
}
