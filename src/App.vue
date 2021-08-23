<template>
  <header class="m-6 text-3xl text-center text-[#cdd9e5]">App De Gifs By <a class="transition duration-200 hover:text-[#fcd34d] " target="_blank" href="https://t.me/obipolare">Obipolare</a>
  </header>
    <GifForm :categories="categories"/>
      <template v-for="c in categories" :key="c">
        <GifGet :gifName="c" /> 
      </template>
</template>

<script >
import { ref } from 'vue'
import GifForm from './components/GifForm.vue'
import GifGet from './components/GifGet.vue'


export default {
  components: {
    GifForm,
    GifGet,
  },
  setup(){

    const categories = ref(["Schooby Doo"])

    return { 
      categories
    }
   
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
