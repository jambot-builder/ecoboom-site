/**
 * Hand-built SVG: how the EcoBoom hybrid event power system works.
 *
 * Left:   Diesel generator (passive, only fires to top up)
 *  → arrow with "tops up" label
 * Center: Battery bank (the workhorse - runs the show)
 *  → arrow with "powers the show" label
 * Right:  The show (audio, lights, distro)
 *
 * Designed to be self-explanatory in a single glance. Color-coded:
 *   - diesel = ink (muted, secondary)
 *   - battery = ecoGreen (primary)
 *   - show = stone
 */
export default function HybridSystemDiagram({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1000 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram: diesel generator tops up a battery bank, which powers the show - using ~90% less fuel"
      className={className}
    >
      <defs>
        <linearGradient id="hsd-battery" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#84BA40" />
          <stop offset="100%" stopColor="#5C822D" />
        </linearGradient>
        <linearGradient id="hsd-charge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#84BA40" />
          <stop offset="100%" stopColor="#84BA40" />
        </linearGradient>
        <marker
          id="hsd-arrow-ink"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#1A1612" />
        </marker>
        <marker
          id="hsd-arrow-green"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#84BA40" />
        </marker>
      </defs>

      {/* ─── Diesel generator (left) ─── */}
      <g transform="translate(60 100)">
        {/* Trailer base */}
        <rect x="0" y="170" width="240" height="14" fill="#1A1612" />
        <circle cx="40" cy="190" r="14" fill="#1A1612" />
        <circle cx="200" cy="190" r="14" fill="#1A1612" />
        {/* Body */}
        <rect
          x="10"
          y="20"
          width="220"
          height="150"
          rx="8"
          fill="#FAF6EE"
          stroke="#1A1612"
          strokeWidth="3"
        />
        {/* Vents */}
        <rect x="30" y="40" width="60" height="12" rx="2" fill="#1A1612" opacity="0.15" />
        <rect x="30" y="58" width="60" height="12" rx="2" fill="#1A1612" opacity="0.15" />
        <rect x="30" y="76" width="60" height="12" rx="2" fill="#1A1612" opacity="0.15" />
        {/* Control panel */}
        <rect x="110" y="40" width="100" height="60" rx="4" fill="#1A1612" />
        <circle cx="135" cy="58" r="4" fill="#84BA40" />
        <circle cx="155" cy="58" r="4" fill="#FAF6EE" opacity="0.6" />
        <circle cx="175" cy="58" r="4" fill="#FAF6EE" opacity="0.4" />
        <rect x="120" y="74" width="80" height="18" rx="2" fill="#FAF6EE" opacity="0.1" />
        {/* Exhaust */}
        <rect x="170" y="0" width="14" height="30" fill="#1A1612" />
        <path
          d="M165,-5 Q175,-25 185,-10 Q190,5 175,0 Z"
          fill="#1A1612"
          opacity="0.15"
        />
        {/* Label */}
        <text
          x="120"
          y="218"
          textAnchor="middle"
          fontFamily="var(--font-wordmark), Quicksand, sans-serif"
          fontWeight="600"
          fontSize="22"
          fill="#1A1612"
        >
          Diesel
        </text>
        <text
          x="120"
          y="242"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="2"
          fill="#8A8276"
        >
          IDLES · TOPS UP ONLY
        </text>
      </g>

      {/* ─── Connector: diesel → battery ─── */}
      <g>
        <path
          d="M310,200 Q360,200 410,200"
          fill="none"
          stroke="#1A1612"
          strokeWidth="3"
          strokeDasharray="2 8"
          markerEnd="url(#hsd-arrow-ink)"
        />
        <text
          x="360"
          y="186"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="2"
          fill="#8A8276"
        >
          TOPS UP
        </text>
      </g>

      {/* ─── Battery bank (center) ─── */}
      <g transform="translate(420 100)">
        {/* Main body */}
        <rect
          x="0"
          y="20"
          width="240"
          height="200"
          rx="10"
          fill="url(#hsd-battery)"
          stroke="#5C822D"
          strokeWidth="3"
        />
        {/* Top terminals */}
        <rect x="40" y="6" width="40" height="14" rx="3" fill="#5C822D" />
        <rect x="160" y="6" width="40" height="14" rx="3" fill="#5C822D" />
        {/* Battery cells - three banks */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${20 + i * 72} 50)`}>
            <rect
              x="0"
              y="0"
              width="60"
              height="150"
              rx="4"
              fill="#FAF6EE"
              opacity="0.95"
            />
            {/* Charge bars */}
            {[0, 1, 2, 3, 4, 5].map((j) => (
              <rect
                key={j}
                x="6"
                y={10 + j * 22}
                width="48"
                height="14"
                rx="2"
                fill="url(#hsd-charge)"
                opacity={j >= 5 - i ? 0.35 : 0.95}
              />
            ))}
          </g>
        ))}
        {/* Label */}
        <text
          x="120"
          y="252"
          textAnchor="middle"
          fontFamily="var(--font-wordmark), Quicksand, sans-serif"
          fontWeight="700"
          fontSize="26"
          fill="#1A1612"
        >
          Battery Bank
        </text>
        <text
          x="120"
          y="276"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="2"
          fill="#5C822D"
        >
          RUNS THE SHOW
        </text>
      </g>

      {/* ─── Connector: battery → show ─── */}
      <g>
        <path
          d="M670,200 Q720,200 770,200"
          fill="none"
          stroke="#84BA40"
          strokeWidth="4"
          markerEnd="url(#hsd-arrow-green)"
        />
        <text
          x="720"
          y="186"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="2"
          fill="#5C822D"
        >
          POWER
        </text>
      </g>

      {/* ─── The Show (right) ─── */}
      <g transform="translate(780 100)">
        {/* Stage base */}
        <rect x="0" y="170" width="170" height="10" fill="#1A1612" />
        {/* Line array hang */}
        <g transform="translate(15 30)">
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x="0"
              y={i * 22}
              width="50"
              height="18"
              rx="2"
              fill="#1A1612"
            />
          ))}
        </g>
        {/* Right speaker stack */}
        <g transform="translate(105 30)">
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x="0"
              y={i * 22}
              width="50"
              height="18"
              rx="2"
              fill="#1A1612"
            />
          ))}
        </g>
        {/* Light beams */}
        <path
          d="M40,30 L 0,170 L 40,170 Z"
          fill="#F1C48A"
          opacity="0.25"
        />
        <path
          d="M130,30 L 170,170 L 130,170 Z"
          fill="#F1C48A"
          opacity="0.25"
        />
        {/* Label */}
        <text
          x="85"
          y="208"
          textAnchor="middle"
          fontFamily="var(--font-wordmark), Quicksand, sans-serif"
          fontWeight="600"
          fontSize="22"
          fill="#1A1612"
        >
          The Show
        </text>
        <text
          x="85"
          y="232"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="2"
          fill="#8A8276"
        >
          AUDIO · LIGHTS · DISTRO
        </text>
      </g>

      {/* Bottom stat */}
      <g transform="translate(0 360)">
        <line
          x1="60"
          y1="0"
          x2="940"
          y2="0"
          stroke="#D9CFBE"
          strokeWidth="1"
        />
        <text
          x="500"
          y="32"
          textAnchor="middle"
          fontFamily="var(--font-display), Georgia, serif"
          fontSize="20"
          fill="#1A1612"
        >
          Result:{" "}
          <tspan fill="#5C822D" fontWeight="600">
            ~90% less fuel
          </tspan>{" "}
          ·{" "}
          <tspan fill="#5C822D" fontWeight="600">
            near-silent operation
          </tspan>{" "}
          ·{" "}
          <tspan fill="#5C822D" fontWeight="600">
            same uptime
          </tspan>
        </text>
      </g>
    </svg>
  );
}
