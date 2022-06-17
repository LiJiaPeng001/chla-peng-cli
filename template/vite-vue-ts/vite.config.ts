import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify({ /* preset options */ }),
        presetUno(),
        // ...custom presets
      ],
      rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
        [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    }
  },
})
