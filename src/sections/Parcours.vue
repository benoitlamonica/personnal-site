<template>
  <section class="mt-32">
    <div>
      <h2 class="text-4xl uppercase font-extrabold bg-gradient-to-t to-indigo-500 from-indigo-400 text-transparent bg-clip-text">
        Parcours Professionel
      </h2>
    </div>
    <Grid class="scrollTriggerParcour mt-4">
      <div
        v-for="{name, position, startDate, endDate, url},i in data"
        :key="i"
        class="gsap-p bg-indigo-50 rounded-md p-8 shadow-md shadow-indigo-200"
      >
        <h2 class="text-3xl mb-4 font-extrabold bg-gradient-to-b from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
          {{ name }}
        </h2>
        <div><span class="font-medium text-indigo-600">Poste :</span> {{ position }}</div>
        <div><span class="font-medium text-indigo-600">Date de début :</span> {{ formatDate(startDate) }}</div>
        <div v-if="endDate">
          <span class="font-medium text-indigo-600">Date de fin :</span> {{ formatDate(endDate) }}
        </div>
        <div
          v-else
          class="font-bold text-indigo-600"
        >
          En poste
        </div>
        <a
          v-if="url"
          target="_blank"
          :href="url"
          class="font-extrabold mt-4 block"
        >Linkedin</a>
      </div>
    </Grid>
  </section>
</template>

<script>
import Grid from '@/components/global/Grid.vue'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import data from '@/data/parcour-pro'
import {formatDate} from '@/composables/date'
export default {
	components: { Grid },
	setup() {
		return {
			data,
			formatDate
		}
	},
	mounted() {
		gsap.registerPlugin(ScrollTrigger)
		let exp = gsap.timeline().from('.gsap-p', {opacity: 0, duration: 1, scale: 0.6, ease: 'power4', stagger: 0.25})
		ScrollTrigger.create({
			trigger:'.scrollTriggerParcour',
			start:'top 90%',
			toggleActions:'play none none reverse',
			animation: exp
		})
	}

}
</script>