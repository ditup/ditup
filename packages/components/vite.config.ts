import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'

export default defineConfig({
  build: {
    lib: {
      entry: {
        'topic/index': resolve(import.meta.dirname, 'src/topic/index.js'),
        'name/index': resolve(import.meta.dirname, 'src/name/index.js'),
        'engine/index': resolve(import.meta.dirname, 'src/engine/index.js'),
        index: resolve(import.meta.dirname, 'src/index.js'),
      },
      name: '@ditup/web-components',
    },
    rolldownOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['lit', /^@awesome\.me\/webawesome/],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
  },
  plugins: [dts()],
})
