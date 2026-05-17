import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/services/audio",
    "/services/power",
    "/services/generators",
    "/services/film-production",
    "/inventory",
    "/sustainability",
    "/quote",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/quote") ? 0.9 : 0.7,
  }));
}
