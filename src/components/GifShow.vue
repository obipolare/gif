<template>
  <figure class="mx-auto">
    <img :src="gif.url" :alt="gif.title" :key="gif.id" />
  </figure>
</template>

<script setup>
const { gif } = defineProps({
  gif: Object,
});
// console.log(gif);
</script>

<style></style>
