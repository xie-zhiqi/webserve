<script setup lang="ts">
import { putRoleApi } from "@/api/role/index"

import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

// 正则

const validatePass = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请输入用户名'))
	} else {
		callback()
	}
}
const validatePass2 = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请输入描述'))
	} else {
		callback()
	}
}
// 表单验证规则
const rules = reactive<FormRules>({
	username: [{ validator: validatePass, trigger: 'blur' }],
	role_desc: [{ validator: validatePass2, trigger: 'blur' }]
})
// 表单数据
const formDate = reactive({
	role_id: '',
	role_name: '',
	role_desc: ''
})

// 接收父组件传递过来的数据
const props = defineProps({
	onTable: {
		type: Function,
		required: true
	}
})

// 创建按钮提示
const submitForm = () => {
	ruleFormRef.value?.validate(async (valid: boolean) => {
		if (valid) {
			const res = await putRoleApi(formDate)
			console.log(res);
			if (res.state === 200) {
				ElMessage.success(res.msg)
				state.value = false
				props.onTable()
			} else {
				state.value = false
				ElMessage.error(res.msg)
			}
		}
	})

}
//重置按钮
const resetForm = () => {
	ruleFormRef.value?.resetFields()
}

const state = ref(false)
defineExpose({
	state,
	formDate
})

</script>
<template>
	<el-dialog v-model="state" title="Tips" width="30%" :before-close="() => (state = false)">
		<template #header>
			<div class="card-header">
				<span>用户编辑</span>
			</div>
		</template>
		<el-form v-if="state" ref="ruleFormRef" :model="formDate" status-icon :rules="rules" label-width="120px"
			class="demo-formDate">
			<el-form-item label="角色名" prop="role_id">
				<el-input v-model="formDate.role_name" placeholder="请输入用户名" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="角色描述" prop="role_desc">
				<el-input v-model="formDate.role_desc" placeholder="请输入描述" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm">立即创建</el-button>
				<el-button @click="resetForm">重置</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
</template>
<style lang="scss" scoped>
.avatar-uploader .avatar {
	width: 178px;
	height: 178px;
	display: block;
}

.el-input[data-v-f3899914] {
	width: 70%;
	height: 40px;
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
	width: 55%;
	height: 40px;
}
</style>
