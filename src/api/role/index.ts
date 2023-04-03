import { useAxios } from '@/hooks/useAxios'

const { post } = useAxios()

export const postRoleApi = (data: any) => {
	return post<API.Result>('/roles/create.jsp', data)
}
