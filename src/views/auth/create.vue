<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()

// 表单数据
const formDare = reactive({
	username: '',
	passworld: '',
	mobile: ''
})
// 创建按钮提示
const submitForm = () => {
	console.log(formDare)
	ElMessage.success('创建成功')
}
//重置按钮
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}

// 种类单选框
const radio1 = ref('1')

// 组件缓存开关
const value4 = ref(true)

// 所属权限选择器
const value = ref('')
const options = [
	{
		value: 'Option1',
		label: 'Option1'
	},
	{
		value: 'Option2',
		label: 'Option2'
	}
]
</script>
<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>权限创建</span>
				<el-button class="button" text @click="$router.push('/')">返回</el-button>
			</div>
		</template>
		<el-form ref="ruleFormRef" :model="formDare" status-icon label-width="120px" class="demo-formDare">
			<el-form-item label="权限名称" prop="username">
				<el-input v-model="formDare.username" placeholder="请输入权限名称" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="路由" prop="passworld">
				<el-input v-model="formDare.passworld" placeholder="请输入路由" type="password" autocomplete="off" />
			</el-form-item>
			<el-form-item label="种类" prop="mobile">
				<el-radio-group v-model="radio1">
					<el-radio label="1" size="large" border>菜单</el-radio>
					<el-radio label="2" size="large" border>按钮</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="组件缓存" prop="mobile">
				<el-switch
					v-model="value4"
					class="ml-2"
					inline-prompt
					style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
					active-text="已缓存"
					inactive-text="未缓存"
				/>
			</el-form-item>
			<el-form-item label="组件路径" prop="username">
				<el-input v-model="formDare.username" placeholder="请输入权限名称" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="所属权限" prop="mobile">
				<el-select v-model="value" class="m-2" placeholder="请选择权限">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm">立即创建</el-button>
				<el-button @click="resetForm(ruleFormRef)">重置</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>
<style lang="scss" scoped>
.avatar-uploader .avatar {
	width: 178px;
	height: 178px;
	display: block;
}
.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.el-button.is-text {
	border: 1px solid #dddfe5;
}
.el-input {
	width: 40%;
	height: 40px;
}
</style>
