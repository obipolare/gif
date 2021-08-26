<template>
  <header
    class="
      m-6
      text-3xl text-center
      dark:text-[#cdd9e5]
      flex
      items-center
      justify-between
    "
  >
    <div></div>
    <h1>
      App De Gifs By
      <a
        class="
          transition
          duration-200
          hover:text-[#3c40c6]
          dark:hover:text-[#fcd34d]
        "
        target="_blank"
        href="https://t.me/obipolare"
        >Obipolare</a
      >
    </h1>

    <div>
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        @click="handleToggle"
      >
        <template v-if="toggleButton">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </template>
        <template v-else>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </template>
      </svg>
    </div>
  </header>
  <main>
    <GifForm :categories="categories" />
    <template v-for="c in categories" :key="c">
      <GifGet :gifName="c" />
    </template>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import GifForm from "./components/GifForm.vue";
import GifGet from "./components/GifGet.vue";

// local storage functions
const setLocalState = (state) => {
  return localStorage.setItem("state", JSON.stringify(state));
};
const setLocalTheme = (theme) => {
  return localStorage.setItem("theme", theme);
};

// Classes functions
const removeHTMLClass = (className) => {
  return document.documentElement.classList.remove(className);
};

// Toggle function
const toggleHTMLClass = (className) => {
  return document.documentElement.classList.toggle(className);
};
// array of categories
const categories = ref(["Scooby Doo"]);

// initial state
onMounted(() => {
  console.log(JSON.parse(localStorage.getItem("state")));
  if (JSON.parse(localStorage.getItem("state"))) {
    removeHTMLClass("dark");
    toggleHTMLClass("light");
    setLocalTheme("light");
    setLocalState(true);
    return;
  }
  setLocalTheme("dark");
  setLocalState(false);
});

const initialState = JSON.parse(localStorage.getItem("state"));
const toggleButton = ref(initialState);

const handleToggle = () => {
  toggleButton.value = !toggleButton.value;
  console.log(toggleButton.value);
  if (toggleButton.value) {
    removeHTMLClass("dark");

    setLocalState(true);
    setLocalTheme("light");

    toggleHTMLClass("light");
  } else {
    removeHTMLClass("light");

    setLocalState(false);
    setLocalTheme("dark");

    toggleHTMLClass("dark");
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
