import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      NEXT_PUBLIC_API_URL: JSON.stringify(process.env.NEXT_PUBLIC_API_URL || '/api'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://cdn-dev.preoday.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
