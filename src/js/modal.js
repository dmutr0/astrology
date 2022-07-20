export function openModal(e) {
	const formatType = e.currentTarget.getAttribute("data-format");
	const modal = document.querySelector(`#${formatType}`);
	document.querySelector(".overlay").classList.add("overlay_active");
	modal.classList.add("modal_active");
}

export function closeModal(e) {
	if (!e.target.classList.contains("modal")) {
		document.querySelector(".overlay").classList.remove("overlay_active");
		document.querySelectorAll(".modal").forEach(modal => modal.classList.remove("modal_active"));
	}
}