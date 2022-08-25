// import { getMovieByKeyword } from './fetchFilms';

const searchForm = document.querySelector('header-search');
searchForm.addEventListener('submit', onSearchByKeyword);

function onSearchByKeyword(event) {
  event.preventDeafault();
}
