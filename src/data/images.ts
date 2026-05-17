/**
 * Centralized image references. Update one place when swapping in real
 * EcoBoom photography.
 *
 * `external` images are hotlinked. `local` images live in `public/images/`.
 *
 * Sources used here:
 *   - `wix:` prefix = sanisetfleet.com Wix CDN (used with Jeff's permission
 *     for product imagery while we wait for EcoBoom's own shots)
 *   - `unsplash:` prefix = Unsplash photos hotlinked (paste real URLs here
 *     as you find them)
 */

const WIX = "https://static.wixstatic.com/media";

export const images = {
  // Battery / "Less diesel" piggyback equipment shot
  hybridSystem: {
    src: `${WIX}/d42e03_23a03d514df24d4a8abd1af738465ea1~mv2.png/v1/fill/w_1600,h_1200,al_c,q_85,enc_avif,quality_auto/d42e03_23a03d514df24d4a8abd1af738465ea1~mv2.png`,
    alt:
      "Hybrid power system on location - battery banks paired with a clean diesel generator",
    width: 1600,
    height: 1200,
  },

  // CleanGen J250 / large battery generator product shot
  cleanGenerator: {
    src: `${WIX}/d42e03_986c311b71a3431db3ee2b7f7685df09~mv2.png/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/d42e03_986c311b71a3431db3ee2b7f7685df09~mv2.png`,
    alt: "250 kWh / 900 amp battery generator unit",
    width: 1200,
    height: 900,
  },

  // Lifestyle / hero composite
  fieldHero: {
    src: `${WIX}/d42e03_8b534fd02b424205a7d02f3a870d495e~mv2.png/v1/fill/w_1400,h_1400,al_c,q_90,enc_avif,quality_auto/d42e03_8b534fd02b424205a7d02f3a870d495e~mv2.png`,
    alt: "On-location power equipment composite",
    width: 1400,
    height: 1400,
  },

  // BTS film set photo
  bts: {
    src: `${WIX}/d42e03_e49262d21e5d4d548f1ee79fbcf9b49e~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/d42e03_e49262d21e5d4d548f1ee79fbcf9b49e~mv2.jpg`,
    alt: "Behind-the-scenes on a film set powered by hybrid systems",
    width: 1200,
    height: 900,
  },
} as const;

export type ImageRef = (typeof images)[keyof typeof images];
