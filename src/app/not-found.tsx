import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/Logo";

export const metadata = {
  title: "Page not found",
};

const suggestions = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/inventory", label: "Inventory" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/quote", label: "Request a Quote" },
];

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center py-24">
      <div className="opacity-30">
        <LogoMark size={64} color="#1A1612" />
      </div>
      <p className="mt-10 eyebrow">404</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-7xl">
        That page is off the call sheet.
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-smoke">
        We can&rsquo;t find what you were looking for. It might have moved,
        or the link might be wrong. Pick a destination below - or get in
        touch and we&rsquo;ll help you find what you need.
      </p>
      <ul className="mt-10 flex flex-wrap gap-3">
        {suggestions.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="inline-flex items-center gap-2 border border-ink/15 px-5 py-2.5 font-wordmark text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
            >
              {s.label}
              <ArrowUpRight size={14} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
