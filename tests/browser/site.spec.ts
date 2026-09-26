import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
const routes = [
  "/",
  "/features",
  "/how-it-works",
  "/demo",
  "/pricing",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/refund-policy",
];
test("production HTML is indexable without JavaScript and has unique metadata", async ({
  request,
}) => {
  const titles = new Set();
  const descriptions = new Set();
  for (const route of routes) {
    const r = await request.get(route);
    expect(r.status()).toBe(200);
    const html = await r.text();
    expect((html.match(/<h1[ >]/g) || []).length).toBe(1);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(
      /<meta name="description" content="([^"]+)"/,
    )?.[1];
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(titles.has(title)).toBe(false);
    expect(descriptions.has(description)).toBe(false);
    titles.add(title);
    descriptions.add(description);
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('property="og:image"');
    expect(html).not.toMatch(/rel="canonical"[^>]+(?:localhost|127\.0\.0\.1)/);
    expect(html).toContain('name="robots" content="noindex,');
  }
  const home = (await (await request.get("/")).text()).replace(
    /<!--[\s\S]*?-->/g,
    "",
  );
  expect(home).toContain("personal AI assistant for Windows");
  expect(home).toContain("PKR 4,999");
  expect(home).toContain("$20");
  expect(home).toContain('href="/features"');
  const schema = home.match(
    /<script type="application\/ld\+json">(.*?)<\/script>/,
  )?.[1];
  expect(schema).toBeTruthy();
  const json = JSON.parse(schema!);
  expect(json["@type"]).toBe("SoftwareApplication");
  expect(
    json.offers.map((o: { priceCurrency: string }) => o.priceCurrency),
  ).toEqual(["PKR", "USD"]);
  expect(schema).not.toMatch(/aggregateRating|reviewRating|reviewCount/);
});
test("all WhatsApp anchors are safe, descriptive and manually sent", async ({
  page,
}) => {
  for (const route of routes) {
    await page.goto(route);
    const links = await page
      .locator('a[href^="https://wa.me/"]')
      .evaluateAll((es) =>
        es.map((e) => ({
          href: (e as HTMLAnchorElement).href,
          target: e.getAttribute("target"),
          rel: e.getAttribute("rel"),
          label: e.getAttribute("aria-label") || e.textContent,
        })),
      );
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      const u = new URL(link.href);
      expect(u.pathname).toBe("/923707429349");
      expect(u.searchParams.get("text")).toBeTruthy();
      expect(u.searchParams.has("send")).toBe(false);
      expect(link.target).toBe("_blank");
      expect(link.rel).toContain("noopener");
      expect(link.rel).toContain("noreferrer");
      expect(link.label?.trim()).toBeTruthy();
    }
    expect(
      await page
        .locator(
          'a[href$=".exe"],a[href$=".msi"],a[href="/download"],a[href="/account"]',
        )
        .count(),
    ).toBe(0);
  }
});
test("currency changes purchase message and persists", async ({ page }) => {
  await page.goto("/pricing");
  const card = page.locator(".price-card.featured");
  await expect(card.locator(".price")).toContainText("Rs. 4,999");
  await expect(card.locator("a")).toHaveAttribute("href", /PKR%204%2C999/);
  await page.getByRole("button", { name: "USD", exact: true }).click();
  await expect(card.locator(".price")).toContainText("$20");
  await expect(card.locator("a")).toHaveAttribute("href", /USD%20%2420/);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "USD", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(card.locator(".price")).toContainText("$20");
  await page.getByRole("button", { name: "PKR", exact: true }).click();
  await expect(card.locator(".price")).toContainText("Rs. 4,999");
});
test("demo states and native FAQ work with keyboard", async ({ page }) => {
  await page.goto("/demo");
  await page.getByRole("button", { name: "Thinking", exact: true }).click();
  await expect(page.locator(".sample-response")).toContainText(
    "Understanding your request",
  );
  await page.getByRole("button", { name: "Speaking", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".sample-response")).toContainText(
    "YouTube khol deta hoon",
  );
  await page.goto("/faq");
  const q = page.locator("summary").first();
  await q.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});
test("mobile menu closes on navigation and escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.locator("#main-navigation")).toBeVisible();
  await page
    .locator("#main-navigation")
    .getByRole("link", { name: "Features", exact: true })
    .click();
  await expect(page).toHaveURL(/\/features$/);
  await expect(page.locator("#main-navigation")).toBeHidden();
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.locator("#main-navigation a").first().focus();
  await page.keyboard.press("Escape");
  await expect(page.locator("#main-navigation")).toBeHidden();
  await expect(page.locator("#menu-toggle")).toBeFocused();
});
test("all requested viewport widths have no horizontal overflow", async ({
  page,
}) => {
  test.setTimeout(180000);
  for (const width of [320, 375, 390, 430, 768, 1024, 1366, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );
      expect(overflow, `${route} overflow at ${width}px`).toBe(false);
    }
  }
});
test("desktop and mobile accessibility and visual captures", async ({
  page,
}) => {
  test.setTimeout(180000);
  await mkdir("artifacts/screenshots", { recursive: true });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(
        results.violations,
        `${route} ${width}: ${results.violations.map((v) => v.id).join(",")}`,
      ).toEqual([]);
      await page.screenshot({
        path: `artifacts/screenshots/${route === "/" ? "home" : route.slice(1)}-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
    }
  }
});
test("reduced motion stops all decorative animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/demo");
  expect(
    await page
      .locator(".orbit")
      .first()
      .evaluate((e) => getComputedStyle(e).animationName),
  ).toBe("none");
  expect(
    await page
      .locator(".orb-core")
      .first()
      .evaluate((e) => getComputedStyle(e).animationName),
  ).toBe("none");
});
test("missing future routes return real 404; sitemap and robots are valid", async ({
  request,
}) => {
  for (const path of [
    "/download",
    "/account",
    "/license",
    "/checkout",
    "/missing-page",
  ])
    expect((await request.get(path)).status()).toBe(404);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  expect(urls).toHaveLength(9);
  for (const url of urls) {
    expect(url).toMatch(/^https:\/\//);
    expect(url).not.toMatch(/localhost|refund-policy|account|download/);
    expect((await request.get(new URL(url).pathname)).status()).toBe(200);
  }
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Disallow: /");
  expect(robots).toContain("Sitemap: https://");
});
test("core information and links work when JavaScript is disabled", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3101");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText("PKR 4,999", { exact: true })).toBeVisible();
  await expect(page.getByText("USD $20", { exact: true })).toBeVisible();
  await page.goto("http://127.0.0.1:3101/faq");
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await context.close();
});
