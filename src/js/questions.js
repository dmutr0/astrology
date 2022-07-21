export function showAnswer(e) {
	const trigger = e.currentTarget.querySelector("img");
	const answer = e.currentTarget.nextSibling;
	if (!trigger.classList.contains("questions__plus_active")) {
		hideAnswers();
	trigger.classList.add("questions__plus_active");
	answer.classList.add("questions__answer_active");
	} else {
		hideAnswers();
	}
}

function hideAnswers() {
	const triggers = document.querySelectorAll(".questions__plus");
	const answers = document.querySelectorAll(".questions__answer");
	triggers.forEach(trigger => trigger.classList.remove("questions__plus_active"));
	answers.forEach(answer => answer.classList.remove("questions__answer_active"));
}