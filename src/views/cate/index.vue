<script setup lang="ts">
// 接口 模块 hook  组件
import mock from '~mock/user'

import { useConfirm } from '@/hooks/useConfirm'
import { Delete } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

// 收集表单数据
const fromData = reactive({
	pagenum: 1,
	pagesize: 10,
	username: '',
	mobile: '',
	role_name: '',
	created_at: [],
	updated_at: []
})

// 分页
const handleSizeChange = (val: number) => {
	console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
	console.log(`current page: ${val}`)
}

// 表格数据
const tableDate = reactive({
	list: mock.data,
	total: 0
})

// 删除
const onDelete = () => {
	useConfirm()
}
// 编辑按钮
const userEdit = ref()
// 获取当前行的数据，传递给编辑组件
const onuserEdit = (vlaue: any) => {
	userEdit.value.state = true
	userEdit.value.formDate.uname = vlaue.uname
	userEdit.value.formDate.mobile = vlaue.mobile
}
</script>
<template>
	<UserEdit ref="userEdit"></UserEdit>
	<UserJuese ref="userJuese"></UserJuese>
	<Divbox>
		<el-table :data="tableDate.list" style="width: 100%" :border="true">
			<el-table-column prop="id" label="分类编号" width="185" sortable align="center" />
			<el-table-column prop="role_name" label="分类名称" width="185" align="center" />
			<el-table-column prop="uname" label="分类层级" width="185" align="center" />
			<el-table-column prop="created_at" label="创建于" width="185" align="center" />
			<el-table-column prop="updated_at" label="更新于" width="189" align="center" />
			<el-table-column label="操作" fixed="right" width="230" align="center">
				<template #default="scope"
					><el-button type="primary" @click="onuserEdit(scope.row)">
						<el-icon><EditPen /></el-icon>
					</el-button>
					<el-button type="danger" @click="onDelete">
						<el-icon><Delete /></el-icon>
						删除
					</el-button></template
				>
			</el-table-column>
		</el-table>
		<el-pagination
			v-model:current-page="fromData.pagenum"
			v-model:page-size="fromData.pagesize"
			:page-sizes="[100, 200, 300, 400]"
			:background="true"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</Divbox>
</template>
<style lang="scss" scoped>
:deep(.tablebox) {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.el-pagination {
	justify-content: center;
}
.demo-pagination-block + .demo-pagination-block {
	margin-top: 10px;
}
.demo-pagination-block .demonstration {
	margin-bottom: 16px;
}
.el-table--fit {
	margin-top: 15px;
	margin-bottom: 15px;
}
:deep(.filterbox) {
	display: none;
}
</style>
