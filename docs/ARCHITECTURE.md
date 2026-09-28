# MAX AI website — Phase 1 architecture

This is an independent Next.js App Router marketing project. It has no imports from, runtime dependency on, or writes to the MAX PC repository.

| System | Responsibility |
| --- | --- |
| MAX PC | The existing Electron/Windows personal AI application, backend, voice, memory, integrations and user data. Unchanged by this project. |
| MAX Website | Product information, a visual voice simulation, fixed pricing, FAQs and external WhatsApp links. |
| WhatsApp Business | Manual demo requests, payment instructions, verification, software delivery and activation guidance. Visitors review and send their own messages. |
| Future license backend | Not implemented. No accounts, trial timers, entitlement database, payment gateway or installer access exists here. |

## Rendering and boundaries

- `app/` contains server-rendered/static routes. `next build` exports public HTML/assets to `out/`.
- `components/marketing.tsx` supplies reusable, factual marketing content. All core copy is in initial HTML.
- Client components are limited to navigation, local currency preference, and the illustrative voice-state controls. Framer Motion is used only for a short state transition; CSS handles decorative orbiting.
- `lib/business.ts` is the source of truth for the business number, prices, trial offer, product platform and message construction. Prices are fixed and never converted.
- `lib/seo.ts` centralizes metadata, canonical origin, structured data and indexability. A real Sites origin is the default; environment variables can replace it with the selected custom domain.
- `public/max-ai-social-preview.png` is an original social card, resized to 1200×630. It is not loaded as a hero image.
- No API endpoints, microphone access, AI calls, tracking SDKs, cookie banners, databases, or contact forms are included.
- `localStorage` contains only the `max-currency` display preference. Failure to access storage falls back to component state.
- Public phone details are business contact information, not WhatsApp authentication credentials.

## Website vs. desktop demonstration

The interactive preview changes orb states and fictional sample text. It performs no tool action and sends no messages. A real 24-hour MAX demo is requested through WhatsApp and arranged manually. Browsing this site does not start a trial.

## Deployment

The build is static and can be hosted without a Node server. `.openai/hosting.json` selects the Sites identity and the `out` directory. Do not upload source, `node_modules`, test traces, local configuration or desktop data as the website artifact.

Private/staging previews default to `NEXT_PUBLIC_INDEXABLE=false`. Before a public launch, resolve the legal policy drafts, choose the canonical origin, set `NEXT_PUBLIC_INDEXABLE=true`, rebuild, and verify robots/meta again. Enforce HTTP→HTTPS and alternate host→canonical redirects at the host. Clean URLs omit trailing slashes; the local production preview redirects trailing slash variants.

`scripts/serve.mjs` is a local production-output preview, not a desktop service. It serves missing paths as HTTP 404 and binds only to loopback.

## Screenshots and claims

The gallery uses thirteen cropped, privacy-edited product previews based on owner-supplied screenshots. Personal data is blurred into the image pixels, including in full-size links. See `SCREENSHOT-EDITING.md` for the editing brief and limitations. Illustrative conversations and memory entries elsewhere on the site are fictional. Features are described with beta/build limitations; the Android view remains explicitly coming soon.

## Public launch decisions

Finalize seller identity, privacy retention and requests, refund rules, license/device limits, update policy, Windows compatibility, and support expectations. The private review draft must not be mistaken for a public sales launch.
