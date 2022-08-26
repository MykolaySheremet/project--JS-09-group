const HEADER = document.querySelector('.header');
const HEADERTHUMB = document.querySelector('.header-thumb');

const LIBRARY = document.querySelector('#library');
const HOME = document.querySelector('#home');

const INPCONTAINER = document.querySelector('.input-container');
const BTNCONTAINER = document.querySelector('.header-search__container');

import backImage from '../images/library-desktop.jpg';
import mainBackImage from '../images/header-bg.jpg';

LIBRARY.addEventListener('click', onLibraryClick);
HOME.addEventListener('click', onHomeClick);

function onLibraryClick() {
  INPCONTAINER.innerHTML = '';
  LIBRARY.classList.add('current');
  HOME.classList.remove('current');
  BTNCONTAINER.classList.remove('unvisible');
  HEADERTHUMB.classList.remove('hidden');
  HEADER.style.backgroundImage = `url(${backImage}`;
}

function onHomeClick() {
  INPCONTAINER.innerHTML = `<input
	class="search-input"
	type="text"
	placeholder="Movie search"
/>
<svg class="search-icon">
	<use href="./images/symbol-defs.svg#icon-search"></use>
</svg>`;
  HOME.classList.add('current');
  LIBRARY.classList.remove('current');
  BTNCONTAINER.classList.add('unvisible');
  HEADERTHUMB.classList.add('hidden');
  HEADER.style.backgroundImage = `url(${mainBackImage}`;
}
