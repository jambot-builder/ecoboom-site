import InventoryGrid from "@/components/InventoryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory",
  description:
    "A working catalog of audio, generators, distro, and event power gear available from EcoBoom.",
};

export default function InventoryPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 sm:pt-28 sm:pb-16">
        <p className="eyebrow">Inventory</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          The catalog.
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
          A working list of what we own — audio packages, generators, distro,
          and the bits in between. For anything you need that&rsquo;s not on
          here, ask us. Quantities, photos, and the full spec sheets are
          available on request.
        </p>
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <InventoryGrid />
      </section>
    </>
  );
}
