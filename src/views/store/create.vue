<!-- eslint-disable no-undef -->
<script setup lang='ts'>
const formItem: Form.Item[] = [
	// ...
	{
		field: "uname",

		label: "用户名",
		labelWidth: 80,
		rules: [
			{ required: true, message: "用户名必须", trigger: "blur" },
			{ min: 3, max: 15, message: "至少3~15个字符", trigger: "blur" },
		],

		type: "text",
		placeholder: "请输入用户名",
		icon: "el-icon-user-solid",
		disabled: false,
	},
	{
		field: "pwd",

		label: "密码",
		labelWidth: 80,
		rules: [
			{ required: true, message: "密码必须", trigger: "blur" },
			{ min: 6, max: 18, message: "至少6~18个字符", trigger: "blur" },
		],

		type: "password",
		placeholder: "请输入密码",
		icon: "el-icon-lock",
		disabled: false,
	},
	{
		field: "question",

		label: "密保问题",
		labelWidth: 80,
		rules: [{ required: true, message: "请选择密保问题", trigger: "change" }],

		type: "select",
		placeholder: "请输入密保问题",
		options: [
			{ label: "你大爷名字", value: "你大爷名字" },
			{ label: "您其中唯一讲师的名字", value: "您其中唯一讲师的名字" },
			{ label: "你初念的名字", value: "你初念的名字" },
		],
		disabled: false,
	},
	// ...
];

const formBtn: Form.Btn[] = [

	{
		icon: "el-icon-user-solid",
		content: '立即创建',
		type: 'primary',
		custom: false
	},
	{
		icon: "el-icon-user-solid",
		content: '重置',
		type: 'danger',
		custom: false
	}
]
</script>
<template>
	<qfCard className="store" btnTitle="返回" title="商品创建" btnUrl="/">
		<QfForm :labelWidth="80" :formItem="formItem" :formBtn="formBtn"></QfForm>

	</qfCard>
</template>
<style lang='scss' scoped>
:deep(.el-card__header) {
	display: flex !important;
	justify-content: space-between !important;
	align-items: center !important;
}

:deep(.el-input__wrapper) {
	width: 280px !important;
}
</style>