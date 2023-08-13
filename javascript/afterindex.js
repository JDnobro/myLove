'use strict';
let answer1Box1 = document.querySelector('.question-box1 .answer1');
let answer2Box1 = document.querySelector('.question-box1 .answer2');
let answer1Box2 = document.querySelector('.question-box2 .answer1');
let answer2Box2 = document.querySelector('.question-box2 .answer2');
let answer3_1 = document.querySelector('.question-box1 .answer3');
let answer3_2 = document.querySelector('.question-box2 .answer3');
let funny = document.querySelector('.funny');
let funny2 = document.querySelector('.funny2');
let sadMsg = document.querySelectorAll('.sad');
let img = document.querySelector('.hero-img-last');
let last_button = document.querySelector('.last');
let solan = 0;

let click1 = false;
let click2 = false;
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPlace(answer) {
	console.log(solan);
	if (!answer.classList.contains('answer-modify')) {
		answer.classList.add('answer-modify');
	}
	let styleValue = window.getComputedStyle(answer);
	let newTop = 0,
		newLeft = 0,
		oldTop = parseInt(styleValue.top),
		oldLeft = parseInt(styleValue.left);

	newTop = getRndInteger(0, 500);
	newLeft = getRndInteger(0, 1000);
	while (true) {
		newTop = getRndInteger(0, 500);
		newLeft = getRndInteger(0, 1000);
		if (Math.abs(oldTop - newTop) > 100 || Math.abs(oldLeft - newLeft) > 300) {
			break;
		}
	}
	answer.style.top = '' + newTop + 'px';
	answer.style.left = '' + newLeft + 'px';
	if (solan == 15) {
		sadMsg.forEach((element) => {
			element.classList.remove('hidden');
		});
		img.src = 'img/cry.jpg';
	}
	solan++;
}
function changeBg(answer) {
	answer.style.backgroundImage = 'url("img/heart2.1.jpg")';
	answer.style.color = 'black';
}

answer1Box1.addEventListener('mouseover', function () {
	randomPlace(answer1Box1);
});
answer2Box1.addEventListener('mouseover', function () {
	randomPlace(answer2Box1);
});
answer1Box2.addEventListener('mouseover', function () {
	randomPlace(answer1Box2);
});
answer2Box2.addEventListener('mouseover', function () {
	randomPlace(answer2Box2);
});

answer3_1.addEventListener('click', function () {
	click1 = true;
	funny.classList.remove('hidden');
	changeBg(answer3_1);
});
answer3_2.addEventListener('click', function () {
	click2 = true;
	funny2.classList.remove('hidden');
	changeBg(answer3_2);
});

last_button.addEventListener('click', function () {
	if (click1 == true && click2 == true) {
		window.location.href = 'final.html';
	} else {
		last_button.textContent = 'Chọn theo trái timm cơ🥺';
	}
});
