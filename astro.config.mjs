// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pet-sitter-dordogne.fr', // REMPLACER PAR LE VRAI DOMAINE
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      iconDir: "./public/icons",
    }),
    sitemap()
  ],
});