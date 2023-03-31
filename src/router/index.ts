import { createRouter, createWebHashHistory } from 'vue-router'

const modules = import.meta.glob('./modules/*.ts', { eager: true })
export const asyncRoutes = Object.values(modules).map((item: any) => {
	return item.default[0]
})

// 数组排序
asyncRoutes.sort((x, y) => x.meta.sort - y.meta.sort)

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
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
					component: () => import('@/views/users/index.vue')
				},
				{
					path: '/role',
					name: 'role',
					component: () => import('@/views/role/index.vue')
				},
				{
					path: '/role/create',
					name: 'role',
					component: () => import('@/views/role/create.vue')
				},
				{
					path: '/auth',
					name: 'auth',
					component: () => import('@/views/auth/index.vue')
				},
				{
					path: '/auth/create',
					name: 'auth/create',
					component: () => import('@/views/auth/create.vue')
				},
				{
					path: '/order',
					name: 'order',
					component: () => import('@/views/order/index.vue')
				},
				{
					path: '/goods',
					name: 'goods',
					component: () => import('@/views/goods/index.vue')
				},
				{
					path: '/goods/create',
					name: 'goods/create',
					component: () => import('@/views/goods/create.vue')
				},
				{
					path: '/store',
					name: 'store',
					component: () => import('@/views/store/index.vue')
				},
				{
					path: '/store/create',
					name: 'store/create',
					component: () => import('@/views/store/create.vue')
				},
				{
					path: '/cate',
					name: 'cate',
					component: () => import('@/views/cate/index.vue')
				},
				{
					path: '/cate/create',
					name: 'cate/create',
					component: () => import('@/views/cate/create.vue')
				},
				{
					path: '/analysis',
					name: 'analysis',
					component: () => import('@/views/index/analysis.vue')
				},
				{
					path: '/bigData',
					name: 'bigData',
					component: () => import('@/views/index/bigData.vue')
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
