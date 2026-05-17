import Link from "next/link";

/**
 * EcoBoom logo - Recreated from reference photo.
 * "eco" in green, white "b" in green box, "oom" in black.
 */
type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  className?: string;
  withLink?: boolean;
  height?: number;
};

const ECO_GREEN = "#86BC41";
const INK = "#1A1612";
const BONE = "#FAF6EE";

export default function Logo({
  variant = "light",
  className = "",
  withLink = true,
  height = 36,
}: Props) {
  const boomFill = variant === "dark" ? BONE : INK;
  
  // Adjusted width/height to fit the new wordmark structure
  const W = 320;
  const H = 80;

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
      <style>{`
        .logo-text { 
          font-family: "Montserrat", "Inter", system-ui, sans-serif; 
          font-weight: 700; 
          font-size: 64px; 
          letter-spacing: -2px; 
        }
      `}</style>

      {/* "eco" - green */}
      <text x="0" y="60" fill={ECO_GREEN} className="logo-text">
        eco
      </text>

      {/* Green box with white "b" */}
      <rect x="110" y="8" width="64" height="64" fill={ECO_GREEN} rx="4" />
      <text x="124" y="60" fill={variant === "dark" ? INK : BONE} className="logo-text">
        b
      </text>

      {/* "oom" - black on light, cream on dark */}
      <text x="184" y="60" fill={boomFill} className="logo-text">
        oom
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
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="EcoBoom mark"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="64" height="64" rx="8" fill={color} />
      <text 
        x="16" 
        y="48" 
        fill="white" 
        style={{ 
          fontFamily: "Montserrat, Inter, sans-serif", 
          fontWeight: 700, 
          fontSize: "48px" 
        }}
      >
        b
      </text>
    </svg>
  );
}
