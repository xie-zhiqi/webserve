export default [
	{
		path: '/',
		component: () => import('@/layout/index.vue'),
		meta: { sort: 1, title: '后台首页', icon: 'icon-home' },
		children: [
			{
				alias: '/',
				path: '/analysis',
				meta: { title: '数据分析', icon: 'icon-data-analysis' },
				component: () => import('@/views/index/analysis.vue')
			},
			{
				path: '/bigdata',
				meta: { title: '大屏数据可视化', icon: 'icon-histogram-' },
				component: () => import('@/views/index/bigData.vue')
			}
		]
	}
]
