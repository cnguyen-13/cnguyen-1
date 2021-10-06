const navLinks = document.querySelector(".nav__links")
const navControl = document.querySelector(".nav__control")

function toggleNavLinks() {
	navLinks.classList.toggle("nav__links--active")

	if (navLinks.classList.contains("nav__links--active")) {
		navControl.src = "./images/misc/close.png"
	} else {
		navControl.src = "./images/misc/hamburger.png"
	}
}

function onViewPortChange() {
	if (window.innerWidth >= 768) {
		navLinks.classList.remove("nav__links--active")
		navControl.src = "./images/misc/hamburger.png"
	}
}

window.addEventListener("resize", onViewPortChange)
navControl.addEventListener("click", toggleNavLinks)
