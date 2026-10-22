import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://carlosjr.engineer',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    processor: satteri({ features: { smartPunctuation: false } })
  },

  integrations: [mdx(), sitemap()]
});
