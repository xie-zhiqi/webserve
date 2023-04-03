import type { GetUserPayloadType, PostUserPayloadType, GetUserResType } from './types'

import { useAxios } from '@/hooks/useAxios'

const { get, post } = useAxios()

// 导出
export const getUserApi = (params: GetUserPayloadType) => {
	return get<GetUserResType>('/user', params)
}

export const postUserApi = (data: PostUserPayloadType) => {
	return post<API.Result>('/users/create.jsp', data)
}
