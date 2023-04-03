<script setup lang="ts">
// 接口 模块 hook  组件
import type { GetUserPayloadType, GetUserResType } from "@/api/user/types"
// import mock from '~mock/user'
import { getUserApi } from "@/api/user"
import { useConfirm } from '@/hooks/useConfirm'
import { ArrowDown, Search, Delete } from '@element-plus/icons-vue'
import { reactive, ref, onMounted } from 'vue'
// 组件
import UserEdit from './component/userEdit.vue'
import UserJuese from './component/userJuese.vue'

// 表单数据
const formData = reactive<GetUserPayloadType>({
	pagenum: 1,
	pagesize: 10,
	uname: '',
	mobile: '',
	role_name: '',
	create_time: '',
	end_time: ''
})
const onTableDate = async () => {
	const { data: { list, total } } = await getUserApi(formData)
	tableDate.list = list
	tableDate.total = Number(total)
}

onMounted(() => {
	onTableDate()
})
// 表单折叠
const isExpand = ref<boolean>(false)
// 表单数据
const forRef = ref()
const onsubmit = () => {
	forRef.value.validate((isScuccess: boolean) => {
		if (isScuccess) {
			console.log(formData)
			onTableDate()
		}
	})
}
// 重置按钮
const onReset = () => {
	forRef.value.resetFields()
}

// 分页
const handleSizeChange = (val: number) => {
	// console.log(`${val} items per page`)
	formData.pagesize = 1
	formData.pagesize = val
	onTableDate()

}
const handleCurrentChange = (val: number) => {
	// console.log(`current page: ${val}`)
	formData.pagenum = val
	onTableDate()

}

// 表格数据
const tableDate = reactive<GetUserResType>({
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
	userEdit.value.formDate.uname = vlaue.username
	userEdit.value.formDate.mobile = vlaue.mobile
}

// 分配角色按钮
const userJuese = ref()
const onuserJuese = (value: any) => {
	userJuese.value.state = true
	userJuese.value.formDate.uname = value.username
	userJuese.value.formDate.role_name = value.role_name
}
// 分配角色
</script>
<template>
	<UserEdit ref="userEdit"></UserEdit>
	<UserJuese ref="userJuese"></UserJuese>
	<Divbox>
		<template #filter>
			<el-form :inline="true" :model="formData" ref="forRef">
				<el-form-item label="用户名" prop="uname">
					<el-input v-model="formData.uname"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="mobile">
					<el-input v-model="formData.mobile"></el-input>
				</el-form-item>
				<el-form-item label="角色名" prop="role_name">
					<el-input v-model="formData.role_name"></el-input>
				</el-form-item>

				<el-form-item label="创建于" prop="create_time" v-show="isExpand">
					<el-date-picker type="datetimerange" range-separator="到" start-placeholder="开始时间" end-placeholder="结束时间"
						v-model="formData.end_time" />
				</el-form-item>
				<el-form-item label="更新于" prop="end_time" v-show="isExpand">
					<el-date-picker type="datetimerange" range-separator="到" start-placeholder="开始时间" end-placeholder="结束时间"
						v-model="formData.end_time" />
				</el-form-item>
				<el-form-item>
					<el-button :icon="Search" type="primary" @click="onsubmit">
						<div>搜索</div>
					</el-button>
					<el-button type="Default" @click="onReset">重置</el-button>
					<el-button text="true" @click="isExpand = !isExpand">
						{{ isExpand ? '收起' : '展开' }}
						<el-icon>
							<ArrowUp v-show="isExpand" />
							<ArrowDown v-show="!isExpand" />
						</el-icon>
					</el-button>
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
		<el-table :data="tableDate.list" style="width: 100%" :border="true">
			<el-table-column type="selection" width="55" fixed="left" align="center" />

			<el-table-column prop="user_id" label="编号" width="80" sortable align="center" />
			<el-table-column prop="role_name" label="所属角色" width="100" align="center" />
			<el-table-column prop="username" label="用户名" width="100" align="center" />
			<el-table-column prop="mobile" label="手机号" width="120" align="center" />
			<el-table-column prop="state" label="登录" width="180" align="center">
				<template #default="scope">
					<el-switch v-model="scope.row.state" class="ml-2" inline-prompt
						style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="已冻结"
						inactive-text="未冻结" active-value="1" inactive-value="0" />
				</template>
			</el-table-column>
			<el-table-column prop="create_time" label="创建于" width="180" align="center" />
			<el-table-column label="操作" fixed="right" width="260" align="center">
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
		<el-pagination v-model:current-page="formData.pagenum" v-model:page-size="formData.pagesize" :page-sizes="[10]"
			:background="true" layout="total, sizes, prev, pager, next, jumper" :total="tableDate.total"
			@size-change="handleSizeChange" @current-change="handleCurrentChange" />
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
</style>
