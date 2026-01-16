import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load .env
dotenv.config();

const BASE_URL = process.env.VITE_BASE_URL || 'https://visualgpa.hqinglab.tech';
const DIST_DIR = path.resolve('dist');

const routes = ['', 'utar', 'tarumt', 'sunway', 'custom'];

// 1. Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}/${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
console.log('✅ sitemap.xml generated in dist/');

// 2. Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robots);
console.log('✅ robots.txt generated in dist/');
