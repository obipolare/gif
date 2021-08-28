const getGifs = async (gifName) => {
  const KEY_API = "INBYS428FGU4";
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
  // console.log(gifs);
  return gifs;
};

export default getGifs;
