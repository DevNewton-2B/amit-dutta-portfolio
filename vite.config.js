import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/amit-dutta-portfolio/',
  
  // ADD THIS BUILD BLOCK
  build: {
    chunkSizeWarningLimit: 1000, // Increases the limit to 1000kB (1MB)
  }
})