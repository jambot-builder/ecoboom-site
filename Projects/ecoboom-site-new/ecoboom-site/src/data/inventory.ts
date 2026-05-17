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
  image?: string; // Optional hotlink. Add real photos to public/images/inventory/ later.
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
    spec: "2-way active dual-8″, 142 dB max SPL. Flown or ground-stacked, adjustable directivity.",
    image:
      "https://www.l-acoustics.com/wp-content/uploads/2021/03/3DR_8xKara_IIM-BUMP_01.png",
  },
  {
    id: "audio-lacoustics-kiva",
    name: "Kiva II Compact System",
    brand: "L-Acoustics",
    category: "Audio",
    spec: "2-way passive dual-6.5″, 138 dB max SPL. Discreet PA for fashion, brand, and small festival stages.",
    image:
      "https://www.l-acoustics.com/wp-content/uploads/2021/03/3DR_8xKiva_IIKIBU-SB_01.png",
  },
  {
    id: "audio-meyer-tigra",
    name: "TIGRA Medium-Format Line Array",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "Right-sized line array - PANTHER-level output and headroom in a smaller, faster-rigging cabinet.",
    image:
      "https://meyersound.com/wp-content/uploads/2026/03/tigra_main.jpg.webp",
  },
  {
    id: "audio-meyer-leopard",
    name: "LEOPARD Compact Line Array",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "Self-powered compact line array, paired with 900-LFC subs.",
    image:
      "https://3ca9a566.delivery.rocketcdn.me/wp-content/uploads/2016/10/220118_leopard_main.jpg.webp",
  },
  {
    id: "audio-meyer-1800lfc",
    name: "1800-LFC Medium-Format Subwoofer",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "Deep, controlled bass - 30 Hz to 125 Hz with the authority of larger systems in a lighter footprint.",
    image:
      "https://3ca9a566.delivery.rocketcdn.me/wp-content/uploads/2026/03/1800-lfc_main.jpg.webp",
  },
  {
    id: "audio-meyer-ultra-x80",
    name: "ULTRA-X80 Point Source",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "Pound-for-pound Meyer's most powerful point source - replaces a small line array in a single box.",
    image:
      "https://meyersound.com/wp-content/uploads/2024/05/250522_ultra-x80_main_image_b.jpg.webp",
  },
  {
    id: "audio-meyer-ulti",
    name: "ULTRA-X40 Point Source",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "Versatile point source for stages, frontfills, and immersive setups.",
    image:
      "https://meyersound.com/wp-content/uploads/2019/01/ultra-x40_main.jpg.webp",
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
    name: "CleanGen 250 kWh Battery Generator",
    brand: "EcoBoom Fleet",
    category: "Generators",
    spec: "250 kWh, 900 amps. Zero-emission, near-silent - the workhorse of our hybrid deployments.",
    image: "/images/rebrand/cleangen-250-rebrand.jpg",
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
