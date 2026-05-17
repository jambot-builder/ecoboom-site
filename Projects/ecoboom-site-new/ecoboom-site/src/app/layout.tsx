import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Used by the Logo component for the wordmark. Rounded geometric sans -
// close to the original EcoBoom hand-built letterforms.
const wordmark = Nunito({
  subsets: ["latin"],
  variable: "--font-wordmark",
  display: "swap",
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.positioning.short,
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${wordmark.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
