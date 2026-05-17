/**
 * Inventory catalog. This is placeholder seed data - the real gear list,
 * quantities, photos, and pricing should replace these entries before launch.
 *
 * Each item lists brand + model so the categories are concrete. "spec" is a
 * one-line summary; longer specs can be added later.
 */
export type Category =
  | "Audio"
  | "Power"
  | "Generators"
  | "Distro"
  | "Lighting"
  | "Misc";

export type InventoryItem = {
  id: string;
  name: string;
  brand: string;
  category: Category;
  spec: string;
  notes?: string;
};

export const categories: Category[] = [
  "Audio",
  "Power",
  "Generators",
  "Distro",
  "Lighting",
  "Misc",
];

export const inventory: InventoryItem[] = [
  // Audio
  {
    id: "audio-qsc-kla12",
    name: "KLA12 Ground-Stack System",
    brand: "QSC",
    category: "Audio",
    spec: "Active line array, ground-stack package with subs.",
    notes: "Great for brand activations and mid-sized stages.",
  },
  {
    id: "audio-lacoustics-kara",
    name: "Kara II Line Array",
    brand: "L-Acoustics",
    category: "Audio",
    spec: "Flown or ground-stacked, scalable hangs.",
  },
  {
    id: "audio-lacoustics-kiva",
    name: "Kiva II Compact System",
    brand: "L-Acoustics",
    category: "Audio",
    spec: "Discreet PA for fashion, brand, and small festival stages.",
  },
  {
    id: "audio-meyer-leopard",
    name: "LEOPARD Line Array",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "Self-powered line array with 900-LFC subs.",
  },
  {
    id: "audio-meyer-ulti",
    name: "ULTRA-X40 Point Source",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "Point-source mains for stages and immersive setups.",
  },
  {
    id: "audio-vue-al4",
    name: "al-4 Subcompact Line Array",
    brand: "VUE Audiotechnik",
    category: "Audio",
    spec: "Boutique line array for design-forward installs.",
  },

  // Power
  {
    id: "power-distro-100a",
    name: "100A Three-Phase Distro",
    brand: "Motion Labs",
    category: "Distro",
    spec: "Cam-Lok input with L21-30 and Edison outputs.",
  },
  {
    id: "power-distro-400a",
    name: "400A Cam-Lok Distro",
    brand: "Lex Products",
    category: "Distro",
    spec: "Festival-grade main distro with sub-feeds.",
  },
  {
    id: "power-feeder-cable",
    name: "2/0 & 4/0 Cam-Lok Feeder",
    brand: "Various",
    category: "Power",
    spec: "Color-coded sets in standard production lengths.",
  },

  // Generators
  {
    id: "gen-diesel-45kw",
    name: "45 kW Tow-Behind Diesel",
    brand: "MultiQuip",
    category: "Generators",
    spec: "Sound-attenuated diesel for film and event use.",
  },
  {
    id: "gen-diesel-150kw",
    name: "150 kW Trailer Diesel",
    brand: "Generac Mobile",
    category: "Generators",
    spec: "Tier 4 final, paralleling-capable.",
  },
  {
    id: "gen-battery-mid",
    name: "Battery Generator (Mid)",
    brand: "Portable Electric",
    category: "Generators",
    spec: "Zero-emission, near-silent - for film sets and indoor activations.",
    notes: "Specific model TBD based on availability.",
  },

  // Lighting (placeholder - fill in if EcoBoom carries lighting)
  {
    id: "light-tower-led",
    name: "LED Light Tower",
    brand: "Various",
    category: "Lighting",
    spec: "Trailer-mounted, battery or solar/diesel hybrid.",
    notes: "PLACEHOLDER - confirm if EcoBoom rents lighting.",
  },
];

export const getInventoryByCategory = (cat: Category) =>
  inventory.filter((i) => i.category === cat);
