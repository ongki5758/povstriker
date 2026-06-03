# Deploy POV Strike ke Cloudflare Worker

Project ini menggunakan `@astrojs/cloudflare` adapter dan workflow deploy berbasis Wrangler.

## Build config
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Preview/local worker command: `npm run preview`

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
- `Cloudflare Pages: Edit` atau permission Cloudflare yang sesuai dengan target deploy Anda
- `Workers Scripts: Edit`
- `Account Settings: Read`

> Catatan: bila deploy command menggunakan `wrangler deploy`, token wajib memiliki izin Workers yang sesuai. Bila memakai `wrangler pages deploy`, token juga perlu izin Pages.

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
