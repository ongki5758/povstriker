# Deploy POV Strike ke Cloudflare Worker

Project ini menggunakan `@astrojs/cloudflare` adapter dan workflow deploy berbasis Wrangler.

## Build config
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Preview/local worker command: `npm run preview`

## Required Cloudflare bindings
Astro Cloudflare adapter untuk project ini disiapkan untuk runtime yang realistis ke depan:
- `ASSETS` — static assets dari `dist/client`
- `SESSION` — KV namespace binding untuk session/runtime state

Tambahan image binding tidak diwajibkan karena adapter disetel ke `imageService: 'passthrough'`.

## Output build
- Static assets: `dist/client`
- Server bundle: `dist/server`
- Worker entry shim: `worker.js`

## Environment variables
Set environment variable berikut di platform deploy Anda:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `NODE_VERSION=22`

## Environment variables project
Karena ke depan project ini akan memakai environment variables, pola yang direkomendasikan adalah menambahkan semua secret/config dari dashboard Cloudflare sebagai Worker environment variables, bukan hardcode di source code.

Contoh umum:
- `PUBLIC_SITE_URL`
- `PUBLIC_WHATSAPP_NUMBER`
- `API_BASE_URL`
- `SESSION_KV_NAMESPACE_ID`
- token atau secret lain sesuai kebutuhan fitur berikutnya

Template lokal/env awal tersedia di file:
- `.dev.vars.example`

## Permission token Cloudflare
Token harus memiliki minimal permission:

### Account permissions
- `Workers Scripts: Edit`
- `Account Settings: Read`
- `Workers KV Storage: Edit`

> Karena workflow saat ini memakai `wrangler deploy`, permission `Cloudflare Pages: Edit` tidak lagi menjadi requirement utama.

## Commands
Build:
```bash
npm run build
```

Deploy:
```bash
npm run deploy
```

## Jika deploy dari platform yang meminta custom commands
Gunakan:

### Build command
```bash
npm run build
```

### Deploy command
```bash
npm run deploy
```
