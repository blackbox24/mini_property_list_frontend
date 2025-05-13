// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5500,
    open: true,
    proxy: {
      '/api': {
        target: 'https://simplepropertylistappbackend-production.up.railway.app',
        changeOrigin: true,
        secure: true, // Required for HTTPS
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Keep /api in the target URL
      },
    },
  },
});