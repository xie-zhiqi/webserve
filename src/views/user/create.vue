<script setup lang="ts">
// 类型
import type { FormInstance, FormRules } from 'element-plus'
// 接口
import { postUserApi } from "@/api/user/index"
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import router from "@/router/index"



const ruleFormRef = ref()


// 表单验证
const checkMobile = (rule: any, value: string, callback: Function) => {
	if (/^1\d{10}$/.test(value) || value === '') {
		callback()
	} else {
		callback(new Error('请输入正确手机格式'))
	}
}
const formRules = reactive<FormRules>({
	// 键是要验证的模型数据: [
	// 	数组中是一个个对象  一个个验证规则
	// 	{ required: true, message: 'xx必须', trigger:'blur' },
	// 	{ min: 2,  max: 10, message: 'xx至少2-10个字符', trigger:'blur' },
	// 	{validator:checkusername,, trigger:'blur' }
	// ]
	username: [
		{ required: true, message: '用户名必须', trigger: 'blur' },
		{ min: 2, max: 8, message: '用户名至少2~8个字符', trigger: 'blur' }
	],
	password: [
		{ required: true, message: '密码必须', trigger: 'blur' },
		{ min: 6, max: 18, message: '密码至少6~18个字符', trigger: 'blur' }
	],
	mobile: [
		// { required: true, message: '手机号必须', trigger: 'blur' },
		{ validator: checkMobile, trigger: 'blur' }
	]
})
// 表单数据
const formDate = reactive({
	username: '',
	password: '',
	mobile: '',
	avatar: ''
})

// 创建按钮提示
const submitForm = () => {
	// console.log(ruleFormRef.value)

	// const { state, msg } = await postUserApi(formDate)
	// if (state === 201) {
	// 	ElMessage.success(msg)
	// 	router.push("/user")
	// }
	ruleFormRef.value.validate(async (isSuccess: boolean) => {
		// 获取到图片地址
		if (isSuccess) {

			// console.log(ruleFormRef.value.temp)
			formDate.avatar = uploadRef.value.temp
			const { state, msg } = await postUserApi(formDate)
			if (state === 201) {
				ElMessage.success(msg)
				router.push('/user')
			} else {
				ElMessage.error(msg)
			}
		}
	})
}
//重置按钮
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}

// 图片上传
const uploadRef = ref()


</script>
<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>用户创建</span>
				<el-button class="button" text @click="$router.push('/')">点击</el-button>
			</div>
		</template>
		<el-form ref="ruleFormRef" :model="formDate" status-icon :rules="formRules" label-width="120px"
			class="demo-formDate">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="formDate.username" placeholder="请输入用户名" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="formDate.password
				" placeholder="请设置密码" type="password" />
			</el-form-item>
			<el-form-item label="手机号" prop="mobile">
				<el-input v-model.number="formDate.mobile" placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item label="头像" prop="Head">

				<!-- 第一种方式通过ref传递参数 -->
				<QfUpload ref="uploadRef"></QfUpload>
				<!-- 第二种方式通过emit传递参数 -->
				<!-- <QfUpload @update:temp="(data: string) => { formDate.avatar = data }"></QfUpload> -->
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
