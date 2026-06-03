# POV Strike

Website resmi POV Strike berbasis Astro + Tailwind CSS dengan adapter Cloudflare.

## Stack
- Astro 6
- `@astrojs/cloudflare`
- Tailwind CSS 4
- Wrangler

## Requirements
- Node.js 22+
- npm

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Output build Cloudflare:
- server bundle: `dist/server`
- static assets: `dist/client`

## Preview lokal dengan Wrangler
```bash
npm run preview
```

## Deploy
```bash
npm run deploy
```

## Route utama
- `/`
- `/produk`
- `/produk/ikan-mas-harian-formula`

## Cloudflare Worker setup
Project ini sekarang menggunakan Astro Cloudflare adapter, sehingga cocok untuk workflow deploy berbasis Worker/Wrangler.

Environment variables yang umumnya dibutuhkan di platform deploy Cloudflare:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `NODE_VERSION=22`

Untuk kebutuhan runtime, simpan konfigurasi di environment variables Cloudflare:
- `PUBLIC_SITE_URL`
- `PUBLIC_WHATSAPP_NUMBER`
- `API_BASE_URL`
- `SESSION_KV_NAMESPACE_ID`

Contoh lokal tersedia di:
- `.dev.vars.example`

Catatan runtime Cloudflare:
- static assets disajikan dari binding `ASSETS`
- image binding tambahan tidak diwajibkan (`imageService: 'passthrough'`)
- session runtime memakai binding `SESSION` agar siap untuk kebutuhan environment/runtime berikutnya
