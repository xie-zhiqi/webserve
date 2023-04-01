declare namespace Table {
	interface Data {
		[k: string]: any
	}

	type ColumnsType = 'switch' | 'tag' | 'img' | 'operations'

	type ColumnsFixed = 'left' | 'right'

	type ColumnsAlign = ColumnsFixed & 'center'

	interface Columns {
		title: string
		prop?: string // 不写就是自定义填充数据
		// type?: string  // 自定义填充类型
		type?: ColumnsType
		payload?: {
			[k: string]: any
		}
		fixed?: ColumnsFixed
		align?: ColumnsAlign
		tooltip?: boolean
		width?: string | number // 50px 50
	}
}
