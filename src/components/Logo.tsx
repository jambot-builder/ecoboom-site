import Link from "next/link";

/**
 * EcoBoom logo - Recreated from reference photo.
 * "eco" in green, white "b" in green box, "oom" in black.
 * Using Quicksand as it matches the bold rounded sans-serif look.
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
  const oomFill = variant === "dark" ? BONE : INK;
  
  // Aspect ratio tuned for the wordmark with the box
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
      <style>{`
        .logo-text { 
          font-family: "Quicksand", system-ui, sans-serif; 
          font-weight: 700; 
          font-size: 80px; 
          letter-spacing: -2px; 
        }
      `}</style>

      {/* "eco" - green */}
      <text x="0" y="75" fill={ECO_GREEN} className="logo-text">
        eco
      </text>

      {/* Green box with white "b" */}
      <rect x="135" y="10" width="70" height="70" fill={ECO_GREEN} rx="4" />
      <text x="148" y="75" fill="white" className="logo-text">
        b
      </text>

      {/* "oom" - black on light, cream on dark */}
      <text x="215" y="75" fill={oomFill} className="logo-text">
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
      viewBox="0 0 70 70"
      width={size}
      height={size}
      role="img"
      aria-label="EcoBoom mark"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="70" height="70" rx="8" fill={color} />
      <text 
        x="18" 
        y="56" 
        fill="white" 
        style={{ 
          fontFamily: "Quicksand, sans-serif", 
          fontWeight: 700, 
          fontSize: "56px" 
        }}
      >
        b
      </text>
    </svg>
  );
}
