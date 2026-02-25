#!/usr/bin/env node
/**
 * inject-meta.mjs
 *
 * Post-build script that injects the correct <title>, <meta description>,
 * <og:title>, <og:description>, and <link rel="canonical"> into a separate
 * index.html for every route.
 *
 * Vercel checks for an exact matching static file before applying the
 * catch-all rewrite in vercel.json, so:
 *   dist/best-office-chairs/index.html  → served at /best-office-chairs
 *   dist/index.html                     → served at / (unchanged)
 *
 * This means Googlebot receives correct metadata immediately, with zero
 * JavaScript required — without needing Puppeteer or a headless browser.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: 'best-office-chairs',
    title: 'Best Office Chairs on Amazon (2025): Ranked by Comfort & Ergonomics',
    description:
      'Find the best office chairs on Amazon in 2025. We ranked the top ergonomic chairs from Herman Miller, Steelcase, Secretlab, and more — with detailed comparisons, prices, and direct Amazon links.',
  },
  {
    path: 'best-mushroom-coffees',
    title: 'Best Mushroom Coffee on Amazon (2025): Tested & Ranked',
    description:
      "We tested and ranked the best mushroom coffee blends on Amazon in 2025. Compare Lion's Mane, Reishi, and Chaga blends from Four Sigmatic, RYZE, and Everyday Dose — with caffeine breakdowns.",
  },
  {
    path: 'best-standing-desks',
    title: 'Best Standing Desks on Amazon (2025): Electric Height-Adjustable Ranked',
    description:
      'Discover the best standing desks on Amazon in 2025. Compare electric height-adjustable desks from Flexispot, UPLIFT, Autonomous, and IKEA — with honest reviews and direct Amazon links.',
  },
  {
    path: 'best-robot-vacuums',
    title: 'Best Robot Vacuums on Amazon (2025): Expert Rankings',
    description:
      'Find the best robot vacuums on Amazon in 2025. Compare top-rated models from Roborock, Shark, iRobot, and Dreame — with suction tests, obstacle avoidance scores, and Amazon links.',
  },
  {
    path: 'best-tvs',
    title: 'Best TVs on Amazon (2025): OLED, QLED & 4K Ranked',
    description:
      'Discover the best TVs on Amazon in 2025. We compared OLED, QLED, and 4K TVs from LG, Sony, Samsung, and Hisense — with picture quality scores, gaming specs, and direct Amazon links.',
  },
  {
    path: 'best-coffee-grinders',
    title: 'Best Coffee Grinders on Amazon (2025): Burr Grinders Ranked',
    description:
      'Find the best coffee grinders on Amazon in 2025. Compare burr grinders from Baratza, Fellow, OXO, Breville, and Timemore — with grind consistency tests and direct Amazon links.',
  },
  {
    path: 'best-air-purifiers',
    title: 'Best Air Purifiers on Amazon (2025): HEPA & CADR Tested',
    description:
      'Discover the best air purifiers on Amazon in 2025. We compared HEPA models from Levoit, Dyson, Winix, and Blueair — with CADR scores, room coverage ratings, and direct Amazon links.',
  },
  {
    path: 'best-pimple-patches',
    title: 'Best Pimple Patches on Amazon (2025): Hydrocolloid Ranked',
    description:
      'Find the best pimple patches on Amazon in 2025. Compare top-rated hydrocolloid patches from COSRX, Mighty Patch, Rael, and Grace & Stella — with honest reviews and direct Amazon links.',
  },
  {
    path: 'best-stick-vacuums-mop',
    title: 'Best Stick Vacuums & Mops on Amazon (2025): Expert Picks',
    description:
      'Discover the best stick vacuums and mop combos on Amazon in 2025. We ranked top cordless models from Dyson, Shark, Tineco, and Bissell — with suction tests and direct Amazon links.',
  },
];

function escapeForAttr(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

async function run() {
  let template;
  try {
    template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
  } catch {
    console.error('❌ dist/index.html not found. Run `npm run build` first.');
    process.exit(1);
  }

  for (const route of routes) {
    const dir = path.join(distDir, route.path);
    await fs.mkdir(dir, { recursive: true });

    const safeTitle = escapeForAttr(route.title);
    const safeDesc  = escapeForAttr(route.description);
    const canonicalUrl = `https://www.bestonamz.com/${route.path}`;

    let html = template
      // title tag
      .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
      // meta description
      .replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${safeDesc}"`
      )
      // og:title
      .replace(
        /<meta property="og:title" content="[^"]*"/,
        `<meta property="og:title" content="${safeTitle}"`
      )
      // og:description
      .replace(
        /<meta property="og:description" content="[^"]*"/,
        `<meta property="og:description" content="${safeDesc}"`
      )
      // og:url
      .replace(
        /<meta property="og:url" content="[^"]*"/,
        `<meta property="og:url" content="${canonicalUrl}"`
      )
      // canonical
      .replace(
        /<link rel="canonical" href="[^"]*"/,
        `<link rel="canonical" href="${canonicalUrl}"`
      );

    await fs.writeFile(path.join(dir, 'index.html'), html, 'utf-8');
    console.log(`  ✓ /${route.path}`);
  }

  console.log('\n✅ Meta injection complete — all routes have static HTML.\n');
}

run().catch((err) => {
  console.error('❌ inject-meta failed:', err);
  process.exit(1);
});
