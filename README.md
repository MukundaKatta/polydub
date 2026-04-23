# PolyDub

Lip-synced video dubbing in 40+ languages, at creator-friendly prices.

**Status:** v0 skeleton — landing page + /try dub-preview route. Full AI dubbing not yet wired.

**Landing:** https://polydub.vercel.app

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 |
| Fonts | Inter via `next/font/google` |
| Hosting | Vercel (zero config) |
| Waitlist | https://waitlist-api-sigma.vercel.app |

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Push to `main` — Vercel picks it up automatically. No environment variables required.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page (original copy + design preserved) |
| `/try` | v0 dub preview — describe your video, pick a language, see a mocked dubbed-preview stub |
| `/api/waitlist` | `POST { email, product: "polydub" }` → forwards to waitlist-api-sigma |

## What's next

- Wire real AI dubbing behind `/try`
- Actual video upload and processing pipeline
- Auth + per-user dub history
