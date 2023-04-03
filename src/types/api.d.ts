declare namespace API {
	interface Result<T = any> {
		meta: {
			state: number
			msg: string
		}
		data: T
	}
}
