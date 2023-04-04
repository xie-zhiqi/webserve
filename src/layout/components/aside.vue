<script setup lang="ts">
// 类型 组件 接口 模块
import { asyncRoutes } from '@/router'
// import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAsideStore } from '@/stores/create'
const { isLeftIcon } = storeToRefs(useAsideStore())


// 菜单展示
// const isCollapse = ref(false)
// 菜单点击
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>

<template>
	<div class="logo">
		<img src="@/assets/logo.png" alt="" />
		<h1 v-show="isLeftIcon">峰团运营平台</h1>
	</div>
	<el-col :span="12">
		<el-menu default-active="2" class="el-menu-vertical-demo" :collapse="!isLeftIcon" @open="handleOpen"
			@close="handleClose">
			<!-- 一级菜单 -->
			<template v-for="(item, index) in asyncRoutes" :key="index">
				<el-sub-menu :index="String(index)">
					<template #title>
						<i :class="['iconfont', item.meta.icon]"></i>
						<span> {{ item.meta.title }}</span>
					</template>
					<!-- 二级菜单 -->
					<template v-for="(item2, index2) in item.children" :key="index2">
						<el-menu-item-group>
							<el-menu-item :index="`${index}-${index2}`" @click="$router.push(item2.path)">
								<i :class="['iconfont', item2.meta.icon]"></i>
								{{ item2.meta.title }}</el-menu-item>
						</el-menu-item-group>
					</template>
				</el-sub-menu>
			</template>
		</el-menu>
	</el-col>
</template>
<style lang="scss" scoped>
.el-container {
	height: 100%;
	overflow: hidden;
}

.el-menu {
	border-right: none !important;
}

.aside {
	border: 1px solid #000;

	.logo {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			padding-right: 5px;
		}

		h1 {
			font-size: 16px;
			color: #fff;
		}
	}

	.shuxing {
		height: 100%;

		.el-menu {
			width: 200px;
			background-color: #2d3a4b !important;

			.el-row {
				width: 200px;
			}
		}

		.el-col-12 {
			max-width: 200px !important;
		}
	}
}

:deep(.el-col-12) {
	max-width: 100%;
}

:deep(.el-sub-menu__title:hover) {
	background-color: #262e3b !important;
}

:deep(.el-sub-menu__title) {
	color: #fff;
}

:deep(.el-menu-item-group__title) {
	padding: 0 !important;
}

:deep(.el-menu) {
	background-color: #303a4a;
}

:deep(.el-menu-item) {
	color: #fff;
}

:deep(.el-menu-item:hover) {
	background-color: #262e3b !important;
	color: #5a9cf8;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
