// Fetch API: Se hace la petición HTTP y retorna un objeto con la data que se va a usar
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Af90QrP9tMFJJDy0cXdweqpMinRsgChG&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
