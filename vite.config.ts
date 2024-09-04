import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path-browserify';
import { sveltePreprocess } from 'svelte-preprocess';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess()
    })
  ],
  resolve: {
    dedupe: ['svelte'],
    alias: {
      path: 'path-browserify',
      '@src': path.resolve('./src'),
      '@assets': path.resolve('./src/assets'),
      '@router': path.resolve('./src/router'),
      '@store': path.resolve('./src/store'),
      '@services': path.resolve('./src/services'),
      '@translations': path.resolve('./src/translations'),
      '@pages': path.resolve('./src/pages'),
      '@components': path.resolve('./src/components')
    }
  }
});
