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

  // PLACEHOLDER — replace with the real business contact info.
  contact: {
    email: "hello@ecoboom.org",
    phone: "(760) 555-0100",
    location: "Yucca Valley, CA",
    serviceArea:
      "High Desert + Low Desert — Joshua Tree, Yucca Valley, Palm Springs, Coachella Valley, Los Angeles basin.",
  },

  social: {
    instagram: "https://www.instagram.com/", // PLACEHOLDER
    linkedin: "https://www.linkedin.com/",   // PLACEHOLDER
  },

  positioning: {
    short:
      "Hybrid event power, audio, and production support for film and festivals in the California desert.",
    long:
      "EcoBoom is a high-desert rental house built around hybrid event power — battery systems piggybacked onto smart diesel generators that cut fuel consumption by roughly 90%. Alongside power, we supply ground-stacked PA systems from QSC, L-Acoustics, Meyer, and VUE Audiotechnik, plus the distro, cable, and crew expertise to make any production work.",
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
