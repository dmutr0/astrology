import toggleStep from "./program";
import { toggleList, showContent, hideContent } from "./choose";
import { closeModal, openModal } from "./modal";
import { showAnswer } from "./questions";
import {toggleMenu, closeMenu} from "./hamburger";
window.addEventListener("DOMContentLoaded", () => {
	const stepTogglers = document.querySelectorAll(".program__step-number, .program__btn");
	const chooseBtns = document.querySelectorAll(".choose .button");
	const closeModalBtns = document.querySelectorAll(".modal__close");
	const discount = document.querySelector(".choose__discount");
	const hiddenContent = document.querySelectorAll(".choose__hidden-content");
	const overlay = document.querySelector(".overlay");
	const liToggler = document.querySelector(".choose__li-toggler");
	const answerTogglers = document.querySelectorAll(".questions__content");
	const hamburger = document.querySelector(".hamburger");
	const menuLinks = document.querySelectorAll(".menu__link");

	stepTogglers.forEach(toggler => toggler.addEventListener("click", toggleStep));
	liToggler.addEventListener("click", toggleList);
	chooseBtns.forEach(btn => btn.addEventListener("click", openModal));
	closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));
	overlay.addEventListener("click", closeModal);
	discount.addEventListener("mouseenter", showContent);
	hiddenContent.forEach(content => content.addEventListener("mouseleave", hideContent));
	answerTogglers.forEach(toggler => toggler.addEventListener("click", showAnswer));
	hamburger.addEventListener("click", toggleMenu);
	menuLinks.forEach(link => link.addEventListener("click", toggleMenu));
});