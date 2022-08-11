// document.querySelectorAll('button').addEventListener('click', function () {
//     alert('I got clicked!');
// });

// let allBtns = document.querySelectorAll('button');
// allBtns.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         let crash = new Audio('./sounds/tom-1.mp3');
//         crash.play();
//     });
// });

const numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', function () {
		let buttonInnerHTML = this.innerHTML;

		switch (buttonInnerHTML) {
			case 'w':
				let tom1 = new Audio('./sounds/tom-1.mp3');
				tom1.play();
				break;
			case 'a':
				let tom2 = new Audio('./sounds/tom-2.mp3');
				tom2.play();
				break;
			case 's':
				let tom3 = new Audio('./sounds/tom-3.mp3');
				tom3.play();
				break;
			case 'd':
				let tom4 = new Audio('./sounds/tom-4.mp3');
				tom4.play();
				break;
			case 'j':
				let snares = new Audio('./sounds/snare.mp3');
				snares.play();
				break;
			case 'k':
				let kickBase = new Audio('./sounds/kick-bass.mp3');
				kickBase.play();
				break;
			case 'l':
				let crash = new Audio('./sounds/crash.mp3');
				crash.play();
				break;

			default:
				break;
		}
	});
}

// let tom = new Audio('./sounds/tom-1.mp3');
// tom.play();
