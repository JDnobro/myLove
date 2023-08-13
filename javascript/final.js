'use strict';
let button1 = document.querySelector('.button1 .button-flipper');
let button2 = document.querySelector('.button2 .button-flipper');

function stayHovered(button) {
	if (button1.getAttribute('style') != null) {
		button1.style.transform = null;
	}
	if (button2.getAttribute('style') != null) {
		button2.style.transform = null;
	}
	button.style.transform = 'rotateX(180deg)';
}

button1.addEventListener('click', function () {
	stayHovered(button1);
});

button2.addEventListener('click', function () {
	stayHovered(button2);
});
