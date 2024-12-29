import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:["**/*.glb", '**/*.ttf', '**/*.svg'],
  base:'/christmas-hunt'
})
