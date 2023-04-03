import type { PostRolePayloadType } from './types'
import { useAxios } from '@/hooks/useAxios'

const { post } = useAxios()

export const postRoleApi = (data: PostRolePayloadType) => {
	return post<API.Result>('/roles/create.jsp', data)
}
