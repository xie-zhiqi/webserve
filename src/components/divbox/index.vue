<script setup lang="ts"></script>
<template>
	<div class="divbox">
		<div class="filterbox">
			<slot name="filter"></slot>
		</div>
		<div class="tablebox">
			<slot></slot>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.divbox {
	display: flex;
	height: 100%;
	flex-direction: column;
	// background-color: red;
	.filterbox {
		margin-bottom: 16px;
		background-color: #fff;
		padding: 16px;
	}
	.tablebox {
		flex: 1;
		padding: 16px;
		background-color: #fff;
		overflow-y: scroll;
		overflow-x: scroll;
		display: flex;
		flex-direction: column;
		.el-table {
			flex: 1;
		}
	}
}
</style>
