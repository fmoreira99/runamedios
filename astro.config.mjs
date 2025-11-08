import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fmoreira99.github.io', // SOLO el dominio
  base: '/runamedios',                  // SIN / al final
  output: 'static',
  outDir: 'docs',                       // Astro construye directo en /docs
});
