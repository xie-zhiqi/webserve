export default [
	{
		path: '/goods',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 4, title: '门店商品', icon: 'icon-shangpin' },
		children: [
			{
				path: '/goods',
				meta: { title: '商品列表', icon: 'icon-liebiao' },
				component: () => import('@/views/goods/index.vue')
			},
			{
				path: '/goods/create',
				meta: { title: '商品创建', icon: 'icon-zengjia1' },
				component: () => import('@/views/goods/create.vue')
			}
		]
	}
]
