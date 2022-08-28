import { onLibraryClick } from './header';
import { renderWachedCards } from './libraries';
import { preloadering } from './preloader';

const watchedMoviesListButton = document.querySelector('.library-first');
const queueMoviesListButton = document.querySelector('.library-second');

// watchedMoviesListButton.addEventListener('click', openWatchedMoviesList)
// queueMoviesListButton.addEventListener('click', openQueueMoviesList)

function openLibrary() {
  preloadering();
  activebtnWached();
  onLibraryClick();
  renderWachedCards();
}

function activebtnWached() {
  if (!watchedMoviesListButton.classList.contains('modal-window__button-watched')) {
     watchedMoviesListButton.classList.add('modal-window__button-watched')
  }
}

export { openLibrary };
  
  

