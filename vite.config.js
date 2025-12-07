import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/projeto_tex_react/'  // <<<<<<<<<< OBRIGATÓRIO PARA GITHUB PAGES
})
