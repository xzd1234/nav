import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: '/nav/',
  server: {
    host: '0.0.0.0',
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://xiezhendong.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", '/api')
      },
    }

  },
  plugins: [vue(), viteMockServe({
    mockPath: 'mock',

  }), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),]
})
