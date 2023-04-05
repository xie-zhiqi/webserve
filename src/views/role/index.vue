<script setup lang="ts">
// 接口 模块 hook  组件
import type { GetRolePayloadType, GetRoleResType } from "@/api/role/types"

import { useConfirm } from '@/hooks/useConfirm'
import { getRoleApi } from "@/api/role/index"
import { Search, Delete } from '@element-plus/icons-vue'
import { reactive, ref, onMounted } from 'vue'
// 组件
import UserEdit from './component/userEdit.vue'
import UserJuese from './component/userJuese.vue'

const fromData = reactive<GetRolePayloadType>({
	pagenum: 1,
	pagesize: 10,
	role_name: '',
})
// 表单折叠
// 表单数据
const forRef = ref()
const onsubmit = () => {
	forRef.value.validate((isScuccess: boolean) => {
		if (isScuccess) {
			console.log(fromData)
		}
	})
}
// 重置按钮
const onReset = () => {
	forRef.value.resetFields()
}

// 分页
const handleSizeChange = (val: number) => {
	fromData.pagenum = 1
	fromData.pagesize = val
	onTable()
}
const handleCurrentChange = (val: number) => {
	fromData.pagenum = 1
	fromData.pagenum = val
	onTable()

}

// 请求接口展示角色列表
const onTable = async () => {
	const res = await getRoleApi(fromData)
	console.log(res)
	const { list, total } = await getRoleApi(fromData)
	tableDate.list = list
	tableDate.total = Number(total)
}
onMounted(() => {
	onTable()
})
// 表格数据
const tableDate = reactive<GetRoleResType>({
	list: [],
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

// 分配角色按钮
const userJuese = ref()
const onuserJuese = (value: any) => {
	userJuese.value.state = true
	userJuese.value.formDate.username = value.uname
	userJuese.value.formDate.role_name = value.role_name
}

</script>
<template>
	<UserEdit ref="userEdit"></UserEdit>
	<UserJuese ref="userJuese"></UserJuese>
	<Divbox>
		<template #filter>
			<el-form :inline="true" :model="fromData" ref="forRef">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="fromData.role_name"></el-input>
				</el-form-item>
				<el-form-item label="角色名" prop="role_name">
					<el-input v-model="fromData.role_name"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button :icon="Search" type="primary" @click="onsubmit">
						<div>搜索</div>
					</el-button>
					<el-button type="Default" @click="onReset">重置</el-button>
				</el-form-item>
			</el-form>
		</template>
		<el-row>
			<el-button type="danger" :icon="Delete"> 批量删除 </el-button>
			<el-button type="primary">
				<el-icon>
					<CirclePlus />
				</el-icon>
				添加
			</el-button>
		</el-row>
		<el-table :data="tableDate.list" style="width: 100%" height="350" :border="true">
			<el-table-column type="selection" width="55" fixed="left" align="center" />

			<el-table-column color="red" prop="role_id" label="编号" width="180" sortable align="center" />
			<el-table-column prop="role_name" label="角色名称" width="120" align="center" />
			<el-table-column prop="role_describe" label="角色描述" width="180" align="center" />

			<el-table-column prop="created_at" label="创建于" width="180" align="center" />
			<el-table-column prop="updated_at" label="更新于" width="180" align="center" />
			<el-table-column label="操作" width="260" align="center">
				<template #default="scope"><el-button type="primary" @click="onuserEdit(scope.row)">
						<el-icon>
							<EditPen />
						</el-icon>
					</el-button>
					<el-button type="success" @click="onuserJuese(scope.row)">分配角色</el-button>
					<el-button type="danger" @click="onDelete">
						<el-icon>
							<Delete />
						</el-icon>
						删除
					</el-button></template>
			</el-table-column>
		</el-table>
		<el-pagination v-model:current-page="fromData.pagenum" v-model:page-size="fromData.pagesize"
			:page-sizes="[10, 20, 30, 40]" :background="true" layout="total, sizes, prev, pager, next, jumper"
			:total="tableDate.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
	</Divbox>
</template>
<style lang="scss" scoped>
.el-pagination {
	justify-content: center;
}

.demo-pagination-block+.demo-pagination-block {
	margin-top: 10px;
}

.demo-pagination-block .demonstration {
	margin-bottom: 16px;
}

.el-table--fit {
	margin-top: 15px;
	margin-bottom: 15px;
}

:deep(.tablebox) {
	overflow-x: scroll;
	overflow-y: scroll;
}
</style>
