import defaultPoster from '../img/cinema320.jpg';
import defaultPosterMob from '../img/cinema480.jpg';
import defaultPosterTab from '../img/cinema768.jpg';
import defaultPosterDesc from '../img/cinema1280.jpg';

const btnLibrary = document.querySelector('.link-library');
const listOfFilmMain = document.querySelector('.films_list');
const divConatiner = document.querySelector('.container-library');


btnLibrary.addEventListener('click', checkcontains);

let localstorag = [];


function checkcontains(e) {
    if (localstorag.length === 0) {
        listOfFilmMain.innerHTML = '';
        renderIfLibraryEmpty();
       }
}

function renderIfLibraryEmpty() {
    const rezult =
        `<img class="images-cinema" src="${defaultPoster}" alt="cinema">
        <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>
        `
        divConatiner.insertAdjacentHTML('beforeend', rezult)
}