// 导入
import { defineStore } from 'pinia'
import { reactive } from 'vue'

// 导出
export const useUserStore = defineStore('user', () => {
	// 存储用户登录状态
	const userinfo = reactive({
		username: localStorage.getItem('username') || '',
		roleName: localStorage.getItem('roleName') || '',
		avatar: localStorage.getItem('avatar') || '',
		token: localStorage.getItem('token') || ''
	})

	const save = (token: string, username: string, roleName: string, avatar: string) => {
		userinfo.token = token
		userinfo.username = username
		userinfo.roleName = roleName
		userinfo.avatar = avatar
		// 数据持久化
		localStorage.setItem('token', token)
		localStorage.setItem('username', username)
		localStorage.setItem('roleName', roleName)
		localStorage.setItem('avatar', avatar || '')
	}
	// 登录
	// 切记切记切记：pinia中不要去写副作用
	// 生活中：副作用比如吃药 感冒了 不知道吃了啥药 挂了
	// 代码中：状态管理以外的都可以称之为副作用
	const login = async (formData: object, postLoginApi: Function) => {
		const { state, msg, token, username, roleName, avatar } = await postLoginApi(formData)
		// console.log(state, msg, token, username, roleName)
		if (state === 200) {
			save(token, username, roleName, avatar)
		}
		// 调用完login方法后返回后端数据给视图写副作用
		return { state, msg }
	}

	const logout = () => {
		userinfo.token = ''
		userinfo.username = ''
		userinfo.roleName = ''
		userinfo.avatar = ''
		localStorage.clear()
	}

	return {
		userinfo,
		login,
		logout,
		save
	}
})
