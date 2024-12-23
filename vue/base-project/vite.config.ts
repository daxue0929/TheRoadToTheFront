import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md
import {viteMockServe} from 'vite-plugin-mock'


// https://vite.dev/config/
export default defineConfig(({command, mode})=>{

  console.log("command: ", command)
  console.log("mode", mode)
  return {
    plugins: [
      vue(),
      vueDevTools(),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    // server: {
    //   proxy: {
    //     '/dev-api':{
    //       target: 'http://localhost:8091',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/dev-api/, '')
    //     }
    //   }
    // }
  }
})
