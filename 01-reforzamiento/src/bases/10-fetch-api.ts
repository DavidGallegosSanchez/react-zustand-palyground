import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'CclFGuTqqtN0YAUF2bWtjTnEgIn17FMe';

const myRequest = fetch (
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;

  const container = document.querySelector('#app');
  if (container) {
    container.append(imgElement);
  }
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((err) => {
    console.error(err);
  });