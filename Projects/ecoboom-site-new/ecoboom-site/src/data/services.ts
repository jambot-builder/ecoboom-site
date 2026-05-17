export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  description: string;
  bullets: string[];
  href: string;
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
  },
  {
    slug: "power",
    shortTitle: "Event Power",
    title: "Temporary & Event Power",
    blurb:
      "The expertise gap most rental houses can't fill. We design, deliver, and run the power your production depends on.",
    description:
      "Temporary power is what we do best. We size loads, lay out distro, ground rigs properly, and stand on site with you through the show. Whether the call is for quiet film-shoot power, festival main stage redundancy, or bridge power to a remote location, we plan it like the production depends on it - because it does.",
    bullets: [
      "Load calcs, single-line diagrams, and site power plans",
      "Generators, distro, cable, and grounding",
      "On-site power techs through showcall",
      "Clean / quiet power solutions for film sets",
    ],
    href: "/services/power",
  },
  {
    slug: "generators",
    shortTitle: "Generators",
    title: "Generators",
    blurb:
      "Diesel and battery generator rentals sized to the job - from a single tow-behind to a fully redundant festival package.",
    description:
      "We rent generators across the size range needed by modern productions, with the cabling, distro, and operator support to make them actually useful. We're fluent in clean / quiet power requirements for film sets and battery-first solutions where emissions matter.",
    bullets: [
      "Tow-behind diesels and trailer-mount units",
      "Battery generator options for low-noise / zero-emission jobs",
      "Sized, delivered, fueled, and supported",
      "Redundant configurations for high-stakes shows",
    ],
    href: "/services/generators",
  },
  {
    slug: "film-production",
    shortTitle: "Film & Festival",
    title: "Film, Festival & Production Support",
    blurb:
      "We know what film crews and festival productions need - because we've been on those calls for years.",
    description:
      "We're set up to be the partner you can call once and have it handled. Coachella and Stagecoach weeks, indie film shoots up in Joshua Tree, fashion brand activations in Palm Springs - we know the rhythms, the permits, the load-in windows, and the people. Bring us in early and we'll save you headaches.",
    bullets: [
      "Pre-production load and logistics planning",
      "Coachella Valley + High Desert expertise",
      "Last-minute, high-pressure delivery when it counts",
      "Single point of contact through wrap",
    ],
    href: "/services/film-production",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
