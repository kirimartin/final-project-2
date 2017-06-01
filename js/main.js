$(document).ready(function(){
	console.log('it works');
	
// click on a hotspot and text appears
// click again to minimize text

	$('.tooltip-1').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-2').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-3').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-4').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-5').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-6').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})



});


// GALLERY

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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

