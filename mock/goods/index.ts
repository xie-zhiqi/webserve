// 导入模块   pnpm add mockjs @types/mockjs -D
import Mock from 'mockjs'
import { random } from '../utils'

// 准备数据
const data: any[] = []
for (let i = 1; i <= 10; i++) {
	data.push(
		Mock.mock({
			id: '@id',
			store: '@ctitle(2,4)',
			img: '@image(60x60, @color)',
			title: '@ctitle(6,20)',
			goods_number: random(1000, 9999),
			market_price: random(111, 999),
			shop_price: random(111, 999),
			state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)], // 0-下架、1-上架
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
