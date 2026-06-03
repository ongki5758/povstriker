# Deploy POV Strike ke Cloudflare

## Opsi yang direkomendasikan: Cloudflare Pages
Karena project ini adalah static Astro site, deployment paling tepat adalah Cloudflare Pages.

## Konfigurasi build
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

## Langkah deploy via dashboard Cloudflare Pages
1. Push project ini ke Git provider Anda.
2. Masuk ke Cloudflare Dashboard.
3. Buka **Workers & Pages** > **Create application** > **Pages**.
4. Connect repository project `povstrike.com`.
5. Set konfigurasi berikut:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `22`
6. Deploy.

## Custom domain
Setelah deploy berhasil:
1. Tambahkan custom domain `povstrike.com`
2. Tambahkan juga `www.povstrike.com` bila diperlukan
3. Pastikan DNS diarahkan melalui Cloudflare

## Build lokal sebelum deploy
```bash
npm install
npm run check
npm run build
```

## wrangler.toml
File `wrangler.toml` disediakan untuk dokumentasi/workflow tambahan, tetapi deployment static ini tetap paling cocok melalui Cloudflare Pages.

## Kapan perlu adapter Cloudflare?
Adapter seperti `@astrojs/cloudflare` baru diperlukan jika situs diubah menjadi:
- SSR
- middleware runtime
- edge rendering
- API handler di server

Saat ini project belum membutuhkan itu.
