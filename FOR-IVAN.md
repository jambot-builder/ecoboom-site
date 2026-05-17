# For Ivan - EcoBoom Site Handoff

Ivan, this is the rebuilt EcoBoom site. Your job: get the latest code into
GitHub via a pull request, then handle the image rebranding work that
Claude can't do.

**Hard ground rules:**
- The repo (`jambot-builder/ecoboom-site`) stays under Jeff's `jambot-builder`
  account. Do **not** transfer ownership.
- Push to a branch, open a PR. **Do not force-push to `main`.**
- Do **not** change DNS nameservers for `ecoboom.org` - only edit DNS
  records when we're ready to point at Vercel.
- Do **not** run `npm audit fix --force` - it can break the build.
- Do **not** commit secrets (env vars, tokens). Use Vercel env panel only.

---

## Coordinating with Claude / Cowork

A note from Claude on the workflow:

> "My sandbox is on Anthropic's side, not Jeff's Mac. I can't write to
> `~/.openclaw/workspace/ecoboom-site` directly. Our coordination has to
> happen through the project artifacts (zip files Jeff downloads, or
> commits on the GitHub repo). I don't have image generation capability,
> so any 'photorealistic rebranded' image work needs to be driven by you,
> not me."

So the model is:

1. **Claude writes code** → ships it as a zip Jeff downloads
2. **Ivan integrates** → unzips into the repo, commits, pushes
3. **Ivan handles image rebranding** → drops files in
   `public/images/rebrand/` and updates `src/data/inventory.ts`
4. **Vercel auto-deploys** from `main` once the PR is merged

If you have a sync mechanism that can pull commits from a Claude-pushed
branch on GitHub, that's a tighter loop. But the asynchronous "zip →
unzip → commit → PR" workflow is the baseline that always works.

---

## Step 1 - Get the latest code into git

If a PR is already open from a previous round, update the existing branch:

```bash
cd ~/path/to/ecoboom-site-repo
git checkout rebuild/clean-foundation
git pull origin rebuild/clean-foundation  # in case anything was merged

# wipe and replace working tree (preserves .git)
find . -mindepth 1 -maxdepth 1 -not -name '.git' -exec rm -rf {} +

# unzip the new bundle and copy contents in
unzip -q ~/Downloads/ecoboom-site.zip -d /tmp/ecoboom-new
cp -a /tmp/ecoboom-new/ecoboom-site/. .

git add .
git status   # sanity check - should show many changes
git commit -m "Homepage redesign, full inventory rebrand, mobile menu, logo polish"
git push
```

If you're starting fresh, do this instead:

```bash
git clone https://github.com/jambot-builder/ecoboom-site.git
cd ecoboom-site
git checkout -b rebuild/clean-foundation

# unzip the new bundle into the repo
find . -mindepth 1 -maxdepth 1 -not -name '.git' -exec rm -rf {} +
unzip -q ~/Downloads/ecoboom-site.zip -d /tmp/ecoboom-new
cp -a /tmp/ecoboom-new/ecoboom-site/. .

git add .
git commit -m "Clean rebuild: Next.js + Tailwind, hybrid-power positioning, mobile menu, full inventory"
git push -u origin rebuild/clean-foundation
```

Then on GitHub, open a PR from `rebuild/clean-foundation` → `main`. Send
the URL to Jeff for review.

---

## Step 2 - Image rebranding (your domain)

Two inventory items have visible Saniset Fleet branding in their source
photos and need to be replaced. They're tagged with `needsRebrand: true`
in `src/data/inventory.ts`. See **`public/images/rebrand/README.md`** for
the full convention - short version:

| Inventory id      | What it is                       | What to do                                |
| ----------------- | -------------------------------- | ----------------------------------------- |
| `battery-reon`    | REON Mobile Power Station        | Generate / source a clean rebranded shot. |
| `hydrogen-geh2`   | GEH2® Hydrogen Power Generator   | Generate / source a clean rebranded shot. |

Save the rebranded image at `public/images/rebrand/<id>.<ext>` (e.g.
`public/images/rebrand/battery-reon.webp`), then update the matching
entry in `src/data/inventory.ts`:

- Change `image:` to `"/images/rebrand/<id>.<ext>"`
- Remove the `needsRebrand: true` flag

Run `npm run build` locally to confirm. Commit and push. The PR updates
automatically.

If you want to proactively replace any other Saniset-hotlinked images
with EcoBoom-photographed or rebranded versions, the same pattern works -
drop the file in `public/images/<subdir>/` (or `rebrand/`) and update the
`image` field. **Filename must equal the inventory `id`** to keep things
discoverable.

---

## Step 3 - When the PR is reviewed and merged

After Jeff merges the PR, the next phase is:

1. **Connect the Vercel project to the repo**
   https://vercel.com/jambot-builders-projects/2026-05-14-ecoboom-migration
   → Settings → Git → Connect Git Repository → `jambot-builder/ecoboom-site` → `main`

2. **Add environment variables** for production:
   - `QUOTE_RECIPIENT_EMAIL` (ask Jeff for the address)
   - `RESEND_API_KEY` (ask Jeff to set up Resend at https://resend.com)
   - `QUOTE_FROM_EMAIL` (e.g. `quotes@ecoboom.org`, after domain verified in Resend)

3. **Point `ecoboom.org` DNS at Vercel** - only edit A and CNAME records
   at Squarespace (or wherever DNS lives). Don't change nameservers.
   - Apex `ecoboom.org` → `A` → `76.76.21.21`
   - `www.ecoboom.org` → `CNAME` → `cname.vercel-dns.com`

Don't do any of step 3 until Jeff explicitly approves.

---

## Status summary

Where things stand after this PR:

- **Built**: Full Next.js 14 + Tailwind site. 29-item inventory across 8
  categories with real product photography. Hybrid-power positioning.
  Mobile menu. Quote form with API route. About + Services + Inventory +
  Quote pages.
- **Pending image rebrand**: 2 items flagged (REON, GEH2 hydrogen).
- **Pending content**: Real EcoBoom contact info, social URLs, client
  logos, brand-specific copy. All placeholders are clearly marked in
  `src/data/site.ts` and inline comments.
- **Pending deploy**: Vercel git connection, env vars, DNS at ecoboom.org.

---

## Quick reference

| Thing                 | Where                                                                    |
| --------------------- | ------------------------------------------------------------------------ |
| Repo                  | https://github.com/jambot-builder/ecoboom-site                           |
| Vercel project        | https://vercel.com/jambot-builders-projects/2026-05-14-ecoboom-migration |
| Target domain         | ecoboom.org                                                              |
| Image rebrand folder  | `public/images/rebrand/` - see README in that directory                  |
| Inventory data        | `src/data/inventory.ts` - search for `needsRebrand: true`                |
| Site contact / copy   | `src/data/site.ts`                                                       |

Ambiguous? Ask Jeff before doing anything destructive.
