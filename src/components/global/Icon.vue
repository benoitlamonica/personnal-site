<template>
  <div
    v-html="svg"
  />
</template>

<script>
import { computed } from '@vue/runtime-core'
import icons from '@/assets/icons'
export default {
	props: {
		name: String
	},

	setup(props) {
		const svg = computed(() => {
			return icons.find(({name: iconName}) => iconName === props.name).content
		})

		return {
			svg
		}
	}
}
</script>