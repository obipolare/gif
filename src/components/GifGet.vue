<template>
  <h2 class="text-2xl w-11/12 mx-auto capitalize">{{ gifName }}</h2>
  <section class="grid grid-cols-1 gap-2 m-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:mx-24 sm:my-8 ">
    <template v-for="gif in gifs" :key="gif.title">
        <GifShow :gif="gif" />
    </template>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import GifShow from "./GifShow.vue";
export default {
  props: {
    gifName: String,
  },
  components: {
    GifShow,
  },
  setup({ gifName }) {
    const KEY_API = "INBYS428FGU4";

    const gifs = ref([]);

    const getGifs = async (gifName) => {
      const url = `https://g.tenor.com/v1/search?key=${KEY_API}&limit=9&q=${encodeURI(
        gifName
      )}`;
      const res = await fetch(url);
      const { results } = await res.json();

      const gifs = results.map((gif) => {
        return {
          title: gif.title,
          url: gif.media[0].gif.url,
          id: gif.id,
        };
      });
      console.log(gifs);
      return gifs;
    }
    console.log(gifName);
        getGifs(gifName).then(data => gifs.value = data)

    return { 
        gifs,
        getGifs
    }

  },
};
</script>

<style></style>
