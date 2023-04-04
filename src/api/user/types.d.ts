export interface PostUserPayloadType {
	username: string
	password: string
	mobile?: string
	avatar?: string
}

export interface GetUserPayloadType {
	pagenum: number
	pagesize: number
	username: string
	mobile: string | number
	role_name: string
	created_at: string
	updated_at: string
	created_at_temp: null | string[]
	updated_at_temp: null | string[]
}

export interface User {
	avatar: string
	create_time: string
	created_at: string
	email: string
	mobile: string
	passwd_answer: string
	passwd_question: string
	role_id: null | number
	role_name: null | number
	sex: string
	state: string
	updated_at: string
	user_id: string
	username: string
	[k: string]: any
}

export interface GetUserResType {
	list: User[]
	total: number
	[k: string]: any
}

export interface PutAssignRolePayloadType {
	username: string
	role_name: string
	role_id: number | string
}

// 删除模块params类型
export interface DeleteUserapi {
	user_id: string | number
}

export interface PutUserPayloadType {
	user_id: number
	username: string
	password: string
	mobile: string
}
