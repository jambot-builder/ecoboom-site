import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-desert palette - muted, dusty, editorial.
        // Reference points: Joshua Tree House, La Copine, Mojave Sands.
        bone: "#F2ECE2",        // background - warm bone / unbleached paper
        moonlight: "#FAF6EE",   // lightest, for hero washes
        sand: "#E4D9C5",        // soft sand divider
        stone: "#CFC2A9",       // mid sand - secondary surfaces
        clay: "#A8654A",        // muted dusty clay - editorial italic accent
        clayDeep: "#7E4632",    // hover state for clay
        cactus: "#697061",      // muted sage / dusty olive
        cactusDeep: "#4E5448",  // darker sage
        // Brand green - exact value from the EcoBoom logo wordmark.
        ecoGreen: "#84BA40",
        ecoGreenDeep: "#5C822D",
        ink: "#1A1612",         // primary text / dark sections
        smoke: "#4F4940",       // secondary text
        dust: "#8A8276",        // tertiary text, captions
        line: "#D9CFBE",        // hairline rules
      },
      fontFamily: {
        // Wired up in src/app/layout.tsx via next/font.
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        wordmark: ["var(--font-wordmark)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.12em",
        widest: "0.22em",
      },
      maxWidth: {
        prose: "62ch",
        container: "1240px",
        narrow: "780px",
      },
      fontSize: {
        // A more editorial scale.
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.22em" }],
      },
    },
  },
  plugins: [],
};

export default config;
