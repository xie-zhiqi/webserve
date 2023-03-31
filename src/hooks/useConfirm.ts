import { ElMessageBox, ElMessage } from 'element-plus'
export const useConfirm = () => {
	ElMessageBox.confirm('删除操作无法改变，你确定此操作吗？', '提示框', {
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		type: 'warning'
	})
		.then(() => {
			ElMessage({
				type: 'success',
				message: '删除成功...请求接口'
			})
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: '已取消'
			})
		})
}
