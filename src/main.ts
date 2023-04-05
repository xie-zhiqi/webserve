import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
//echarts
import * as echarts from 'echarts'

// 组件
import Divbox from './components/divbox/index.vue'
import QfBox from './components/qfBox/index.vue'
import QfCard from './components/qfCard/index.vue'
import QfForm from './components/qfForm/index.vue'
import QfTable from './components/qfTable/index.vue'
import QfUpload from './components/qfUpload/index.vue'
import WsCard from './/components/wsCard/index.vue'
// 国际化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// elementplus组件样式
import 'element-plus/dist/index.css'
const app = createApp(App)

// 粒子特效
import Particles from 'particles.vue3'
app.use(Particles)
// pinia
app.use(createPinia())
// echarts
app.config.globalProperties.$echarts = echarts
// 路由
app.use(router)
// 全局组件
app.component('Divbox', Divbox)
app.component('QfBox', QfBox)
app.component('QfCard', QfCard)
app.component('QfForm', QfForm)
app.component('QfTable', QfTable)
app.component('QfUpload', QfUpload)
app.component('WsCard', WsCard)

// 国际化
app.use(ElementPlus, {
	locale: zhCn
})
// 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.mount('#app')
