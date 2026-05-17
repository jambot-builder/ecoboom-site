# Rebranded product imagery

This directory holds rebranded versions of product photos that originally
came from sanisetfleet.com with visible Saniset branding. Once a rebranded
image is saved here, update the corresponding entry in
`src/data/inventory.ts` to point to it.

## Naming convention

**Filename must match the inventory item `id` exactly**, with a `.jpg`,
`.png`, or `.webp` extension.

For example:

| Inventory `id`      | Save the rebranded image as       |
| ------------------- | --------------------------------- |
| `battery-reon`      | `public/images/rebrand/battery-reon.jpg`     |
| `hydrogen-geh2`     | `public/images/rebrand/hydrogen-geh2.jpg`    |

Use `.webp` if you have it (smaller filesize, faster load). Aspect ratio
roughly 4:3 or 5:4 works best with the existing `InventoryCard` layout.

## Items that need rebranding right now

These are the inventory items currently flagged with `needsRebrand: true`
in `src/data/inventory.ts`. They show visible Saniset branding in the
source photograph.

| Inventory `id`    | Product                            | What needs to change                                  |
| ----------------- | ---------------------------------- | ----------------------------------------------------- |
| `battery-reon`    | REON Mobile Power Station          | Original filename "Saniset-Fleet-Reon white bg.png" - likely has Saniset wordmark on the unit or in the frame. Replace with a clean shot or a rebranded version with EcoBoom branding. |
| `hydrogen-geh2`   | GEH2® Hydrogen Power Generator     | Original filename "Hydrogen EODev Saniset Fleet web.png" - likely a co-branded EODev / Saniset image. Replace with a clean GEH2 shot, or one with EcoBoom branding alongside EODev (EODev is the manufacturer, not a competitor - their branding can stay). |

## How to integrate after dropping a new image

1. Save the rebranded file here with the correct `id`-based name.
2. Open `src/data/inventory.ts`.
3. Find the matching entry (search for the `id`).
4. Update its `image` field to `/images/rebrand/<filename>` (relative URL - Next.js serves `public/` at the site root).
5. Remove the `needsRebrand: true` flag from that entry.
6. Run `npm run build` locally to confirm nothing broke, then commit.

### Example

Before:

```ts
{
  id: "battery-reon",
  name: "REON Mobile Power Station",
  brand: "REON",
  category: "Battery",
  spec: "Mobile power station for film sets, brand activations, and remote locations.",
  image: "https://static.wixstatic.com/media/.../Saniset-Fleet-Reon%20white%20bg.png",
  needsRebrand: true,
},
```

After (image dropped in as `public/images/rebrand/battery-reon.webp`):

```ts
{
  id: "battery-reon",
  name: "REON Mobile Power Station",
  brand: "REON",
  category: "Battery",
  spec: "Mobile power station for film sets, brand activations, and remote locations.",
  image: "/images/rebrand/battery-reon.webp",
},
```

That's it. The site auto-loads the new image on the next page render.

## Future: replace any other hotlinked imagery

Beyond the two flagged items, all the Saniset product photos currently
hotlink from `static.wixstatic.com`. That's stable but not ideal long-term.
When EcoBoom has its own product photography, replace those URLs the same
way - drop the file in this folder (or any subfolder of `public/images/`)
and update the `image` path in `inventory.ts`.

## Image gen prompting (optional reference)

If using an AI image tool, a generic prompt that tends to work for
industrial rental gear shots:

> "Studio product photograph of a [PRODUCT NAME], white seamless background,
> three-quarter angle, soft even studio lighting, photorealistic,
> commercial product photography, no logos, no branding, no text"

Then composite the EcoBoom logo on the unit in Photoshop / Affinity / Canva
afterward if needed. For "on location" shots, swap the background prompt to
"on a film set" or "at a music festival."
