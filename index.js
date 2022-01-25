let items = document.querySelectorAll('.block');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + 2) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.famous__vector__left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.famous__vector__right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});


























/*POPUP 


const popLink = document.querySelectorAll('.popup__link');



let unlock = true;
const timeout = 400;

popLink.addEventListener("click", function (e) {
	const popName = popLink.getAttribute('href').replace('#', '');
	const curentPop = document.getElementById(popName);
	popupOpen(curentPop);
	e.preventDefault();
});

function popupOpen(curentPop) {
	curentPop.classList.add('open');
	curentPop.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__content')) {
			popupClose(e.target.closest('.popup'));
		}
	});
}

*/



const myPopup = document.getElementById('popup');
const btn = document.getElementById('popBtn');

btn.onclick = function() {
	myPopup.style.visibility = "visible";
};



window.onclick = function(event) {
	if (event.target == 'myPopup') {
		myPopup.style.visibility = "hidden";
	}
};



