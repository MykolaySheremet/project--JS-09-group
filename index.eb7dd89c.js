!function(){function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},n.parcelRequired7c6=i),i.register("iE7OH",(function(r,n){var t,o;e(r.exports,"register",(function(){return t}),(function(e){return t=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)i[r[n]]=e[r[n]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i.register("aNJCr",(function(r,n){var t;e(r.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var r=o[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=r),r}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.eb7dd89c.js","4Vgrb":"cinema320.b64bc574.jpg","1FRAt":"cinema480.889e22a6.jpg","SfqWN":"cinema768.e244c20f.jpg","19GlE":"cinema1280.76a9083d.jpg"}'));var c=document.querySelector(".footer__authorship"),u=document.querySelector(".modal__btn"),a=document.querySelector(".backdrop");document.querySelector(".modal");function l(){a.classList.add("is-hidden"),u.removeEventListener("click",l),a.removeEventListener("click",d)}function d(e){"backdrop"===e.target.className&&l()}c.addEventListener("click",(function(){a.classList.remove("is-hidden"),u.addEventListener("click",l),a.addEventListener("click",d)})),document.onkeydown=function(e){27==(e=e||window.event).keyCode&&l()};var s;s=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("4Vgrb");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("1FRAt");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("SfqWN");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("19GlE");var f=document.querySelector(".link-library"),g=document.querySelector(".films_list"),v=document.querySelector(".container-library");f.addEventListener("click",(function(e){0===b.length&&(g.innerHTML="",n='<img class="images-cinema" src="'.concat(r(s),'" alt="cinema">\n        <p class="p-library"> Sorry, but you haven\'t added anything to your library yet </p>\n        '),v.insertAdjacentHTML("beforeend",n));var n}));var b=[]}();
//# sourceMappingURL=index.eb7dd89c.js.map
