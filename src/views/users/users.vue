<script setup lang="ts">
import mock from '~mock/user'
import { ArrowDown, Search, Delete } from '@element-plus/icons-vue'
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
console.log(mock)

// 表单折叠
const isExpand = ref<boolean>(false)

const forRef = ref()
const onsubmit = () => {
	forRef.value.validate((isScuccess: boolean) => {
		if (isScuccess) {
			console.log(fromData)
		}
	})
}
const onReset = () => {
	forRef.value.resetFields()
}

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
</script>
<template>
	<Divbox>
		<template #filter>
			<el-form :inline="true" :model="fromData" ref="forRef">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="fromData.username"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="mobile">
					<el-input v-model="fromData.mobile"></el-input>
				</el-form-item>
				<el-form-item label="角色名" prop="role_name">
					<el-input v-model="fromData.role_name"></el-input>
				</el-form-item>
				<el-form-item label="创建于" prop="created_at" v-show="isExpand">
					<el-date-picker
						type="datetimerange"
						range-separator="到"
						start-placeholder="开始时间"
						end-placeholder="结束时间"
						v-model="fromData.created_at"
					/>
				</el-form-item>
				<el-form-item label="更新于" prop="updated_at" v-show="isExpand">
					<el-date-picker
						type="datetimerange"
						range-separator="到"
						start-placeholder="开始时间"
						end-placeholder="结束时间"
						v-model="fromData.updated_at"
					/>
				</el-form-item>
				<el-form-item>
					<el-button :icon="Search" type="primary" @click="onsubmit">
						<div>搜索</div>
					</el-button>
					<el-button type="Default" @click="onReset">重置</el-button>
					<el-button text="true" @click="isExpand = !isExpand">
						{{ isExpand ? '收起' : '展开' }}
						<el-icon><ArrowUp v-show="isExpand" /><ArrowDown v-show="!isExpand" /></el-icon>
					</el-button>
				</el-form-item>
			</el-form>
		</template>
		<el-row>
			<el-button type="danger" :icon="Delete"> 批量删除 </el-button>
			<el-button type="primary">
				<el-icon><CirclePlus /></el-icon>
				添加
			</el-button>
		</el-row>
		<el-table :data="tableDate.list" style="width: 100%" :border="true">
			<el-table-column type="selection" width="55" fixed="left" />

			<el-table-column prop="id" label="编号" width="180" />
			<el-table-column prop="role_name" label="所属角色" width="180" />
			<el-table-column prop="uname" label="用户名" width="180" />
			<el-table-column prop="mobile" label="手机号" width="180" />
			<el-table-column prop="state" label="登录" width="180">
				<template #default="scope">
					<el-switch
						v-model="scope.row.state"
						class="ml-2"
						inline-prompt
						style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
						active-text="未冻结"
						inactive-text="已冻结"
						:active-value="0"
						:inactive-value="1"
					/>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建于" width="180" />
			<el-table-column prop="updated_at" label="更新于" width="180" />
			<el-table-column label="操作" fixed="right" width="180">
				<el-button>删除</el-button>
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
</style>
