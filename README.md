# MAX AI — Phase 1 marketing website

A separate public-facing website for MAX AI, a Windows personal AI system. This phase explains the product and routes demo/purchase requests to WhatsApp Business. Delivery, payment verification and activation guidance are manual.

## Run locally

Requires Node.js 20.9+ (built here with Node 26.5.0) and npm.

```powershell
npm ci
npm run dev
```

Development preview: `http://127.0.0.1:3100`.

```powershell
npm run build
npm start
```

The production preview serves the exported `out/` directory at `http://127.0.0.1:3101`. Set `PORT` to change this preview port. Production hosting uses the static export; `next start` is not used.

## Stack and structure

- Next.js 16.3.6 App Router, React 19.2.8, TypeScript, Tailwind CSS 4.
- Framer Motion 13.4.4 for the small voice-preview transition; CSS for the animated orb.
- Lucide named icon imports; optimized local Geist fonts via `next/font`.
- `app/`: Home, Features, How It Works, Demo, Pricing, FAQ, Contact, Privacy, Terms and Refund Policy.
- `components/`: shared brand shell, orb, content sections, pricing and visual preview.
- `lib/business.ts`: prices, product facts, business contact and URL-encoded WhatsApp messages.
- `lib/seo.ts`: per-route metadata, canonical origin, robots policy and SoftwareApplication JSON-LD.
- `tests/`: message/config tests and browser checks. Playwright is a **development-only** test dependency, never a website runtime or deployed asset.
- `docs/`: architecture, deferred commerce and SEO/release reports.

## Business behavior

Fixed launch prices: PKR 4,999 / USD $20. The currency selector changes the displayed price and purchase message, and remembers the preference locally. It does not perform currency conversion.

WhatsApp Business: **+92 370 7429349**, link number `923707429349`. Links use `encodeURIComponent`, `target="_blank"`, and `rel="noopener noreferrer"`. Visitors review and send their own message. No message is automatically sent.

The 24-hour demo is requested manually. This website has no accounts, Firebase integration, trial activation, license service, payment collection, software downloads, binaries or desktop-source dependency. MAX PC is unchanged.

## Configuration

Copy `.env.example` to `.env.local` when configuring a deployment. All listed values are public metadata settings, not secrets:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical HTTPS origin for all metadata and sitemap entries |
| `NEXT_PUBLIC_INDEXABLE` | `false` for private/staging previews; `true` for the approved public launch |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional actual Google verification token |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional actual Bing verification token |

The existing Sites manifest identifies a private review site and exports only `out/`. It does not contain credentials. Changing build-time metadata requires a rebuild. Apply HTTPS, canonical-host and trailing-slash redirects in the chosen host.

## Checks

```powershell
npm run typecheck
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run audit:source
```

Browser tests use an isolated headless Chromium session, launch a local static preview when needed, and never send a WhatsApp message. They check nine viewport widths, route metadata, H1/schema, keyboard interactions, external links, currency behavior, no-JavaScript content, reduced motion, 404 responses, sitemap and accessibility. Screenshots/test reports are ignored development artifacts.

## Before public sales

The preview is owner-private and noindex. Seven owner-supplied product screenshots are included; screenshots containing visible contacts, chat history, or personal memory entries remain excluded. Finalize the legal seller identity, refund rules, privacy retention/request process, license/device and update policy, and Windows requirements. Then configure the approved canonical domain, enable indexing, rebuild and review public deployment settings. Do not publish draft policies as finalized promises.

See [architecture](docs/ARCHITECTURE.md), [SEO setup](docs/SEO.md), [future commerce](docs/FUTURE-COMMERCE.md), and [validation report](docs/FINAL-REPORT.md).
