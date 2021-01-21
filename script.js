let simple = document.getElementById('simple');
let middle = document.getElementById('middle');
let hard = document.getElementById('hard');
let choice = document.querySelectorAll('.selection__level');
let btn = document.querySelector('.selection__btn');
let haveFlippedCard = false;
let	yourCard;
let level = 3;

function yourChoice() {
	simple.classList.remove('active');
	middle.classList.remove('active');
	hard.classList.remove('active');
	this.classList.add('active');
	level = this.getAttribute('value');
	}

choice.forEach (elm => elm.addEventListener("click", yourChoice));

document.querySelector('#start__game').onclick = () => {
	document.body.innerHTML = '<main class="main"><section class="game"></section></main>'

	function createCard() {
		let card = document.createElement("div");
		card.innerHTML = '<div class="game__cards"><img class="card__front" src="img/playing_card.png" alt="playing_card"><img class="card__back" src="img/game_over.png" alt="game_over"></div>';
		document.querySelector('.game').appendChild(card)
	}
	for (let i = 0; i < level; i++) {
	createCard()
	}

	function random() {
		return Math.floor(Math.random()* level)
	}
	const rand = random();

	document.querySelectorAll('.card__back').forEach((item, index) => {
		if(index == rand) {
			item.src ="img/bug.png"
		}
	})

	function flipCard() {
		if (!haveFlippedCard) {
			this.classList.toggle('change-sides');
			haveFlippedCard = true;
			
			yourCard = this;
		} 
		checkCard();
	}

	function checkCard() {
		if (haveFlippedCard === true) {
			yourCard.onclick = function () {	
				window.location.href ='index.html';
			}
		}
	}
	
	document.querySelectorAll('.game__cards').forEach(elem => elem.addEventListener("click", flipCard));

};








