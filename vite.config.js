// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/leetcode-api': {
        target: 'https://leetcode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/leetcode-api/, ''),
        headers: {
          'Origin': 'https://leetcode.com',
          'Referer': 'https://leetcode.com'
        }
      }
    }
  }
});