const projectImages = document.querySelectorAll(".projects__img-container")
const projectMasks = document.querySelectorAll(".projects__mask")
const projectCodes = document.querySelectorAll(".projects__btn--code")
const projectVisits = document.querySelectorAll(".projects__btn--visit")

projectImages.forEach((container, i) => {
	container.addEventListener("mouseover", () => {
		projectMasks[i].classList.add("projects__mask--active")
		projectCodes[i].classList.add("projects__btn--active")
		projectVisits[i].classList.add("projects__btn--active")
	})

	container.addEventListener("mouseout", () => {
		projectMasks[i].classList.remove("projects__mask--active")
		projectCodes[i].classList.remove("projects__btn--active")
		projectVisits[i].classList.remove("projects__btn--active")
	})
})
