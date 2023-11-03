// const button = document.getElementById("test-coordinates");

// button.addEventListener("click", (event) => {
// 	console.log({ x: event.pageX, y: event.pageY }, "pageXY");
// 	console.log({ x: event.clientX, y: event.clientY }, "clientXY");
// });

// console.log(document.body.getBoundingClientRect());

const board = document.querySelector("#board");
const result = document.querySelector(".result");

let score = 0;

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

	const y = getRandomNumber(0, height - size);
	const x = getRandomNumber(0, width - size);

	circle.style.top = y + "px";
	circle.style.left = x + "px";

	board.append(circle);
}

createCircle();

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("click", (event) => {
	const isCircle = event.target.classList.contains("circle");

	if (isCircle) {
		event.target.remove();

		result.innerHTML = ++score;

		createCircle();
	}
});
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
