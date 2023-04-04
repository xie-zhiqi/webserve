<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')

// 存储图片数据
// const temp = ref("")
// 把图片数据暴露出去
// defineExpose({
// 	temp
// })

// 第二种写法
const emit = defineEmits(['update:temp'])
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
	console.log(response);
	// 判断是否上传成功
	// 上传成功存储图片数据
	if (response.state === 201) {
		// 通过ref传递参数
		// temp.value = response.img
		emit('update:temp', response.img)
	}
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
	<el-upload class="avatar-uploader" action="http://kg.zhaodashen.cn/mt/admin/upload.jsp" :show-file-list="false"
		:on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">

		<img v-if="imageUrl" :src="imageUrl" class="avatar" />
		<el-icon v-else class="avatar-uploader-icon">
			<Plus />
		</el-icon>
	</el-upload>
</template>
<style scoped>
.avatar-uploader .avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>
