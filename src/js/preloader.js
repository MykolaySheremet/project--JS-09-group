
preloadering()

function preloadering() {
  document.body.onload = function () {

    console.log(document.body.onload);
    console.log('працював загрузчик')
  
  setTimeout(function () {
    const preloader = document.getElementById('page_preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
    
  }, 400);
}
}

export { preloadering }

