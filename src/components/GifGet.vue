<template>
  <h2 class="w-11/12 py-4 mx-auto text-2xl capitalize">{{ gifName }}</h2>
  <section
    class="grid grid-cols-1 gap-2 m-2  sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:mx-24 sm:my-8"
  >
    <template v-for="gif in gifs" :key="gif.title">
      <GifShow :gif="gif" />
    </template>
  </section>
</template>

<script setup>
import GifShow from "./GifShow.vue";
import useFetchGifs from "../hooks/useFetchGifs";

const { gifName } = defineProps({
  gifName: String,
});

const { gifs } = useFetchGifs(gifName);
// console.log(gifs);
</script>

<style></style>
