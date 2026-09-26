import http from "node:http";
import path from "node:path";
import { readFile, stat } from "node:fs/promises";
import { gzipSync } from "node:zlib";
const root = path.resolve("out");
const port = Number(process.env.PORT || 3101);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
http
  .createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://127.0.0.1");
      let name = decodeURIComponent(url.pathname);
      if (name !== "/" && name.endsWith("/")) {
        res.writeHead(308, { Location: name.slice(0, -1) + url.search });
        res.end();
        return;
      }
      const candidate = path.resolve(root, "." + name);
      if (candidate !== root && !candidate.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      let file = name === "/" ? path.join(root, "index.html") : candidate;
      let status = 200;
      try {
        const info = await stat(file);
        if (!info.isFile()) throw Error("not file");
      } catch {
        try {
          file = candidate + ".html";
          await stat(file);
        } catch {
          file = path.join(root, "404.html");
          status = 404;
        }
      }
      const rawBody = await readFile(file);
      const compress = /gzip/.test(req.headers["accept-encoding"] || "") && /\.(html|js|css|json|svg|xml|txt)$/.test(file);
      const body = compress ? gzipSync(rawBody) : rawBody;
      res.writeHead(status, {
        "Content-Type": mime[path.extname(file)] || "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        "X-Frame-Options": "DENY",
        "Cache-Control": name.startsWith("/_next/static/") ? "public, max-age=31536000, immutable" : "no-cache",
        "Vary": "Accept-Encoding",
        ...(compress ? { "Content-Encoding": "gzip" } : {}),
      });
      res.end(body);
    } catch {
      res.writeHead(400);
      res.end("Bad request");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`MAX AI production preview: http://127.0.0.1:${port}`),
  );
