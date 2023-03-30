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
			path: '/',
			name: 'user',
			alias: '/',
			component: () => import('@/layout/index.vue'),
			children: [
				{
					path: '/user/create',
					name: 'user',
					component: () => import('@/views/users/create.vue')
				},
				{
					path: '/user',
					name: 'user',
					component: () => import('@/views/users/users.vue')
				},
				{
					path: '/role',
					name: 'role',
					component: () => import('@/views/role/role.vue')
				},
				{
					path: '/role/create',
					name: 'role',
					component: () => import('@/views/role/create.vue')
				}
			]
		}
	]
})

// const router = createRouter({
// 	history: createWebHistory(import.meta.env.BASE_URL),
// 	routes: [...constantRoutes, ...asyncRoutes]
// })

export default router
