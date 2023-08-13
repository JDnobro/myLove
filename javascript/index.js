'use strict';
let firstQuestion = document.querySelector('.first-question');
let secondQuestion = document.querySelector('.second-question');
let thirdQuestion = document.querySelector('.third-question');
let submit_btn = document.querySelector('.submit-button');
let alertFinal = document.querySelector('.alert-final');
let valueNeeded;
let valueNeeded2 = 'CHÓ';
let pass1, pass2, pass3;

function check(question) {
	console.log(valueNeeded, valueNeeded2);
	let pass = false;
	let alert = question.closest('.question').querySelector('.alert');

	if (question == firstQuestion || question == thirdQuestion) {
		if (question == firstQuestion) {
			valueNeeded = 'CUKCUK';
		} else {
			valueNeeded = 'TRẮNG';
		}
		if (question.value == '') {
		} else if (question.value.toUpperCase() == valueNeeded) {
			pass = true;
			if (!alert.classList.contains('hidden')) alert.classList.add('hidden');
			question.classList.add('border-correct');
			question.classList.remove('border-wrong');
		} else {
			question.classList.remove('border-correct');
			question.classList.add('border-wrong');
			pass = false;
			alert.classList.remove('hidden');
		}
	} else {
		valueNeeded = 'RÙA';
		if (question.value == '') {
		} else if (
			question.value.toUpperCase().includes(valueNeeded) &&
			question.value.toUpperCase().includes(valueNeeded2)
		) {
			pass = true;
			if (!alert.classList.contains('hidden')) alert.classList.add('hidden');
			question.classList.add('border-correct');
			question.classList.remove('border-wrong');
		} else {
			pass = false;
			alert.classList.remove('hidden');
			question.classList.remove('border-correct');
			question.classList.add('border-wrong');
		}
	}
	return pass;
}
firstQuestion.addEventListener('focusout', function () {
	pass1 = check(firstQuestion);
});
secondQuestion.addEventListener('focusout', function () {
	pass2 = check(secondQuestion);
});
thirdQuestion.addEventListener('focusout', function () {
	pass3 = check(thirdQuestion);
});

submit_btn.addEventListener('click', function () {
	if (pass1 == true && pass2 == true && pass3 == true) {
		window.location.href = 'afterindex.html';
	} else {
		alertFinal.classList.remove('hidden');
	}
});
