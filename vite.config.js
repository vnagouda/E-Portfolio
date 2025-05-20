import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to your repo name
export default defineConfig({
  base: '/E-Portfolio/',
  plugins: [react()],
  build: {
    target: 'es2018'
  }
});
