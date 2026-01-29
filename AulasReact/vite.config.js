import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readdirSync } from 'fs'

// Auto-discover all exercise folders
const exercisesDir = resolve(import.meta.dirname, 'exercises')
const exercises = readdirSync(exercisesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .reduce((entries, dirent) => {
    entries[dirent.name] = resolve(exercisesDir, dirent.name, 'index.html')
    return entries
  }, {})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: exercises,
    },
  },
})
