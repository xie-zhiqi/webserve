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
	mobile: string
	role_name: string
	created_at: string[]
	updated_at: string[]
}

export interface User {
	id: number | string
	role_id: number
	role_name: string
	uname: string
	mobile: string
	state: number
	avatar: string
	created_at: string
	updated_at: string
	[k: string]: any
}

export interface GetUserResType {
	state?: number
	msg?: string
	list: User[]
	total: number
}

export interface PutAssignRolePayloadType {
	username: string
	role_name: string
	role_id: number | string
}
