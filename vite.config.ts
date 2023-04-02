// vue配置
import vue from '@vitejs/plugin-vue'
// vite
import { defineConfig } from 'vite'
// 别名配置
import { fileURLToPath, URL } from 'node:url'
// eslint配置
import eslintPlugin from 'vite-plugin-eslint'
// element-push配置
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	plugins: [
		vue(),
		// * EsLint 报错信息显示在浏览器界面上
		eslintPlugin(), // 变量定义了没使用  页面也要报错
		// ...
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	css: {
		preprocessorOptions: {
			// define global scss variable
			scss: {
				additionalData: `@import '@/styles/variables.scss';`
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~mock': fileURLToPath(new URL('./mock', import.meta.url)),
			echarts: 'echarts/dist/echarts.js'
		}
	}
})
