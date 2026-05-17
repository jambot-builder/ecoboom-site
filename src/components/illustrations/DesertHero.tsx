/**
 * Hand-built SVG: high desert horizon at dusk with Joshua tree silhouettes,
 * distant mountain ranges, and a low warm sun. Used as the home page hero
 * visual until a real photograph replaces it.
 *
 * Designed to feel editorial - restrained shapes, warm dusty gradient,
 * subtle film-grain texture. No drop shadows, no chrome.
 */
export default function DesertHero({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 1000"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Joshua tree silhouettes against a dusty desert horizon at sunset"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Sky gradient - warm bone at top, dusty rose at horizon */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2ECE2" />
          <stop offset="35%" stopColor="#EFD9C0" />
          <stop offset="65%" stopColor="#E0A988" />
          <stop offset="85%" stopColor="#C68066" />
          <stop offset="100%" stopColor="#8F4F38" />
        </linearGradient>

        {/* Sun gradient - warm core to softer edge */}
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#F8E0B5" />
          <stop offset="55%" stopColor="#F1C48A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F1C48A" stopOpacity="0" />
        </radialGradient>

        {/* Distant mountain wash */}
        <linearGradient id="mountainBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9A6A56" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#9A6A56" stopOpacity="0.25" />
        </linearGradient>

        {/* Subtle grain texture */}
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="3"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.1
                    0 0 0 0 0.08
                    0 0 0 0 0.06
                    0 0 0 0.08 0"
          />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="800" height="1000" fill="url(#sky)" />

      {/* Sun - soft halo low on the horizon */}
      <circle cx="540" cy="640" r="180" fill="url(#sun)" />
      <circle cx="540" cy="640" r="78" fill="#F8E0B5" opacity="0.95" />

      {/* Distant mountain range - far back */}
      <path
        d="M0,720 L60,690 L130,705 L210,670 L280,690 L360,665 L440,685 L520,672 L600,690 L680,675 L800,695 L800,800 L0,800 Z"
        fill="url(#mountainBack)"
      />

      {/* Mid mountains - slightly closer, darker */}
      <path
        d="M0,760 L80,735 L170,755 L260,728 L340,748 L420,732 L510,755 L600,738 L700,758 L800,748 L800,820 L0,820 Z"
        fill="#7A4836"
        opacity="0.65"
      />

      {/* Ground - desert floor wash */}
      <rect x="0" y="780" width="800" height="220" fill="#2D1F18" />
      <rect
        x="0"
        y="780"
        width="800"
        height="60"
        fill="#7A4836"
        opacity="0.5"
      />

      {/* Subtle grain over sky */}
      <rect width="800" height="800" fill="#000" opacity="0" filter="url(#grain)" />

      {/* ───── Joshua trees ───── */}
      {/* Big tree, left foreground */}
      <JoshuaTree x={140} y={870} scale={1.0} />
      {/* Mid tree, right side */}
      <JoshuaTree x={620} y={845} scale={0.78} />
      {/* Small tree, far back */}
      <JoshuaTree x={350} y={820} scale={0.48} />
      {/* Tiny accent tree */}
      <JoshuaTree x={730} y={815} scale={0.32} />

      {/* Foreground silhouette mound (anchors the trees to ground) */}
      <ellipse cx="160" cy="900" rx="120" ry="14" fill="#1A1612" opacity="0.7" />
      <ellipse cx="630" cy="880" rx="80" ry="9" fill="#1A1612" opacity="0.5" />
    </svg>
  );
}

/**
 * Single Joshua tree silhouette. (x, y) is the base of the trunk.
 * Built as a small library of organic shapes - trunk, branches, and the
 * spiky pom-pom clusters that give Joshua trees their signature.
 */
function JoshuaTree({
  x,
  y,
  scale = 1,
}: {
  x: number;
  y: number;
  scale?: number;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill="#1A1612"
      stroke="#1A1612"
    >
      {/* Main trunk - slightly tapered, organic */}
      <path
        d="M -8,0 L -7,-90 Q -6,-130 -3,-160 L 3,-160 Q 6,-130 7,-90 L 8,0 Z"
        strokeWidth="0"
      />

      {/* Left branch */}
      <path
        d="M -4,-110 Q -32,-128 -55,-160 Q -62,-172 -58,-180"
        fill="none"
        strokeWidth="11"
        strokeLinecap="round"
      />
      {/* Left branch - sub-branch */}
      <path
        d="M -42,-152 Q -52,-148 -65,-138"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Right branch */}
      <path
        d="M 4,-130 Q 28,-150 48,-185 Q 54,-198 50,-208"
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Right upper-branch */}
      <path
        d="M 2,-150 Q 14,-180 18,-220"
        fill="none"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Pom-pom clusters at branch tips - spiky polygon stars */}
      <Cluster cx={-58} cy={-185} r={18} />
      <Cluster cx={-67} cy={-140} r={14} />
      <Cluster cx={50} cy={-215} r={20} />
      <Cluster cx={18} cy={-230} r={17} />
      {/* Crown cluster */}
      <Cluster cx={0} cy={-175} r={16} />
    </g>
  );
}

/**
 * A spiky cluster (Joshua tree "leaves") drawn as a small star polygon
 * with extra short radial spikes for organic texture.
 */
function Cluster({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  // Star polygon with 10 points alternating between r and r*0.5
  const points: string[] = [];
  const spikes = 12;
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.55;
    points.push(
      `${(cx + Math.cos(angle) * radius).toFixed(1)},${(cy + Math.sin(angle) * radius).toFixed(1)}`
    );
  }
  return (
    <g>
      <polygon points={points.join(" ")} fill="#1A1612" />
      {/* Extra subtle spikes for organic feel */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * Math.PI) / 3;
        const x2 = cx + Math.cos(a) * r * 1.25;
        const y2 = cy + Math.sin(a) * r * 1.25;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
            stroke="#1A1612"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}
