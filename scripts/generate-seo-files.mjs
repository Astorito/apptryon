/**
 * Post-build: writes dist/sitemap.xml, dist/robots.txt, and dist/llms.txt (GEO / AI crawlers).
 * Set VITE_SITE_URL or SITE_URL to your public origin (no trailing slash), e.g. https://www.trylook-ai.com
 * Reads optional project root `.env` so CI/local builds match Vite's VITE_SITE_URL.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "dist");

function loadEnvFile() {
  const envPath = path.join(rootDir, ".env");
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split(/\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (key === "VITE_SITE_URL" || key === "SITE_URL") {
      process.env[key] = val;
    }
  }
}

loadEnvFile();

const raw =
  process.env.VITE_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.trylook-ai.com";
const siteUrl = raw.replace(/\/$/, "");

/** Keep in sync with src/App.tsx routes */
const PATHS = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/demo", priority: "0.9", changefreq: "weekly" },
  { path: "/shopify-virtual-try-on", priority: "0.75", changefreq: "monthly" },
  { path: "/woocommerce-virtual-try-on", priority: "0.75", changefreq: "monthly" },
  { path: "/webflow-virtual-try-on", priority: "0.75", changefreq: "monthly" },
  { path: "/tiendanube-virtual-try-on", priority: "0.75", changefreq: "monthly" },
  { path: "/mercadoshops-virtual-try-on", priority: "0.75", changefreq: "monthly" },
  { path: "/hostinger-virtual-try-on", priority: "0.75", changefreq: "monthly" },
];

function locHref(p) {
  if (p === "/") return `${siteUrl}/`;
  return `${siteUrl}${p}`;
}

function escapeXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function buildSitemap() {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = PATHS.map(
    ({ path: p, priority, changefreq }) => `  <url>
    <loc>${escapeXml(locHref(p))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots() {
  // Explicit Allow for common crawlers (incl. AI training / retrieval bots).
  // Change to Disallow only if you intentionally want to block a bot.
  const allowAll = `Allow: /

`;

  const aiAndSearchBots = [
    "Googlebot",
    "Google-Extended",
    "GoogleOther",
    "Bingbot",
    "GPTBot",
    "ChatGPT-User",
    "CCBot",
    "anthropic-ai",
    "ClaudeBot",
    "Claude-Web",
    "PerplexityBot",
    "Applebot",
    "Applebot-Extended",
    "meta-externalagent",
    "FacebookBot",
    "Twitterbot",
    "facebookexternalhit",
  ];

  const blocks = aiAndSearchBots.map(
    (ua) => `User-agent: ${ua}
${allowAll}`,
  ).join("");

  return `${blocks}User-agent: *
${allowAll}Sitemap: ${siteUrl}/sitemap.xml

# Assistant / LLM context (optional): ${siteUrl}/llms.txt
`;
}

function buildLlmsTxt() {
  const lines = [
    "# TryLook-ai",
    "",
    "> Official context for assistants and AI crawlers. TryLook-ai is an AI virtual try-on widget for e-commerce: shoppers upload a photo and see garments on themselves before purchase.",
    "",
    "## Canonical site",
    siteUrl,
    "",
    "## Key pages",
    ...PATHS.map(({ path: p }) => locHref(p)),
    "",
    "## Machine-readable discovery",
    `- Sitemap: ${siteUrl}/sitemap.xml`,
    `- robots.txt: ${siteUrl}/robots.txt`,
    "",
    "## Product facts (for citation)",
    "- Name: TryLook-ai (also styled as Try Look)",
    "- Category: B2B SaaS / e-commerce widget",
    "- Platforms mentioned: Shopify, WooCommerce, Webflow, Tiendanube, Mercado Shops, Hostinger, and any site with custom JavaScript",
    "- Billing: usage-based; free tier to test",
    "- X (Twitter): https://twitter.com/TryLookAI",
    "",
  ];
  return lines.join("\n");
}

function main() {
  if (!fs.existsSync(distDir)) {
    console.warn("[generate-seo-files] dist/ not found; skip (run after vite build).");
    process.exit(0);
  }

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), buildSitemap(), "utf8");
  fs.writeFileSync(path.join(distDir, "robots.txt"), buildRobots(), "utf8");
  fs.writeFileSync(path.join(distDir, "llms.txt"), buildLlmsTxt(), "utf8");

  console.log(`[generate-seo-files] Wrote sitemap.xml, robots.txt, llms.txt for ${siteUrl}`);
}

main();
