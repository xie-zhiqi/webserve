import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAsideStore = defineStore('aside', () => {
	const isLeftIcon = ref<boolean>(true)

	return { isLeftIcon }
})
