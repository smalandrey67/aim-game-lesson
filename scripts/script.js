// const button = document.getElementById("test-coordinates");

// button.addEventListener("click", (event) => {
// 	console.log({ x: event.pageX, y: event.pageY }, "pageXY");
// 	console.log({ x: event.clientX, y: event.clientY }, "clientXY");
// });

// console.log(document.body.getBoundingClientRect());

const board = document.querySelector("#board");
const result = document.querySelector(".result");
const timerDisplay = document.querySelector(".timer__display-left");
const timeOptions = document.querySelectorAll(".options__item");

let score = 0;
let countDown;

// Plan
// 1. Create a function which will create an independent circle with random size and position
// 2. Listen clicks, and once we clicked on one of the circle we should increase our score,
// remove circle that we've clicked, and create a new one

function createCircle() {
	const circle = document.createElement("div");
	circle.classList.add("circle");

	const size = getRandomNumber(20, 70);

	circle.style.width = size + "px";
	circle.style.height = size + "px";

	const { width, height } = board.getBoundingClientRect();

	const y = getRandomNumber(0, height - size - 70);
	const x = getRandomNumber(0, width - size);

	circle.style.bottom = y + "px";
	circle.style.left = x + "px";

	board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("click", (event) => {
	const isCircle = event.target.classList.contains("circle");
	const isTimeOption = event.target.classList.contains("options__item");

	if (isCircle) {
		event.target.remove();
		score++;
		createCircle();
	}

	if (isTimeOption) {
		const gameTime = event.target.dataset.time;
		startGame(gameTime);
	}
});

function startGame(timeUserChose) {
	timeOptions.forEach((timeOption) => {
		timeOption.setAttribute("disabled", true);
	});

	timer(timeUserChose);
	createCircle();
}

function timer(seconds) {
	const currentTime = Date.now();
	const endTime = currentTime + seconds * 1000;

	displayTimer(seconds);

	countDown = setInterval(() => {
		const secondsLeft = Math.round((endTime - Date.now()) / 1000);

		if (secondsLeft < 0) {
			clearInterval(countDown);
			alert(`Your score is: ${score}`);

			timeOptions.forEach((timeOption) => {
				timeOption.removeAttribute("disabled");
			});

			const leftCircle = document.querySelector(".circle");

			if (leftCircle) {
				leftCircle.remove();
			}
			return;
		}

		displayTimer(secondsLeft);
	}, 1000);
}

function displayTimer(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;

	const display = `timer ${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
	timerDisplay.textContent = display;
}

// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================

// double equal sign ==
// triple equal sign ===

// logical operators
// &&
// ||

// double question mark
// ??

// forEach
// Map
// Filter
// Reduce
// Every
// Some
// Find
// push
// pop
// shift
// join
// split
// unshist
// FindIndex
