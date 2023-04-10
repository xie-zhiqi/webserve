export interface PostAuthPayloadType {
	auth_name: string
	path: string
	type: string
	keepAlive: string
	component: string
	pid: number
}

export interface Menu {
	auth_id: string
	icon: string
	auth_name: string
	path: string
	auth_pname: string
	children: Menu[]
	[k: string]: string
}
export interface GetAuthMenuResType {
	state: number
	msg: string
	list: Menu[]
}
