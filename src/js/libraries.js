import defaultPoster from '../images/cinema320.jpg';
import defaultPosterMob from '../images/cinema480.jpg';
import defaultPosterTab from '../images/cinema768.jpg';
import defaultPosterDesc from '../images/cinema1280.jpg';


import { preloaderAgain } from '../js/preloader'

import { getMovieDetails } from "./fetchFilms"

// import { findGenresNames } from './renderTrendingMovies'
// import { renderTrendingMovies } from './renderTrendingMovies'

// console.log(renderTrendingMovies);

const divConatiner = document.querySelector('.container-library');

const btnWached = document.querySelector('.library-first')
const btnQueue = document.querySelector('.library-second')
const gallery = document.querySelector('.films_list')
const preloader = document.getElementById('page_preloader')




btnWached.addEventListener('click', renderWachedCards);
btnQueue.addEventListener('click', renderQueue);


function renderQueue() {

  let localStorageQueue = localStorage.getItem('queueFilms')

  if (localStorageQueue === null) {

    clearContainIfLibrary();
    renderIfLibraryEmpty();
    return;
  }

  if (localStorageQueue.length === 0) {

    clearContainIfLibrary();
    renderIfLibraryEmpty();
    return;
  }

  else if (localStorageQueue.length > 0) {

      if (preloader.classList.contains('done')) {
          preloader.classList.remove('done')

          setTimeout(function () {
              if (!preloader.classList.contains('done')) {
              preloader.classList.add('done')
              }
            }, 500);
          }
        
    gallery.innerHTML = '';
    
    const arrayLocalQueueFilm = JSON.parse(localStorageQueue);

    renderListWached(arrayLocalQueueFilm);
    
  }
}

function renderWachedCards() {

  let localStorageWached = localStorage.getItem('watchedFilms')

  if (localStorageWached === null) {
      
    checkContains()
    return;
  }

  if (localStorageWached.length === 0) {

    checkContains()
    return;
  }

  else if (localStorageWached.length > 0) {

    preloaderfunction()

    gallery.innerHTML = '';
    const arrayLocalWachFilm = JSON.parse(localStorageWached)
    
    renderListWached(arrayLocalWachFilm);
    
  }
}


function preloaderfunction() {

  if (preloader.classList.contains('done')) {
            preloader.classList.remove('done')

            setTimeout(function () {
                if (!preloader.classList.contains('done')) {
                preloader.classList.add('done')
                }
            }, 500);
  }
    
}




function renderListWached(arays) {
  for (const aray of arays) {
    
    const imageUrl = aray.poster_path
      ? `https://image.tmdb.org/t/p/w500/${aray.poster_path}`
      : `${aray.defaultPoster}`;
    const year = new Date(aray.release_date).getFullYear();
    const typeList = generateTypeMovies(aray.genres);
    const cardwachfil = `
                        <li class = "film_card" data-id="${aray.i}">
                        <div class="film_card__img">
                        <img class="film_card__img--block"
                        src=${imageUrl}
                        alt="${aray.original_title}">
                        </div>
                        <h3 class="film_card__title">${aray.original_title}</h3>
                        <p class="film_card__type">${typeList} | ${year}</p>
                        <p class="film_card__rating">Rating: ${aray.vote_average}</p>
                        </li>
                        `;
    gallery.insertAdjacentHTML('beforeend', cardwachfil);
  }
}


function generateTypeMovies(types) {
  const typeFilms = [];

  for (const type of types) {
    typeFilms.push(type.name);
  }

  const typeAray = typeFilms.slice(0, 2);

  if (typeFilms.length > 2 || typeFilms.length === 0) {
    typeAray.push('Others');
  }
  const typeFilmsStr = typeAray.join(', ');

  return typeAray;
}

function checkContains() {
  clearContainIfLibrary();
  renderIfLibraryEmpty();
}

function renderIfLibraryEmpty() {
  let rezult = '';

  if (window.matchMedia('(min-width: 1280px)').matches) {
    rezult = `<img class="images-cinema" src="${defaultPosterDesc}" alt="cinema">
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`;
    divConatiner.insertAdjacentHTML('beforeend', rezult);
    return;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    rezult = `<img class="images-cinema" src="${defaultPosterTab}" alt="cinema">
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`;
    divConatiner.insertAdjacentHTML('beforeend', rezult);
    return;
  } else if (window.matchMedia('(min-width: 480px)').matches) {
    rezult = `<img class="images-cinema" src="${defaultPosterMob}" alt="cinema">
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`;
    divConatiner.insertAdjacentHTML('beforeend', rezult);
    return;
  } else if (window.matchMedia('(max-width: 479px)').matches) {
    rezult = `<img class="images-cinema" src="${defaultPoster}" alt="cinema">
            <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>`;
    divConatiner.insertAdjacentHTML('beforeend', rezult);
    return;
  }
}

function clearContainIfLibrary() {
  divConatiner.innerHTML = '';
}

export { checkContains };
