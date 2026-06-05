import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/Astro-projet',
  integrations: [
    tailwind({
      // We will define custom styles in global.css rather than injecting theme-level default base
      applyBaseStyles: false,
    }),
  ],
});
