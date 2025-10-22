import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-landing/',
  build: {
    // Optimizaciones para producción
    target: 'es2020',
    rollupOptions: {
      output: {
        // Code splitting para mejorar caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ga': ['react-ga4'],
          'formspree': ['@formspree/react'],
        },
      },
    },
  },
})
