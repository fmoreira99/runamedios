// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://noticias.zonasilau.site', // dominio
  base: '/',                               // raíz
  output: 'static',
  outDir: 'docs',                          // build a /docs
  integrations: [mdx()],                   // 👈 habilita .mdx
});
