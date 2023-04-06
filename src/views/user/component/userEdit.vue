<script setup lang="ts">
import { putUserApi } from "@/api/user"

import type { FormInstance, FormRules } from 'element-plus'
import type { PutUserPayloadType } from "@/api/user/types"
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'


// 属性


// 正则
const checkAge = (rule: any, value: any, callback: any) => {
	if (/^1[3-9]\d{9}$/.test(value) || value === '') {
		callback()
	} else {
		callback(new Error('请输入正确的手机号'))
	}
}
const validatePass = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请输入用户名'))
	} else {
		callback()
	}
}

// 表单验证规则
const rules = reactive<FormRules>({
	username: [{ validator: validatePass, trigger: 'blur' }],
	password: [
		// 编辑：密码不写则是默认，写了就必须是6-18个然后更新
		// { required: true, message: '密码必须', trigger: 'blur' },
		{ min: 6, max: 18, message: '密码至少6~18个字符', trigger: 'blur' }
	],
	mobile: [{ validator: checkAge, trigger: 'blur' }]
})
// 表单数据
const formDate = reactive<PutUserPayloadType>({
	user_id: 0,
	username: '',
	password: '',
	mobile: ''
})


// 获取表单数据
const ruleFormRef = ref<FormInstance>()
// 创建按钮提示
const submitForm = () => {
	ruleFormRef.value?.validate(async (valid: boolean) => {
		if (valid) {
			const res = await putUserApi(formDate)
			console.log(res);
			props.onTableDate()
			state.value = false
			ElMessage.success('创建成功')

		} else {
			return false
		}
	})
}

//重置按钮
const resetForm = () => {
	ruleFormRef.value?.resetFields()
}


// 控制显示隐藏
const state = ref(false)
defineExpose({
	state,
	formDate
})

// 接收父组件传递的数据
const props = defineProps({
	onTableDate: {
		type: Function,
		required: true
	}
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
			<el-form-item label="用户名" prop="username">
				<el-input v-model="formDate.username" placeholder="请输入用户名" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="密码" prop="passworld">
				<el-input v-model="formDate.password" placeholder="请设置密码" type="password" autocomplete="off" />
			</el-form-item>
			<el-form-item label="手机号" prop="mobile">
				<el-input v-model.number="formDate.mobile" placeholder="请输入手机号" />
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
