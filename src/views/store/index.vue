<!-- eslint-disable no-undef -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang='ts'>
import mock from "~mock/store"
import { reactive } from "vue"
console.log(mock)

const tableDate = reactive({
	list: mock.data,
})

const columns: Table.Columns[] = [
	{
		title: '编号', prop: 'id', width: 200
	},
	{
		title: '封面', type: 'img', payload: { src: 'img' }, width: 100
	},
	{ title: '标题', prop: 'title', width: 200, tooltip: true },
	{
		title: '好评', prop: 'comment_goods_count', width: 80
	},
	{
		title: '差评', prop: 'comment_bad_count', width: 80
	},
	{
		title: '总评', prop: 'comment_count', width: 80
	},
	{
		title: '销量', prop: 'sell_count', width: 80
	},
	{
		title: '联系方式', prop: 'mobile', width: 120
	},
	{
		title: '营业时间', prop: 'work', width: 180
	},
	{
		title: '操作', prop: 'created_at', width: 120, fixed: 'right', type: 'operations', payload: [
			{
				icon: 'icon-bianji',
				click: (row: any) => console.log("修改", row)
			},
			{
				icon: 'icon-shanchu',
				type: 'danger',
				click: (row: any) => console.log("删除", row)
			}
		]
	},
]

</script>
<template>
	<QfBox>
		<QfTable :data="tableDate.list" :columns="columns">
		</QfTable>
	</QfBox>
</template>
<style lang='scss' scoped>
:deep(.qfFilterBox) {
	display: none;
}

:deep(.el-input--large) {
	width: 40%;
}

:deep(.el-form-item__label) {
	width: 70px !important;
}
</style>