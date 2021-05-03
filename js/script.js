function searchBar(){
    const bars=document.querySelector('.search-bar')
    const icon=document.querySelector('.search')
    const closebtn=document.querySelector('.closebtn')
    icon.addEventListener('click',function(){
        bars.classList.remove('search-bar')
        closebtn.addEventListener('click',function(){
            bars.classList.add('search-bar')
        })
    })
}
function leftMenu(){
    const menu=document.querySelector('.menu')
    const menuCont=document.querySelector('.menu-container')
    const icon=document.querySelector('.nav-left button')
    const menuClose=document.querySelector('.menu-close')
    icon.addEventListener('click',function(){
        menu.style.transform="translateX(0)"
        menuCont.classList.add('animate-left')
        menuClose.addEventListener('click',function(){
            menu.style.transform="translateX(-100%)"
            menuCont.classList.remove('animate-left')
        })
    })
}
leftMenu()
searchBar()

/* slideshow */ 
var slideIndex = 0;
carousel();
function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" paginate-color", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " paginate-color";
}
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); 
  showDivs(slideIndex);
}