"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/inventory", label: "Inventory" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/quote", label: "Request a Quote" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="-mr-2 inline-flex items-center justify-center p-2 text-ink hover:text-ecoGreenDeep md:hidden"
      >
        <Menu size={26} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-bone text-ink md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-20 items-center justify-between border-b border-line/60 px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label="EcoBoom - home"
              className="inline-flex items-center gap-2"
            >
              <LogoMark size={32} />
              <span className="font-wordmark text-xl font-bold text-ink">
                ecoboom
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="-mr-2 p-2 text-ink"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="container-page py-8">
            <ul className="space-y-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "flex items-center justify-between border-b border-line/60 py-5 font-display text-3xl transition-colors",
                        active ? "text-ecoGreenDeep" : "text-ink hover:text-ecoGreenDeep",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={20} className="text-dust" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 space-y-3 text-smoke">
              <p className="eyebrow">Contact</p>
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-ink"
                >
                  {site.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-ink"
                >
                  {site.contact.phone}
                </a>
              </p>
              <p className="text-sm">{site.contact.location}</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
