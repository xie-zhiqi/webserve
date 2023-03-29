export default [
	{
		path: '/niupi',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 9, title: '牛批特效', icon: 'icon-texiao' },
		children: [
			{
				path: '/niupi',
				meta: { title: '演示区域', icon: 'icon-data-analysis' },
				component: () => import('@/views/niupi/demo1.vue')
			}
		]
	}
]
