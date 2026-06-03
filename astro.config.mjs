// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const site = 'https://povstrike.com';

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});