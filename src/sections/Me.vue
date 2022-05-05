<template>
  <section class="mt-16">
    <div>
      <h2 class="text-4xl uppercase font-extrabold bg-gradient-to-t to-indigo-500 from-indigo-400 text-transparent bg-clip-text">
        Qui suis-je ?
      </h2>
    </div>
    <div
      ref="gsap"
      class="flex gap-8 font-light mt-4 flex-wrap md:flex-nowrap"
    >
      <div
        class="min-w-[300px] w-1/2 grow rounded-lg shadow-md shadow-indigo-300 overflow-hidden"
      >
        <img
          :src="data.img"
          alt="Imade de moi même"
          class="h-full w-full object-cover"
        >
      </div>
      <div
        class="w-1/2 grow text-lg"
      >
        <p>
          {{ data.textFR }}
        </p>
        <p class="mt-8">
          {{ data.textENG }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import data from '@/data/about-me'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
export default {
	setup() {
		return {
			data
		}
	},

	mounted() {
		gsap.registerPlugin(ScrollTrigger)
		gsap.from(this.$refs.gsap, {opacity: 0, scale: 0.95, duration: 2, y: 10, scrollTrigger: {
			trigger: this.$refs.gsap,
			toggleActions:'play none none reverse',
		}})
	}
}
</script>