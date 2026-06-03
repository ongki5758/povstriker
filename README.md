# POV Strike

Website resmi POV Strike berbasis Astro + Tailwind CSS.

## Stack
- Astro 6
- Tailwind CSS 4
- Static site output (`dist/`)
- Cocok untuk deploy di Cloudflare Pages

## Requirements
- Node.js 22+
- npm

## Development
```bash
npm install
npm run dev
```

Aplikasi lokal akan berjalan di `http://localhost:4321`.

## Quality check
```bash
npm run check
```

## Production build
```bash
npm run build
```

Hasil build akan tersedia di folder:
```bash
dist/
```

## Preview build
```bash
npm run preview
```

## Struktur route utama
- `/` — homepage
- `/produk` — katalog produk
- `/produk/ikan-mas-harian-formula` — halaman detail produk

## Deploy ke Cloudflare Pages
Gunakan konfigurasi berikut:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

Lihat detail tambahan di [`DEPLOY.md`](./DEPLOY.md).

## Catatan
Project ini saat ini menggunakan output static, sehingga tidak memerlukan adapter SSR Cloudflare.
