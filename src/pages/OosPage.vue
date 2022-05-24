<template>
  <div class="py-4 px-4">
    <h2 class="text-8xl uppercase font-extrabold bg-gradient-to-t to-indigo-500 from-indigo-400 text-transparent bg-clip-text text-center">
      Out of School
    </h2>
    <div class="text-center">
      Benoit Lamonica - 2022
    </div>
    <div class=" bg-indigo-50 rounded-lg shadow-md shadow-indigo-400 max-w-screen-xl mx-auto mt-20 p-8">
      <OOS
        v-for="{name, color, content}, i in oos"
        :key="i"
        :content="content"
        :color="color"
        :title="name"
      />
    </div>
  </div>
</template>

<script>
import oos from '@/data/oos'
import OOS from '@/components/OOS.vue'
export default {
	components: { OOS },
	setup() {
		return {
			oos
		}
	},
}
</script>