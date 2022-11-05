import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from 'url';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }), vueJsx()]
})
