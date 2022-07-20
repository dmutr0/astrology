export default function toggleStep(e) {
	const list = e.currentTarget.parentElement.nextSibling;
	e.currentTarget.parentElement.querySelector(".program__btn").classList.toggle("program__btn_active");
	list.classList.toggle("program__webinars_active");
}