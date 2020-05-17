$(document).ready(function() {

	// Used Slick JS library by Ken Wheeler: http://kenwheeler.github.io/slick/

	// activating slideshow and settings
	$('.slideshow').slick({
		autoplay: true, // self-explanatory
		autoplaySpeed: 2000, // ditto
		infinite: true, // allows for slideshow to loop to the beginning after the last slide
		dots: true, // enables dots on bottom center for navigation
		arrows: false // disables side arrow navigations
	});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


});
