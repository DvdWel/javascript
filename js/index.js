"use strict";

let slideIndex = 1;
var paused = false;
showSlides(slideIndex);

var timer = setInterval(function () {
	plusSlides(1);
}, 2000);

const startTimer = () => {
	if(paused == false){
		clearInterval(timer);
		
		timer = setInterval( () => {
			plusSlides(1);
		}, 2000);
	}
}

const pauseSlideShow = () => {
	if(paused == true){
		paused = false;
		plusSlides(1);
		document.getElementById("slideButton").innerHTML = "pause";
	}else{
		clearInterval(timer);
		document.getElementById("slideButton").innerHTML = "play";
		paused = true;
	}
}

// Next/previous controls
const plusSlides = (n) => {
	startTimer();
	showSlides(slideIndex += n);
}

document.addEventListener('keydown', (event) => {
	startTimer();
	if (event.key == "ArrowLeft") {
		plusSlides(-1);
	} else if (event.key == "ArrowRight") {
		plusSlides(1);
	}else if(event.key == " "){
		console.log(paused);
		pauseSlideShow();
	}
});

function showSlides(n) {
	const slides = document.getElementsByClassName("slide");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}