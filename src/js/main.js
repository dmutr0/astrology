import toggleStep from "./program";

const stepTogglers = document.querySelectorAll(".program__btn");

stepTogglers.forEach(toggler => toggler.addEventListener("click", toggleStep));