// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://povstrike.com';

// https://astro.build/config
export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
    sessionKVBindingName: 'SESSION',
    prerenderEnvironment: 'node',
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});