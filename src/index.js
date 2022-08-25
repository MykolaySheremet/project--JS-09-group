import { getTrendingMovies } from './js/fetchFilms'

const paginationButtons = document.querySelector(".pagination-buttons")
const prevButton = document.querySelector("#prev-page")
const firstPageButton = document.querySelector("#first-page")
const prevTwoPageButton = document.querySelector("#prev-two-page")
const prevOnePageButton = document.querySelector("#prev-one-page")
const currentPageButton = document.querySelector("#current-page")
const nextOnePageButton = document.querySelector("#next-one-page")
const nextTwoPageButton = document.querySelector("#next-two-page")
const lastPageButton = document.querySelector("#last-page")
const nextButton = document.querySelector("#next-page")
const dots = document.querySelector(".dots")
let currentPage = 1
const prevPage = currentPage - 1
const nextPage = currentPage + 1

function renderButtonsOfPagination (data) {
    let markup = ""
    switch (data.total_pages) {
        case "1":
            paginationButtons.style.display = "none"
            break
        case "2":
            markup = `<button type="button" id="first-page" class="current-page">1</button>
                <button type="button" id="next-one-page">2</button>`
            paginationButtons.innerHTML = markup
            break
        case "3":
            markup = `<button type="button" id="first-page" class="current-page">1</button>
                <button type="button" id="next-one-page">2</button>
                <button type="button" id="next-two-page">3</button>`
            paginationButtons.innerHTML = markup
            break
        case "4":
            markup = `<button type="button" id="first-page" class="current-page">1</button>
                <button type="button" id="next-one-page">2</button>
                <button type="button" id="next-two-page">3</button>
                <button type="button" id="last-page">4</button>`
            paginationButtons.innerHTML = markup
            break
        case "5":
            markup = `<button type="button" id="first-page" class="current-page">1</button>
                <button type="button" id="current-page">2</button>
                <button type="button" id="next-one-page">3</button>
                <button type="button" id="next-two-page">4</button>
                <button type="button" id="last-page">5</button>`
            paginationButtons.innerHTML = markup
            break
        case "6":
            markup = `<button type="button" id="first-page" class="current-page">1</button>
                <button type="button" id="prev-one-page">2</button>
                <button type="button" id="current-page">3</button>
                <button type="button" id="next-one-page">4</button>
                <button type="button" id="next-two-page">5</button>
                <button type="button" id="last-page">6</button>`
            paginationButtons.innerHTML = markup
            break
        case "7":
            markup = `<button type="button" id="first-page" class="current-page">1</button>
                <button type="button" id="prev-two-page">2</button>
                <button type="button" id="prev-one-page">3</button>
                <button type="button" id="current-page">4</button>
                <button type="button" id="next-one-page">5</button>
                <button type="button" id="next-two-page">6</button>
                <button type="button" id="last-page">7</button>`
            paginationButtons.innerHTML = markup
            break
        default: if (currentPage <= 4) {
            markup = `<button type="button" id="prev-page"><</button>
                <button type="button" id="first-page">1</button>
                <button type="button" id="prev-two-page">2</button>
                <button type="button" id="prev-one-page">3</button>
                <button type="button" id="current-page">4</button>
                <button type="button" id="next-one-page">5</button>
                <button type="button" id="next-two-page">6</button>
                <span class="dots">...</span>
                <button type="button" id="last-page">${data.total_pages}</button>
                <button type="button" id="next-page">></button>`
            paginationButtons.innerHTML = markup
        } else if (currentPage >= data.total_pages - 3) {
            markup = `<button type="button" id="prev-page"><</button>
                <button type="button" id="first-page">1</button>
                <span class="dots">...</span>
                <button type="button" id="prev-two-page">${data.total_pages - 5}</button>
                <button type="button" id="prev-one-page">${data.total_pages - 4}</button>
                <button type="button" id="current-page">${data.total_pages - 3}</button>
                <button type="button" id="next-one-page">${data.total_pages - 2}</button>
                <button type="button" id="next-two-page">${data.total_pages - 1}</button>
                <button type="button" id="last-page">${data.total_pages}</button>
                <button type="button" id="next-page">></button>`
            paginationButtons.innerHTML = markup
        } else {
            markup = `<button type="button" id="prev-page"><</button>
                <button type="button" id="first-page">1</button>
                <span class="dots">...</span>
                <button type="button" id="prev-two-page">${prevPage - 1}</button>
                <button type="button" id="prev-one-page">${prevPage}</button>
                <button type="button" id="current-page">${currentPage}</button>
                <button type="button" id="next-one-page">${nextPage}</button>
                <button type="button" id="next-two-page">${nextPage + 1}</button>
                <span class="dots">...</span>
                <button type="button" id="last-page">${data.total_pages}</button>
                <button type="button" id="next-page">></button>`
            paginationButtons.innerHTML = markup
        }
    }
}

getTrendingMovies(currentPage)
.then(({data}) => {
    renderButtonsOfPagination (data)
    console.log(data)})