export default [
	{
		path: '/user',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 6, title: '用户管理', icon: 'icon-yonghuguanli' },
		children: [
			{
				path: '/user',
				meta: { title: '用户列表', icon: 'icon-liebiao' },
				component: () => import('@/views/user/index.vue')
			},
			{
				path: '/user/create',
				meta: { title: '用户创建', icon: 'icon-zengjia1' },
				component: () => import('@/views/user/create.vue')
			}
		]
	}
]
