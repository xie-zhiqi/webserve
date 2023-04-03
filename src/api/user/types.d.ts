export interface PostUserPayloadType {
	username: string
	password: string
	mobile?: string
	avatar?: string
}

export interface GetUserPayloadType {
	pagenum: number
	pagesize: number
	uname: string
	create_time: string
	end_time: string
	// username: string
	mobile: string
	role_name: string
	// created_at: string[]
	// updated_at: string[]
}

export interface User {
	role_id: null | number
	role_name: null | string
	state: string // 1 正常、0 禁用
	user_id: string
	email: string
	username: string
	mobile: string
	create_time: string
	[k: string]: any
}

export interface GetUserResType {
	list: User[]
	total: number
}

export interface PutAssignRolePayloadType {
	username: string
	role_name: string
	role_id: number | string
}
