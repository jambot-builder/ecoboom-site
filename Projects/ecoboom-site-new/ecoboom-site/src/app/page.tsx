import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { inventory } from "@/data/inventory";
import { site } from "@/data/site";
import DesertHero from "@/components/illustrations/DesertHero";
import InventoryCard from "@/components/InventoryCard";
import { images } from "@/data/images";

export default function HomePage() {
  const featuredInventory = inventory.slice(0, 6);

  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="container-page pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="eyebrow">
              Hybrid Power · Audio · Production Support
            </p>
            <h1 className="mt-8 font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
              From the high desert.
              <br />
              <span className="italic text-clay">Built for the show.</span>
            </h1>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
              {site.positioning.long}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/quote" className="btn-primary">
                Request a Quote
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/services" className="btn-ghost">
                What we do
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Hand-built SVG hero - Joshua tree desert horizon at dusk.
                Swap to a real photograph here when one is available. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <DesertHero className="absolute inset-0 h-full w-full" />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-dust">
              {site.contact.location} - serving the desert &amp; beyond
            </p>
          </div>
        </div>
      </section>

      <div className="container-page">
        <div className="hairline" />
      </div>

      {/* ─────────── SERVICES ─────────── */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Four things, done well.
            </h2>
            <p className="mt-6 max-w-prose text-smoke">
              We&rsquo;re a boutique rental house. We don&rsquo;t try to be
              everything to everyone - we&rsquo;re focused on the categories
              where deep expertise actually changes the outcome.
            </p>
          </div>

          <div className="md:col-span-8">
            <ul className="divide-y divide-line/70">
              {services.map((s, i) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="group flex items-start justify-between gap-8 py-8 first:pt-0"
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-dust">
                        0{i + 1}
                      </p>
                      <h3 className="mt-2 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-clay sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-prose text-smoke">{s.blurb}</p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-2 shrink-0 text-dust transition-colors group-hover:text-clay"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── POWER DIFFERENTIATOR ─────────── */}
      <section className="relative overflow-hidden bg-ink text-bone">
        {/* Background image, dimmed */}
        <Image
          src={images.hybridSystem.src}
          alt={images.hybridSystem.alt}
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-25 mix-blend-luminosity"
          priority={false}
        />
        {/* Dark wash to keep text readable on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

        <div className="relative container-page py-24 sm:py-32">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-eyebrow uppercase tracking-widest text-ecoGreen">
                The difference
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl leading-[1.05] sm:text-6xl">
                Hybrid event power that runs on{" "}
                <span className="italic text-ecoGreen">~90% less fuel.</span>
              </h2>
              <p className="mt-8 max-w-prose text-lg leading-relaxed text-stone/90">
                We piggyback massive battery systems onto our generators. The
                show runs almost entirely off stored energy - the diesel only
                fires when the batteries need a top-up. The result is a
                quieter set, dramatically lower emissions, and an average
                fuel reduction of ninety percent across our deployments.
                Same uptime. Far less waste.
              </p>

              {/* Stat strip */}
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone/20 pt-8 sm:gap-12">
                <Stat value="~90%" label="Avg. fuel reduction" />
                <Stat value="Quiet" label="Diesel idles, not runs" />
                <Stat value="Zero" label="Compromise on uptime" />
              </dl>

              <Link
                href="/services/power"
                className="mt-12 inline-flex items-center gap-2 border-b border-stone/40 pb-1 font-body text-sm uppercase tracking-wider text-bone transition-colors hover:border-bone"
              >
                See how the hybrid systems work
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── INVENTORY PEEK ─────────── */}
      <section className="container-page py-24 sm:py-32">
        <div className="flex items-end justify-between gap-6 border-b border-line/70 pb-8">
          <div>
            <p className="eyebrow">From the catalog</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Selected inventory
            </h2>
          </div>
          <Link
            href="/inventory"
            className="hidden shrink-0 items-center gap-2 font-body text-sm uppercase tracking-wider text-smoke hover:text-ink sm:inline-flex"
          >
            View full catalog
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredInventory.map((item) => (
            <InventoryCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 sm:hidden">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-smoke hover:text-ink"
          >
            View full catalog
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─────────── STORY / CREDIBILITY ─────────── */}
      <section className="bg-sand/50">
        <div className="container-page py-24 sm:py-32">
          <div className="mx-auto max-w-narrow text-center">
            <p className="eyebrow">{site.credibility.headline}</p>
            <p className="mt-8 font-display text-3xl italic leading-snug text-ink sm:text-4xl">
              &ldquo;We don&rsquo;t just rent gear. We&rsquo;re the people you
              call when the show has to happen - and you need someone who knows
              the desert, knows the gear, and knows how to make it land.&rdquo;
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-dust">
              {site.credibility.note}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Let&rsquo;s talk</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-6xl">
              Tell us about your show. We&rsquo;ll{" "}
              <span className="italic text-clay">handle the rest.</span>
            </h2>
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl leading-none text-bone sm:text-5xl">
        {value}
      </dt>
      <dd className="mt-3 font-mono text-[0.65rem] uppercase tracking-widest text-stone/70">
        {label}
      </dd>
    </div>
  );
}
