<template>
  <Parallax class="fixed inset-0 z-0 flex justify-center items-center h-full bg-gradient-to-t from-indigo-50">
    <div class="flex flex-col justify-center items-center m-auto  h-full w-full">
      <h1 class="text-6xl uppercase bg-clip-text from-indigo-500 to-indigo-300 bg-gradient-to-b font-bold text-transparent text-center">
        Benoit Lamonica
      </h1>
      <small class="block text-xl font-light">Web Developper (Not Designer)</small>
    </div>
  </Parallax>
  <div class="relative mt-[100vh] bg-white z-10 border-t-8 border-indigo-400 px-8 lg:px-0">
    <div class="max-w-screen-lg py-16 mx-auto">
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
      <section class="mt-16">
        <div>
          <h2 class="text-4xl uppercase font-extrabold bg-gradient-to-t to-indigo-500 from-indigo-400 text-transparent bg-clip-text">
            Compétences
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
      <section class="mt-16">
        <div>
          <h2 class="text-4xl uppercase font-extrabold bg-gradient-to-t to-indigo-500 from-indigo-400 text-transparent bg-clip-text">
            Hobbies
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
    </div>
  </div>
</template>

<script>
import Grid from '@/components/global/Grid.vue'
import Parallax from '@/components/global/Parallax.vue'

export default {
	components: { Grid, Parallax },

}
</script>
