import { getTrendingMovies } from './fetchFilms';
import { renderTrendingMovies } from './renderTrendingMovies';
import { renderButtonsOfPagination } from './pagination';
import { selectPage } from './pagination';
import { onHomeClick } from './header';
import { openModalWindow } from './modal'
import { openLibrary } from './open-library'
import { toggleTheme } from './light-theme-switcher';
import { openMovieDetails } from './open-movie-details'

// /Прелоадер - поки так не працює закомінитв
// import { openAndHiddenLoader } from './preloader';

// const divPreloader = document.querySelector('.preloader');
// window.addEventListener('load', openAndHiddenLoader);




const LIBRARY = document.querySelector('#library');
const HOME = document.querySelector('#home');
// const searchInput = document.querySelector('header-search');
const input = document.querySelector('#slider');
const paginationButtons = document.querySelector(".pagination-nav")
const gallery = document.querySelector('.films_list')
const openBtn = document.querySelector('.footer__authorship')

// searchInput.addEventListener('submit', getInputValue)
HOME.addEventListener('click', openHomePage);
LIBRARY.addEventListener('click', openLibrary);
input.addEventListener('click', toggleTheme);
gallery.addEventListener('click', openMovieDetails)
paginationButtons.addEventListener("click", selectPage)
openBtn.addEventListener('click', openModalWindow);

function openHomePage() {
    // openAndHiddenLoader()
    getTrendingMovies(1)
    .then(film => {
        renderTrendingMovies(film.data.results)
        renderButtonsOfPagination(film.data, 1)
        onHomeClick()
    })
    .catch(error => console.log(error))
}


export { openHomePage }