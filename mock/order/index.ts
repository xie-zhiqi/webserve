// 导入模块   pnpm add mockjs @types/mockjs -D
import Mock from 'mockjs'
import { random } from '../utils'

// 准备数据
const data: any[] = []
for (let i = 1; i <= 10; i++) {
	data.push(
		Mock.mock({
			id: '@id',
			uname1: '@ctitle(2,4)',
			uname2: '@ctitle(2,4)',
			price: random(1000, 9999),
			order_state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)], //  订单状态：0-未确认；1-已确认；2-已取消；3-无效；4-退货；
			pay_state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)], // 支付状态：0-未付款；1-付款中；2-已付款
			send_state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)], //  商品配送情况：0-未发货；1-已发货；2-已收货；3-备货中
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
