<script setup lang="ts">
// 类型
import type { PostRolePayloadType } from '@/api/role/types';
import type { FormInstance, FormRules } from 'element-plus'

import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

import { postRoleApi } from '@/api/role';
import router from "@/router/index"
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
		callback(new Error('请输入密码'))
		// 测试两次输入不匹配
		// } else if (value !== formDate.role_name) {
		// 	callback(new Error("Two inputs don't match!"))
	} else {
		callback()
	}
}
// 表单验证规则
const rules = reactive<FormRules>({
	role_name: [{ validator: validatePass, trigger: 'blur' }],
	role_describe: [{ validator: validatePass2, trigger: 'blur' }],
})
// 表单数据
const formDate = reactive<PostRolePayloadType>({
	role_name: '',
	role_describe: '',
})
// 创建按钮提示
const submitForm = async () => {
	const { meta: { msg, state } } = await postRoleApi(formDate)
	// const res = await postRoleApi(formDate)
	// console.log(res);
	if (state === 201) {
		ElMessage.success(msg)
		// 跳转到角色列表
		router.push('/role')
	} else {
		ElMessage.error(msg)
	}

}
//重置按钮
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}
</script>
<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>角色创建</span>
				<el-button class="button" text @click="$router.push('/')">返回</el-button>
			</div>
		</template>
		<el-form ref="ruleFormRef" :model="formDate" status-icon :rules="rules" label-width="120px" class="demo-formDate">
			<el-form-item label="角色名" prop="role_name">
				<el-input v-model="formDate.role_name" placeholder="请输入角色名" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="角色描述" prop="role_describe">
				<el-input v-model="formDate.role_describe" placeholder="角色描述" type="password" autocomplete="off" />
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
