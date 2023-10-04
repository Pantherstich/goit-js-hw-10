import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
const refs = {
    breedSelect: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    catInfo: document.querySelector('.cat-info'),
    error: document.querySelector('.error'),
}
refs.breedSelect.addEventListener('change', onSelect);

let arr = [];
fetchBreeds()
.then(resp => {
    resp.map(item => {
        arr.push({text: item.name, value: item.id});
});
new SlimSelect(
    {
    select: '.breed-select',
    data: arr,
});
})
.catch(error => console.log(error));

