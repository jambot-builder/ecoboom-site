import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { inventory } from "@/data/inventory";
import { site } from "@/data/site";

export default function HomePage() {
  const featuredInventory = inventory.slice(0, 6);

  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="container-page pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="eyebrow">
              Audio · Event Power · Production Support
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
            <div className="placeholder-image aspect-[4/5] w-full">
              {/* Replace with a single, beautifully composed hero photo:
                  desert dusk, stage being loaded in, or a clean shot of a
                  ground-stacked rig in landscape. */}
              <span className="font-mono text-xs uppercase tracking-widest">
                Hero photo
              </span>
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-dust">
              {site.contact.location} — serving the desert &amp; beyond
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
              everything to everyone — we&rsquo;re focused on the categories
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
      <section className="bg-ink text-bone">
        <div className="container-page py-24 sm:py-32">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-eyebrow uppercase tracking-widest text-stone">
                The difference
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                We are <span className="italic text-stone">specialists</span>
                {" "}in temporary and event power.
              </h2>
              <p className="mt-8 max-w-prose text-lg leading-relaxed text-stone/90">
                Most rental houses can deliver gear. Far fewer can sit down
                with a production manager, work the load calc, lay out distro
                for a clean ground rig, and stand on site through showcall.
                That&rsquo;s the work we&rsquo;re built for. It&rsquo;s why
                line producers, festival operators, and location managers keep
                calling.
              </p>
              <Link
                href="/services/power"
                className="mt-10 inline-flex items-center gap-2 border-b border-stone/40 pb-1 font-body text-sm uppercase tracking-wider text-bone transition-colors hover:border-bone"
              >
                See our power capabilities
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
            <article key={item.id} className="group">
              <div className="placeholder-image aspect-[5/4] w-full">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest">
                  {item.brand} · {item.name}
                </span>
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-dust">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-xl leading-snug text-ink">
                {item.brand} — {item.name}
              </h3>
              <p className="mt-2 text-sm text-smoke">{item.spec}</p>
            </article>
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
              call when the show has to happen — and you need someone who knows
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
