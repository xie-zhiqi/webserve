export default [
	{
		path: '/role',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 7, title: '角色管理', icon: 'icon-jiaoseguanli' },
		children: [
			{
				path: '/role',
				meta: { title: '角色列表', icon: 'icon-liebiao' },
				component: () => import('@/views/role/index.vue')
			},
			{
				path: '/role/create',
				meta: { title: '角色创建', icon: 'icon-zengjia1' },
				component: () => import('@/views/role/create.vue')
			}
		]
	}
]
