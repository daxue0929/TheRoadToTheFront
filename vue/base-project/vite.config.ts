import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from "node:path";


// https://vite.dev/config/
export default defineConfig(({command, mode}) => {
    console.log("command: ", command)
    console.log("mode", mode)
    return {
        plugins: [
            vue(),
            vueDevTools(),
            createSvgIconsPlugin(
                {
                    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                    symbolId: 'icon-[dir]-[name]',
                }
            )
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        server: {
            proxy: {
                '/dev-api': {
                    target: 'http://localhost:8091',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/dev-api/, '')
                }
            }
        }
    }
})
