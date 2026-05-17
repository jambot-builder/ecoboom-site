import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/inventory", label: "Inventory" },
  { href: "/quote", label: "Request a Quote" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bone/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Logo variant="light" height={32} />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body uppercase tracking-wider text-smoke transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile: keep simple - link to quote directly. */}
        <div className="md:hidden">
          <Link
            href="/quote"
            className="text-eyebrow uppercase tracking-widest text-ink"
          >
            Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
