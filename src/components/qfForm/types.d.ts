declare namespace Form {
	type FormData = Record<string, any>

	type ItemType = 'password' | 'text' | 'select' | 'image' | 'date'

	interface Item {
		field: string

		label?: string
		labelWidth?: string | number // 标签宽度，例如 '50px'、'50'。 可以使用 auto。
		rules?: import('element-plus').FormItemRule[]

		type?: ItemType
		placeholder?: string
		icon?: string
		disabled?: boolean
		clearable?: boolean

		options?: { label: string; value: any }[]
		isExpand?: boolean // 是否扩展选项 是则默认不展示
	}

	type BtnType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

	interface Btn {
		icon?: string
		content?: string
		type?: BtnType
		click?: (formData: FormData) => void // 重置不需要click事件
		custom?: boolean // 自定义逻辑直接触发click不执行表单验证
	}
}
