import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://username.github.io',
  base: '/musportfolio',
  output: 'static',
  trailingSlash: 'always',
});