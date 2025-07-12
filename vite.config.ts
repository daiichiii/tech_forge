import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: './app/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './public/index.html'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/src'),
      '@/components': path.resolve(__dirname, './app/src/components'),
      '@/hooks': path.resolve(__dirname, './app/src/hooks'),
      '@/services': path.resolve(__dirname, './app/src/services'),
      '@/types': path.resolve(__dirname, './app/src/types'),
      '@/utils': path.resolve(__dirname, './app/src/utils'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/health': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})