export interface PostRolePayloadType {
	role_name: string
	role_desc: string
}

export interface GetRolePayloadType {
	pagenum: number
	pagesize: number
	role_name: string
}
export interface Role {
	role_id: number | string
	role_name: string
	role_desc: string
	updated_at: string
	created_at: string
	auth_ids: string
	auth_ids_son: string
	[k: string]: any
}

export interface GetRoleResType {
	state?: number
	msg?: string
	list: Role[]
	total: number
}

// 删除接口
export interface DeleRoleApiType {
	role_id: number | string
}

// 修改角色

export interface PutRolePayloadType {
	role_id: string | number
	role_name: string
	role_desc: string
}
