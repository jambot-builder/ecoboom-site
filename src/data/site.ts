/**
 * Site-wide configuration. Edit these values to update the whole site
 * without hunting through component files.
 *
 * Anything labeled PLACEHOLDER must be replaced before launch.
 */
export const site = {
  name: "EcoBoom",
  tagline: "Hybrid event power, audio, and production rentals.",
  domain: "ecoboom.org",

  // PLACEHOLDER - replace with the real business contact info.
  contact: {
    email: "hello@ecoboom.org",
    phone: "(760) 555-0100",
    location: "Yucca Valley, CA",
    serviceArea:
      "California - Yucca Valley HQ, serving Palm Springs, Coachella Valley, Los Angeles basin, and beyond.",
  },

  social: {
    instagram: "https://www.instagram.com/", // PLACEHOLDER
    linkedin: "https://www.linkedin.com/",   // PLACEHOLDER
  },

  positioning: {
    short:
      "Hybrid event power, audio, and production rentals for film, festival, and live event productions.",
    long:
      "EcoBoom is the rental partner built around hybrid event power - battery systems piggybacked onto smart diesel generators that cut fuel consumption by roughly 90%. Alongside power we supply audio systems from Meyer Sound, L-Acoustics, QSC, and VUE Audiotechnik, plus distro, EVs, mobile charging, and the on-site crew expertise that makes any production work.",
  },

  credibility: {
    headline: "Trusted on set",
    note:
      "Decades of combined experience supporting film shoots, music festivals, brand activations, and private events.",
  },
};

export type SiteConfig = typeof site;
