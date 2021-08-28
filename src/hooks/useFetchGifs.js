import { ref } from "vue";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (gifName) => {
  const gifs = ref([]);

  getGifs(gifName).then((data) => (gifs.value = data));

  return {
    gifs,
  };
};

export default useFetchGifs;
