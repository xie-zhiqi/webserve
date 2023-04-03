export interface PostRolePayloadType {
	role_name: string
	role_describe: string
}

export interface GetRolePayloadType {
	pagenum: number
	pagesize: number
	role_name: string
}
