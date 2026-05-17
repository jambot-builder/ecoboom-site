import Link from "next/link";

/**
 * EcoBoom logo - built as inline SVG.
 *
 * The wordmark uses Quicksand (rounded geometric sans, loaded via next/font),
 * which most closely matches the actual EcoBoom letterforms. The target icon
 * is drawn as two concentric rounded squares in eco-green.
 *
 * Variants:
 *   - "light" - for use on bone/cream backgrounds (default)
 *   - "dark"  - for use on ink/dark backgrounds; "boom" text becomes cream
 */
type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  className?: string;
  withLink?: boolean;
  height?: number;
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
  // viewBox tuned so wordmark "eco○boom" sits comfortably with the target.
  const W = 380;
  const H = 110;

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
        y="82"
        fontFamily='"Quicksand", system-ui, sans-serif'
        fontWeight={700}
        fontSize="98"
        fill={ECO_GREEN}
        letterSpacing="-3"
      >
        ec
      </text>

      {/* The "o" icon - solid green rounded square with a hole (the o) */}
      <g transform="translate(98 30)">
        <rect x="0" y="0" width="56" height="56" rx="12" fill={ECO_GREEN} />
        <circle cx="28" cy="28" r="14" fill={variant === "dark" ? INK : BONE} />
      </g>

      {/* "boom" - black on light, cream on dark */}
      <text
        x="174"
        y="82"
        fontFamily='"Quicksand", system-ui, sans-serif'
        fontWeight={700}
        fontSize="98"
        fill={boomFill}
        letterSpacing="-3"
      >
        boom
      </text>
    </svg>
  );

  if (!withLink) {
    return <span className={className}>{inner}</span>;
  }

  return (
    <Link
      href="/"
      aria-label="EcoBoom - home"
      className={`inline-flex items-center ${className}`}
    >
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
      viewBox="0 0 56 56"
      width={size}
      height={size}
      role="img"
      aria-label="EcoBoom mark"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="56" height="56" rx="12" fill={color} />
      <circle cx="28" cy="28" r="14" fill="currentColor" />
    </svg>
  );
}
