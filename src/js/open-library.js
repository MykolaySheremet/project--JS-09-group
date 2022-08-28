import { onLibraryClick } from './header';
import { renderWachedCards, checkActiveClassWachedBtn } from './libraries';
import { preloadering } from './preloader';


// const watchedMoviesListButton = document.querySelector('.library-first');
// const queueMoviesListButton = document.querySelector('.library-second');

// watchedMoviesListButton.addEventListener('click', openWatchedMoviesList)
// queueMoviesListButton.addEventListener('click', openQueueMoviesList)

function openLibrary() {
  preloadering();
  checkActiveClassWachedBtn();
  onLibraryClick();
  renderWachedCards();
  
}

export { openLibrary };



