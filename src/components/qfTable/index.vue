<!-- eslint-disable no-undef -->
<script setup lang="ts">
// 增加ts优点
// - 更精确的属性验证
// - IDE智能提醒,减少代码低级错误
type Props = {
	// 留心：特殊写法组件对于.ts支持更优化，组件中就会报错 Table 没有定义
	// 但是：不影响后期ts类型提示使用
	// 因此：通过eslint禁用到变量未定义提示
	data: Table.Data[]
	columns: Table.Columns[]
	rowKey?: string
	border?: boolean
}
withDefaults(defineProps<Props>(), {
	rowKey: 'id',
	border: true
})
</script>

<template>
	<el-table :data="data" :border="border" :row-key="rowKey">
		<template v-for="(col, colI) in columns" :key="colI">
			<!-- 自定义填充 -->
			<el-table-column
				v-if="col.type"
				:label="col.title"
				:align="col.align || 'center'"
				:fixed="col.fixed"
				:width="col.width"
				:show-overflow-tooltip="Boolean(col.tooltip)"
			>
				<template #default="scope">
					<!-- switch -->
					<template v-if="col.type === 'switch'">
						<el-switch
							v-model="scope.row[col.prop as string]"
							style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
							:active-text="col.payload!.openText"
							:inactive-text="col.payload?.closeText"
							inline-prompt
							:active-value="col.payload!.open"
							:inactive-value="col.payload!.close"
						/>
					</template>
					<!-- switch -->

					<!-- tag -->
					<template v-if="col.type === 'tag'">
						<el-tag :type="col.payload!.type">{{ scope.row[col.payload!.content] }}</el-tag>
					</template>
					<!-- tag -->

					<!-- img -->
					<template v-if="col.type === 'img'">
						<img
							:src="scope.row[col.payload!.src]"
							:alt="col.payload!.alt"
							:width="col.payload!.width"
							:height="col.payload!.height"
						/>
					</template>
					<!-- img -->

					<!-- operations -->
					<template v-if="col.type === 'operations'">
						<el-button
							v-for="(btn, btnI) in col.payload"
							:key="btnI"
							:type="btn.type || 'primary'"
							:size="btn.size || 'small'"
							@click="btn.click(scope.row)"
						>
							<span :class="['iconfont', btn.icon]" v-if="btn.icon"></span>
							{{ btn.content }}
						</el-button>
					</template>
					<!-- operations -->
				</template>
			</el-table-column>
			<!-- 自定义填充 -->

			<!-- 默认填充 -->
			<el-table-column
				v-else
				:label="col.title"
				:prop="col.prop"
				:align="col.align || 'center'"
				:fixed="col.fixed"
				:width="col.width"
				:show-overflow-tooltip="Boolean(col.tooltip)"
			></el-table-column>
			<!-- 默认填充 -->
		</template>
	</el-table>
</template>

<style lang="scss" scoped></style>
