<script setup lang="ts">
// 类型
import type { FormInstance, FormRules } from 'element-plus'
import type { UploadProps } from 'element-plus'
// 接口
import { getUserApi, postUserApi } from "@/api/user/index"
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import router from "@/router/index"



const ruleFormRef = ref<FormInstance>()

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
	password: '',
	mobile: ''
})
onMounted(async () => {
	// const res = await getUserApi(formDate)
	// console.log(res)
})

console.log(router);

// 创建按钮提示
const submitForm = async () => {
	console.log(formDate)
	const { meta: { state, msg } } = await postUserApi(formDate)
	if (state === 201) {
		ElMessage.success(msg)
		router.push("/user")

	} else {
		ElMessage.error(msg)
	}
}
//重置按钮
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}

// 图片上传
const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
	imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
	if (rawFile.type !== 'image/jpeg') {
		ElMessage.error('Avatar picture must be JPG format!')
		return false
	} else if (rawFile.size / 1024 / 1024 > 2) {
		ElMessage.error('Avatar picture size can not exceed 2MB!')
		return false
	}
	return true
}
</script>
<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>用户创建</span>
				<el-button class="button" text @click="$router.push('/')">点击</el-button>
			</div>
		</template>
		<el-form ref="ruleFormRef" :model="formDate" status-icon :rules="rules" label-width="120px" class="demo-formDate">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="formDate.username" placeholder="请输入用户名" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="formDate.password
				" placeholder="请设置密码" type="password" autocomplete="off" />
			</el-form-item>
			<el-form-item label="手机号" prop="mobile">
				<el-input v-model.number="formDate.mobile" placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item label="头像" prop="Head">
				<el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
					:show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar" />
					<el-icon v-else class="avatar-uploader-icon">
						<Plus />
					</el-icon>
				</el-upload>
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
