import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uForm from "@vue-uform/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    uForm(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
