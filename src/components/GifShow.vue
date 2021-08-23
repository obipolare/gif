<template>
  <figure>
    <img :src="gif.url" :alt="gif.title" :key="gif.id"/>
  </figure>
</template>

<script>
export default {
  props: {
    gif: Object,
  },
  setup(gif) {
    // console.log(gif);

    return {};
  },
};
</script>

<style>
</style>