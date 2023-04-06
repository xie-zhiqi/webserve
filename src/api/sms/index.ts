// 导入
import type { PostSmsSendPayloadType, PostSmsLoginPayloadType, PostSmsLoginResType } from './type'

import { useAxios } from '@/hooks/useAxios'

const { post } = useAxios()

// 导出
export const postSmsSendApi = (data: PostSmsSendPayloadType) => {
	return post<Api.Result>('/sms/send.jsp', data)
}

export const postSmsLoginApi = (data: PostSmsLoginPayloadType) => {
	return post<PostSmsLoginResType>('/sms/login.jsp', data)
}
