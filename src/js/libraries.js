import defaultPoster from '../img/cinema320.jpg';


const btnLibrary = document.querySelector('.link-library');
const listOfFilmMain = document.querySelector('.films_list');
const divConatiner = document.querySelector('.container-library');
console.log(btnLibrary);

console.log(defaultPoster);

btnLibrary.addEventListener('click', checkcontains);

let localstorag = [];


function checkcontains(e) {
    if (localstorag.length === 0) {
        listOfFilmMain.innerHTML = '';
        renderStartsShowpictureNoting();
}

    console.log(e);
}

console.log("artem")


function renderStartsShowpictureNoting() {
    const rezult =
        `
        <img class="images-cinema" src="${defaultPoster}" alt="cinema">
        <p class="p-library"> Sorry, but you haven't added anything to your library yet </p>
        
        `
    divConatiner.insertAdjacentHTML('beforeend', rezult)
}