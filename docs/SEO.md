# SEO implementation and public-launch setup

The home page targets visitors looking for a personal AI assistant for Windows. Supporting themes are voice commands, user-controlled memory, supported computer actions, Roman Urdu workflows, Pakistani Dost, fixed pricing and manually arranged demos.

## Routes

| Route | Search intent |
| --- | --- |
| `/` | What MAX AI is and how to try or purchase it |
| `/features` | Capabilities, configuration and limitations |
| `/how-it-works` | Talk → understand → consider → confirm → act → remember |
| `/demo` | Free 24-hour demo and WhatsApp request process |
| `/pricing` | PKR 4,999 / USD $20 and manual purchase process |
| `/faq` | Honest answers about setup, providers, trial and sales |
| `/contact` | Public business WhatsApp channel |
| `/privacy` | Website preferences, hosting and external WhatsApp handling |
| `/terms` | Current product facts and unresolved terms |

Each primary page has one H1, a unique title/description, canonical, Open Graph and large-image social card metadata. Secondary pages have visible breadcrumbs. Navigation and footer links make every major page reachable. FAQ uses native details/summary with the answer text in initial HTML. No FAQ rich-result eligibility is claimed, and no fake organization, review or rating data is added.

`SoftwareApplication` JSON-LD on the home page describes Windows, productivity use, and two independent currency offers. The information matches visible pricing. No `aggregateRating`, `reviewCount`, fabricated company registration or unverified compatibility version is present.

## Preview vs. public indexing

Private previews intentionally use `noindex, nofollow` and `Disallow: /`. This is staging behavior, not the public launch setting. For public launch:

1. Finalize the owner-review terms/privacy/refund decisions.
2. Configure `NEXT_PUBLIC_SITE_URL` with the canonical HTTPS origin.
3. Set `NEXT_PUBLIC_INDEXABLE=true` and rebuild.
4. Verify page robots now allow indexing and robots.txt allows `/` (while excluding future private areas and the unfinished refund page).
5. Ensure host redirects HTTP and alternate hostnames to that origin, and trailing-slash variants to the chosen clean URL.
6. Add actual Search Console/Bing verification tokens using the documented environment variables if desired; submit `/sitemap.xml` after the public launch.

The sitemap includes nine marketing/legal routes, never future accounts, downloads, licenses or the unfinished refund draft. A deploy with draft policies remains owner-private. No fake verification tokens are present.

## Performance and images

The headline and core copy are statically rendered. The hero orb is lightweight CSS geometry, with no video, WebGL, stock image or AI call. Fonts are optimized/self-hosted by Next. Icons are named imports. Motion honors `prefers-reduced-motion`. The generated social card is 1200×630 and is not a critical page asset. Screenshots are labeled aspect-ratio placeholders until real images are supplied; use descriptive names, explicit dimensions, responsive sizes and useful alt text when adding them.

## Validation

`npm run test:e2e` checks the built output: metadata uniqueness, initial HTML, H1 count, schema, business links, prices, sitemap, real 404 responses, keyboard controls, reduced motion, no-JavaScript reading and responsive overflow. Axe checks all routes at desktop/mobile widths. Lighthouse lab observations are recorded in the final report; they are not field Core Web Vitals or a ranking guarantee.
