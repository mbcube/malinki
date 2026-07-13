import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://malinki.ca',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-CA',
          en: 'en-CA',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
      excludeRoutes: ["/admin"]
    }
  }
});
