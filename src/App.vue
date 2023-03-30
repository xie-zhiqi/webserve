<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<RouterView />
</template>

<style lang="scss">
@import 'styles/reset.scss';
@import 'styles/variables.scss';
@import 'styles/element.scss';

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
