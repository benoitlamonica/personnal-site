<template>
  <div :style="{top}">
    <slot />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
	setup() {
		const top = ref(0)
		const speed = 3
		const scrollListener = () => {
			top.value = -window.scrollY / speed + 'px'
		}

		return {
			scrollListener,
			top
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