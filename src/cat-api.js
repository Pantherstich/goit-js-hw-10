import axios from "axios";

axios.defaults.headers.common['x-api-key'] =
'live_MN9dCa9r7YyQ9SLihHKudcLvvhgd5Egian7A56DzDhMWARWSEru5YQWL8bYTRWqk'

const BASE_URL = 'https://api.thecatapi.com/v1/';
const ENDPOINT = 'breeds'

const fetchBreeds = function () {
    return fetch(`${BASE_URL}${ENDPOINT}`).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
}

const fetchCatByBreed = function (breedId) {return axios.get(
    `${BASE_URL}images/search?breed_ids=${breedId}&has_breeds=1`
  );}

export { fetchBreeds, fetchCatByBreed };