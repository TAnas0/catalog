import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/catalog/dokto",
  outDir: "../../dist/dokto",
  integrations: [
    tailwind()
  ]
});
