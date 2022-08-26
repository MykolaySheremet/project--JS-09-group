// const loader = document.querySelector('.preloader');


// $(window).on('load', hiddenloader);
const preloader = document.querySelector('.loader');
window.addEventListener('load', hiddenLoader);

// // console.log(preloader);


function hiddenLoader() {

    //    preloader.delay(1000).fadeOut(300);
    
    setTimeout(() => {
        preloader.classList.add('visually-hidden');
        // preloader.remove();
     }, 4000);
    
    preloader.classList.add('visually-hidden');
    
}


// function hiddenloader() {
//     loader.delay(1000).fadeOut(300);
// }

// $(window).on('load',function() {
//     $('.preloader').delay(1000).fadeOut(300);
// })


// function onLoad() {
//    mask.classList.add('hide-load');
//     setTimeout(() => {
//         mask.remove();
//     }, 400);
// }

// document.addEventListener('DOMContentLoaded', () => {
    
    
//     const prelod = document.querySelector('#preloader')
//     const perce = document.querySelector('#persents')
//     console.log(perce);
//     console.log(prelod);
//     const allImageLoad = document.querySelectorAll('img');
//     let i = 0;

//     perce.innerHTML = ((i * 100) / (allImageLoad.length)).toFixed(1);
    
//     console.log(allImageLoad);

//     allImageLoad.forEach(() => {
//         file.onload = () => {
//             console.log(file);
//             console.log(NodeList.lenght);
//         i++;
            
//             if (i === 23) {
//                 console.log('tru', i);
//                 prelod.classList.add('preloader--hide');
//                 perce.innerHTML = 100;
//                 console.log(perce.innerHTML);
//                 console.log(perce.innerHTML);
//             };

//             console.log(perce.innerHTML);
//         }
        
//     })
//     // console.log(allImageLoad);

// })