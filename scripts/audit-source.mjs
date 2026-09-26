import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
const skip = new Set([
  "node_modules",
  ".git",
  ".next",
  ".sites-runtime",
  "artifacts",
  "test-results",
  "playwright-report",
]);
const findings = [];
let count = 0;
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (skip.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(p);
      continue;
    }
    if (/\.(exe|msi|apk|aab|zip|db|sqlite)$/i.test(e.name))
      findings.push(`${p}: forbidden binary/database`);
    if (
      !/\.(tsx?|jsx?|mjs|json|html|css|env|example)$/i.test(e.name) ||
      p.endsWith("audit-source.mjs") ||
      e.name === "package-lock.json"
    )
      continue;
    const text = await readFile(p, "utf8");
    count++;
    for (const pattern of [
      /-----BEGIN (?:RSA )?PRIVATE KEY-----/,
      /\b(?:sk|gsk)[_-][A-Za-z0-9]{24,}/,
      /(?:href|src)=["'][^"']*\.(?:exe|msi|apk|aab)/i,
      /from\s+["'][^"']*(?:max-personal-ai-system|baileys|firebase-admin|electron)/i,
    ])
      if (pattern.test(text)) findings.push(`${p}: ${pattern}`);
  }
}
await walk(".");
if (findings.length) {
  console.error(findings.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `PASS: ${count} source/output files checked; no software binaries, real download links, desktop imports or recognized secret patterns.`,
  );
