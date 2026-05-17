/**
 * Site-wide configuration. Edit these values to update the whole site
 * without hunting through component files.
 *
 * Anything labeled PLACEHOLDER must be replaced before launch.
 */
export const site = {
  name: "EcoBoom",
  tagline: "Event partners for film, music, and live production.",
  domain: "ecoboom.org",

  // PLACEHOLDER - replace with the real business contact info.
  contact: {
    email: "hello@ecoboom.org",
    phone: "(760) 555-0100",
    location: "Yucca Valley, CA",
    serviceArea:
      "High Desert + Low Desert - Joshua Tree, Yucca Valley, Palm Springs, Coachella Valley, Los Angeles basin.",
  },

  social: {
    instagram: "https://www.instagram.com/", // PLACEHOLDER
    linkedin: "https://www.linkedin.com/",   // PLACEHOLDER
  },

  positioning: {
    short:
      "Audio, generators, and event power for productions in the California desert and beyond.",
    long:
      "EcoBoom is a high-desert boutique rental house serving film, television, and live event productions. We supply ground-stacked PA systems from QSC, L-Acoustics, Meyer, and VUE Audiotechnik, alongside generators, distro, and the full kit you need to put on a show - paired with deep expertise in temporary and event power.",
  },

  // Used in the home page "credibility" strip. Replace with real partners once
  // we have permission to use logos.
  credibility: {
    headline: "Trusted by productions across the desert and beyond",
    note:
      "Decades of combined experience supporting film shoots, music festivals, brand activations, and private events.",
  },
};

export type SiteConfig = typeof site;
