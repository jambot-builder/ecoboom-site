"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/inventory", label: "INVENTORY" },
  { href: "/sustainability", label: "SUSTAINABILITY" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {links.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={[
                "relative inline-flex items-center px-4 py-2 font-wordmark text-base font-medium transition-colors",
                active ? "text-ink" : "text-smoke hover:text-ink",
              ].join(" ")}
            >
              {item.label}
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-ecoGreen"
                />
              )}
            </Link>
          </li>
        );
      })}
      <li>
        <Link
          href="/quote"
          className="ml-3 inline-flex items-center bg-ink px-5 py-2.5 font-wordmark text-sm font-semibold text-bone transition-colors hover:bg-ecoGreenDeep"
        >
          QUOTE
        </Link>
      </li>
    </ul>
  );
}
