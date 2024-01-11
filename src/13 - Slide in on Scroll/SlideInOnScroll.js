function debounce(func, wait = 35, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const slideInImages = document.querySelectorAll('img');
slideInImages.forEach(img=>img.style.transitionDuration="1000ms"
)

function scrollHandler(e) {
  const scrollPosition = window.scrollY + window.innerHeight;
  slideInImages.forEach((img) => {
    
   
    const imgBottomPosition = img.offsetTop + img.height;
    const isHalfShown = scrollPosition > img.offsetTop;
    const isNotScrolled = window.scrollY < imgBottomPosition;
    if (isHalfShown && isNotScrolled) {
      img.style.transform = 'translateX(0)';
      img.style.scale = '1';
      img.style.opacity = '1';
    } else {
      if (img.classList.contains('align-right')) {
        img.style.transform = 'translateX(50%)';
        img.style.scale = '0.1';
        img.style.opacity = '0';
      } else if (img.classList.contains('align-left')) {
        img.style.transform = 'translateX(-200%)';
        img.style.scale = '0.1';
        img.style.opacity = '0';
      }
    }
  });
}

window.addEventListener('scroll', debounce(scrollHandler));
