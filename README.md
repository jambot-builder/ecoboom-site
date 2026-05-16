# EcoBoom

The website for EcoBoom — a high-desert boutique rental house for film,
festival, and live event production. Audio systems, generators, distro, and
the years of experience to make them work on a show.

Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

---

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build for production

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Var                       | What it does                                                       |
| ------------------------- | ------------------------------------------------------------------ |
| `QUOTE_RECIPIENT_EMAIL`   | The address that receives quote-form submissions                   |
| `RESEND_API_KEY`          | API key for [Resend](https://resend.com) — handles outbound email  |
| `QUOTE_FROM_EMAIL`        | Verified "from" address (e.g. `quotes@ecoboom.org`)                |

If `RESEND_API_KEY` is empty, the quote form still works — it just logs
submissions to the server console instead of sending email. Useful for dev.

---

## What's where

```
src/
  app/
    layout.tsx               Root layout, font setup, Nav, Footer
    globals.css              Tailwind layers + design tokens
    page.tsx                 Home
    about/                   /about
    services/                /services, /services/[slug]
    inventory/               /inventory (client filter by category)
    quote/                   /quote (form)
    api/quote/route.ts       POST endpoint for the quote form
  components/
    Nav.tsx                  Sticky top nav
    Footer.tsx               Footer
    ServicePage.tsx          Reusable service-detail layout
    InventoryGrid.tsx        Filterable inventory grid (client component)
    QuoteForm.tsx            Quote form + submit handler (client component)
  data/
    site.ts                  Site-wide config: name, contact, copy
    services.ts              Service definitions (Audio, Power, etc.)
    inventory.ts             Gear catalog data
  lib/
    email.ts                 Outbound email via Resend (with dev fallback)
```

## What needs real content before launch

The site is ready to deploy with placeholder content. Things to swap in:

- **Real photos.** Every `placeholder-image` block in the code marks a spot
  for a real photo. Drop them into `public/images/` and replace the
  placeholders in the page files (use `next/image`).
- **Contact info** in `src/data/site.ts` — email, phone, address, social.
- **Inventory list** in `src/data/inventory.ts` — your real gear, quantities,
  spec sheets, and photos.
- **About-page copy** — the current text is positioning placeholder. Replace
  with the real EcoBoom story.
- **Client / credibility logos** — the home page has a placeholder credibility
  section. Add real logos once you have permission.
- **Favicon** — drop `public/favicon.ico` (or `app/icon.png`).

See `HANDOFF.md` for full deployment + DNS instructions.
