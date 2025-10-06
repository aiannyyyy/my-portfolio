import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',      // where the production build will be placed
    sourcemap: false,    // disable source maps for smaller build size
  },
  server: {
    port: 5173,          // dev server port (optional)
    open: true,          // auto open in browser when running 'npm run dev'
  },
})
