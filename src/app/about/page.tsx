import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "EcoBoom is the rental partner for film, festival, and live event productions - built around hybrid event power.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 pb-16 sm:pt-28">
        <p className="eyebrow">About</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-7xl">
          The rental partner built around{" "}
          <span className="text-ecoGreenDeep">cleaner event power.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
          EcoBoom started as a production company supporting events, film,
          and locations. Today, it&rsquo;s the rental house productions
          call when they want the gear, the expertise, and a crew that knows
          the show.
        </p>
      </section>

      <div className="container-page">
        <div className="hairline" />
      </div>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={images.bts.src}
                alt={images.bts.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/30" />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-dust">
              On location - hybrid power, quietly humming
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">Who we are</p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-smoke">
              <p>
                We grew up doing this work - building stages, sizing
                generators, designing audio rigs, troubleshooting power at 2am
                when the show had to go on. EcoBoom was born out of years of
                that at the highest level for the productions that come
                through California.
              </p>
              <p>
                We&rsquo;re a rental house first, but the production instinct
                is the real advantage. We know what a production manager
                needs because we&rsquo;ve been in the trailer next door. We
                know how to make a remote site work because we&rsquo;ve done
                the recon ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-20 sm:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-eyebrow uppercase tracking-widest text-ecoGreen">
                Where we work
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-stone/90">
              <p>
                We&rsquo;re based in Yucca Valley, and the bulk of our work
                runs the California corridor - Los Angeles down to the
                Coachella Valley and through Palm Springs. We&rsquo;re close
                enough to L.A. to make same-day turnarounds, and a short call
                from Indio and the festival grounds.
              </p>
              <p>
                For productions coming through - feature shoots, brand
                activations, fashion weeks, music festivals -
                we&rsquo;re the local who already knows the venue, the
                permits, and the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-narrow">
          <p className="eyebrow text-center">What we believe</p>
          <p className="mt-8 text-center font-display text-3xl leading-snug text-ink sm:text-4xl">
            Productions can be powered cleanly without losing reliability.
            That&rsquo;s the point of EcoBoom - not a marketing angle, but
            the way we actually run the work.
          </p>
          <div className="mt-12 space-y-6 text-lg leading-relaxed text-smoke">
            <p>
              Our hybrid power systems pair big battery banks with smart
              diesel generators. The show runs off stored energy almost
              entirely. The diesel only kicks in to top up the batteries
              when it needs to. The math is dramatic: on average, our
              deployments use about 90% less fuel than a comparably-sized
              traditional generator run.
            </p>
            <p>
              That means cleaner air for crew, near-silent sets, and a real
              cost saving for the production. None of which requires anyone
              to compromise on uptime.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Got a production?{" "}
              <span className="text-ecoGreenDeep">Let&rsquo;s talk.</span>
            </h2>
            <p className="mt-4 max-w-prose text-smoke">
              <a href={`mailto:${site.contact.email}`} className="link-clay">
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
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-wordmark text-sm font-semibold text-bone transition-colors hover:bg-ecoGreenDeep"
            >
              Request a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
