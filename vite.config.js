import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Creates a separate chunk for React libraries
          react: ['react', 'react-dom'],
          // Add more if you use other big libraries
          // e.g. lodash: ['lodash'],
        },
      },
    },
  },
})
