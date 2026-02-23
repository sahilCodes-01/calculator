

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! Cannot divide by zero.";
    }
    return a / b;
}
function operate(firstNumber, oprator, secondNumber) {

    switch (oprator) {
        case "+":
            return add(firstNumber, secondNumber);



        case "-":
            return subtract(firstNumber, secondNumber);


        case "*":
            return multiply(firstNumber, secondNumber);


        case "/":
            return divide(firstNumber, secondNumber);


        default:
            return "invalid operator"
    }
}


const digit = document.querySelectorAll(".digit")
const symbol = document.querySelectorAll(".operator")
const clear = document.querySelector(".clearbtn")
const equal = document.querySelector("#equalbtn")
const valueDisplay = document.querySelector(".display")


let currentNumber = "";


digit.forEach(currentButton => {
    currentButton.addEventListener("click", (event) => {
        let currentValue = event.target.textContent
        currentNumber = currentNumber + currentValue

        valueDisplay.textContent = currentNumber;
    });
});
