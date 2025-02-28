// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // site: "https://cucoderscommunity.github.io",
  // base: "cascarilla.js-website",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
