<script setup lang="ts">
// 接口 模块 hook  组件
import type { GetUserPayloadType, GetUserResType, User } from "@/api/user/types"

import { getUserApi, putUserStateApi, deleteUserApi } from "@/api/user"
// import mock from '~mock/user'
import { useConfirm } from '@/hooks/useConfirm'
import { ArrowDown, Search, Delete } from '@element-plus/icons-vue'
import { reactive, ref, onMounted, watchEffect } from 'vue'
import wofDate from "webopenfather-date"
// 组件
import UserEdit from './component/userEdit.vue'
import UserJuese from './component/userJuese.vue'
import { ElMessage } from "element-plus"

// 表单数据
const formDate = reactive<GetUserPayloadType>({
	pagenum: 1,
	pagesize: 20,
	username: '',
	mobile: '',
	user_id: '',
	role_name: '',
	created_at: "",
	updated_at: "",
	created_at_temp: null,
	updated_at_temp: null
})
const onTableDate = async () => {
	// const res = await getUserApi(formDate)
	// console.log(res);
	const { list, total } = await getUserApi(formDate)
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
			// console.log(formDate)
			onTableDate()
		}
	})
}
// 重置按钮
const onReset = () => {
	forRef.value.resetFields()
}

watchEffect(() => {

	// if (formDate.created_at_temp) {
	// 	formDate.created_at = wofDate.formatDate(formDate.created_at_temp[0], 'yyyy-MM-dd hh:mm:ss') + ',' + wofDate.formatDate(formDate.created_at_temp[1], 'yyyy-MM-dd hh:mm:ss')
	// } else {
	// 	formDate.created_at = ''
	// }
	if (formDate.created_at_temp) {
		const temp1 = formDate.created_at = wofDate.format('Y-m-d H:i:s', formDate.created_at_temp[0])
		const temp2 = formDate.created_at = wofDate.format('Y-m-d H:i:s', formDate.created_at_temp[1])
		formDate.created_at = `${temp1},${temp2}`
		console.log(formDate.created_at)
	} else {
		formDate.created_at = ''
	}
	onTableDate()
})
watchEffect(() => {
	if (formDate.updated_at_temp) {
		const temp1 = formDate.created_at = wofDate.format('Y-m-d H:i:s', formDate.updated_at_temp[0])
		const temp2 = formDate.created_at = wofDate.format('Y-m-d H:i:s', formDate.updated_at_temp[1])
		formDate.updated_at = `${temp1},${temp2}`
		console.log(formDate.updated_at)
	} else {
		formDate.updated_at = ''
	}
	onTableDate()
})
// 分页
const handleSizeChange = (val: number) => {
	// console.log(`${val} items per page`)
	formDate.pagesize = 1
	formDate.pagesize = val
	onTableDate()

}
const handleCurrentChange = (val: number) => {
	// console.log(`current page: ${val}`)
	formDate.pagenum = val
	onTableDate()

}

// 表格数据
const tableDate = reactive<GetUserResType>({
	list: [],
	total: 0
})

// 删除
const onDelete = (row: User) => {
	console.log('当前用户编号' + row.user_id);

	useConfirm(row, deleteUserApi, onTableDate)
}


// 编辑删除需要获取到table表格上面数据
// 定义变量存储要删除的用户编号
const ids: Array<string | number> = []
const handleSelectionChange = (val: User[]) => {
	console.log(val)
	val.forEach((item: User) => {
		ids.push(item.user_id)
		console.log(ids);

	});
}
// 批量删除
const onDeletes = () => {
	console.log('批量删除');
	useConfirm({ user_id: ids.join(',') }, deleteUserApi, onTableDate)
}
// 编辑按钮
const userEdit = ref()
// 获取当前行的数据，传递给编辑组件
const onuserEdit = (vlaue: any) => {
	userEdit.value.state = true
	userEdit.value.formDate.user_id = vlaue.user_id
	userEdit.value.formDate.username = vlaue.username
	userEdit.value.formDate.mobile = vlaue.mobile
}

// 分配角色按钮
const userJuese = ref()
const onuserJuese = (value: any) => {
	userJuese.value.state = true
	userJuese.value.formDate.username = value.username
	userJuese.value.formDate.role_name = value.role_name
}

// 切换用户状态处理函数
const onChangezhuant = async (val: any) => {
	console.log('切换用户状态', val);
	const { state, msg } = await putUserStateApi(val)

	ElMessage({
		message: msg,
		type: state ? 'success' : 'error'
	})

}
</script>
<template>
	<UserEdit ref="userEdit" :onTableDate="onTableDate"></UserEdit>
	<UserJuese ref="userJuese"></UserJuese>
	<Divbox>
		<template #filter>
			<el-form :inline="true" :model="formDate" ref="forRef">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="formDate.username"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="mobile">
					<el-input v-model="formDate.mobile"></el-input>
				</el-form-item>
				<el-form-item label="角色名" prop="role_name">
					<el-input v-model="formDate.role_name"></el-input>
				</el-form-item>

				<el-form-item label="创建于" prop="created_at" v-show="isExpand">
					<el-date-picker type="datetimerange" range-separator="到" start-placeholder="开始时间" end-placeholder="结束时间"
						v-model="formDate.created_at_temp" />
				</el-form-item>
				<el-form-item label="更新于" prop="end_time" v-show="isExpand">
					<el-date-picker type="datetimerange" range-separator="到" start-placeholder="开始时间" end-placeholder="结束时间"
						v-model="formDate.updated_at_temp" />
				</el-form-item>
				<el-form-item>
					<el-button :icon="Search" type="primary" :click="onsubmit">
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
			<el-button @click="onDeletes" type="danger" :icon="Delete"> 批量删除 </el-button>
			<el-button type="primary">
				<el-icon>
					<CirclePlus />
				</el-icon>
				添加
			</el-button>
		</el-row>
		<el-table :data="tableDate.list" style="width: 100%" :border="true" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55" fixed="left" align="center" />

			<el-table-column prop="user_id" label="编号" width="80" sortable align="center" />
			<el-table-column prop="role_name" label="所属角色" width="100" align="center" />
			<el-table-column prop="username" label="用户名" width="100" height="100" align="center" />
			<el-table-column align="center" label="用户头像" width="120">
				<template #default="scope">
					<img :src="scope.row.avatar" width="60" height="60" />
				</template>
			</el-table-column>
			<el-table-column prop="mobile" label="手机号" width="120" align="center" />
			<el-table-column prop="state" label="登录" width="180" align="center">
				<template #default="scope">
					<el-switch v-model="scope.row.state" class="ml-2" inline-prompt @change="onChangezhuant(scope.row)"
						style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="未冻结"
						inactive-text="已冻结" active-value="1" inactive-value="0" />
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建于" width="180" align="center" />
			<el-table-column prop="updated_at" label="更新于" width="180" align="center" />
			<el-table-column label="操作" fixed="right" width="260" align="center">
				<template #default="scope">
					<el-button type="primary" @click="onuserEdit(scope.row)">
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
		<el-pagination v-model:current-page="formDate.pagenum" v-model:page-size="formDate.pagesize" :page-sizes="[10, 20]"
			:background="true" layout="total, sizes, prev, pager, next, jumper" :total="tableDate.total"
			@size-change="handleSizeChange" @current-change="handleCurrentChange" />
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
</style>
