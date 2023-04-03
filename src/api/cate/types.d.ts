export interface PostCatePayloadType {
	cate_name: string
	// pid: array
	pid: string[]
	keywords: string
	url: string
}

export interface GetCatePayloadType {
	pagenum: number
	pagesize: number
}
