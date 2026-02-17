import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // For GitHub Pages, set site to your GitHub Pages URL:
  // site: 'https://yourusername.github.io',
  // base: '/repo-name',

  // For Cloudflare Pages, just set your domain:
  // site: 'https://yourdomain.pages.dev',

  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
    },
  },
});
