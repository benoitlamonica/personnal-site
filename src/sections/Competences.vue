<template>
  <section class="mt-32">
    <div>
      <h2 class="text-4xl uppercase font-extrabold bg-gradient-to-t to-indigo-500 from-indigo-400 text-transparent bg-clip-text">
        Compétences
      </h2>
    </div>
    <Grid class="mt-4 scrollTriggerComp">
      <div
        v-for="{level, icon, name, color},i in data"
        :key="i"
        class="flex flex-col gsap-comp bg-indigo-50 rounded-md p-8 shadow-md shadow-indigo-200"
      >
        <Icon
          :name="icon"
          class="block mx-auto mb-8 w-32 h-32"
          :style="{color}"
        />
        <small class="text-center font-bold">{{ name }}</small>
        <div class="flex mx-auto border-2 border-indigo-200 rounded-md overflow-hidden">
          <div
            v-for="div in 5"
            :key="div"
            class=" w-10 h-5"
            :style="{backgroundColor: div <= level ? color : 'transparent'}"
          />
        </div>
      </div>
    </Grid>
  </section>
</template>

<script>
import Grid from '@/components/global/Grid.vue'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import data from '@/data/competences'
import Icon from '@/components/global/Icon.vue'
export default {
	components: { Grid, Icon },
	setup() {
		return {
			data
		}
	},
	mounted() {
		gsap.registerPlugin(ScrollTrigger)
		let exp = gsap.timeline().from('.gsap-comp', {opacity: 0, duration: 1, scale: 0.6, ease: 'power4', stagger: 0.25})
		ScrollTrigger.create({
			trigger:'.scrollTriggerComp',
			start:'top 90%',
			toggleActions:'play none none reverse',
			animation: exp
		})
	}

}
</script>