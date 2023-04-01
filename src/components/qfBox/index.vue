<script setup lang="ts">
// 导入类型、接口、模块、组件
import { useSlots } from 'vue'

// 插槽
const slot = useSlots()
</script>

<template>
	<div class="qfBox">
		<!-- 表单过滤盒子 -->
		<div class="qfFilterBox" v-if="slot.filter">
			<slot name="filter"></slot>
		</div>
		<!-- 表单过滤盒子 -->
		<!-- 表单过滤盒子 -->
		<div class="qfTableBox">
			<slot></slot>
		</div>
		<!-- 表单过滤盒子 -->
	</div>
</template>

<style lang="scss" scoped>
.qfBox {
	display: flex;
	flex-direction: column;
	height: 100%;

	.qfFilterBox {
		background-color: #fff;
		margin-bottom: 16px;
		// padding: 16px;
		padding: 16px 16px 0; // 针对于FilterBox放表单下内边距不需要
	}

	.qfTableBox {
		flex: 1;
		background-color: #fff;
		padding: 16px;
		overflow-y: scroll;

		// 表格固定的秘诀
		display: flex;
		flex-direction: column;
	}
}
</style>
