# Deploy POV Strike ke Cloudflare Worker

Project ini menggunakan `@astrojs/cloudflare` adapter dan workflow deploy berbasis Wrangler.

## Build config
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Preview/local worker command: `npm run preview`

## Required Cloudflare bindings
Astro Cloudflare adapter pada build saat ini mengaktifkan binding berikut:
- `ASSETS` — static assets dari `dist/client`
- `IMAGES` — Cloudflare Images binding
- `SESSION` — KV namespace untuk session

Jika environment deploy Anda tidak otomatis menyediakan binding tersebut, deployment runtime dapat gagal meskipun build sukses.

## Output build
- Static assets: `dist/client`
- Server bundle: `dist/server`
- Worker entry shim: `worker.js`

## Environment variables
Set environment variable berikut di platform deploy Anda:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `NODE_VERSION=22`

## Permission token Cloudflare
Token harus memiliki minimal permission:

### Account permissions
- `Workers Scripts: Edit`
- `Account Settings: Read`
- `Workers KV Storage: Edit` jika Anda mengelola KV binding `SESSION`
- `Images: Edit` / permission Cloudflare Images yang relevan bila binding `IMAGES` dipakai pada account Anda

> Karena workflow saat ini memakai `wrangler deploy`, permission `Cloudflare Pages: Edit` tidak lagi menjadi requirement utama. Yang dibutuhkan adalah permission Worker/runtime yang sesuai.

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
