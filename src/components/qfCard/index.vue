<script setup lang="ts">
// 属性区域（不用ts的语法）
// defineProps({
// 	// className: String,  // 切记ts是小写、但是vue的props语法类型是大写
// 	className: {
// 		type: String,
// 		required: true
// 	}
// })

// 属性区域（同react）
type Props = {
	className: string
	title: string
	btnTitle?: string
	btnUrl?: string
}
defineProps<Props>()
</script>

<template>
	<el-card :class="className">
		<!-- 具名header插槽 -->
		<template #header>
			<span>{{ title }}</span>
			<el-button type="default" @click="$router.push(btnUrl as string)" v-if="btnUrl">{{ btnTitle }}</el-button>
		</template>
		<!-- 具名header插槽 -->
		<!-- 默认内容 -->
		<slot></slot>
		<!-- 默认内容 -->
	</el-card>
</template>
