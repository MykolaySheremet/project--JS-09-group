import {clearDefaultLibrary} from './libraries'
const headerRef = document.querySelector('.header');
const headerThumb = document.querySelector('.header-thumb');
const headerContainer = document.querySelector('.header-container');
const headerMenu = document.querySelector('.header-menu');
const headerMenues = document.querySelector('.container-navigation');

// console.log(headerMenu)
// console.log(headerRef)
// console.log(headerContainer)


const libraryBtn = document.querySelector('#library');
const homeBtn = document.querySelector('#home');
const inputContainer = document.querySelector('.header-search');
const btnsContainer = document.querySelector('.header-search__container');

const errorText = document.querySelector('.error-paragraph');
const successText = document.querySelector('.success-paragraph');

function onLibraryClick() {
  inputContainer.innerHTML = '';

  // закомитил
  //  if (window.matchMedia('(max-width: 479px)').matches) {
  //   headerRef.style.backgroundImage = `url(${backImagePhone}`;
  //   return;
  // }

  // if (window.matchMedia('(min-width: 768px)').matches) {
  //   headerRef.style.backgroundImage = `url(${backImageTablet}`;
  //   return;
  // }

  // if (window.matchMedia('(min-width: 1280px)').matches) {
  //   headerRef.style.backgroundImage = `url(${backImage}`;
  //   return;
  // }

  // headerThumb.classList.remove('hidden');
  headerMenues.classList.remove('header-menu')
  headerRef.classList.add('headerforlibrary');
  headerMenues.classList.add('header-menu_library');
  libraryBtn.classList.add('current');
  homeBtn.classList.remove('current');
  btnsContainer.classList.remove('unvisible');

  // errorText.classList.add('hide-error');
  // successText.classList.remove('hide-success');

  // headerContainer.classList.remove('header-container');
  // headerContainer.classList.add('header-container_library');
  headerMenu.classList.remove('header-menu');
  

}

function onHomeClick() {
  clearDefaultLibrary();

  headerRef.classList.remove('headerforlibrary');
  // headerRef.style.backgroundImage = '';

  inputContainer.innerHTML = `<input
  name="querySearch"
  class="search-input"
  type="text"
  placeholder="Movie search"
/>
<svg class="search-icon" id="icon-search" viewBox="0 0 32 32">
<path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667z"></path>
<path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M28 28.001l-5.8-5.8"></path>
</svg>`;
  homeBtn.classList.add('current');
  libraryBtn.classList.remove('current');
  btnsContainer.classList.add('unvisible');
  // headerThumb.classList.add('hidden');
  // headerContainer.classList.remove('header-container_library');
  // headerContainer.classList.add('header-container');
  headerMenu.classList.remove('header-menu_library');
  headerMenu.classList.add('header-menu');
  
  //headerRef.style.backgroundImage = `url(${mainBackImage}`;
}

export { onLibraryClick, onHomeClick };
