let simple = document.getElementById('simple');
let middle = document.getElementById('middle');
let hard = document.getElementById('hard');
let choice = document.querySelectorAll('.selection__level');
let btn = document.querySelector('.selection__btn');
let cards = document.querySelectorAll('.game__cards');
let six = document.querySelectorAll('.cardsSix');
let three = document.querySelectorAll('.cardsThree');
let haveFlippedCard = false;
let	yourCard;
let level;
let picture1 = document.querySelector('.selection__rectangular');
let picture2 = document.querySelector('.selection__rectangul');
let picture3 = document.querySelector('.selection__rectan');

// выбор сложности

function yourChoice() {
	if (!level) {
	this.classList.add('active');
	choice = this;
	level = true;
	//picture.forEach(elm => elm.classList.remove('hidden'));
	}
  } 
choice.forEach (elm => elm.addEventListener("click", yourChoice));

if (choice == 'simple') {
	picture1.classList.remove('hidden');
	three.forEach(elm => elm.classList.toggle('hidden'));	
	cards.forEach(elem => {
		var randomCard = Math.floor(Math.random() * 3);
	});		
} else if (choice == 'middle') {
	picture2.classList.remove('hidden');	
	six.forEach(elm => elm.classList.toggle('hidden'));
	cards.forEach(elem => {
		var randomCard = Math.floor(Math.random() * 6);
	});
} else if (choice == 'hard') {
	picture3.classList.remove('hidden');
	cards.forEach(elem => {
		var randomCard = Math.floor(Math.random() * 9);
	});	
}

btn.onclick = function() {window.location.href='three.html';}

// нажатие на кнопку
/*
btn.onclick = function () {
	if (choice == simple) {
		window.location.href='three.html';
		three.forEach(elm => elm.classList.toggle('hidden'));	
			//change();
	} else if (choice == middle) {
		window.location.href='three.html';
		 six.forEach(elm => elm.classList.toggle('hidden'));
			//change();
	} else {
		window.location.href='three.html';
		//change();
	}
};
*/
// смена сторон карты  и возврат на главную страницу

function flipCard() {
	this.classList.toggle('change-sides');
	if (!haveFlippedCard) {
		haveFlippedCard = true;
		yourCard = this;
	} 
	checkCard();
}

function checkCard() {
	if (haveFlippedCard = true) {
		yourCard.onclick = function () {	
			window.location.href ='index.html';
		}
	}
}

cards.forEach(elem => elem.addEventListener("click", flipCard));

// перемешивание карт
/*
function change() {
	if (choice == simple) {
	cards.forEach(elem => {
		var randomCard = Math.floor(Math.random() * 3);
	});
	}
	if (choice == middle) {
	cards.forEach(elem => {
		var randomCard = Math.floor(Math.random() * 6);
	});
	}
	if (choice == hard) {
	cards.forEach(elem => {
		var randomCard = Math.floor(Math.random() * 9);
	});
	}
}
*/



