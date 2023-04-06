<script setup lang="ts">
// 接口 模块 hook  组件
import type { GetRolePayloadType, GetRoleResType, Role } from "@/api/role/types"

import { useConfirm } from '@/hooks/useConfirm'
import { getRoleApi, deleRoleApi } from "@/api/role/index"
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
			onTable()
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
const onDelete = (row: Role) => {
	console.log("删除" + row.role_id);

	useConfirm(row, deleRoleApi, onTable)
}


// 获取批量删除的键和值
let ids: Array<string | number> = []
const handleSelectionChange = (val: Role[]) => {
	val.forEach((item: Role) => {
		ids.push(item.role_id)
		console.log(ids)
	});

}
// 在onDeleteS函数中获取到handleSelectionChange里面处理好的role_id怎么操作？
const onDeleteS = () => {
	console.log("批量删除");
	console.log(ids)
	useConfirm({ role_id: ids.join(',') }, deleRoleApi, onTable)

}

// 编辑按钮
const userEdit = ref()
// 获取当前行的数据，传递给编辑组件
const onuserEdit = (vlaue: any) => {
	userEdit.value.state = true
	userEdit.value.formDate.role_id = vlaue.role_id
	userEdit.value.formDate.role_name = vlaue.role_name
	userEdit.value.formDate.role_desc = vlaue.role_describe
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
	<UserEdit ref="userEdit" :onTable="onTable"></UserEdit>
	<UserJuese ref="userJuese"></UserJuese>
	<Divbox>
		<template #filter>
			<el-form :inline="true" :model="fromData" ref="forRef">

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
			<el-button type="danger" :icon="Delete" @click="onDeleteS"> 批量删除 </el-button>
			<el-button type="primary">
				<el-icon>
					<CirclePlus />
				</el-icon>
				添加
			</el-button>
		</el-row>
		<el-table :data="tableDate.list" style="width: 100%" height="350" :border="true"
			@selection-change="handleSelectionChange">
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
					<el-button type="danger" @click="onDelete(scope.row)">
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

:deep(.el-input[data-v-a44b11cd]) {
	width: 150px !important;
}
</style>
