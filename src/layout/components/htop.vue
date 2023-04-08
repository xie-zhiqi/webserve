<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from "vue-router"

import { useUserStore } from "@/stores/users"
import { useAsideStore } from '@/stores/create'
import { storeToRefs } from 'pinia'
import router from '@/router';
const { isLeftIcon } = storeToRefs(useAsideStore())
const { userinfo } = useUserStore()
const { logout } = useUserStore()

const route = useRoute()
console.log(route);



const onLoginout = () => {
	logout()
	router.push("/login")
}

</script>

<template>
	<div class="htop">
		<div class="hleft">
			<div class="btn" @click="isLeftIcon = !isLeftIcon">
				<el-icon>
					<Fold v-show="isLeftIcon" />
					<!-- <Fold v-show="store" /> -->
					<Expand v-show="!isLeftIcon" />
				</el-icon>
			</div>
			<div>
				<el-breadcrumb :separator-icon="ArrowRight">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: $router.go }">{{ $route.matched[0].meta.title }}</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: $router.go }">{{ $route.matched[1].meta.title }}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div class="hright">
			<div class="btn">
				<el-icon>
					<Setting />
				</el-icon>
			</div>
			<div class="btn">
				<el-icon>
					<FullScreen />
				</el-icon>
			</div>
			<div>
				<el-dropdown>
					<span class="el-dropdown-link">
						<div class="youjiao">
							<el-avatar
								:src="userinfo.avatar || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'" />
							<div>{{ userinfo.username }}</div>
							<el-icon class="el-icon--right">
								<arrow-down />
							</el-icon>
						</div>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item disabled>{{ userinfo.roleName || "未分配角色" }}</el-dropdown-item>
							<el-dropdown-item @click="onLoginout">退出</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.htop {
	display: flex;
	width: 100%;
	height: 50px;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #e3e3e3;

	.btn {
		font-size: 22px;
		margin: 5px;
	}

	.hleft {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		width: 70%;
		height: 100%;
		margin-left: 3px;

		.el-breadcrumb {
			margin-left: 5px;
			margin-top: -1%;
			font-size: 15px;
		}
	}

	.hright {
		margin-right: 5px;
		width: 30%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.youjiao {
			outline: none;
			display: flex;
			align-items: center;
		}
	}

	.content {
		width: 100%;
		height: 100%;
		background-color: #327f8a;
	}

	.footer {
		width: 100%;
		height: 40px;
		background-color: #dd4444;
	}
}
</style>
