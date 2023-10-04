import axios from "axios";

const API_KEY = "live_MN9dCa9r7YyQ9SLihHKudcLvvhgd5Egian7A56DzDhMWARWSEru5YQWL8bYTRWqk";

axios.defaults.headers.common['x-api-key'] = API_KEY;

const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT = 'breeds';

const fetchBreeds = function () {
    return fetch(`${BASE_URL}/${END_POINT}`).then((resp) => {
        if (!resp.ok) {
          throw new Error(`Вимушена помилка статусу: ${resp.status} | Причина: ${resp.statusText}`);
        }
        return response.json();
      });
}

const fetchCatByBreed = function (breedId) {return axios.get(
    `${BASE_URL}/images/search?breed_ids=${breedId}&has_breeds=1`
  );}

export { fetchBreeds, fetchCatByBreed };