# EcoBoom - Handoff & Deploy Guide

Practical steps to get this site running locally, into the existing GitHub
repo, deployed to Vercel, and pointed at ecoboom.org.

---

## 1. Run it locally

You'll need Node 18.17+ and npm.

```bash
cd ecoboom-site
npm install         # one-time, takes a couple minutes
npm run dev
```

Open http://localhost:3000. Hot reload is on - edit a file and the page
refreshes.

---

## 2. Push to the existing GitHub repo

The existing repo is `jambot-builder/ecoboom-site`. To replace whatever
Ivan committed with this clean build:

```bash
# inside the ecoboom-site folder
git init
git remote add origin git@github.com:jambot-builder/ecoboom-site.git
# or HTTPS: https://github.com/jambot-builder/ecoboom-site.git

# pull the existing repo's history so we don't lose it
git fetch origin
git checkout -b clean-build
git add .
git commit -m "Clean Next.js build: marketing + inventory + quote form"
git push -u origin clean-build
```

Then open a PR on GitHub from `clean-build` → `main`, review the diff, and
merge. Or, if you want to overwrite `main` directly (only if you're sure):

```bash
git push -u origin clean-build:main --force-with-lease
```

> ⚠️ `--force-with-lease` will overwrite Ivan's `main`. Only do this if
> you've confirmed there's nothing to keep. Best practice: merge a PR.

---

## 3. Connect the repo to the Vercel project

The Vercel project (`2026-05-14-ecoboom-migration` under the
`jambot-builders-projects` team) currently has **no Git repo connected**.
That's why nothing's deploying. To fix:

1. Open the Vercel project: https://vercel.com/jambot-builders-projects/2026-05-14-ecoboom-migration
2. Settings → **Git** → **Connect Git Repository**
3. Pick `jambot-builder/ecoboom-site` and the `main` branch
4. **Root directory:** leave blank (the project is at the repo root)
5. **Framework preset:** Next.js (should auto-detect)
6. **Build command:** `next build` (default)
7. **Install command:** `npm install` (default)

Once connected, every push to `main` will auto-deploy. Pushes to other
branches create preview deployments.

---

## 4. Add environment variables in Vercel

Project → Settings → **Environment Variables**. Add these for **Production**
(and `Preview` if you want previews to send real emails - usually you
don't):

| Variable                | Value                                          |
| ----------------------- | ---------------------------------------------- |
| `QUOTE_RECIPIENT_EMAIL` | Where quote requests should go (e.g. you)      |
| `RESEND_API_KEY`        | From your Resend dashboard (see step 5)        |
| `QUOTE_FROM_EMAIL`      | The verified sender, e.g. `quotes@ecoboom.org` |

If you skip `RESEND_API_KEY` for now, the form will still submit - it'll
log to the server console and you'll see entries in Vercel's runtime logs.
That's fine for testing the deploy.

---

## 5. Set up Resend for the quote form

1. Sign up at https://resend.com (free tier covers tons of usage)
2. Add and verify the `ecoboom.org` domain - Resend will give you the DNS
   records (SPF, DKIM, return-path) to add
3. Create an API key in **API Keys** → copy and paste into Vercel's
   `RESEND_API_KEY` env var

If you'd rather not run your own sender, plug **Formspree** or **Plunk** in
instead - `src/lib/email.ts` is the only file that needs to change.

---

## 6. Point ecoboom.org at the Vercel deployment

In the Vercel project: **Domains** → **Add Domain** → type `ecoboom.org`.
Vercel will tell you the exact DNS records to add. The two common shapes:

- **Apex domain** (`ecoboom.org`): add an `A` record → `76.76.21.21`
- **www subdomain**: add a `CNAME` → `cname.vercel-dns.com`

Add those records wherever your DNS lives (likely Squarespace today -
check there first, or wherever the nameservers point). Allow a few hours
for propagation. Vercel will auto-provision SSL once DNS resolves.

You can also set `www.ecoboom.org` as the canonical and redirect the apex,
or vice versa - Vercel's domain settings let you pick.

---

## 7. Punch list - before launch

Everything in this list is **placeholder content** that needs real values:

### Required
- [ ] `src/data/site.ts` - replace contact email, phone, location, socials
- [ ] `src/data/inventory.ts` - real gear list, models, photos
- [ ] **Hero photo** on the home page (replace the `placeholder-image` block)
- [ ] **Service photos** - one per service page
- [ ] **Crew/portrait photo** on the About page
- [ ] **Favicon** - drop a `favicon.ico` into the project root, or `app/icon.png`
- [ ] **Real quote-form recipient email** (`QUOTE_RECIPIENT_EMAIL`)
- [ ] **Resend DKIM/SPF DNS records** set up

### Recommended
- [ ] Client logos / credibility section on the home page
- [ ] Long-form About copy (the current text is positioning placeholder)
- [ ] Real social URLs (Instagram, LinkedIn) in `site.ts`
- [ ] Inventory item photos in `public/images/inventory/`
- [ ] Open Graph image for link previews (`app/opengraph-image.tsx`)
- [ ] Privacy policy + terms pages if you'll be collecting customer data
      beyond the quote form

### Nice-to-haves later
- [ ] Sub-rent partner mentions
- [ ] Case studies / past show writeups
- [ ] Email newsletter signup
- [ ] Inventory item detail pages with PDF spec sheets

---

## 8. Replacing the placeholder images

The placeholders are CSS blocks with the `placeholder-image` class. To put
a real photo in:

```tsx
// before
<div className="placeholder-image aspect-[4/5] w-full">
  <span className="font-mono text-xs uppercase tracking-widest">Hero photo</span>
</div>

// after
import Image from "next/image";
import hero from "@/../public/images/hero.jpg"; // or relative path

<div className="relative aspect-[4/5] w-full overflow-hidden">
  <Image src={hero} alt="EcoBoom - ground-stacked rig at dusk" fill className="object-cover" priority />
</div>
```

`next/image` will handle responsive sizes and lazy loading automatically.

---

## 9. Common gotchas

- **Build fails on Vercel but works locally.** Usually a type error you
  missed. `npm run build` locally catches them.
- **Quote form returns 500.** Check Vercel runtime logs. Most likely:
  `RESEND_API_KEY` is missing or `QUOTE_FROM_EMAIL` is from an unverified
  domain.
- **Fonts look wrong on first paint.** Make sure the `display.variable` and
  `body.variable` classes are still on the `<html>` element in
  `src/app/layout.tsx`.
- **Tailwind classes don't apply.** Restart `npm run dev` after changing
  `tailwind.config.ts`.

---

## 10. Where to ask for help

- Next.js docs: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs
- Resend: https://resend.com/docs
