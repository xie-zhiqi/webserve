import type { Menu } from '@/api/auth/types'
import { getAuthMenuApi } from '@/api/auth'
import { defineStore } from 'pinia'
import router from '@/router'

import { ref } from 'vue'
function view(path: string) {
	// 首先把你需要动态路由的组件地址全部获取
	const modules = import.meta.glob('../**/*.vue')
	// 然后动态路由的时候这样来取
	return modules['../views/' + path + '.vue']
}
export const useAuthStore = defineStore('auth', () => {
	const menus = ref<Menu[]>([])
	const fetchMenus = async () => {
		const { list } = await getAuthMenuApi()
		menus.value = list
		list.forEach((oneMenu: Menu, oneI: number) => {
			if (oneMenu.children && oneMenu.children.length > 0) {
				oneMenu.children.forEach((twoMenu: Menu, twoI: number) => {
					// console.log(111, twoMenu.path, `@/views/${twoMenu.component}.vue`)
					// 给name叫admin的路由，动态添加子路由
					router.addRoute('admin', {
						name: `adminSon${oneI}${twoI}`, // 给所有子路由添加名字，后期删除（唯一）
						path: twoMenu.path,
						// component: () => import(`@/views/${twoMenu.component}.vue`),
						component: view(twoMenu.component)
						// meta: {
						// 	name1: twoMenu.auth_pname,
						// 	name2: twoMenu.auth_name,
						// 	keep_alive: twoMenu.keep_alive
						// }
					})
				})
			}
		})
	}
	const deleteMenus = () => {
		menus.value.forEach((oneMenu: Menu, oneI: number) => {
			if (oneMenu.children && oneMenu.children.length > 0) {
				oneMenu.children.forEach((twoMenu: Menu, twoI: number) => {
					router.removeRoute(`adminSon${oneI}${twoI}`)
				})
			}
		})
		menus.value = []
	}
	return {
		menus,
		fetchMenus,
		deleteMenus
	}
})
