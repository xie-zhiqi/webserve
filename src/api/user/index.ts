import type {
	GetUserPayloadType,
	PostUserPayloadType,
	GetUserResType,
	DeleteUserapi,
	PutUserPayloadType,
	PutUserStatePayloadType
} from './types'

import { useAxios } from '@/hooks/useAxios'

const { get, post, del, put } = useAxios()

// 新增用户
export const postUserApi = (data: PostUserPayloadType) => {
	return post<Api.Result>('/user/create.jsp', data)
}
// 用户列表
export const getUserApi = (params: GetUserPayloadType) => {
	return get<GetUserResType>('/user/index.jsp', params)
}

// 删除
export const deleteUserApi = (params: DeleteUserapi) => {
	return del<Api.Result>('/user/delete.jsp', params)
}
// 修改
export const putUserApi = (data: PutUserPayloadType) => {
	return put<Api.Result>('/user/update.jsp', data)
}

// // 修改
export const putUserStateApi = (data: PutUserStatePayloadType) => {
	return put<Api.Result>('/user/state.jsp', data)
}

// http://kg.zhaodashen.cn/mt/admin/user/state.jsp
