# What's new in this build

Built while Jeff was away. Here's the punch list of what's changed so you
can scan it fast and decide what to keep, what to tweak, what to throw out.

## New pages

- **`/sustainability`** - full hybrid-power story page. Hero, hand-built
  SVG diagram of the battery + diesel piggyback system, three-step
  explanation, side-by-side comparison vs legacy diesel, FAQ section,
  CTA. Built specifically to land the ~90% fuel-reduction narrative
  without it being a marketing afterthought.
- **`/404`** (via `app/not-found.tsx`) - branded 404 page with the target
  mark and quick navigation back to main routes.

## Homepage additions

- **"How it works" section** between the dark hybrid-power differentiator
  and the featured inventory. Renders the full `HybridSystemDiagram` SVG
  inline. Diesel → battery → show, with the ~90% callout.
- The "How the hybrid systems work" link now points to `/sustainability`
  for the deep dive.

## Navigation

- **Active state highlighting.** The current section gets an `ecoGreen`
  underline in the top nav. Sub-routes (e.g. `/services/power`) light up
  their parent (`services`).
- **Sustainability** added to both desktop nav and mobile menu.
- Split into `Nav.tsx` (server) + `NavLinks.tsx` (client) so the active
  state can use `usePathname` without bloating the rest of the chrome.

## Visual polish

- **Services overview** (`/services`) rebuilt as a 2-up grid with service
  photos, hover states, and 3-bullet previews. Less "editorial table of
  contents," more "showroom."
- **Hybrid Power diagram** - hand-built SVG showing the piggyback system.
  Used on home + sustainability page. Built so it's clearly readable in
  a single glance - no graphs, no labels-without-context.

## SEO + discoverability layer

- `app/sitemap.ts` - generates `/sitemap.xml` listing all routes.
- `app/robots.ts` - `/robots.txt` with sensible defaults (block `/api/`).
- `app/opengraph-image.tsx` - dynamic 1200×630 OG image generated at the
  edge. Renders the wordmark, headline, and the ~90% stat. Used as the
  default share card for every page.
- `app/icon.svg` - favicon using the target mark.

## What I did NOT change (intentional)

- Inventory data is unchanged from the last push (29 items, 2 flagged
  `needsRebrand`).
- Quote form, contact info, brand green hex, all placeholder copy - all
  the same. None of these are blocked, they just need real input from
  you.
- No image-editing happened (that's Ivan's lane).

## Open punch-list items

These are the same ones from before, still pending:

- [ ] Real contact info in `src/data/site.ts` (email, phone, location, socials)
- [ ] Two product photos that need rebranding (REON, GEH2 - see
      `public/images/rebrand/README.md`)
- [ ] Real client logos for the credibility section (or remove that copy)
- [ ] Real EcoBoom product photography to eventually replace hotlinks
- [ ] Resend setup for the quote form (`RESEND_API_KEY` env var)
- [ ] Vercel git connection + DNS at ecoboom.org

## Where the work lives

```
src/
  app/
    page.tsx               Homepage (rebuilt, equipment-forward)
    not-found.tsx          New 404 page
    sitemap.ts             New SEO sitemap
    robots.ts              New robots.txt
    opengraph-image.tsx    OG card generator
    icon.svg               Favicon
    sustainability/
      page.tsx             New page - hybrid power story
    inventory/             (with rebuilt hero from earlier)
    services/              (overview rebuilt as photo grid)
  components/
    NavLinks.tsx           New - client component with active state
    Nav.tsx                Now wraps Logo + NavLinks + MobileMenu
    MobileMenu.tsx         Sustainability link added
    Logo.tsx               Quicksand-based wordmark + LogoMark export
    illustrations/
      HybridSystemDiagram.tsx   New - diesel + battery + show diagram
      DesertHero.tsx            Unused now (kept for reference)
```

If anything in here feels wrong, just tell me what to change.
