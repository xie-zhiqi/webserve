import { createRouter, createWebHashHistory } from 'vue-router'

// 数组排序

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			name: 'admin',
			path: '/',
			component: () => import('@/layout/index.vue'),
			children: [
				//1
			]
		},
		{
			path: '/login',
			// alias: '/',
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
})

export default router
