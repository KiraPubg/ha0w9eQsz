const navParent = document.querySelector(".header__nav-item");
const subnav = document.querySelector(".header__subnav");
const menu = document.querySelector(".header__menu");
const menuOpen = document.querySelector(".menu__open");
const menuClose = document.querySelector(".menu__close")
const bottomHeader = document.querySelector(".header__bottom")
const body = document.querySelector("body")
navParent.addEventListener("click", function() {
	subnav.classList.toggle("active")
})
menu.addEventListener("click", function() {
	menuOpen.classList.toggle("active")
	menuClose.classList.toggle("active")
	bottomHeader.classList.toggle("active")
	body.classList.toggle("no-scroll")
})
