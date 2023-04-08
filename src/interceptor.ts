import router from './router'
import NProgress from 'nprogress'
const whiteList: string[] = ['/login', '/login1', '/login2', '/login3', '/login4', '/404']

router.beforeEach((to, from, next) => {
	// 判断是否是白名单的页面
	if (whiteList.includes(to.path)) return next()
	// 判断用户有没有token
	const token = localStorage.getItem('token')
	if (token) {
		next()
	} else {
		next({ path: '/login' })
	}
	NProgress.start()
})

router.afterEach((to, from, next) => {
	NProgress.done()
})
