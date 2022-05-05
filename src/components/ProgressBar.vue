<template>
  <div class="sticky top-0 z-40 h-2 bg-indigo-200">
    <div
      class="bg-indigo-500 h-full"
      :style="{width: percent}"
    />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
	setup() {
		const percent = ref('0%')
		const scrollListener = () => {
			console.log(window.scrollY)
			console.log(document.body.scrollHeight)

			percent.value = `${(window.scrollY * 100) / document.body.scrollHeight}%`
		}

		return {
			scrollListener,
			percent
		}
	},

	mounted() {
		window.addEventListener('scroll', this.scrollListener)
	},

	unmounted() {
		window.removeEventListener('scroll', this.scrollListener)
	}
}
</script>