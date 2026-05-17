import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Volume2, Truck, Wrench } from "lucide-react";
import { inventory } from "@/data/inventory";
import { site } from "@/data/site";
import InventoryCard from "@/components/InventoryCard";
import HybridSystemDiagram from "@/components/illustrations/HybridSystemDiagram";
import { images } from "@/data/images";

const HERO_PHOTO =
  "https://3ca9a566.delivery.rocketcdn.me/wp-content/uploads/2016/10/leopard-inuse.jpg.webp";

const pillars = [
  {
    icon: Volume2,
    title: "Audio Systems",
    blurb:
      "Meyer Sound, L-Acoustics, QSC, and VUE - ground-stacked rigs and flown arrays sized to your stage.",
    href: "/services/audio",
  },
  {
    icon: Zap,
    title: "Hybrid Event Power",
    blurb:
      "Battery + diesel piggyback systems that cut fuel use by ~90%. Same uptime, far less waste.",
    href: "/services/power",
  },
  {
    icon: Truck,
    title: "EVs & Charging",
    blurb:
      "Electric cargo vans, passenger vehicles, and on-site DC fast charging for fleet productions.",
    href: "/inventory",
  },
  {
    icon: Wrench,
    title: "Production Support",
    blurb:
      "Load calcs, distro, on-site techs through showcall. We sit in the trailer with you.",
    href: "/services/film-production",
  },
];

export default function HomePage() {
  // Pull featured items from each major category for the grid below.
  const featured = [
    inventory.find((i) => i.id === "battery-moxion-600"),
    inventory.find((i) => i.id === "audio-meyer-tigra"),
    inventory.find((i) => i.id === "battery-cleangen-j250"),
    inventory.find((i) => i.id === "audio-lacoustics-kara"),
    inventory.find((i) => i.id === "charging-l3d3"),
    inventory.find((i) => i.id === "lighting-e-plt"),
  ].filter(Boolean) as NonNullable<(typeof inventory)[number]>[];

  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden border-b border-line/60">
        <div className="container-page grid items-stretch gap-0 md:grid-cols-12">
          <div className="flex flex-col justify-center py-16 md:col-span-6 md:py-24 md:pr-12">
            <p className="eyebrow">
              Hybrid power · Audio · Production support
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Clean power.{" "}
              <span className="text-ecoGreenDeep">Big sound.</span>{" "}
              Every show.
            </h1>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
              EcoBoom is the rental partner for film, festival, and live event
              productions across California. We pair massive battery systems
              with diesel generators to cut fuel use by roughly 90%, and we
              bring the audio rigs, distro, EVs, and on-site techs that make
              your show run.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-wordmark text-sm font-semibold text-bone transition-colors hover:bg-ecoGreenDeep"
              >
                Request a Quote
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/inventory"
                className="inline-flex items-center gap-2 border border-ink/15 px-6 py-3.5 font-wordmark text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Browse Inventory
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-6 md:min-h-[560px]">
            <div className="relative aspect-[4/5] w-full md:absolute md:inset-0 md:aspect-auto">
              <Image
                src={HERO_PHOTO}
                alt="Meyer Sound LEOPARD line array deployed at a live event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── STATS STRIP ─────────── */}
      <section className="border-b border-line/60 bg-bone">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 md:gap-12">
          <Stat
            value="~90%"
            label="Avg. fuel reduction with hybrid power"
          />
          <Stat
            value="500+ kWh"
            label="Mobile battery capacity on tap"
          />
          <Stat
            value="Zero"
            label="Compromise on showcall uptime"
          />
          <Stat value="HQ" label="Yucca Valley · Serving CA + beyond" />
        </div>
      </section>

      {/* ─────────── CAPABILITY PILLARS ─────────── */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              The full stack for any production.
            </h2>
          </div>
          <p className="md:col-span-5 text-smoke">
            We&rsquo;re a boutique rental house - but with the inventory and
            expertise of a much larger operation. Four core capabilities, all
            with the same crew running them.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col gap-6 bg-bone p-8 transition-colors hover:bg-moonlight"
            >
              <p.icon
                size={32}
                strokeWidth={1.4}
                className="text-ecoGreenDeep"
              />
              <div className="flex-1">
                <h3 className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-ecoGreenDeep">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">
                  {p.blurb}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-dust transition-colors group-hover:text-ecoGreenDeep">
                Learn more
                <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── HYBRID POWER DIFFERENTIATOR ─────────── */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <Image
          src={images.hybridSystem.src}
          alt={images.hybridSystem.alt}
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />

        <div className="relative container-page py-20 sm:py-28">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-eyebrow uppercase tracking-widest text-ecoGreen">
                Why EcoBoom
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl leading-[1.05] sm:text-6xl">
                Hybrid power that runs on{" "}
                <span className="text-ecoGreen">~90% less fuel.</span>
              </h2>
              <p className="mt-8 max-w-prose text-lg leading-relaxed text-stone/90">
                Most rental houses hand you a diesel generator and walk away.
                We piggyback massive battery systems onto the diesel - the
                show runs almost entirely off stored energy, and the diesel
                only fires when the batteries need a top-up. Quieter set.
                Cleaner air. Real cost savings. Same uptime.
              </p>
              <Link
                href="/sustainability"
                className="mt-10 inline-flex items-center gap-2 border-b border-stone/40 pb-1 font-wordmark text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:border-bone"
              >
                How the hybrid systems work
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS DIAGRAM ─────────── */}
      <section className="border-b border-line/60 bg-moonlight">
        <div className="container-page py-16 sm:py-24">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">How it works</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Battery up front. Diesel only when needed.
              </h2>
            </div>
            <div className="md:col-span-5 text-smoke">
              The battery bank runs the show. The diesel generator only fires
              briefly, at peak efficiency, to top up - never idling, never
              overproducing. That&rsquo;s where the ~90% comes from.
            </div>
          </div>
          <div className="mt-12">
            <HybridSystemDiagram className="h-auto w-full" />
          </div>
          <div className="mt-8">
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 font-wordmark text-sm font-medium uppercase tracking-wider text-smoke hover:text-ink"
            >
              The full sustainability story
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── FEATURED INVENTORY ─────────── */}
      <section className="container-page py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6 border-b border-line/60 pb-8">
          <div>
            <p className="eyebrow">From the catalog</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Selected inventory.
            </h2>
          </div>
          <Link
            href="/inventory"
            className="hidden shrink-0 items-center gap-2 font-wordmark text-sm font-medium uppercase tracking-wider text-smoke hover:text-ink sm:inline-flex"
          >
            View full catalog
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <InventoryCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 sm:hidden">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 font-wordmark text-sm font-medium uppercase tracking-wider text-smoke hover:text-ink"
          >
            View full catalog
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─────────── CREDIBILITY ─────────── */}
      <section className="border-y border-line/60 bg-moonlight">
        <div className="container-page py-16 sm:py-20">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Trusted on set</p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Production crews call us back.
              </h3>
            </div>
            <p className="md:col-span-8 text-smoke">
              We work with line producers, festival operators, and location
              managers across the California desert, the L.A. basin, and the
              Coachella Valley. Indie shoots, brand activations, fashion
              weeks, music festivals - we know the cadence, the permits, and
              the people. {site.credibility.note}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Let&rsquo;s talk</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-6xl">
              Tell us about your show.
              <br />
              <span className="text-ecoGreenDeep">We&rsquo;ll handle the rest.</span>
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
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl leading-none text-ink sm:text-5xl">
        {value}
      </p>
      <p className="mt-3 max-w-[20ch] text-xs uppercase tracking-widest text-dust">
        {label}
      </p>
    </div>
  );
}
