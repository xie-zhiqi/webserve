<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<RouterView />
	<h1>项目初始化</h1>
	<el-button type="primary">Primary</el-button>
	<el-button type="success">Success</el-button>
	<el-button type="info">Info</el-button>
	<el-button type="warning">Warning</el-button>
	<el-button type="danger">Danger</el-button>
</template>

<style lang="scss">
@import 'styles/reset.scss';
</style>
