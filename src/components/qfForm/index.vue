<!-- eslint-disable no-undef -->
<script setup lang="ts">
// 导入组件
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import QfUpload from '@/components/qfUpload/index.vue'
// 导入模块
import { reactive, ref, watchEffect } from 'vue'

// 增加ts优点
// - 更精确的属性验证
// - IDE智能提醒,减少代码低级错误
type Props = {
	inline?: boolean
	labelWidth: string | number
	formItem: Form.Item[]
	formBtn?: Form.Btn[]
	row?: any
}
const props = withDefaults(defineProps<Props>(), {
	inline: false,
	labelWidth: ''
})

// 表单数据
const formData = reactive<Form.FormData>({})
watchEffect(() => {
	if (props.row) {
		Object.assign(formData, props.row)
	}
})

// 表单提交
const formRef = ref<FormInstance>()
const handleSubmit = (
	content: string | undefined,
	callback: (formData: Form.FormData) => void = () => { },
	custom: boolean = false
) => {
	// 自定义逻辑不执行表单验证
	if (custom) return callback(formData)
	// 常规逻辑
	switch (content) {
		case '重置':
			formRef.value!.resetFields()
			break
		default:
			// 其他
			formRef.value!.validate((isSuccess) => {
				if (isSuccess) {
					// console.log(this.formData);
					callback(formData)
				}
			})
			break
	}
}

// 收缩展开
const isExpand = ref(false)
</script>

<template>
	<el-form :inline="inline" :size="inline ? 'default' : 'large'" :label-width="labelWidth" :model="formData"
		ref="formRef">
		<!-- 动态生成选项 -->
		<template v-for="(item, itemI) in formItem" :key="itemI">
			<el-form-item :label="item.label" :label-width="item.labelWidth || ''" :prop="item.field" :rules="item.rules"
				v-show="!item.isExpand || isExpand">
				<!-- text -->
				<el-input v-if="item.type === 'text'" v-model="formData[item.field]" :placeholder="item.placeholder"
					:disabled="item.disabled">
					<template #prefix>
						<span :class="['iconfont', item.icon]"></span>
					</template>
				</el-input>
				<!-- text -->

				<!-- password -->
				<el-input v-if="item.type === 'password'" v-model="formData[item.field]" type="password"
					:placeholder="item.placeholder" :disabled="item.disabled">
					<template #prefix>
						<span :class="['iconfont', item.icon]"></span>
					</template>
				</el-input>
				<!-- password -->

				<!-- select -->
				<template v-if="item.type === 'select'">
					<el-select v-model="formData[item.field]" :placeholder="item.placeholder" :disabled="item.disabled">
						<el-option v-for="(tmp, tmpI) in item.options" :key="tmpI" :label="tmp.label" :value="tmp.value">
						</el-option>
					</el-select>
				</template>
				<!-- select -->

				<!-- image -->
				<template v-if="item.type === 'image'">
					<QfUpload />
				</template>
				<!-- image -->

				<!-- date -->
				<template v-if="item.type === 'date'">
					<el-date-picker v-model="formData[item.field]" type="datetimerange" range-separator="到"
						start-placeholder="开始日期" end-placeholder="结束日期" />
				</template>
				<!-- date -->
			</el-form-item>
		</template>
		<!-- 动态生成选项 -->

		<!-- 动态生成按钮 -->
		<el-form-item>
			<template v-for="(btn, btnI) in formBtn" :key="btnI">
				<el-button :type="btn.type" @click="handleSubmit(btn.content, btn.click, btn.custom)">
					<span :class="['iconfont', btn.icon]"></span>{{ btn.content }}
				</el-button>
			</template>

			<!-- 搜索控件展开收起 -->
			<el-button v-if="inline" link type="primary" @click="isExpand = !isExpand">
				{{ isExpand ? '收起' : '展开' }}
				<el-icon>
					<ArrowDown v-if="!isExpand" />
					<ArrowUp v-else />
				</el-icon>
			</el-button>
			<!-- 搜搜控件展开收起 -->
		</el-form-item>
		<!-- 动态生成按钮 -->
	</el-form>
</template>
