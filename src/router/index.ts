import { createRouter, createWebHashHistory } from 'vue-router'

const modules = import.meta.glob('./modules/*.ts', { eager: true })
export const asyncRoutes = Object.values(modules).map((item: any) => {
	return item.default[0]
})
// 数组排序
asyncRoutes.sort((x, y) => x.meta.sort - y.meta.sort)

const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/index.vue')
	},
	{
		path: '/login1',
		component: () => import('@/views/login/index1.vue')
	},
	{
		path: '/login2',
		component: () => import('@/views/login/index2.vue')
	},
	{
		path: '/login3',
		component: () => import('@/views/login/index3.vue')
	},
	{
		path: '/login4',
		component: () => import('@/views/login/index4.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [...constantRoutes, ...asyncRoutes]
})

export default router
