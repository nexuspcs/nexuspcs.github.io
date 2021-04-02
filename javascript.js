// JavaScript Document



// alert( 'Deli opening times may vary due to the current pandemic' ); 

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

var redirecttest = window.location.href; 

window.location.href = ("google.com");
