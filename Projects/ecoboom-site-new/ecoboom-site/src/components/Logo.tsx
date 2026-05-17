import Link from "next/link";

/**
 * EcoBoom logo - built as inline SVG so it renders perfectly with no
 * external asset dependency. The wordmark uses Nunito (loaded via next/font)
 * for a rounded geometric feel close to the original letterforms.
 *
 * Two visual variants:
 *   - "light" - for use on bone/cream backgrounds (default)
 *   - "dark"  - for use on ink/dark backgrounds; the "boom" text gets a
 *               cream stroke so it stands out from the dark background
 */
type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  className?: string;
  withLink?: boolean;
  height?: number; // pixel height; width auto-scales
};

const ECO_GREEN = "#84BA40";
const INK = "#1A1612";
const BONE = "#FAF6EE";

export default function Logo({
  variant = "light",
  className = "",
  withLink = true,
  height = 36,
}: Props) {
  const boomFill = variant === "dark" ? BONE : INK;
  // SVG natural dimensions. The viewBox is sized to comfortably hold the
  // wordmark; height/width on the rendered element scale uniformly.
  const W = 360;
  const H = 100;

  const inner = (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      height={height}
      width="auto"
      role="img"
      aria-label="EcoBoom"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* "ec" - green */}
      <text
        x="0"
        y="76"
        fontFamily='var(--font-wordmark), "Nunito", system-ui, sans-serif'
        fontWeight={900}
        fontSize="92"
        fill={ECO_GREEN}
        letterSpacing="-2"
      >
        ec
      </text>

      {/* Target icon - replaces the "o" in eco. Two nested rounded rects. */}
      <g transform="translate(94 28)" fill="none" stroke={ECO_GREEN} strokeWidth="7">
        <rect x="0" y="0" width="58" height="48" rx="14" />
        <rect x="15" y="12" width="28" height="24" rx="6" />
      </g>

      {/* "boom" - black on light, cream on dark */}
      <text
        x="160"
        y="76"
        fontFamily='var(--font-wordmark), "Nunito", system-ui, sans-serif'
        fontWeight={900}
        fontSize="92"
        fill={boomFill}
        letterSpacing="-2"
      >
        boom
      </text>
    </svg>
  );

  if (!withLink) {
    return <span className={className}>{inner}</span>;
  }

  return (
    <Link href="/" aria-label="EcoBoom - home" className={`inline-flex ${className}`}>
      {inner}
    </Link>
  );
}

/**
 * Standalone target mark (the bracketed-rect icon without the wordmark).
 * Used for favicon-like uses or as a decorative accent.
 */
export function LogoMark({
  size = 36,
  color = ECO_GREEN,
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 70 60"
      width={size}
      height={(size * 60) / 70}
      role="img"
      aria-label="EcoBoom mark"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="none" stroke={color} strokeWidth="7">
        <rect x="4" y="6" width="62" height="48" rx="14" />
        <rect x="19" y="18" width="32" height="24" rx="6" />
      </g>
    </svg>
  );
}
