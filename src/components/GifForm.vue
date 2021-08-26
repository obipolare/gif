<template>
  <form  @submit.prevent @submit="handleForm">
      <div class="relative px-4">
          <input type="text" class="flex-1 block w-full px-4 py-2 mx-auto text-base placeholder-gray-400 border-2 border-gray-300 rounded-lg shadow-sm appearance-none dark:border-transparent sm:w-2/5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-900" name="name" placeholder="Your Gif" v-model="category" >
    </div>
   </form>
</template>

<script setup>
import { ref } from 'vue';
    // Props
    const { categories } = defineProps({
        categories: Array
    })
    //initial state
    const category = ref('')
    // Submit of the data
    const handleForm = () => {
        // categories.value = [...categories.value, category.value]
        categories.unshift(category.value)
        console.log(categories);
        category.value = ''
    }
</script>

<style>

</style>