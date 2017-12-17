const onButtonClicked = function() {
	const p1Dropdown = document.querySelector('.js-p1');
	const p2Dropdown = document.querySelector('.js-p2');

	const p1 = p1Dropdown.value;
	const p2 = p2Dropdown.value;
	let winner = 'Arya Stark';

	if (p1 === p2) {
		winner = 'tie'
	}
	else if (((p1 === 'R') && (p2 === 'P')) || 
			 ((p1 === 'P') && (p2 === 'S')) || 
			 ((p1 === 'S') && (p2 === 'R'))) {
		winner = 'p2'
	}
	else {
		winner = 'p1'
	}

	const winnerCont = document.querySelector('.js-winner-container')
	winnerCont.innerHTML = `
<h4 class="alert-heading">Winner is ${winner}</h4>
<p>Aww yeah, ${winner} won.</p>
<hr>
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
	`;

	// 'Winner is ' + winner

	console.log(p1, p2, winner);
}

const playBtn = document.querySelector('.js-play');

playBtn.addEventListener('click', onButtonClicked);



// DOCS: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
