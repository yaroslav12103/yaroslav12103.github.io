$('.carousel').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
 	autoplaySpeed: 2000,
 	prevArrow: '<img src="leftA.png" width="30px" height="30px" class="arrow">',
  	nextArrow: '<img src="rightA.png" width="30px" height="30px" class="arrow">',
});

let cb = document.querySelector('.content-blocker')
let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click', function() {
	 cb.classList.toggle('active')
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})

