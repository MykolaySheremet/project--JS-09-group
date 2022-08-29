import { onLibraryClick } from './header';
import { renderWachedCards, renderQueueCards, checkActiveClassWachedBtn } from './libraries';
import { preloadering } from './preloader';
import { selectPage } from './pagination';


const paginationButtons = document.querySelector('.pagination-nav');

const watchedMoviesListButton = document.querySelector('.library-first');
const queueMoviesListButton = document.querySelector('.library-second');

watchedMoviesListButton.addEventListener('click', renderWachedCards)
queueMoviesListButton.addEventListener('click', renderQueueCards)

function openLibrary() {
  paginationButtons.removeEventListener('click', selectPage)
  paginationButtons.removeEventListener('click', {handleEvent: selectPage, mod:"queue"})
  paginationButtons.removeEventListener('click', {handleEvent: selectPage, mod:"keyword"})
  paginationButtons.addEventListener('click', {handleEvent: selectPage, mod:"watched"})
  preloadering();
  checkActiveClassWachedBtn();
  onLibraryClick();
  renderWachedCards();
}

export { openLibrary };



