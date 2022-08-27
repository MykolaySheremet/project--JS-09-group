import { checkContains } from "./libraries"

const btnWached = document.querySelector('.library-first')
const btnQuue = document.querySelector('.library-second')

const localStorageWached = localStorage.getItem('watchedFilms')


btnWached.addEventListener('click', rendercards);



function rendercards() {
    checklocalstorage()


}


function checklocalstorage(localStorageWached) {
    console.log(localStorageWached)

    
}




console.log(localStorageWached);



let dataFilmsByWatched = [];
let dataFilmsByQueue = [];

// console.log(getFromStorage)


// const save = (queueFilms, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(queueFilms, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// console.log()




// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };


// const checkLocalStorege = () => {
//   if (getFromStorage('dataFilmsByWatched')) {
//     dataFilmsByWatched = getFromStorage('dataFilmsByWatched');
//     }
    


//   if (getFromStorage('dataFilmsByQueue')) {
//     dataFilmsByQueue = getFromStorage('dataFilmsByQueue');
//   }
// };