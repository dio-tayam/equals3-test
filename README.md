# Aesthetics Training Hub — Practitioner Directory

Public, student-facing directory for the Aesthetics Training Hub marketplace: browse vetted UK aesthetics trainers, filter by specialism/location, and see which tier (Standard £150/mo, Premium £249/mo) each one is on.

## 1. How to run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables or database setup needed — data is a typed in-memory dataset.

```bash
npm run build   # production build, also acts as a type-check
```

## 2. Progress report

**Built:**
- A directory page (`app/page.tsx`) listing all practitioners with name, title, specialism(s), location/region, tier, and years of experience.
- Premium vs. Standard distinguished visually: gold corner ribbon, gradient background, glow shadow, and gold-ringed avatar for Premium; a matching but muted taupe ribbon for Standard. Premium practitioners also sort to the top by default.
- Filtering by specialism (multi-select chips, each showing a live count) **and** location (dropdown) — the brief asked for one or the other; I built both plus free-text search (matches name, title, or specialism) and a sort control (Premium first / most experienced / name).
- A "View profile" action that opens a modal with the practitioner's full (multi-paragraph) bio, all specialisms, and tier — cards themselves show a clamped 3-line excerpt of the first paragraph only.
- 10 seed practitioners across 10 UK regions and 11 specialisms, typed via `lib/types.ts` and defined in `lib/practitioners.ts`.
- A header/footer treatment styled off the brand screenshot supplied (cream/taupe/gold palette, serif display type).

**Left out, deliberately:**
- No real database — an in-memory array, per the brief's own suggestion that this is fine for a test.
- No working practitioner sign-up flow. The "List your practice" header button and the modal's "Enquire about training" button are visual stubs (`href="#"` / no handler) — they exist to show where that flow would live, not to function.
- No pagination — irrelevant at 10 records, would matter at real scale.
- No tests, no auth, no real photos (initials-based avatars only).

**What I'd do next:**
- Move the dataset behind a real store (SQLite via Prisma is the obvious next step) so practitioners can be added without a redeploy.
- Wire "List your practice" into an actual onboarding/payment flow — that's the other half of this marketplace and arguably has more revenue impact than the directory's visual polish.
- Instrument the filters (which specialisms/locations actually get clicked) before investing further in UI for either.
- Decide deliberately (with the business) whether "Premium stands out" should also mean ranking priority beyond relevance, not just styling — see below.

## 3. Where the brief was unclear — and what I'd change

This is the part you said you care about most, so I'll be direct:

- **"Filter by specialism (or location, your choice)"** reads like a scoping test — pick one. I built both, plus search and sort, because in a real directory a student arrives with whatever signal they have (a postcode or a treatment name), and an "or" felt artificial once I started building. If the intent was to test restraint rather than completeness, I overshot — happy to strip it back to one filter if that's the actual signal you wanted.
- **"Premium practitioners should stand out... how you do that is your decision"** is framed as a UI question but it's really a ranking/monetisation question wearing a UI costume. I made Premium both visually distinct *and* sorted first by default — meaning Premium buys placement, not just decoration. That's a real product and pricing decision (does Standard ever outrank Premium for a closer/more relevant match?) that I don't think should be made unilaterally by whoever builds the directory page. I'd want that explicitly decided before shipping, not inferred from "make it stand out."
- **No definition of what "tier" functionally means** beyond price. I assumed Premium implies better placement (see above) because a price tier with zero functional benefit beyond a badge is a weak product. That's an assumption on my part, not something the brief stated.
- **No context on how students actually arrive at this page** (organic search, an app, a marketing site). I built it as a self-contained page since nothing else exists in this repo, but real decisions — URL structure, metadata, whether this is even a standalone route vs. embedded in an existing site — depend on that, and I had to guess.
- **"Roughly half a day" sits oddly against "match this specific brand screenshot."** Visual-polish work doesn't have a natural stopping point the way a feature checklist does. I stopped once the palette/type matched the reference and the explicit functional requirements were met, but a tighter brief would either drop the visual reference or extend the time box — asking for both pulls in different directions.

## Optional: how I'd use an LLM here

Students don't always know the clinical term for what they want ("get rid of frown lines" vs. "Anti-Wrinkle Injections"). The natural use of an LLM in *this* feature is as a query-to-specialism mapper, not a ranker: take the free-text search box, send the query plus the fixed list of specialism tags to an LLM API, get back the matching tag(s), and run them through the existing deterministic filter logic. That keeps results predictable and auditable — the LLM only ever picks from a closed list, it never invents results or scores practitioners directly. I haven't implemented this (kept to the "a note is enough" guidance), but it would live as a single function, e.g. `matchSpecialisms(query: string): Promise<string[]>`, called only when a query doesn't already match a known tag or location verbatim.

## Tech

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. Data: typed in-memory dataset (`lib/types.ts`, `lib/practitioners.ts`) — no database.
