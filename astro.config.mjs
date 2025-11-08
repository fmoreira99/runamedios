import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://noticias.zonasilau.site', // SOLO el dominio
  base: '/',                               // raíz del dominio personalizado
  output: 'static',
  outDir: 'docs',                          // Astro construye directo en /docs
});
