import { getTrendingMovies } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination } from './pagination';
import { selectPage } from './pagination';
import { onHomeClick } from './header';
import { openModalWindow } from './modal';
import { openLibrary } from './open-library';
import { toggleTheme } from './light-theme-switcher';
import { openMovieDetails } from './open-movie-details';
import { onCustomSearch } from './search-by-keyword';

// /Прелоадер - поки так не працює закомінитв
// import { openAndHiddenLoader } from './preloader';

// const divPreloader = document.querySelector('.preloader');
// window.addEventListener('load', openAndHiddenLoader);

const libraryButtonRef = document.querySelector('#library');
const homeButtonRef = document.querySelector('#home');
// const searchInput = document.querySelector('header-search');
const input = document.querySelector('#slider');
const paginationButtons = document.querySelector('.pagination-nav');
const gallery = document.querySelector('.films_list');
const openBtn = document.querySelector('.footer__authorship');

// searchInput.addEventListener('submit', getInputValue)
homeButtonRef.addEventListener('click', openHomePage);
libraryButtonRef.addEventListener('click', openLibrary);
input.addEventListener('click', toggleTheme);
gallery.addEventListener('click', openMovieDetails);
openBtn.addEventListener('click', openModalWindow);

function openHomePage() {
  paginationButtons.removeEventListener('click', {handleEvent: selectPage, mod:"trend"})
  paginationButtons.removeEventListener('click', {handleEvent: selectPage, mod:"watched"})
  paginationButtons.removeEventListener('click', {handleEvent: selectPage, mod:"keyword"})
  paginationButtons.removeEventListener('click', {handleEvent: selectPage, mod:"queue"})
  paginationButtons.addEventListener('click', {handleEvent: selectPage, mod:"trend"});
  getTrendingMovies(1)
    .then(film => {
      renderTrendingMovies(film.data.results);
      renderButtonsOfPagination(film.data.total_pages, 1);
      onHomeClick();
    })
    .catch(error => console.log(error));
}

export { openHomePage };
