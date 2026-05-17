import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { LogoMark } from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Audio systems, hybrid event power, generators, and production support - designed for film, festival, and live event productions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 sm:pt-28 sm:pb-16">
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-7xl">
          Four things,{" "}
          <span className="text-ecoGreenDeep">done well.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
          We&rsquo;re a boutique rental house with deep expertise in audio,
          generators, and hybrid event power.
        </p>
      </section>

      <div className="container-page">
        <div className="hairline" />
      </div>

      <section className="container-page py-16 sm:py-24">
        <ul className="grid gap-px overflow-hidden border border-line/60 bg-line/60 md:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group flex h-full flex-col bg-bone transition-colors hover:bg-moonlight"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/40">
                  {s.image ? (
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-stone/60 via-sand/40 to-bone" />
                      <div className="absolute right-6 top-6 opacity-15">
                        <LogoMark size={80} color="#1A1612" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1 p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-ecoGreenDeep">
                    0{i + 1} · {s.shortTitle}
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-ecoGreenDeep">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-prose text-smoke">{s.blurb}</p>
                  <ul className="mt-6 space-y-2 text-sm text-smoke">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-smoke transition-colors group-hover:text-ecoGreenDeep">
                    Read more
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line/60 bg-moonlight">
        <div className="container-page py-16 sm:py-20">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow">All four, one crew</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                One call. Audio, power, gear, and crew handled.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-wordmark text-sm font-semibold text-bone transition-colors hover:bg-ecoGreenDeep"
              >
                Request a Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
