$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

/* function slider(){
	$("#full-slide").carousel();

	$(".item1").click(function(){
		$("#full-slide").carousel(0)
	});
	$(".item2").click(function(){
		$("#full-slide").carousel(1)
	});
	$(".item3").click(function(){
		$("#full-slide").carousel(2)
	});

	$(".item3").click(function(){
		$("#full-slide").carousel("prev")
	});
	$(".item2").click(function(){
		$("#full-slide").carousel("prev")
	});

	$(".prev").click(function(){
		$("#full-slide").carousel("prev")
	});
	$(".next").click(function(){
		$("#full-slide").carousel("next")
	});
} */

nav();
// slider();

});

const buttons = document.querySelectorAll("[data-carousel-button]")
var map = L.map('map').setView([51.505, -0.09], 13);

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1
		// console.log(offset);
		const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

		const activeSlide = slides.querySelector("[data-active]")
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) 
			newIndex = slides.children.length - 1
		if (newIndex >= slides.children.length) 
			newIndex = 0
		console.log(newIndex);

		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

/* const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const ulBanner = document.querySelector(".banner")
const liElements = ulBanner.getElementsByTagName("ul")

prev.addEventListener("click", () => {
	ulBanner.classList.add("active")
})

const item1 = document.querySelector(".banner li:nth-child(1)");
const item2 = document.querySelector(".banner li:nth-child(2)");
const item3 = document.querySelector(".banner li:nth-child(3)");

prev.addEventListener("click", () => {
	if (item1.classList.contains("active")){
		console.log("la classe est active");
	}else{
		console.log("la classe est active");
	}
}) */