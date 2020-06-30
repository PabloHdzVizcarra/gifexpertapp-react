


export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Y3sQL5q2C62I3f3yL7dCOJ8FcnmNv3H1`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })

  return gifs;

}