import Image from "next/image";
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
      {/* Editorial hero — Meyer LEO family lineup */}
      <section className="container-page pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Inventory</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
              The catalog.
            </h1>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
              A working list of what we own — audio packages, generators,
              distro, and the bits in between. Quantities, photos, and the
              full spec sheets are available on request. For anything you
              need that&rsquo;s not listed, ask us.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[5/3] w-full overflow-hidden bg-sand/50">
              <Image
                src="https://3ca9a566.delivery.rocketcdn.me/wp-content/uploads/2018/04/leo_family_toolset_header.jpg.webp"
                alt="Meyer Sound LEO family of loudspeakers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-dust">
              Photographed — Meyer Sound LEO family
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <InventoryGrid />
      </section>
    </>
  );
}
