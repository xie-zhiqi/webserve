export interface PostSmsSendPayloadType {
	mobile: string
}

export interface PostSmsLoginPayloadType extends PostSmsSendPayloadType {
	code: string
}

export interface PostSmsLoginResType {
	state: number
	msg: string
	token: string
	username: string
	roleName: string
	avatar: string
}
