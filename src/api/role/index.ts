import type { PostRolePayloadType, GetRolePayloadType, DeleRoleApiType, PutRolePayloadType } from './types'
import { useAxios } from '@/hooks/useAxios'

const { post, get, del, put } = useAxios()

// 角色创建
export const postRoleApi = (data: PostRolePayloadType) => {
	return post<Api.Result>('/role/create.jsp', data)
}

// 角色列表
export const getRoleApi = (params: GetRolePayloadType) => {
	return get<Api.Result>('/role/index.jsp', params)
}

// 角色删除
export const deleRoleApi = (params: DeleRoleApiType) => {
	return del<Api.Result>('/role/delete.jsp', params)
}

// 角色修改
export const putRoleApi = (data: PutRolePayloadType) => {
	return put<Api.Result>('/role/update.jsp', data)
}
