<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
// 正则
const checkAge = (rule: any, value: any, callback: any) => {
	if (/^1[3-9]\d{9}$/.test(value)) {
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
const validatePass2 = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请输入密码'))
		// 测试两次输入不匹配
		// } else if (value !== formDate.username) {
		// 	callback(new Error("Two inputs don't match!"))
	} else {
		callback()
	}
}
// 表单验证规则
const rules = reactive<FormRules>({
	username: [{ validator: validatePass, trigger: 'blur' }],
	passworld: [{ validator: validatePass2, trigger: 'blur' }],
	mobile: [{ validator: checkAge, trigger: 'blur' }]
})
// 表单数据
const formDate = reactive({
	username: '',
	passworld: '',
	mobile: '',
	role_name: '',
	options: [
		{
			value: 'Option1',
			label: 'Option1'
		},
		{
			value: 'Option2',
			label: 'Option2'
		}
	]
})
// 创建按钮提示
const submitForm = () => {
	console.log(formDate)
	ElMessage.success('更新成功')
	state.value = false
}
//重置按钮
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}

const state = ref(false)
defineExpose({
	state,
	formDate
})

const value = ref('')
</script>
<template>
	<el-dialog v-model="state" title="Tips" width="30%" :before-close="() => (state = false)">
		<template #header>
			<div class="card-header">
				<span>分配角色</span>
			</div>
		</template>
		<el-form
			v-if="state"
			ref="ruleFormRef"
			:model="formDate"
			status-icon
			:rules="rules"
			label-width="120px"
			class="demo-formDate"
		>
			<el-form-item label="当前用户" prop="username">
				<el-input v-model="formDate.username" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="当前角色">
				<el-input v-model="formDate.role_name" type="text" autocomplete="off" disabled="true" />
			</el-form-item>
			<el-form-item label="选择角色" prop="mobile">
				<el-select v-model="value" class="m-2" placeholder="请选择角色" size="large">
					<el-option v-for="item in formDate.options" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm">立即更新</el-button>
				<el-button @click="resetForm(ruleFormRef)">重置</el-button>
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
	width: 70%;
	height: 40px;
}
</style>
