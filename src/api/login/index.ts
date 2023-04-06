import type { PostLoginPayloadType, PostLoginResType } from './types'
import { useAxios } from '@/hooks/useAxios'
const { post } = useAxios()

export const postLoginApi = (data: PostLoginPayloadType) => {
	return post<PostLoginResType>('/user/login.jsp', data)
}
