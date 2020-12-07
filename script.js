// выбор сложности

let simple = document.querySelector('.selection__simple');
let middle = document.querySelector('.selection__middle');
let hard = document.querySelector('.selection__hard');
let choice;
let btn = document.querySelectorAll('.selection__btn');
/*
function yourChoice() {
	this.classList.toggle('selection__rectangle');
	choice = this;
  } 
simple.addEventListener('click', yourChoice());
middle.addEventListener('click', yourChoice());
hard.addEventListener('click', yourChoice());
*/

// нажатие на кнопку
/*
btn.onclick = function game() {
	if (choice = simple) {
			window.location.href = 'three.html';
	} else if (choice = middle) {
			window.location.href = 'six.html';
	} else if (choice = hard) {	
			window.location.href = 'nine.html';
	}
} 

btn.onclick = function game(){window.location.href = 'three.html'}
*/
btn.onclick = function(){window.location.href='three.html'};
// <button class="selection__btn" onclick="window.location.href='three.html'">Начать игру</button> - так работает

// смена сторон карты

let card = document.getElementById('bug');
let three = document.querySelectorAll('.three__cards');
let six = document.querySelectorAll('.six__cards');
let nine = document.querySelectorAll('.nine__cards');
let haveFlippedCard = false;
let	yourCard;

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
			window.location.href = 'index.html';
		}
	}
}

three.forEach(elem => elem.addEventListener("click", flipCard));
six.forEach(elem => elem.addEventListener("click", flipCard));
nine.forEach(elem => elem.addEventListener("click", flipCard));

// перемешивание карт
/*
function change() {
	three.forEach(elem => {
		let randomCard = Math.floor(Math.random() * 3);
	});
}

*/


