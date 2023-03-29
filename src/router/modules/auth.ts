export default [
	{
		path: '/auth',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 8, title: '权限管理', icon: 'icon-fuwuquanxianguanli' },
		children: [
			{
				path: '/auth',
				meta: { title: '权限列表', icon: 'icon-liebiao' },
				component: () => import('@/views/auth/index.vue')
			},
			{
				path: '/auth/create',
				meta: { title: '权限创建', icon: 'icon-zengjia1' },
				component: () => import('@/views/auth/create.vue')
			}
		]
	}
]
