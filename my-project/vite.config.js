import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // This ensures that Vite will build your files into a "dist" folder
  },
  server: {
    open: true,  // Opens the browser when running dev mode
  },
});
