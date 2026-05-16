export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  description: string;
  bullets: string[];
  href: string;
  image?: {
    src: string;
    alt: string;
  };
};

export const services: Service[] = [
  {
    slug: "audio",
    shortTitle: "Audio",
    title: "Audio Systems & PA Rentals",
    blurb:
      "Ground-stacked rigs, line arrays, and point-source systems from the brands engineers actually want.",
    description:
      "From a single QSC stack for a brand activation to full L-Acoustics or Meyer line arrays for a festival stage, we design, deliver, and support audio packages that match the room, the room sheet, and the rider. We carry VUE Audiotechnik for boutique installs where pattern control and headroom matter.",
    bullets: [
      "QSC, L-Acoustics, Meyer, VUE Audiotechnik",
      "Ground-stacked systems and flown arrays",
      "Front-of-house and monitor world packages",
      "System tech and operator support available",
    ],
    href: "/services/audio",
    image: {
      src: "https://3ca9a566.delivery.rocketcdn.me/wp-content/uploads/2016/10/leopard-inuse.jpg.webp",
      alt: "Meyer Sound LEOPARD line array deployed at a live event",
    },
  },
  {
    slug: "power",
    shortTitle: "Hybrid Power",
    title: "Hybrid Event Power",
    blurb:
      "We piggyback massive battery systems onto our generators. The diesel only fires when the batteries need a top-up — productions run on ~90% less fuel, with the same uptime.",
    description:
      "Most rental houses hand you a diesel generator and walk away. We design hybrid power systems — battery banks paired with smart diesel generators — so the show runs almost entirely off stored energy. The diesel piggybacks in only to recharge when it's needed. Less fuel burned, far less noise on set, dramatically lower emissions, and a real cost savings on long shoot days and festival runs. Same reliability. Way less waste.",
    bullets: [
      "Hybrid battery + diesel piggyback systems",
      "~90% average fuel reduction across our deployments",
      "Quieter sets and lower emissions — without sacrificing uptime",
      "Load calcs, distro, cable, and on-site power techs through showcall",
    ],
    href: "/services/power",
    image: {
      src: "https://static.wixstatic.com/media/d42e03_23a03d514df24d4a8abd1af738465ea1~mv2.png/v1/fill/w_1400,h_1050,al_c,q_85,enc_avif,quality_auto/d42e03_23a03d514df24d4a8abd1af738465ea1~mv2.png",
      alt: "Hybrid battery system paired with a diesel generator on location",
    },
  },
  {
    slug: "generators",
    shortTitle: "Generators",
    title: "Generators",
    blurb:
      "Diesel and battery generator rentals sized to the job — from a single tow-behind to a fully redundant festival package.",
    description:
      "We rent generators across the size range needed by modern productions, with the cabling, distro, and operator support to make them actually useful. We're fluent in clean / quiet power requirements for film sets and battery-first solutions where emissions matter.",
    bullets: [
      "Tow-behind diesels and trailer-mount units",
      "Battery generator options for low-noise / zero-emission jobs",
      "Sized, delivered, fueled, and supported",
      "Redundant configurations for high-stakes shows",
    ],
    href: "/services/generators",
    image: {
      src: "https://static.wixstatic.com/media/d42e03_986c311b71a3431db3ee2b7f7685df09~mv2.png/v1/fill/w_1400,h_1050,al_c,q_85,enc_avif,quality_auto/d42e03_986c311b71a3431db3ee2b7f7685df09~mv2.png",
      alt: "CleanGen battery generator — 250 kWh, 900 amp output",
    },
  },
  {
    slug: "film-production",
    shortTitle: "Film & Festival",
    title: "Film, Festival & Production Support",
    blurb:
      "We know what film crews and festival productions need — because we've been on those calls for years.",
    description:
      "We're set up to be the partner you can call once and have it handled. Coachella and Stagecoach weeks, indie film shoots up in Joshua Tree, fashion brand activations in Palm Springs — we know the rhythms, the permits, the load-in windows, and the people. Bring us in early and we'll save you headaches.",
    bullets: [
      "Pre-production load and logistics planning",
      "Coachella Valley + High Desert expertise",
      "Last-minute, high-pressure delivery when it counts",
      "Single point of contact through wrap",
    ],
    href: "/services/film-production",
    image: {
      src: "https://static.wixstatic.com/media/d42e03_e49262d21e5d4d548f1ee79fbcf9b49e~mv2.jpg/v1/fill/w_1400,h_1050,al_c,q_85,enc_avif,quality_auto/d42e03_e49262d21e5d4d548f1ee79fbcf9b49e~mv2.jpg",
      alt: "Behind-the-scenes on a film set powered by hybrid systems",
    },
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
