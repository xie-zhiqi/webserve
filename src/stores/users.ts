// //
// import { reactive } from 'vue'
// import { defineStore } from 'pinia'

// export const useUserStore = defineStore('user', () => {
// 	// 存储用户登录信息
// 	const userinfo = reactive({
// 		username: localStorage.getItem('username') || '',
// 		roleName: localStorage.getItem('roleName') || '',
// 		avatar: localStorage.getItem('avatar') || '',
// 		token: localStorage.getItem('token') || ''
// 	})
// 	const login = async (ruleForm: object, postLoginApi: Function) => {
// 		const { state, msg, token, roleName, username, avatar } = await postLoginApi(ruleForm)
// 		// const res = await postSmsLoginApi(ruleForm)
// 		// console.log(res)
// 		// userinfo.token = token
// 		// userinfo.username = username
// 		// userinfo.roleName = roleName
// 		// userinfo.avatar = avatar
// 		if (state === 200) {
// 			localStorage.setItem('token', token)
// 			localStorage.setItem('roleName', roleName)
// 			localStorage.setItem('username', username)
// 			localStorage.setItem('avatar', avatar || '')
// 		}
// 		return { state, msg }
// 	}
// 	const loginout = () => {
// 		userinfo.token = ''
// 		userinfo.username = ''
// 		userinfo.roleName = ''
// 		userinfo.avatar = ''
// 		localStorage.clear()
// 	}
// 	return {
// 		userinfo,
// 		login,
// 		loginout
// 	}
// })

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

	// 登录
	// 切记切记切记：pinia中不要去写副作用
	// 生活中：副作用比如吃药 感冒了 不知道吃了啥药 挂了
	// 代码中：状态管理以外的都可以称之为副作用
	const login = async (formData: object, postLoginApi: Function) => {
		const { state, msg, token, username, roleName, avatar } = await postLoginApi(formData)
		// console.log(state, msg, token, username, roleName)
		if (state === 200) {
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
		logout
	}
})
