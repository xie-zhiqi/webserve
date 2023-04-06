export interface PostLoginPayloadType {
	username: string
	password: string
}

export interface PostLoginResType {
	state: number
	msg: string
	token: string
	username: string
	roleName: string
	avatar: string
}
