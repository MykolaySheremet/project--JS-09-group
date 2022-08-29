import { getMovieByKeyword } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination, selectPageKeyWord, removeEventListenersOnPaginationButtons } from './pagination';
// import { onResponseCheck } from './oncheckresponse';

// const refs = {
//   searchValue: document.querySelector('.submit-search'),
//   galleryContainer: document.querySelector('.films_list'),
//   btnMyLibrary: document.querySelector('#library'),
//   btnHome: document.querySelector('#home'),
// };

// refs.searchValue.addEventListener('submit', onCustomSearch);
// refs.btnMyLibrary.addEventListener('click', onInputHide);
// refs.btnHome.addEventListener('click', onInputShow);

// function generalSettings() {
//   refs.searchValue.reset();
//   refs.galleryContainer.innerHTML = '';
// }

// let formValue = null;

// function onCustomSearch(event) {
//   event.preventDefault();
//   formValue = event.target.query.value.toLowerCase().trim();
//   if (!formValue) {
//     generalSettings();
//     console.log('no result');
//     return;
//   } else {
//     generalSettings();
//     getMovieByKeyword(formValue)
//       .then(onResponseCheck)
//       .then(film => {
//         renderButtonsOfPagination(film.data, 2);
//       })
//       .catch(error => error);
//   }
//   return;
// }

// function onInputHide(event) {
//   event.preventDefault();
//   refs.searchValue.classList.add('hidden');
// }

// function onInputShow(event) {
//   event.preventDefault;
//   refs.searchValue.classList.remove('hidden');
// }

// export { onCustomSearch, renderTrendingMovies };

// .then(film => {
//       renderTrendingMovies(film.data.results);
//       renderButtonsOfPagination(film.data, currentPage);
//     })
//     .catch(error => console.log(error));


const paginationButtons = document.querySelector('.pagination-nav');
let keyword = ""

function getInputValue({target}) {
  keyword = target.value
  getMovieByKeyword(keyword)
  .then(({data}) => {
    console.log(data)
    removeEventListenersOnPaginationButtons()
    paginationButtons.addEventListener('click', selectPageKeyWord);
    renderTrendingMovies(data.results);
    renderButtonsOfPagination(data.total_pages, 1);
  }).catch(Error=> console.log(Error))
}

export { keyword, getInputValue }