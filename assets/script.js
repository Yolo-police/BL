const iconMenu = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

iconMenu.addEventListener("click", function () {
	headerNav.classList.toggle("_active");
	document.body.classList.toggle("_active");
	iconMenu.classList.toggle("_active");
})
//-------------------------------
let position = 0;
const elementsCount = document.querySelectorAll(".sixth-screen__column").length;
const slider = document.querySelector(".sixth-screen__track");
const btnPrev = document.querySelector(".sixth-screen__buttonPrev");
const btnNext = document.querySelector(".sixth-screen__buttonNext");
btnPrev.addEventListener("click", () => {
	const elementWidth = document.querySelector(".sixth-screen__column").clientWidth;
	if (position < 0) {
		if (position % elementWidth != 0) {
			position += Math.abs(position % elementWidth)
		}
		else {
			position += elementWidth;
		}
		slider.style.transform = `translateX(${position}px)`;
	}
})
btnNext.addEventListener("click", () => {
	const elementWidth = document.querySelector(".sixth-screen__column").clientWidth;
	const sliderWidth = slider.clientWidth;
	if (position > -(elementWidth * elementsCount) + sliderWidth) {
		if (position % elementWidth != 0) {
			position -= elementWidth - Math.abs(position % elementWidth);
		}
		else {
			position -= elementWidth;
		}
		slider.style.transform = `translateX(${position}px)`;
	}
})
//--------------------------------------

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", (e) => {
			const Link = e.target;
			if (Link.dataset.goto && document.querySelector(Link.dataset.goto)) {
				const gotoBlock = document.querySelector(Link.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"

				});
				headerNav.classList.remove("_active");
				document.body.classList.remove("_active");
				iconMenu.classList.remove("_active");

				e.preventDefault();
			}
		});
	});
}