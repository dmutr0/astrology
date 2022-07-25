export function toggleMenu(e) {
	document.querySelector(".hamburger").classList.toggle("hamburger_active");
	document.querySelector(".menu__list").classList.toggle("menu__list_active");
}