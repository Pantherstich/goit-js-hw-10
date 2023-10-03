import axios from 'axios';
const BASE_URL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common["x-api-key"] =
"api_key=live_t7uuItgU0Jexdm4scIfJANaKu1jiFduivrsmVzDyDvDiaiR5dgkr64I9FVL4UmKX";
const fetchBreeds = function () {}


const fetchCatByBreed = function (breedId) {}

export { fetchBreeds, fetchCatByBreed };