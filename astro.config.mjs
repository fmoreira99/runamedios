import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fmoreira99.github.io/runamedios',
  base: '/runamedios/',
  output: 'static',
  build: {
    assets: '_astro', // asegúrate de usar esta carpeta
  },
});
