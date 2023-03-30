import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

// 组件
import Divbox from './components/divbox/index.vue'
const app = createApp(App)
// 国际化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// pinia
app.use(createPinia())
// 全局组件
app.component('Divbox', Divbox)
app.use(router)
// 国际化
app.use(ElementPlus, {
	locale: zhCn
})
app.mount('#app')

// 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
