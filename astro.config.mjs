// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // server: {
    //   host: true, // Allows external access (0.0.0.0)
    //   port: 4321, // Ensure Astro runs on the correct port
    //   strictPort: false, // Allows other ports if 4321 is taken
    // },
    // preview: {
    //   allowedHosts: ["patricksoo.me"], // Allow your domain
    // },
  },

  integrations: [react()],
});
