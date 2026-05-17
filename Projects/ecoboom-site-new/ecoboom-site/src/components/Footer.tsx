import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line/60 bg-bone">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl leading-tight text-ink">
              {site.name}
            </p>
            <p className="mt-4 max-w-prose text-smoke">
              {site.positioning.short}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 text-smoke">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-ink"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-ink"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li>{site.contact.location}</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Visit</p>
            <ul className="mt-4 space-y-2 text-smoke">
              <li>
                <Link href="/services" className="hover:text-ink">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="hover:text-ink">
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-ink">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-smoke">
              <li>
                <a
                  href={site.social.instagram}
                  className="hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  className="hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-line/60 pt-8 text-sm text-dust md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono text-xs">{site.contact.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
