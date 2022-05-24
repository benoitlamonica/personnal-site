<template>
  <div class="py-4 px-4 bg-indigo-500">
    <h1 class="text-5xl sm:text-8xl uppercase font-extrabold bg-gradient-to-t to-indigo-100 from-indigo-200 text-transparent bg-clip-text text-center drop-shadow-xl">
      Out of School {{ currentActiveIndex + 1 }} / 3
    </h1>
    <div class="text-center text-indigo-800 font-extrabold">
      Benoit Lamonica - 2022
    </div>

    <div class="flex justify-between items-center m-auto fixed top-32 left-2 right-2 sm:inset-8 z-50">
      <button
        v-if="currentActiveIndex > 0"
        class="mr-auto p-4 bg-indigo-600 text-white font-extrabold rounded shadow-sm shadow-indigo-900"
        @click="direction = 'previous'; currentActiveIndex--"
      >
        Previous
      </button>
      <button
        v-if="currentActiveIndex < 2"
        class="ml-auto p-4 bg-indigo-600 text-white font-extrabold rounded shadow-sm shadow-indigo-900"
        @click="direction = 'next'; currentActiveIndex++"
      >
        Next
      </button>
    </div>
    <div class="relative overflow-hidden max-w-screen-xl mx-auto rounded-lg shadow-md shadow-indigo-800 mt-20">
      <transition-group
        enter-active-class="transition duration-1000"
        :enter-from-class="`transform ${direction === 'next' && 'translate-x-full'} ${direction === 'previous' && '-translate-x-full'}`"
        enter-to-class="transform translate-x-0"
        leave-active-class="transition duration-1000 absolute top-0 left-0 bottom-0 right-0 w-full"
        leave-from-class="transform translate-x-0"
        :leave-to-class="`transform ${direction === 'next' && '-translate-x-full'} ${direction === 'previous' && 'translate-x-full'}`"
      >
        <div
          v-for="{name, color, content}, i in oos"
          v-show="currentActiveIndex === i"
          :key="i"
          class="bg-indigo-50 max-w-screen-xl mx-auto p-8"
        >
          <OOS
            :content="content"
            :color="color"
            :title="name"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import oos from '@/data/oos'
import OOS from '@/components/OOS.vue'
import { ref } from '@vue/reactivity'

export default {
	components: { OOS },

	setup() {
		const currentActiveIndex = ref(0)
		const direction = ref('')

		return {
			direction,
			currentActiveIndex,
			oos
		}
	},
}
</script>