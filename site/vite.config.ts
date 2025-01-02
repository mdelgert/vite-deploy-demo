import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/vite-deploy-demo/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
      },
    },
  },
}));
