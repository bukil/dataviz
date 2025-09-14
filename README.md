## Dataviz Dashboard Sandbox

An opinionated starting point for building interactive data visualization dashboards with **Next.js 15 (App Router)** and **Tailwind CSS 4**. The default landing page already includes:

- Placeholder stat tiles
- Simple inline preview “charts” (replace with a real library)
- Suggested next steps for adding real data & APIs

---

## Quick Start

Run the dev server:

```bash
npm run dev
```

Then open http://localhost:3000

Build & run production locally:

```bash
npm run build
npm start
```

---

## Replacing Placeholder Charts

Install a charting library:

```bash
npm i recharts
# or
npm i @nivo/core @nivo/bar
# or
npm i d3
```

Create a `components/` directory and add reusable chart wrappers (e.g. `BarChart.tsx`).

---

## Data Strategies

- Static JSON in `data/` for early prototyping
- API Routes under `app/api/*` for dynamic fetching
- Incremental Static Regeneration (ISR) for hybrid performance
- Streaming & Suspense for progressive hydration

---

## Why Do I Still See the Default Next.js Template After Deploying?

If your deployed site still shows the original boilerplate instructions, check:

1. Commit & Push: Ensure changes to `app/page.tsx` were committed and pushed to the deployed branch.
2. Correct Project Directory: Some deployments accidentally target the monorepo root. Make sure the build output is from this folder (`dataviz`).
3. Build Cache: On Vercel, trigger a fresh build (Deployments → Redeploy with clear cache).
4. CDN Caching / Browser Cache: Hard refresh (Shift+Reload) or open a private window.
5. Mismatched Output Directory: You do NOT need `output: export` — leave defaults unless using static export.
6. Environment Variables: Not relevant yet, but missing required env vars can cause a fallback or error page.

If still stuck, view the deployment logs; confirm `app/page.tsx` content appears in the compiled React server components output.

---

## Project Metadata

Metadata configured in `app/layout.tsx` (Open Graph & basic SEO). Adjust as you integrate real content.

---

## Adding Real Data

Example API route skeleton (create `app/api/stats/route.ts`):

```ts
// app/api/stats/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
	// fetch / compute
	return NextResponse.json({ sessions: 12400, conversion: 0.028 });
}
```

Then fetch it in a server component:

```ts
const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stats`, { cache: 'no-store' }).then(r => r.json());
```

---

## Tailwind Notes

Tailwind v4 (next-gen) is enabled with the `@tailwindcss/postcss` preset. Use logical properties and prefer design tokens when possible.

---

## Deployment (Vercel Recommended)

1. Push to GitHub
2. Import the repo in Vercel
3. Framework auto-detected: Next.js
4. Build Command: `npm run build`
5. Output: (leave blank — Next.js handles)
6. Redeploy with cache purge if you see stale boilerplate

For self-hosting:

```bash
npm run build
npm start -- -p 3000
```

---

## Roadmap Ideas

- Component library integration (Radix UI / shadcn)
- Theming (system + stored preference)
- Auth & per-user data spaces
- Live updates via WebSockets
- Configurable dashboard layout (drag & drop)

---

## License

MIT – Use freely, attribution appreciated.
