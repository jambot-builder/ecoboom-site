import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/data/services";
import { LogoMark } from "./Logo";

type Props = {
  service: Service;
};

export default function ServicePage({ service }: Props) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="container-page pt-20 pb-16 sm:pt-28">
        <p className="eyebrow">Services / {service.shortTitle}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          {service.title}
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
          {service.blurb}
        </p>
      </section>

      <div className="container-page">
        <div className="hairline" />
      </div>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/50">
              {service.image ? (
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone/60 via-sand/40 to-bone" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-clay/10 to-cactus/15" />
                  <div className="absolute inset-6 border border-ink/[0.06]" />
                  <div className="absolute right-8 top-8 opacity-15">
                    <LogoMark size={120} color="#1A1612" />
                  </div>
                  <p className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-smoke">
                    {service.shortTitle}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">What we deliver</p>
            <ul className="mt-6 space-y-4 text-smoke">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-baseline gap-3 border-b border-line/60 pb-4 last:border-0"
                >
                  <span className="font-mono text-[0.65rem] text-clay">—</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-narrow">
          <p className="eyebrow">How we approach it</p>
          <p className="mt-8 font-display text-2xl italic leading-relaxed text-ink sm:text-3xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-20 sm:py-24">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-eyebrow uppercase tracking-widest text-stone">
                Next step
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
                Tell us about the show.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/quote"
                className="btn bg-bone text-ink hover:bg-clay hover:text-bone"
              >
                Request a Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <p className="eyebrow">Other services</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group flex h-full flex-col justify-between border border-line/60 p-6 transition-colors hover:border-ink"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-dust">
                    {s.shortTitle}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                    {s.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-6 text-dust transition-colors group-hover:text-clay"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
