import type { PostRolePayloadType, GetRolePayloadType } from './types'
import { useAxios } from '@/hooks/useAxios'

const { post, get } = useAxios()

// 角色创建
export const postRoleApi = (data: PostRolePayloadType) => {
	return post<Api.Result>('/role/create.jsp', data)
}

// 角色列表
export const getRoleApi = (params: GetRolePayloadType) => {
	return get<Api.Result>('/role/index.jsp', params)
}
