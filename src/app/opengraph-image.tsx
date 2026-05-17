import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = `${site.name} - ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic Open Graph image. Renders as a 1200×630 PNG when any social
 * platform fetches the OG metadata for a page on this site.
 *
 * Built with next/og's ImageResponse - JSX in, PNG out. No external
 * dependencies. The font defaults to system fonts at the edge, which is
 * fine for an OG card (loud, simple, readable).
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F2ECE2",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(132,186,64,0.15), transparent 50%), radial-gradient(circle at 15% 85%, rgba(168,101,74,0.10), transparent 60%)",
        }}
      >
        {/* Top - target mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="84" height="68" viewBox="0 0 70 56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#84BA40" strokeWidth="7" strokeLinejoin="round">
              <rect x="4" y="4" width="62" height="48" rx="14" />
              <rect x="20" y="16" width="30" height="24" rx="6" />
            </g>
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 64, fontWeight: 800, letterSpacing: -2 }}>
            <span style={{ color: "#84BA40" }}>eco</span>
            <span style={{ color: "#1A1612" }}>boom</span>
          </div>
        </div>

        {/* Middle - big headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <p
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8A8276",
              margin: 0,
            }}
          >
            Hybrid Power · Audio · Production
          </p>
          <p
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#1A1612",
              margin: 0,
              maxWidth: 940,
              letterSpacing: -2,
            }}
          >
            Clean power. <span style={{ color: "#5C822D" }}>Big sound.</span> Every show.
          </p>
        </div>

        {/* Bottom - URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#4F4940",
          }}
        >
          <span>{site.domain}</span>
          <span style={{ color: "#84BA40", fontWeight: 700 }}>
            ~90% less fuel
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
