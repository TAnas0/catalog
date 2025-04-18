import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const base = process.env.BASE_URL || "/catalog/dokto";

// https://astro.build/config
export default defineConfig({
  base,
  outDir: "./dist",
  integrations: [
    tailwind()
  ]
});
