// 导入模块   pnpm add mockjs @types/mockjs -D
import Mock from 'mockjs'
import { random } from '../utils'

// 准备数据
const data: any[] = []
for (let i = 1; i <= 10; i++) {
	data.push(
		Mock.mock({
			id: '@id',
			img: '@image(60x60, @color)',
			title: '@ctitle(2,100)',

			comment_goods_count: random(0, 3),
			comment_bad_count: random(0, 3),
			comment_count: random(0, 3),
			sell_count: random(0, 3),

			mobile: '1@float(1000000000,9999999999,0,0)',
			work: '@datetime',

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
