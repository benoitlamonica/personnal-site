<template>
  <div
    class="mb-4 font-rale"
  >
    <h2 class="text-2xl sm:text-5xl mb-8 font-extrabold bg-gradient-to-t to-indigo-800 from-indigo-500 text-transparent bg-clip-text">
      {{ title }}
    </h2>
    <component
      :is="video ? 'div' : type"
      v-for="{type, text, video}, i in content"
      :key="i"
      :class="{
        'mt-10 text-xl sm:text-3xl font-extrabold bg-gradient-to-t to-indigo-800 from-indigo-500 text-transparent bg-clip-text': type === 'h3',
        'mt-2 text-lg text-black font-light': type === 'p',
      }"
      v-bind="{src}"
    >
      {{ video ? null : text }}

      <iframe
        v-if="video"
        :src="`https://www.youtube.com/embed/${video}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class=" w-full h-96"
      />
    </component>
  </div>
</template>

<script>
export default {
	props: {
		title: String,
		color: String,
		content: Array
	},
}
</script>