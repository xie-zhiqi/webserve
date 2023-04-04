declare namespace Api {
	interface Result<T = any> {
		state: number
		msg: string
		list?: T
		total?: number
	}
}
