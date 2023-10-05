import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
const refs = {
    breedSelect: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    catInfo: document.querySelector('.cat-info'),
    error: document.querySelector('.error'),
}
refs.loader.classList.add('hide');
refs.error.classList.add('hide');
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
console.log(arr);


function onSelect(event){
    const breedId = event.target.value;
    console.log(breedId);
        refs.breedSelect.classList.add('hide');
        refs.loader.classList.add('hide');
        refs.catInfo.classList.add('hide');
        fetchCatByBreed(breedId)
        .then(resp => {
            refs.breedSelect.classList.remove('hide');
            const data = resp.data[0].breeds[0];
console.log(data)
            return `<img src="${resp.data[0].url}" alt="" width=480 class="catImg">
            <h2>${data.name}</h2>
            <p>${data.description}</p>
            <p><b>Tempetament:</b> ${data.temperament}</p>`;
        }
        )
.then(resp => {
    refs.loader.classList.add('hide');
    refs.catInfo.classList.remove('hide');
      return (refs.catInfo.innerHTML = resp);
})
.catch(error => {
    refs.breedSelect.classList.remove('hide');
    refs.loader.classList.add('hide');
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
                });
                         };

