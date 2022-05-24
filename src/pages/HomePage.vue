<template>
  <Parallax class="fixed inset-0 z-0 flex justify-center items-center h-full bg-gradient-to-t from-indigo-50">
    <div class="flex flex-col justify-center items-center m-auto  h-full w-full">
      <h1 class="text-9xl uppercase bg-clip-text from-indigo-500 to-indigo-300 bg-gradient-to-b font-bold text-transparent text-center">
        Benoit Lamonica
      </h1>
      <small class="block text-xl font-light">Web Developper (Not Designer)</small>
    </div>
  </Parallax>
  <div class="relative mt-[100vh] bg-white z-10 px-8 xl:px-0">
    <ProgressBar />
    <div class="max-w-screen-xl py-16 mx-auto">
      <Me />
      <Parcours />
      <Competences />
      <Hobbies />
    </div>
  </div>
</template>

<script>
import Parallax from '@/components/global/Parallax.vue'
import Me from '@/sections/Me.vue'
import Competences from '@/sections/Competences.vue'
import Hobbies from '@/sections/Hobbies.vue'
import Parcours from '@/sections/Parcours.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default {
	components: { Parallax, Me, Hobbies, Competences, Parcours, ProgressBar },
}
</script>
