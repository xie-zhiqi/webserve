// 导入模块   pnpm add mockjs @types/mockjs -D
import Mock from 'mockjs'
import { random } from '../utils'

// 准备数据
const data: any[] = []
for (let i = 1; i <= 10; i++) {
	data.push(
		Mock.mock({
			id: '@id',
			role_name: ['超级管理员', '财务', '人事', '普通用户'][random(0, 3)],
			role_desc: '@ctitle(2,4)',
			created_at: '@datetime',
			updated_at: '@datetime'
		})
	)
}

// 导出生成的测试数据即刻
export default Mock.mock({
	state: 200,
	msg: '操作成功',
	data,
	total: random(80, 200)
})
