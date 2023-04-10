import type { GetAuthMenuResType } from './types'
import { useAxios } from '@/hooks/useAxios'

const { get } = useAxios()

export const getAuthMenuApi = () => {
	return get<GetAuthMenuResType>('/auth/menu.jsp', {})
}
