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

// 所属分类的选择器
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
				<span>分类创建</span>
				<el-button class="button" text @click="$router.push('/')">返回</el-button>
			</div>
		</template>
		<el-form ref="ruleFormRef" :model="formDare" status-icon label-width="120px" class="demo-formDare">
			<el-form-item label="分类名称" prop="username">
				<el-input v-model="formDare.username" placeholder="请输入用户名" type="text" autocomplete="off" />
			</el-form-item>
			<el-form-item label="所属分类" prop="passworld">
				<el-select v-model="value" class="m-2" placeholder="请选择所属分类">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="关键词" prop="mobile">
				<el-input v-model.number="formDare.mobile" placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item label="跳转网址" prop="mobile">
				<el-input v-model.number="formDare.mobile" placeholder="请输入手机号" />
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
