<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Aside from './components/aside.vue'
import Htop from './components/htop.vue'
import fbom from './components/fbom.vue'
import { storeToRefs } from 'pinia'
import { useAsideStore } from '@/stores/create'
const { isLeftIcon } = storeToRefs(useAsideStore())
</script>

<template>
	<div class="common-layout">
		<el-container>
			<div :class="{ menuMobileBg: true, menuMobileBgClose: true }"></div>
			<el-aside
				:style="{ width: isLeftIcon ? '200px' : '64px' }"
				:class="{ aside: true, menuMobile: true, menuMobileClose: true }"
			>
				<Aside></Aside>
			</el-aside>
			<el-main class="main">
				<div class="hander">
					<Htop></Htop>
					<fbom></fbom>
				</div>
				<div class="content">
					<RouterView />
				</div>
				<div class="footer">
					<div>2023 © QFADMIN Weavers-出品</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>
<style lang="scss">
.common-layout {
	height: 100%;
}
.aside {
	background-color: #2d3a4b;
	height: 100%;
}
.el-container {
	height: 100%;
}
.el-main {
	padding: 0 !important;
}
.main {
	background-color: #f0f2f5;
}
.el-aside {
	transition: width 0.3s;
}
.aside {
	border: none !important;
}

.hander {
	width: 100%;
	height: 90px;
	display: flex;
	flex-direction: column;
	background-color: #fff;
}
.content {
	width: 96%;
	height: calc(100% - 170px);
	margin: auto;
	overflow-y: scroll;
	overflow-x: scroll;
	margin: 20px auto;
}
.footer {
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: #2d3a4b;
	background-color: #fff;
}
// }
// 移动端菜单样式
@media screen and (max-width: 990px) {
	.menuMobileBg {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		position: fixed;
		left: 0;
		z-index: 11;
		display: block;
	}
	.menuMobileBgClose {
		display: none !important;
	}

	.menuMobile {
		position: fixed;
		z-index: 11;
		left: 0;
		transition: all 0.5s;
	}
	.menuMobileClose {
		position: fixed;
		z-index: 10;
		left: -200px !important;
	}
}
.fbom .fbom2 div .el-dropdown button[data-v-be356b50] {
	height: 25px;
	width: 58px;
}
</style>
