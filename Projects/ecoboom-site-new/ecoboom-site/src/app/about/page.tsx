import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "EcoBoom is a high-desert rental house for film, festival, and live production — built on years of event power and audio expertise.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 pb-16 sm:pt-28">
        <p className="eyebrow">About</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          A boutique rental house,{" "}
          <span className="italic text-clay">built in the desert.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
          EcoBoom started as a production company supporting events, film,
          and locations. Today, it&rsquo;s the rental partner for productions
          that want the gear, the expertise, and the people who know what
          the show actually needs.
        </p>
      </section>

      <div className="container-page">
        <div className="hairline" />
      </div>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="placeholder-image aspect-[4/5] w-full">
              <span className="font-mono text-xs uppercase tracking-widest">
                Portrait / crew photo
              </span>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">Who we are</p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-smoke">
              <p>
                We grew up doing this work — building stages, sizing
                generators, designing audio rigs, troubleshooting power at 2am
                when the show had to go on. EcoBoom was born out of years of
                doing that at the highest level for the productions that come
                through California.
              </p>
              <p>
                Now we&rsquo;re a rental house first, but the production
                instinct is still our advantage. We know what a riding
                production manager needs because we&rsquo;ve been in the
                trailer next door. We know how to make a remote site work
                because we&rsquo;ve done the recon ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-24 sm:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-eyebrow uppercase tracking-widest text-stone">
                Where we work
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-stone/90">
              <p>
                We&rsquo;re based in the High Desert — Yucca Valley and Joshua
                Tree country — and the bulk of our work runs the corridor
                from Los Angeles down to the Coachella Valley. We&rsquo;re a
                short call from Palm Springs, Indio, and the festival grounds,
                and we&rsquo;re close enough to L.A. to make a same-day
                turnaround possible when it needs to happen.
              </p>
              <p>
                For productions coming into the desert &mdash; whether
                that&rsquo;s a feature shoot, a brand activation, a fashion
                week, or a music festival &mdash; we&rsquo;re the local who
                already knows the venue, the permits, and the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24 sm:py-32">
        <div className="mx-auto max-w-narrow text-center">
          <p className="eyebrow">What we believe</p>
          <p className="mt-8 font-display text-3xl italic leading-snug text-ink sm:text-4xl">
            Gear is the easy part. The work is in the people who plan it,
            deliver it, and stand by it through showcall.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Building something in the desert?{" "}
              <span className="italic text-clay">Let&rsquo;s talk.</span>
            </h2>
            <p className="mt-4 max-w-prose text-smoke">
              <a
                href={`mailto:${site.contact.email}`}
                className="link-clay"
              >
                {site.contact.email}
              </a>
              {"  ·  "}
              <a
                href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                className="link-clay"
              >
                {site.contact.phone}
              </a>
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/quote" className="btn-primary">
              Request a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
