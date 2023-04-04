import { ElMessageBox, ElMessage } from 'element-plus'
export const useConfirm = (row: object, deleteUserApi: Function, tableDate: Function) => {
	ElMessageBox.confirm('删除操作无法改变，你确定此操作吗？', '提示框', {
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		type: 'warning'
	})
		.then(async () => {
			// ElMessage({
			// 	type: 'success',
			// 	message: '删除成功...请求接口'
			// })
			const { state, msg } = await deleteUserApi(row)
			if (state === 200) {
				tableDate()
			} else {
				ElMessage.error(msg)
			}
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: '已取消'
			})
		})
}
