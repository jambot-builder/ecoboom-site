import Image from "next/image";
import { LogoMark } from "./Logo";
import type { InventoryItem } from "@/data/inventory";

type Props = {
  item: InventoryItem;
  aspect?: string; // tailwind aspect-* class
};

/**
 * Shared inventory card. Renders the real product photo when one is set
 * on the item, and a stylized "branded watermark" placeholder otherwise.
 * Either way the card has presence — no more sad sand-colored boxes.
 */
export default function InventoryCard({
  item,
  aspect = "aspect-[5/4]",
}: Props) {
  return (
    <article className="group">
      <div
        className={`relative w-full overflow-hidden bg-sand/50 ${aspect}`}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.brand} ${item.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <BrandedPlaceholder label={`${item.brand} · ${item.name}`} />
        )}
      </div>
      <p className="mt-5 font-mono text-xs uppercase tracking-widest text-dust">
        {item.category}
      </p>
      <h3 className="mt-2 font-display text-xl leading-snug text-ink">
        {item.brand} — {item.name}
      </h3>
      <p className="mt-2 text-sm text-smoke">{item.spec}</p>
      {item.notes && (
        <p className="mt-2 text-xs italic text-dust">{item.notes}</p>
      )}
    </article>
  );
}

/**
 * Stylized fallback when no product photo is available. Renders the
 * EcoBoom target mark as a faint watermark over a warm gradient.
 */
function BrandedPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-end justify-between p-5">
      {/* Layered background gradients for warmth and depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone/60 via-sand/30 to-bone" />
      <div className="absolute inset-0 bg-gradient-to-tr from-clay/10 via-transparent to-cactus/10" />
      <div className="absolute inset-4 border border-ink/[0.07]" />
      {/* Faint target watermark */}
      <div className="absolute right-4 top-4 opacity-15">
        <LogoMark size={64} color="#1A1612" />
      </div>
      {/* Bottom label */}
      <p className="relative z-10 font-mono text-[0.65rem] uppercase tracking-widest text-smoke">
        {label}
      </p>
    </div>
  );
}
