import type { PostLoginPayloadType, PostLoginResType,PostLoginSaomaPayloadType } from './types'
import { useAxios } from '@/hooks/useAxios'
const { post } = useAxios()

export const postLoginApi = (data: PostLoginPayloadType) => {
	return post<PostLoginResType>('/user/login.jsp', data)
}

export const postLoginSaomaApi = (data: PostLoginSaomaPayloadType) => {
	return post<PostLoginResType>('/qr/check.jsp', data)
}