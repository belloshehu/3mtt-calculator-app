const digitButtons = document.querySelectorAll(".btn-digit");
const operatorButtons = document.querySelectorAll(".btn-operator");
const display = document.querySelector("h1");
const equalBtn = document.querySelector("#btn-equal");

let operator = null;

// event listener for reset button
document.querySelector("#btn-reset").addEventListener("click", () => {
	display.innerHTML = "0";
	operator = null;
});

// event listener for backspace button
// document.querySelector("#btn-delete").addEventListener("click", () => {
// 	if (display.innerHTML === "0") return; // Do nothing if display is 0
// 	if (display.innerHTML.length === 1) {
// 		display.innerHTML = "0"; // Reset to 0 if only one character is present
// 		return;
// 	}
// 	display.innerHTML = display.innerHTML.slice(0, -1);
// });

for (let btn of digitButtons) {
	btn.addEventListener("click", () => {
		// if there is digit beside 0 and operator is not pressed, contatenate to it
		if (display.innerHTML === "0") {
			display.innerHTML = btn.getHTML();
		} else {
			display.innerHTML = display.innerHTML.concat(btn.getHTML());
		}
	});
}

for (let operatorBtn of operatorButtons) {
	operatorBtn.addEventListener("click", () => {
		// display - operator only when 0 is displayed
		operator = operatorBtn.getHTML();
		if ((operator === "-" || operator === "+") && display.innerHTML === "0") {
			display.innerHTML = operator; // Allow negative numbers or positive numbers to start
		} else {
			display.innerHTML = display.innerHTML + operator;
		}
	});
}

equalBtn.addEventListener("click", () => {
	try {
		const displayValue = display.innerHTML;
		const result = eval(displayValue.replace(/x/g, "*"));
		display.innerHTML = result;
		display.classList.remove("error");
	} catch (error) {
		console.error("Error in calculation:", error);
		// set error class on the display to indicate an error
		display.classList.add("error");
	}
});
