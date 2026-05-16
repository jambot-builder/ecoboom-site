# For Ivan — EcoBoom Site Deploy Handoff

Ivan, this is the new EcoBoom site, fully rebuilt. Your job is to get it
into the existing GitHub repo and deploy it to the existing Vercel project.
**Do not rotate the repo ownership.** Jeff keeps the repo.

You will not need to touch the code itself — only push it, deploy it, and
wire up domains + env vars. If the code needs changes, ask Jeff first.

---

## Context — what's already set up

- **Repo:** `https://github.com/jambot-builder/ecoboom-site` (Jeff owns the
  `jambot-builder` GitHub account / org. Leave ownership alone.)
- **Vercel project:** `2026-05-14-ecoboom-migration` under the team
  `jambot-builders-projects`.
  URL: https://vercel.com/jambot-builders-projects/2026-05-14-ecoboom-migration
- **Target production domain:** `ecoboom.org`
- **Current state of Vercel project:** No Git repo connected, no domain
  added, no deployments. That's what you'll fix.

---

## Step 1 — Get the code into git and push to a branch

Unzip this project (you're reading the unzipped version), then from the
project root:

```bash
git init
git remote add origin https://github.com/jambot-builder/ecoboom-site.git
git fetch origin
git checkout -b rebuild/clean-foundation
git add .
git commit -m "Clean rebuild: Next.js 14 + Tailwind, hybrid-power positioning, inventory + quote form"
git push -u origin rebuild/clean-foundation
```

Then open a pull request on GitHub from `rebuild/clean-foundation` → `main`.
**Do not force-push to `main`.** Jeff reviews the PR, then merges.

If `main` has conflicting content from your earlier work, the PR diff will
show it. Leave the conflict resolution to the PR; don't try to merge or
overwrite from the command line.

---

## Step 2 — Connect the Vercel project to the repo

1. Open https://vercel.com/jambot-builders-projects/2026-05-14-ecoboom-migration
2. Settings → **Git** → Connect Git Repository
3. Pick `jambot-builder/ecoboom-site`. Production branch: `main`.
4. Framework preset: **Next.js** (should auto-detect)
5. Root directory: blank (the project sits at the repo root)
6. Build command: leave default (`next build`)
7. Install command: leave default (`npm install`)

Once that's saved, Vercel will start building the current `main`. If `main`
hasn't been updated yet (because the PR hasn't merged), the build won't be
the new site. That's expected. After the PR merges, Vercel will build
automatically.

---

## Step 3 — Add environment variables

In the Vercel project: Settings → **Environment Variables**. Add these for
the **Production** environment:

| Variable                | Value                                                 |
| ----------------------- | ----------------------------------------------------- |
| `QUOTE_RECIPIENT_EMAIL` | **Ask Jeff for the address quote requests go to**     |
| `RESEND_API_KEY`        | **Ask Jeff — to be set up at https://resend.com**     |
| `QUOTE_FROM_EMAIL`      | `quotes@ecoboom.org` (after domain is verified in Resend) |

If `RESEND_API_KEY` is missing, the quote form still works — submissions
get logged to Vercel runtime logs instead of emailed. That's fine for now,
but flag to Jeff that he needs to choose an email provider and verify the
domain there before this is production-ready.

---

## Step 4 — Point ecoboom.org at Vercel

The DNS for `ecoboom.org` is **currently on Squarespace** (that's where the
old site lived). Jeff will need to give you access to the DNS panel, or
make these changes himself.

In Vercel: Settings → **Domains** → Add `ecoboom.org`. Vercel will show
the exact DNS records you need to add. The standard shape:

- `ecoboom.org` (apex) → `A` record → `76.76.21.21`
- `www.ecoboom.org` → `CNAME` → `cname.vercel-dns.com`

Add these in the Squarespace DNS panel (or wherever the nameservers
actually live — check first). SSL auto-provisions once DNS resolves.

> ⚠️ **Don't change nameservers or transfer the domain.** Just edit the A
> and CNAME records. Jeff wants the domain registration to stay where it is.

---

## Step 5 — Logo files

Jeff has the logo PNGs. They need to be saved to:

```
public/images/brand/ecoboom-wordmark.png         (light backgrounds)
public/images/brand/ecoboom-wordmark-onDark.png  (with white stroke, for dark sections)
public/images/brand/ecoboom-mark.png             (target icon — used for favicon later)
```

If they're SVG, change the file extension in `src/components/Logo.tsx`
from `.png` to `.svg` and commit that change too.

For the favicon: drop a 512×512 PNG version of the target icon at
`src/app/icon.png` and Next.js will pick it up automatically.

---

## Step 6 — What to confirm with Jeff before public launch

The site is built with placeholder content where real input is needed.
Don't merge to `main` and point DNS without Jeff signing off on:

- [ ] Brand green hex (currently `#7DB23A` — Jeff needs to confirm exact value)
- [ ] Contact info in `src/data/site.ts` — email, phone, location
- [ ] Real inventory list in `src/data/inventory.ts`
- [ ] Hero photo + service photos + about-page portrait
- [ ] About-page copy (placeholder positioning text)
- [ ] Resend setup (or alternative email service)

---

## What NOT to do

- ❌ **Don't transfer the GitHub repo to another account or org.** Jeff
  owns `jambot-builder` and keeps it.
- ❌ **Don't force-push to `main` or rebase shared history.** Always PR.
- ❌ **Don't change the nameservers** for ecoboom.org. Only edit DNS records.
- ❌ **Don't run `npm audit fix --force`** — it can bump packages across
  major versions and break the build. If a vulnerability needs fixing, do
  a targeted `npm install <pkg>@<version>` and test the build first.
- ❌ **Don't paste secrets (Vercel tokens, Resend keys) into commits.** Use
  Vercel's env-var panel only.

---

## Quick reference

| Thing                 | Where                                                       |
| --------------------- | ----------------------------------------------------------- |
| Repo                  | https://github.com/jambot-builder/ecoboom-site              |
| Vercel project        | https://vercel.com/jambot-builders-projects/2026-05-14-ecoboom-migration |
| Target domain         | ecoboom.org                                                 |
| Framework             | Next.js 14 App Router · TypeScript · Tailwind CSS           |
| Email provider        | Resend (to be set up)                                       |
| Full deploy guide     | `HANDOFF.md` (in this repo)                                 |
| Codebase tour         | `README.md` (in this repo)                                  |

If anything is ambiguous, **ask Jeff before doing it.** Better to wait than
to redo.
