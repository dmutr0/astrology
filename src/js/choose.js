export function toggleList(e) {
	const list = e.currentTarget.parentElement.querySelector("ul");
	const toggler = e.currentTarget.parentElement.querySelector(".choose__toggler");
	if (e.target.classList.length !== 0) {
		console.log(e.target.classList)
		toggler.classList.toggle("choose__toggler_active");
		list.classList.toggle("choose__second-list_active");
	}
}

export function showContent(e) {
	e.currentTarget.parentElement.parentElement.querySelector(".choose__hidden-content").classList.add("choose__hidden-content_active");
}

export function hideContent(e) {
	e.currentTarget.classList.remove("choose__hidden-content_active");
}