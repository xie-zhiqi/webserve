<script setup lang="ts">
// 接口 模块 hook  组件
import { getAuthApi } from '@/api/auth'
// getAuthApi

import mock from '~mock/user'

import { useConfirm } from '@/hooks/useConfirm'
import { Delete } from '@element-plus/icons-vue'
import { reactive, ref, onMounted } from 'vue'

// 表格数据
const tableDate = reactive({
	list: mock.data,
	total: 0
})


onMounted(() => {
	getAuthApi()
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
// 分配角色
</script>
<template>
	<Divbox>
		<el-table :data="tableDate.list" style="width: 100%" :border="true">
			<el-table-column prop="id" label="权限名称" width="160" align="center" />
			<el-table-column prop="role_name" label="路由" width="180" align="center" />
			<el-table-column prop="uname" label="种类" width="180" align="center" />

			<el-table-column prop="state" label="组件缓存" width="180" align="center">
				<template #default="scope">
					<el-switch v-model="scope.row.state" class="ml-2" inline-prompt
						style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="未冻结"
						inactive-text="已冻结" :active-value="0" :inactive-value="1" />
				</template>
			</el-table-column>
			<el-table-column prop="mobile" label="组件路径" width="180" align="center" />

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

:deep(.filterbox) {
	display: none;
}
</style>
