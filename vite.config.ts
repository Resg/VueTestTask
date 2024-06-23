import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteAliases } from 'vite-aliases';
import svgLoader from 'vite-svg-loader';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteAliases({ prefix: '@' }), vue(), svgLoader()],
});
