export default [
	{
		path: '/store',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 3, title: '门店管理', icon: 'icon-mendianguanli' },
		children: [
			{
				path: '/store',
				meta: { title: '门店列表', icon: 'icon-liebiao' },
				component: () => import('@/views/store/index.vue')
			},
			{
				path: '/store/create',
				meta: { title: '门店创建', icon: 'icon-zengjia1' }
				// component: () => import('@/views/store/create.vue')
			}
		]
	}
]
