import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const browser = await chromium.launch({ headless: true, channel: 'chrome' });
try {
  for (const route of ['/', '/features']) {
    for (const width of [390, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: 1000 } });
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:3101${route}`, { waitUntil: 'networkidle' });
      const images = page.locator('.screenshot-image');
      if (await images.count() !== 13) throw new Error('Expected thirteen product previews');
      for (const image of await images.all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(async (element) => { await element.decode(); });
      }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      if (overflow) throw new Error(`Horizontal overflow: ${route} ${width}`);
      const links = await page.locator('.screenshot-image-link').evaluateAll((elements) => elements.map((a) => a.href));
      for (const link of links) {
        const response = await page.request.get(link);
        if (!response.ok() || !response.headers()['content-type']?.startsWith('image/')) throw new Error(`Broken full-size link: ${link}`);
      }
      const accessibility = await new AxeBuilder({ page }).include('.screenshot-grid').withTags(['wcag2a', 'wcag2aa']).analyze();
      if (accessibility.violations.length) throw new Error(JSON.stringify(accessibility.violations));
      await page.locator('.screenshot-frame').first().screenshot({ path: `artifacts/gallery-${route === '/' ? 'home' : 'features'}-${width}.png` });
      console.log(`PASS ${route} ${width}px: 13 images loaded, full-size links valid, no overflow or gallery accessibility violations`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}
