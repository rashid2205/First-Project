
//============ SlideShow ============//


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}


//-------------------- Hamburger (Responsive Navbar) --------------//

burger = document.querySelector('.hamburger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.main-nav');


burger.addEventListener('click', () => {
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');

});




var menuHead1 = document.querySelector('#menuHead1');
var menuHead2 = document.querySelector('#menuHead2');
var menuHead3 = document.querySelector('#menuHead3');
var menuHead4 = document.querySelector('#menuHead4');
var fBackground = document.querySelector('.features');


menuHead1.addEventListener('click', ()=>{
  fBackground.style.backgroundImage = "url('/images/Pear-salad-healthyFood.jpg')";
  fBackground.style.backgroundRepeat = "no-repeat";
  fBackground.style.backgroundSize = "cover";

})
menuHead2.addEventListener('click', ()=>{
  fBackground.style.backgroundImage = "url('/images/Honey-Vinaigrette-healthyFood.jpg')";
  fBackground.style.backgroundRepeat = "no-repeat";
  fBackground.style.backgroundSize = "cover";

})
menuHead3.addEventListener('click', ()=>{
  fBackground.style.backgroundImage = "url('/images/GRILLED-KALE-healthyFood.jpg')";
  fBackground.style.backgroundRepeat = "no-repeat";
  fBackground.style.backgroundSize = "cover";

})
menuHead4.addEventListener('click', ()=>{
  fBackground.style.backgroundImage = "url('/images/BRODETTO-DI-PESCE-healthyFood.jpg')";
  fBackground.style.backgroundRepeat = "no-repeat";
  fBackground.style.backgroundSize = "cover";

})

