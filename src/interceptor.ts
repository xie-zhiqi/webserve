import router from './router'
import { useAuthStore } from '@/stores/auth'
import { start, close } from '@/utils/nporgress.js'
const whiteList: string[] = ['/login', '/login1', '/login2', '/login3', '/login4', '/404']

router.beforeEach(async (to, from, next) => {
	start()
	// 判断是否是白名单的页面
	if (whiteList.includes(to.path)) return next()
	// 判断用户有没有token
	const token = localStorage.getItem('token')
	if (token) {
		// 权限菜单，在获取到token后去请求
		const { menus, fetchMenus } = useAuthStore()
		if (!menus.length) {
			await fetchMenus()
			// 重定向
			next({ path: to.path, replace: true })
			return
		}
		next()
	} else {
		next({ path: '/login' })
	}
})

router.afterEach(() => {
	close()
})
