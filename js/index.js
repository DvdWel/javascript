"use strict";

var slideIndex = 1;
var paused;
showSlides(slideIndex);

var timer = setInterval(function () {
	plusSlides(1);
}, 2000);

function startTimer(){
	clearInterval(timer);
	
	timer = setInterval(function () {
		plusSlides(1);
	}, 2000);
}

function pauseSlideShow(){
	if(paused == true){
		plusSlides(1);
		startTimer();
		paused = false;
	}else{
		clearInterval(timer);
		paused = true;
	}
}

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

document.addEventListener('keydown', function (event) {
	console.log(event.key);
	startTimer();
	if (event.key == "ArrowLeft") {
		plusSlides(-1);
	} else if (event.key == "ArrowRight") {
		plusSlides(1);
	}else if(event.key == " "){
		pauseSlideShow();
	}
});

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}