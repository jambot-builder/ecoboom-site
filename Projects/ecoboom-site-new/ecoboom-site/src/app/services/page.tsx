import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Audio, event power, generators, and production support - designed for the California desert and the productions that come through it.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pt-20 pb-16 sm:pt-28">
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          Four things, <span className="italic text-clay">done well.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
          We&rsquo;re a boutique rental house with deep expertise in audio,
          generators, and event power. Each of our service lines is run by
          people who&rsquo;ve done the call sheets, eaten the dust, and
          loaded out at 4am. That&rsquo;s the difference.
        </p>
      </section>

      <div className="container-page">
        <div className="hairline" />
      </div>

      <section className="container-page py-16 sm:py-24">
        <ul className="divide-y divide-line/70">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group grid items-start gap-8 py-12 md:grid-cols-12 md:gap-12"
              >
                <div className="md:col-span-1">
                  <p className="font-mono text-xs uppercase tracking-widest text-dust">
                    0{i + 1}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-display text-3xl leading-tight text-ink transition-colors group-hover:text-clay sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-prose text-smoke">{s.blurb}</p>
                </div>
                <div className="md:col-span-4">
                  <ul className="space-y-2 text-sm text-smoke">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li
                        key={b}
                        className="flex items-baseline gap-3 before:font-mono before:text-[0.65rem] before:text-clay before:content-['-']"
                      >
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-smoke transition-colors group-hover:text-clay">
                    Read more
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
