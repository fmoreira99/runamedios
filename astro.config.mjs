import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fmoreira99.github.io', // 👈 sin /runamedios
  base: '/runamedios/',                // 👈 esto sí se queda
  output: 'static',
});
