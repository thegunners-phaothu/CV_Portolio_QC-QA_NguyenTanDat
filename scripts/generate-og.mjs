// Generates public/og-image.png (1200x630) from data-free SVG text. Run: node scripts/generate-og.mjs
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#111113"/><stop offset="1" stop-color="#27272a"/></linearGradient>
<linearGradient id="ac" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f5d061"/><stop offset="1" stop-color="#e5e4e2"/></linearGradient>
<radialGradient id="glow" cx="0.85" cy="0.1" r="0.6"><stop offset="0" stop-color="#f5d061" stop-opacity="0.35"/><stop offset="1" stop-color="#f5d061" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/><rect width="1200" height="630" fill="url(#glow)"/>
<rect x="80" y="90" width="96" height="96" rx="22" fill="url(#ac)"/>
<text x="128" y="152" font-family="DejaVu Sans,Arial,sans-serif" font-size="40" font-weight="700" fill="#111113" text-anchor="middle">TD</text>
<text x="80" y="300" font-family="DejaVu Sans,Arial,sans-serif" font-size="76" font-weight="700" fill="#ffffff">Nguyen Tan Dat</text>
<text x="80" y="380" font-family="DejaVu Sans,Arial,sans-serif" font-size="48" font-weight="700" fill="url(#ac)">QA/QC Tester</text>
<text x="80" y="460" font-family="DejaVu Sans,Arial,sans-serif" font-size="28" fill="#cbd5e1">4 years · API Testing · SQL Validation · End-to-end Workflows</text>
<rect x="80" y="530" width="220" height="6" rx="3" fill="url(#ac)"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
console.log("public/og-image.png written");
