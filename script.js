const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide');
});

const gambaritems = document.querySelectorAll('.gambar-item-wrapper')

gambaritems.forEach(gambaritems => {
gambaritems.addEventListener('mouseover', () => 
{
    console.log(gambaritems.childNodes[1].classList);
    gambaritems.childNodes[1].classList.add('img-darken');
})

gambaritems.addEventListener('mouseout', () => 
{
    gambaritems.childNodes[1].classList.remove('img-darken');
})

}
)


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}