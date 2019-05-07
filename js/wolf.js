

function debounce(func, wait = 20, immediate = true){
  var timeout;
  return function(){
    var context = this, args = arguments;
    var later = function(){
      timeout = null; 
      if(!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context,args)
  }
}

const homeDiv = document.querySelector('.bg-overlay');
const navBrand = document.querySelector('.nav-name');
const navToggler = document.querySelector('.navbar-toggler')
// console.dir(homeDiv)
function checkSlide(e){
  // offset of scroll from top of window
  const windowTopAt = (window.scrollY);
  // console.log(windowTopAt)
  // height from top to bottom
  const homeDivBottom = homeDiv.offsetTop + homeDiv.offsetHeight;
  // console.log(homeDivBottom)
  if(windowTopAt > homeDivBottom){
    navToggler.classList.add('active')
    navBrand.classList.add('active');
  }else {
    navBrand.classList.remove('active')
    navToggler.classList.remove('active')
  }
}

window.addEventListener('scroll', debounce(checkSlide))