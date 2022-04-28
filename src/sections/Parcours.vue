<template>
  <section class="mt-16">
    <div>
      <h2 class="text-4xl uppercase font-extrabold bg-gradient-to-t to-indigo-500 from-indigo-400 text-transparent bg-clip-text">
        Parcours Professionel
      </h2>
    </div>
    <Grid class="mt-4">
      <div
        v-for="div in 6"
        :key="div"
        class=" bg-indigo-50 h-52 rounded-md"
      />
    </Grid>
  </section>
</template>

<script>
import Grid from '@/components/global/Grid.vue'
export default {
	components: { Grid },

}
</script>