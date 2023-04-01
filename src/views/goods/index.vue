<!-- eslint-disable no-undef -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang='ts'>
import mock from "~mock/goods"
import { reactive } from "vue"

const tableDate = reactive({
	list: mock.data,
})

const columns: Table.Columns[] = [
	{
		title: '编号', prop: 'id', width: 200
	},
	{ title: '所属门店', prop: 'store' },
	{
		title: '封面', type: 'img', payload: { src: 'img' }, width: 100
	},
	{
		title: '标题', prop: 'title', tooltip: true, width: 200
	},
	{
		title: '库存', prop: 'goods_number'
	},
	{
		title: '市场价', prop: 'market_price'
	},
	{
		title: '促销价', prop: 'shop_price'
	},
	{
		title: '创建于', prop: 'created_at', width: 200
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

const formBtn: Form.Btn[] = [
	{
		icon: 'icon-sousuo',
		content: '搜索',
		type: 'primary',
		click: (formDate: any) => console.log('表单数据', formDate)
	},
	{
		content: '重置',
		type: 'default',

	}
]
// 表单数据
const formItem: Form.Item[] = [
	{
		field: 'goods_name',
		label: '商品名称',
		rules: [{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }],
		type: 'text',
		placeholder: '请输入商品名称'
	}, {
		field: 'creatd_at',

		label: '创建于',
		rules: [],

		type: 'date',

		isExpand: true
	}
]
</script>
<template>
	<QfBox>
		<template #filter>
			<QfForm :labelWidth="60" :formItem="formItem" :formBtn="formBtn" :inline="true">
			</QfForm>
		</template>
		<QfTable :data="tableDate.list" :columns="columns"></QfTable>
	</QfBox>
</template>
<style lang='scss' scoped>
:deep(.el-input--large) {
	width: 40%;
}

:deep(.el-form-item__label) {
	width: 70px !important;
}
</style>