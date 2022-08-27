
// let addToWatchedButton = document.querySelector(".modal-window__button-watched")
// let addToQueueButton = document.querySelector(".modal-window__button-queue")

let watchItemsArray = []
let queueItemsArray = []
class localeStorageItem {
     constructor(poster_path,
          original_title,
          original_name,
          genres,
          release_date,
          first_air_date,
          vote_average,
          id) {
         this.poster_path = poster_path;
         this.original_title = original_title;
         this.original_name = original_name;
         this.genres = genres;
         this.release_date = release_date;
         this.first_air_date = first_air_date;
         this.vote_average = vote_average;
         this.id = id;
  }
}


function addToWatchedList({ poster_path,
    original_title,
    original_name,
    genres,
    release_date,
    first_air_date,
    vote_average,
    id }, addToWatchedButtonText, addToWatchedButton, checkedAddToWathedBtnClass) {

    
    watchItemsArray = localStorage.getItem("watchedFilms") ? JSON.parse(localStorage.getItem("watchedFilms")) : []
    localStorage.removeItem("watchedFilms")

    const watchedFilmsItem = new localeStorageItem(poster_path,
        original_title,
        original_name,
        genres,
        release_date,
        first_air_date,
        vote_average,
        id)
    
    if (watchItemsArray.length !== 0){
        if (checkLocaleStorage(watchItemsArray, id)) {
            addToWatchedButton.textContent = "add to wathed"
            addToWatchedButtonText = "add to wathed"
            addToWatchedButton.classList.remove("modal-window__button-watched-chacked")
        }else {
            watchItemsArray.push(watchedFilmsItem)
            addToWatchedButton.textContent = "remove from wathed"
            addToWatchedButtonText = "remove from wathed"
            addToWatchedButton.classList.add("modal-window__button-watched-chacked")
        }
    } else {
        watchItemsArray.push(watchedFilmsItem)

    }
    

    

    // if (watchItemsArray.includes(film)) {
    //     for (let i = 0; i < watchItemsArray.length; i += 1){
    //         if (watchItemsArray[i] === film) {
    //             watchItemsArray.splice(i, 1);
    //         }
    //     }
    //     addToWatchedButton.textContent = "add to wathed"
    //     addToWatchedButtonText = "add to wathed"
    //     addToWatchedButton.classList.remove("modal-window__button-watched-chacked")
    // }
    // else if (!watchItemsArray.includes(film)) {
    //     watchItemsArray.push(film)
    //     addToWatchedButton.textContent = "remove from wathed"
    //     addToWatchedButtonText = "remove from wathed"
    //     addToWatchedButton.classList.add("modal-window__button-watched-chacked")
    // }
    
    localStorage.setItem("watchedFilms", JSON.stringify(watchItemsArray))
    console.log(localStorage.getItem("watchedFilms"))
}


function checkLocaleStorage(array, id) {
    let flag = false
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].id === id) {
            console.log(array[i].id)
            array.splice(i, 1);
            return flag = true;
        } else {
            flag = false
        }
    }
    return flag
}
 
function addToQueueList({ poster_path,
    original_title,
    original_name,
    genres,
    release_date,
    first_air_date,
    vote_average,
    id },addToQueueButtonText,addToQueueButton,checkedAddToQueueBtnClass) {

    queueItemsArray = localStorage.getItem("queueFilms") ? JSON.parse(localStorage.getItem("queueFilms")) : []
    localStorage.removeItem("queueFilms")

    const queueFilmsItem = new localeStorageItem(poster_path,
        original_title,
        original_name,
        genres,
        release_date,
        first_air_date,
        vote_average,
        id)
    
    if (queueItemsArray.length !== 0){
        if (checkLocaleStorage(queueItemsArray, id)) {
            addToQueueButton.textContent = "add to queue"
            addToQueueButtonText = "add to queue"
            addToQueueButton.classList.remove("modal-window__button-queue-chacked")
        }else {
            queueItemsArray.push(queueFilmsItem)
            addToQueueButton.textContent = "remove from queue"
            addToQueueButtonText = "remove from queue"
            addToQueueButton.classList.add("modal-window__button-queue-chacked")
        }
    } else {
        queueItemsArray.push(queueFilmsItem)


    }
    
    // if (queueItemsArray.includes(film)) {
    //     for (let i = 0; i < queueItemsArray.length; i += 1){
    //         if (queueItemsArray[i] === film) {
    //             queueItemsArray.splice(i, 1);
    //         }
    //     }
    //     addToQueueButton.textContent = "add to queue"
    //     addToQueueButtonText = "add to queue"
    //     addToQueueButton.classList.remove("modal-window__button-queue-chacked")
    // }
    // else if (!queueItemsArray.includes(film)) {
    //     queueItemsArray.push(film)
    //     addToQueueButton.textContent = "remove from queue"
    //     addToQueueButtonText = "remove from queue"
    //     addToQueueButton.classList.add("modal-window__button-queue-chacked")
    // }
    
    localStorage.setItem("queueFilms", JSON.stringify(queueItemsArray))
    console.log(localStorage.getItem("queueFilms"))
}

export { addToWatchedList }
export { addToQueueList }