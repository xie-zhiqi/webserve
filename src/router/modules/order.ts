export default [
	{
		path: '/order',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 5, title: '订单管理', icon: 'icon-dingdandaifukuan' },
		children: [
			{
				path: '/order',
				meta: { title: '订单列表', icon: 'icon-liebiao' },
				component: () => import('@/views/order/index.vue')
			}
			// {
			// 	path: '/order/create',
			// 	meta: { title: '订单创建', icon: 'icon-zengjia1' }
			// 	// component: () => import('@/views/order/create.vue')
			// }
		]
	}
]
