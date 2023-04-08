// 导入类型、模块
import type { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios' // pnpm add axios
import axios from 'axios' // pnpm add axios

// 创建axios实例
const request: AxiosInstance = axios.create({
	baseURL: '/fengtuanapi',
	timeout: 9000,
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	}
})

// 拦截器request
request.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token') || '9201591ba0eb36c8abaea2854274f5082'
		config.headers.token = token
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)
// 拦截器response 过滤下
request.interceptors.response.use(
	(response: AxiosResponse) => {
		return response.data
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

// 导出useAxios
function get<T = any>(url: string, params: object = {}, option: AxiosRequestConfig = {}): Promise<T> {
	return request.get(url, { params, ...option })
}

function del<T = any>(url: string, params: object = {}, option: AxiosRequestConfig = {}): Promise<T> {
	return request.delete(url, { params, ...option })
}

function post<T = any>(url: string, data: object = {}, option: AxiosRequestConfig = {}): Promise<T> {
	return request.post(url, data, option)
}

function put<T = any>(url: string, data: object = {}, option: AxiosRequestConfig = {}): Promise<T> {
	return request.put(url, data, option)
}

export const useAxios = () => {
	return {
		get,
		put,
		post,
		del
	}
}
