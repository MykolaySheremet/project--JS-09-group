const HEADER = document.querySelector('.header');
const HEADERTHUMB = document.querySelector('.header-thumb');

const LIBRARY = document.querySelector('#library');
const HOME = document.querySelector('#home');

const INPCONTAINER = document.querySelector('.input-container');
const BTNCONTAINER = document.querySelector('.header-search__container');

// LIBRARY.addEventListener('click', onLibraryClick);
// HOME.addEventListener('click', onHomeClick);

import backImage from '../images/library-desktop.jpg';
import backImageTablet from '../images/library-tablet.jpg';
import backImagePhone from '../images/library-phone.jpg';

import mainBackImage from '../images/header-bg.jpg';

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
<svg class="search-icon" id="icon-search" viewBox="0 0 32 32">
<path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667z"></path>
<path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M28 28.001l-5.8-5.8"></path>
</svg>`;
  HOME.classList.add('current');
  LIBRARY.classList.remove('current');
  BTNCONTAINER.classList.add('unvisible');
  HEADERTHUMB.classList.add('hidden');
  HEADER.style.backgroundImage = `url(${mainBackImage}`;
}

if (window.matchMedia('(min-width: 1280px)').matches) {
  HEADER.style.backgroundImage = `url(${backImageTablet}`;
  return;
}

if (window.matchMedia('(min-width: 768px)').matches) {
  HEADER.style.backgroundImage = `url(${backImagePhone}`;
  return;
}

if (window.matchMedia('(min-width: 0px)').matches) {
  HEADER.style.backgroundImage = `url(${backImage}`;
  return;
}

export { onLibraryClick };
export { onHomeClick };
