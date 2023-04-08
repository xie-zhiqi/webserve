<script lang="ts" setup>
import { ref } from 'vue'

const editableTabsValue = ref('1')
const editableTabs = ref([
	{
		title: '首页',
		name: '1',
		content: 'Tab 1 content'
	},
	{
		title: '后台首页',
		name: '2',
		content: 'Tab 2 content'
	},
	{
		title: '数据分析',
		name: '3',
		content: 'Tab 2 content'
	}
])

const removeTab = (targetName: string) => {
	const tabs = editableTabs.value
	let activeName = editableTabsValue.value
	if (activeName === targetName) {
		tabs.forEach((tab, index) => {
			if (tab.name === targetName) {
				const nextTab = tabs[index + 1] || tabs[index - 1]
				if (nextTab) {
					activeName = nextTab.name
				}
			}
		})
	}

	editableTabsValue.value = activeName
	editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<template>
	<div class="fbom">
		<div class="fbom2">
			<div class="tab">
				<el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
					<el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
					</el-tab-pane>
				</el-tabs>
			</div>
			<div>
				<el-dropdown>
					<el-button type="primary">
						更多
						<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</el-button>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>刷新当前页</el-dropdown-item>
							<el-dropdown-item>当前页全屏</el-dropdown-item>
							<el-dropdown-item>关闭当前</el-dropdown-item>
							<el-dropdown-item>关闭其他</el-dropdown-item>
							<el-dropdown-item>关闭所有</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.fbom {
	height: 40px;
	box-sizing: 0 1px 4px rgb(0 21 41 /8%);

	.fbom2 {
		display: flex;
		justify-content: space-between;

		align-items: center;

		div {
			.example-showcase .el-dropdown+.el-dropdown {
				margin-left: 15px;
			}

			.el-dropdown {
				button {
					outline: none !important;
					margin-right: 10px;
				}
			}

			.example-showcase .el-dropdown-link {
				cursor: pointer;
				color: var(--el-color-primary);
				display: flex;
				align-items: center;
			}
		}

		.tab {
			width: 70%;
		}

		:deep(.el-tabs__header) {
			margin: 0 !important;
		}

		.demo-tabs>.el-tabs__content {
			padding: 32px;
			color: #6b778c;
			font-size: 32px;
			font-weight: 600;
		}

		:deep(.el-tabs--card > .el-tabs__header .el-tabs__nav) {
			border: none !important;
		}

		:deep(.el-tabs--card > .el-tabs__header) {
			border: none !important;
		}

		:deep(.el-tabs--card > .el-tabs__header .el-tabs__item) {
			border: none !important;
		}
	}
}</style>
