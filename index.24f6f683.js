var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=l),l("94oWx"),l("2shzp");var i=l("7lzvS");console.log(i.getMovieDetails);const n=document.querySelector(".library-first"),o=document.querySelector(".library-second"),r=document.querySelector(".films_list");n.addEventListener("click",(function(){let e=localStorage.getItem("watchedFilms");if(e.length>0){r.innerHTML="";const t=JSON.parse(e);console.log(t);for(const e of t){(0,i.getMovieDetails)(e).then((t=>{const a=t.data.poster_path?`https://image.tmdb.org/t/p/w500/${t.data.poster_path}`:`${t.data.defaultPoster}`,l=`\n            <li class = "film_card" data-id="${e}">\n           <div class="film_card__img">\n           <img class="film_card__img--block"\n           src=${a}\n           alt="${t.data.original_title}">\n           </div>\n           <h3 class="film_card__title">${t.data.original_title}</h3>\n           <p class="film_card__type">Привет</p>\n           <p class="film_card__rating">Rating: ${t.data.vote_average}</p>\n           </li>\n           `;r.insertAdjacentHTML("beforeend",l)}),(e=>console.log(e)))}}})),o.addEventListener("click",(function(){let e=localStorage.getItem("queueFilms");if(e.length>0){r.innerHTML="";const t=JSON.parse(e);console.log(t);for(const e of t){(0,i.getMovieDetails)(e).then((t=>{const a=t.data.poster_path?`https://image.tmdb.org/t/p/w500/${t.data.poster_path}`:`${t.data.defaultPoster}`,l=`\n            <li class = "film_card" data-id="${e}">\n           <div class="film_card__img">\n           <img class="film_card__img--block"\n           src=${a}\n           alt="${t.data.original_title}">\n           </div>\n           <h3 class="film_card__title">${t.data.original_title}</h3>\n           <p class="film_card__type">Привет</p>\n           <p class="film_card__rating">Rating: ${t.data.vote_average}</p>\n           </li>\n           `;r.insertAdjacentHTML("beforeend",l)}),(e=>console.log(e)))}}}));
//# sourceMappingURL=index.24f6f683.js.map