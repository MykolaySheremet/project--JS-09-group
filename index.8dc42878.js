!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},e={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in e){var n=e[t];delete e[t];var r={id:t,exports:{}};return a[t]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,a){e[t]=a},t.parcelRequired7c6=n),n("5qV5q"),n("dIxxU");var r=n("7qhbT");console.log(r.getMovieDetails);var i=document.querySelector(".library-first"),l=document.querySelector(".library-second"),o=document.querySelector(".films_list");i.addEventListener("click",(function(){var t=localStorage.getItem("watchedFilms");if(t.length>0){o.innerHTML="";var a=JSON.parse(t);console.log(a);var e=!0,n=!1,i=void 0;try{for(var l,c=function(t,a){var e=a.value;(0,r.getMovieDetails)(e).then((function(t){var a=t.data.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.data.poster_path):"".concat(t.data.defaultPoster),n='\n            <li class = "film_card" data-id="'.concat(e,'">\n           <div class="film_card__img">\n           <img class="film_card__img--block"\n           src=').concat(a,'\n           alt="').concat(t.data.original_title,'">\n           </div>\n           <h3 class="film_card__title">').concat(t.data.original_title,'</h3>\n           <p class="film_card__type">Привет</p>\n           <p class="film_card__rating">Rating: ').concat(t.data.vote_average,"</p>\n           </li>\n           ");o.insertAdjacentHTML("beforeend",n)}),(function(t){return console.log(t)}))},d=a[Symbol.iterator]();!(e=(l=d.next()).done);e=!0)c(0,l)}catch(t){n=!0,i=t}finally{try{e||null==d.return||d.return()}finally{if(n)throw i}}}})),l.addEventListener("click",(function(){var t=localStorage.getItem("queueFilms");if(t.length>0){o.innerHTML="";var a=JSON.parse(t);console.log(a);var e=!0,n=!1,i=void 0;try{for(var l,c=function(t,a){var e=a.value;(0,r.getMovieDetails)(e).then((function(t){var a=t.data.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.data.poster_path):"".concat(t.data.defaultPoster),n='\n            <li class = "film_card" data-id="'.concat(e,'">\n           <div class="film_card__img">\n           <img class="film_card__img--block"\n           src=').concat(a,'\n           alt="').concat(t.data.original_title,'">\n           </div>\n           <h3 class="film_card__title">').concat(t.data.original_title,'</h3>\n           <p class="film_card__type">Привет</p>\n           <p class="film_card__rating">Rating: ').concat(t.data.vote_average,"</p>\n           </li>\n           ");o.insertAdjacentHTML("beforeend",n)}),(function(t){return console.log(t)}))},d=a[Symbol.iterator]();!(e=(l=d.next()).done);e=!0)c(0,l)}catch(t){n=!0,i=t}finally{try{e||null==d.return||d.return()}finally{if(n)throw i}}}}))}();
//# sourceMappingURL=index.8dc42878.js.map
