/**
 * Inventory catalog. Real product photography is wired in where available.
 *
 * Some image URLs hotlink to sanisetfleet's Wix CDN - they're product asset
 * shots (rendered or photographed without overlay branding). The few items
 * whose filenames include the Saniset name are flagged with `needsRebrand:
 * true` so they can be swapped with EcoBoom-branded versions later.
 */
export type Category =
  | "Audio"
  | "Battery"
  | "Generators"
  | "Hydrogen"
  | "EVs"
  | "Charging"
  | "Distro"
  | "Lighting";

export type InventoryItem = {
  id: string;
  name: string;
  brand: string;
  category: Category;
  spec: string;
  notes?: string;
  image?: string;
  /** True when the source image has visible Saniset branding and should be
   *  swapped with a rebranded EcoBoom version before public launch. */
  needsRebrand?: boolean;
};

export const categories: Category[] = [
  "Audio",
  "Battery",
  "Generators",
  "Hydrogen",
  "EVs",
  "Charging",
  "Distro",
  "Lighting",
];

const WIX = "https://static.wixstatic.com/media";

export const inventory: InventoryItem[] = [
  // ─── Audio ───────────────────────────────────────────────────────────
  {
    id: "audio-meyer-tigra",
    name: "TIGRA Medium-Format Line Array",
    brand: "Meyer Sound",
    category: "Audio",
    spec: "PANTHER-level output in a smaller, faster-rigging cabinet. Self-powered, GEN-1 networked.",
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
    spec: "Pound-for-pound Meyer's most powerful point source - replaces a small line array.",
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
    id: "audio-qsc-kla12",
    name: "KLA12 Ground-Stack System",
    brand: "QSC",
    category: "Audio",
    spec: "Active line array, ground-stack package with subs.",
    notes: "Great for brand activations and mid-sized stages.",
  },
  {
    id: "audio-vue-al4",
    name: "al-4 Subcompact Line Array",
    brand: "VUE Audiotechnik",
    category: "Audio",
    spec: "Boutique line array for design-forward installs.",
  },

  // ─── Battery / BESS ──────────────────────────────────────────────────
  {
    id: "battery-cleangen-j250",
    name: "CleanGEN J250 - BESS",
    brand: "EcoBoom Fleet",
    category: "Battery",
    spec: "900 amp / 208V mobile battery energy storage. Workhorse of our hybrid deployments.",
    image: `${WIX}/d42e03_e78536ce19a64d4c813c87ca1edd8be5~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%2021.png`,
  },
  {
    id: "battery-moxion-600",
    name: "600 kWh Mobile Battery",
    brand: "Moxion",
    category: "Battery",
    spec: "300 amp / 240V / 208V / 480V. Festival-scale mobile battery for long shoot days and main-stage power.",
    image: `${WIX}/d42e03_e583f432a6184785a070e3a1f2589f4a~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%2018.png`,
  },
  {
    id: "battery-reon",
    name: "REON Mobile Power Station",
    brand: "REON",
    category: "Battery",
    spec: "Mobile power station for film sets, brand activations, and remote locations.",
    image: `${WIX}/d42e03_b40d749f5a23458fa62e12c870ea1662~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Saniset-Fleet-Reon%20white%20bg.png`,
    needsRebrand: true,
  },
  {
    id: "battery-suncase-5kwh",
    name: "5 kWh Mobile Battery (SunCase)",
    brand: "EcoBoom Fleet",
    category: "Battery",
    spec: "Compact 5 kWh portable battery. Perfect for on-set monitor villages, comms, and small production needs.",
    image: `${WIX}/d42e03_95dbf99451b54d47b1627e7bfac8f142~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/SunCase2.png`,
  },

  // ─── Generators (diesel + hybrid) ────────────────────────────────────
  {
    id: "gen-diesel-45kw",
    name: "45 kW Tow-Behind Diesel",
    brand: "MultiQuip",
    category: "Generators",
    spec: "Sound-attenuated diesel for film and event use. Pairs cleanly with our battery systems.",
  },
  {
    id: "gen-diesel-150kw",
    name: "150 kW Trailer Diesel",
    brand: "Generac Mobile",
    category: "Generators",
    spec: "Tier 4 final, paralleling-capable. Festival-scale main or redundancy.",
  },

  // ─── Hydrogen ────────────────────────────────────────────────────────
  {
    id: "hydrogen-geh2",
    name: "GEH2® Hydrogen Power Generator",
    brand: "EODev",
    category: "Hydrogen",
    spec: "Zero-emission hydrogen fuel cell power generator. Silent, clean, and production-grade.",
    image: `${WIX}/d42e03_fb065e8dc8944e70a4547a356a5a2ec5~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Hydrogen%20EODev%20Saniset%20Fleet%20web.png`,
    needsRebrand: true,
  },
  {
    id: "hydrogen-gtm-refueler",
    name: "GTM 1500-450/520 Hydrogen Refueler",
    brand: "EcoBoom Fleet",
    category: "Hydrogen",
    spec: "On-site hydrogen refueler trailer for extended deployments.",
    image: `${WIX}/d42e03_385eaae0c63041c8bc1fbef9e197146a~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/white%20bg.png`,
  },

  // ─── EVs ─────────────────────────────────────────────────────────────
  {
    id: "ev-passenger-van",
    name: "Electric Passenger Van",
    brand: "EcoBoom Fleet",
    category: "EVs",
    spec: "Zero-emission passenger transport for cast and crew on location.",
    image: `${WIX}/d42e03_b3fb95e8a5c4488abaa43d5339ff3fb3~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%204.png`,
  },
  {
    id: "ev-brightdrop-600",
    name: "BrightDrop ZEVO 600",
    brand: "BrightDrop",
    category: "EVs",
    spec: "All-electric commercial cargo van - production-ready capacity, zero local emissions.",
    image: `${WIX}/d42e03_d070c8afd66e480cbbadac3ffa05e117~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%206.png`,
  },
  {
    id: "ev-cargo-van",
    name: "Electric Cargo Van",
    brand: "EcoBoom Fleet",
    category: "EVs",
    spec: "Zero-emission cargo van for gear transport on shoot days.",
    image: `${WIX}/d42e03_12f27a40663d4d2e85565259531cb94c~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%205.png`,
  },
  {
    id: "ev-rivian-r1t",
    name: "Rivian R1T",
    brand: "Rivian",
    category: "EVs",
    spec: "Production-friendly electric pickup truck. Great for picture cars, scouting, and light gear.",
    image: `${WIX}/d42e03_a9942761e5754002a28ee4643f99fad0~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%208.png`,
  },
  {
    id: "ev-rivian-r1s",
    name: "Rivian R1S",
    brand: "Rivian",
    category: "EVs",
    spec: "Electric SUV for talent transport and location scouting.",
    image: `${WIX}/d42e03_e96d2c6ca6d6493dbf979b2770308271~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%207.png`,
  },

  // ─── Mobile Vehicle Charging ─────────────────────────────────────────
  {
    id: "charging-l2d2",
    name: "L2D2™ Mobile Dual Port Charger",
    brand: "EcoBoom Fleet",
    category: "Charging",
    spec: "19.2 kW Level 2 dual-port mobile charger. On-set EV charging for fleet vehicles and talent cars.",
    image: `${WIX}/d42e03_7c9a5e9d8f25469aa4021ca9abb271d4~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%2022.png`,
  },
  {
    id: "charging-kempower-50kw",
    name: "Kempower 50 kW Mobile DC Fast Charger",
    brand: "Kempower",
    category: "Charging",
    spec: "50 kW / 480V dual-port DC fast charging - keeps EV fleets running through long shoot days.",
    image: `${WIX}/d42e03_2327cf01b5d04938a01dc680b67ef35d~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%2024.png`,
  },
  {
    id: "charging-l3d3",
    name: "L3D3™ 60 kW Mobile DC Fast Charger",
    brand: "EcoBoom Fleet",
    category: "Charging",
    spec: "60 kW DC fast charging - 240V / 208V / 480V. Reliable rapid charge for production timelines.",
    image: `${WIX}/d42e03_8c5e438cf9f248efb752d45bc812d594~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%2023.png`,
  },

  // ─── Distro / Cabling ────────────────────────────────────────────────
  {
    id: "distro-100a",
    name: "100A Three-Phase Distro",
    brand: "Motion Labs",
    category: "Distro",
    spec: "Cam-Lok input with L21-30 and Edison outputs.",
  },
  {
    id: "distro-400a",
    name: "400A Cam-Lok Distro",
    brand: "Lex Products",
    category: "Distro",
    spec: "Festival-grade main distro with sub-feeds.",
  },
  {
    id: "distro-feeder",
    name: "2/0 & 4/0 Cam-Lok Feeder",
    brand: "Various",
    category: "Distro",
    spec: "Color-coded sets in standard production lengths.",
  },

  // ─── Lighting ────────────────────────────────────────────────────────
  {
    id: "lighting-e-plt",
    name: "e-PLT Electric Portable Light Tower",
    brand: "EcoBoom Fleet",
    category: "Lighting",
    spec: "Zero-emission, battery-powered LED light tower. Silent - runs all night without a generator.",
    image: `${WIX}/d42e03_410ddad8d12e46e388c4d36b43f82418~mv2.png/v1/fill/w_900,h_675,al_c,q_85,enc_avif,quality_auto/Asset%2028.png`,
  },
];

export const getInventoryByCategory = (cat: Category) =>
  inventory.filter((i) => i.category === cat);
