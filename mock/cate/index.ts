import { random } from '../utils'

interface CateType {
	id: number
	name: string
	pid: number
	level: number
}

const arr: CateType[] = [
	{ id: 1, name: '零食', pid: 0, level: 1 },
	{ id: 2, name: '生活用品', pid: 0, level: 1 },
	{ id: 3, name: '攻城狮', pid: 0, level: 1 },

	{ id: 4, name: '方便面', pid: 1, level: 2 },
	{ id: 5, name: '汽水', pid: 1, level: 2 },
	{ id: 6, name: '薯条', pid: 1, level: 2 },

	{ id: 7, name: '床单', pid: 2, level: 2 },
	{ id: 8, name: '枕头', pid: 2, level: 2 },
	{ id: 9, name: '洗发水', pid: 2, level: 2 },

	{ id: 10, name: 'WEB大前端', pid: 3, level: 2 },
	{ id: 11, name: 'JAVA', pid: 3, level: 2 },
	{ id: 12, name: 'PYTHON', pid: 3, level: 2 },

	{ id: 13, name: 'JS变量', pid: 10, level: 3 },
	{ id: 14, name: 'JS判断', pid: 10, level: 3 },
	{ id: 15, name: 'JS循环', pid: 10, level: 3 },

	{ id: 16, name: 'JAVA变量', pid: 11, level: 3 },
	{ id: 17, name: 'JAVA判断', pid: 11, level: 3 },
	{ id: 18, name: 'JAVA循环', pid: 11, level: 3 },

	{ id: 991, name: '其他1', pid: 0, level: 1 },
	{ id: 992, name: '其他2', pid: 0, level: 1 },
	{ id: 993, name: '其他3', pid: 0, level: 1 },
	{ id: 994, name: '其他4', pid: 0, level: 1 },
	{ id: 995, name: '其他5', pid: 0, level: 1 },
	{ id: 996, name: '其他6', pid: 0, level: 1 },
	{ id: 997, name: '其他7', pid: 0, level: 1 },
	{ id: 998, name: '其他8', pid: 0, level: 1 }
]

function findById(id: number | string) {
	const child: CateType[] = []
	arr.forEach((value: CateType) => {
		if (value.pid == id) {
			child.push(value)
		}
	})
	return child
}

function getTree(id = 0) {
	const dataArr = findById(id)
	if (dataArr.length <= 0) {
		return null
	} else {
		dataArr.forEach((value: any) => {
			if (getTree(value.id) != null) {
				value['children'] = getTree(value.id)
			}
		})
	}
	return dataArr
}

export default {
	state: 200,
	msg: '操作成功',
	data: getTree() || [],
	total: random(80, 200)
}
