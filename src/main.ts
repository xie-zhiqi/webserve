import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

// 组件
import Divbox from './components/divbox/index.vue'
const app = createApp(App)
// 国际化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// elementplus组件样式
import 'element-plus/dist/index.css'
// pinia
app.use(createPinia())
// 全局组件
app.component('Divbox', Divbox)
app.use(router)
// 国际化
app.use(ElementPlus, {
	locale: zhCn
})
// 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.mount('#app')
