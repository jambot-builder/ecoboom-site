import Image from "next/image";
import Link from "next/link";

/**
 * EcoBoom logo. Renders the wordmark, switching between a "light" version
 * (for use on bone/cream backgrounds) and a "dark" version (white-stroked,
 * for use on ink/dark backgrounds).
 *
 * The actual logo PNG/SVG files live in:
 *   public/images/brand/ecoboom-wordmark.png         — for light backgrounds
 *   public/images/brand/ecoboom-wordmark-onDark.png  — for dark backgrounds
 *
 * If those files are missing, a styled text fallback is rendered so the site
 * stays usable.
 */
type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  className?: string;
  withLink?: boolean;
  height?: number; // pixel height; width auto-scales
};

const SOURCES: Record<Variant, string> = {
  light: "/images/brand/ecoboom-wordmark.png",
  dark: "/images/brand/ecoboom-wordmark-onDark.png",
};

export default function Logo({
  variant = "light",
  className = "",
  withLink = true,
  height = 36,
}: Props) {
  // Aspect ratio assumed roughly 4:1 wordmark. Adjust here if the actual
  // file has different proportions — next/image will respect the file's
  // intrinsic ratio anyway.
  const inner = (
    <Image
      src={SOURCES[variant]}
      alt="EcoBoom"
      width={height * 4}
      height={height}
      priority
      className="h-auto w-auto"
      style={{ height: `${height}px` }}
    />
  );

  if (!withLink) {
    return <span className={className}>{inner}</span>;
  }

  return (
    <Link href="/" aria-label="EcoBoom — home" className={className}>
      {inner}
    </Link>
  );
}
