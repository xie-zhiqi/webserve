<script lang="ts" setup>
import { Menu as Location } from '@element-plus/icons-vue'
import { ElNotification as notify } from 'element-plus'

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const onBack = () => {
	notify('Back')
}
</script>

<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px" class="aside">
				<div class="logo">
					<img src="@/assets/logo.png" alt="" />
					<h1>峰团运营平台</h1>
				</div>
				<div class="shuxing">
					<el-row class="tac">
						<el-col :span="12">
							<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
								<el-sub-menu index="1">
									<template #title>
										<el-icon><location /></el-icon>
										<span>Navigator One</span>
									</template>
									<el-menu-item index="1-2">item two</el-menu-item>
								</el-sub-menu>
								<el-sub-menu index="2">
									<template #title>
										<el-icon><location /></el-icon>
										<span>Navigator One</span>
									</template>
									<el-menu-item index="1-2">item two</el-menu-item>
								</el-sub-menu>
								<el-sub-menu index="3">
									<template #title>
										<el-icon><location /></el-icon>
										<span>Navigator One</span>
									</template>
									<el-menu-item index="1-2">item two</el-menu-item>
								</el-sub-menu>
							</el-menu>
						</el-col>
					</el-row>
				</div>
			</el-aside>
			<el-main class="main">
				<div aria-label="A complete example of page header">
					<el-page-header @back="onBack">
						<template #breadcrumb>
							<el-breadcrumb separator="/">
								<el-breadcrumb-item :to="{ path: './page-header.html' }"> homepage </el-breadcrumb-item>
								<el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>
								<el-breadcrumb-item>route 2</el-breadcrumb-item>
							</el-breadcrumb>
						</template>
						<template #content>
							<div class="flex items-center">
								<el-avatar class="mr-3" :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
								<span class="text-large font-600 mr-3"> Title </span>
								<span class="text-sm mr-2" style="color: var(--el-text-color-regular)"> Sub title </span>
								<el-tag>Default</el-tag>
							</div>
						</template>
						<template #extra>
							<div class="flex items-center">
								<el-button>Print</el-button>
								<el-button type="primary" class="ml-2">Edit</el-button>
							</div>
						</template>

						<el-descriptions :column="3" size="small" class="mt-4">
							<el-descriptions-item label="Username">kooriookami</el-descriptions-item>
							<el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
							<el-descriptions-item label="Place">Suzhou</el-descriptions-item>
							<el-descriptions-item label="Remarks">
								<el-tag size="small">School</el-tag>
							</el-descriptions-item>
							<el-descriptions-item label="Address"
								>No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
							</el-descriptions-item>
						</el-descriptions>
						<p class="mt-4 text-sm">
							Element Plus team uses <b>weekly</b> release strategy under normal circumstance, but critical bug fixes would
							require hotfix so the actual release number <b>could be</b> more than 1 per week.
						</p>
					</el-page-header>
				</div>
			</el-main>
		</el-container>
	</div>
</template>
<style lang="scss">
.common-layout {
	height: 100%;
	// width: 200px;
}
.aside {
	background-color: #2d3a4b;
}
.el-container {
	height: 100%;

	.el-aside {
		height: 100%;
	}
	.main {
		// background-color: rgb(24, 141, 147);
	}
	.aside {
		// background-color: rgb(88, 175, 79);
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
				color: #fff;
			}
		}
		.shuxing {
			.el-menu {
				width: 200px;
				background-color: #2d3a4b !important;
				.el-row {
					width: 200px;
				}
			}
			.el-col-12 {
				max-width: 200px !important;
				.el-sub-menu__title {
					color: rgb(255, 255, 255) !important;
				}
				.el-sub-menu:hover {
					background-color: rgb(205, 38, 8) !important;
				}
			}
		}
	}
}
</style>
