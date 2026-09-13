import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carlosjr.engineer',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    smartypants: false
  },

  integrations: [mdx(), sitemap()]
});