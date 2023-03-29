import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.glob('./modules/*.ts', { eager: true })
export const asyncRoutes = Object.values(modules).map((item: any) => {
	return item.default[0]
})

// 数组排序
asyncRoutes.sort((x, y) => x.meta.sort - y.meta.sort)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			alias: '/',
			component: () => import('@/layout/index.vue')
		}
	]
})

// const router = createRouter({
// 	history: createWebHistory(import.meta.env.BASE_URL),
// 	routes: [...constantRoutes, ...asyncRoutes]
// })

export default router
