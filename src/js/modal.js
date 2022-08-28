// const openBtn = document.querySelector('.footer__authorship')
const closeBtn = document.querySelector('.modal__btn')
const backdrop = document.querySelector('.backdrop')
const modalWindow = document.querySelector('.modal')
let scrollDelay = null

// openBtn.addEventListener('click', openModalWindow);

function openModalWindow() {
    backdrop.classList.remove('is-hidden');
    closeBtn.addEventListener('click', closeModalWindow);
    backdrop.addEventListener('click', closeToBackdrop);
    pageScroll()
}

function closeModalWindow() {
    backdrop.classList.add('is-hidden');
    clearTimeout(scrollDelay)
    closeBtn.removeEventListener('click', closeModalWindow);
    backdrop.removeEventListener('click', closeToBackdrop);
}

function closeToBackdrop(e) {
    let name = e.target.className;
    if (name === 'backdrop') {
      closeModalWindow();
    }
  }

document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closeModalWindow()
}
});

document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closeFilmModalWindow()
}
});

function pageScroll() {
  modalWindow.scrollBy(0,1);
  scrollDelay = setTimeout(pageScroll,10);
}

export { openModalWindow }
