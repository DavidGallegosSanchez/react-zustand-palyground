import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'CclFGuTqqtN0YAUF2bWtjTnEgIn17FMe';

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;

  const container = document.querySelector('#app');
  if (container) {
    container.append(imgElement);
  }
};

const getRandomGifUrl = async () => {
    
    const response = await fetch (
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    );

    const {data}: GiphyRandomResponse = await response.json();

    return data.images.original.url;
}

getRandomGifUrl().then(
    url => createImageInsideDOM(url)
);
