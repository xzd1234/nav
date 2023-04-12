import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/nav/',
  server: {
    host: '0.0.0.0',
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://xiezhendong.cn',
       //target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", '/api')
      },
    }

  },
  plugins: [vue(),  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),]
})
