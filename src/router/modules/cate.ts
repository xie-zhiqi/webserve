export default [
	{
		path: '/cate',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 2, title: '分类管理', icon: 'icon-shangpin' },
		children: [
			{
				path: '/cate',
				meta: { title: '分类列表', icon: 'icon-liebiao' },
				component: () => import('@/views/cate/index.vue')
			},
			{
				path: '/cate/create',
				meta: { title: '分类创建', icon: 'icon-zengjia1' },
				component: () => import('@/views/cate/create.vue')
			}
		]
	}
]
