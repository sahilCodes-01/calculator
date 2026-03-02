firstNumber = "";
oprator = "";
secondNumber = "";
let currentNumber = "";
let resultDisplayed = false;


function resetCalculator() {
    firstNumber = "";
    oprator = "";
    secondNumber = "";
    currentNumber = "";
}


function handleDigit(value) {

    if (resultDisplayed) {
        currentNumber = "";
        resultDisplayed = false;
    }

    currentNumber += value;
    valueDisplay.textContent = currentNumber;
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};


function multiply(a, b) {
    return a * b;
};


function divide(a, b) {
    if (b === 0) {
        return "Error! Cannot divide by zero.";
    }
    return a / b;
};


function operate(firstNumber, oprator, secondNumber) {

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (oprator) {
        case "+":
            return add(firstNumber, secondNumber);


        case "-":
            return subtract(firstNumber, secondNumber);


        case "×":
            return multiply(firstNumber, secondNumber);


        case "÷":
            return divide(firstNumber, secondNumber);


        default:
            return "invalid operator";
    };
};


const digit = document.querySelectorAll(".digit");
const btnOperator = document.querySelectorAll(".operator");
const clear = document.querySelector(".clearbtn");
const equal = document.querySelector("#equalbtn");
const valueDisplay = document.querySelector(".display");
const decimalBtn = document.querySelector(".decimal")
const backSpace = document.querySelector(".backspace")






digit.forEach(currentButton => {
    currentButton.addEventListener("click", (event) => {
        handleDigit(event.target.textContent)
    });
});


btnOperator.forEach(currentOperator => {
    currentOperator.addEventListener("click", (event) => {
        secondNumber = currentNumber
        let currentValue = event.target.textContent


        if (currentNumber === "") {
            oprator = currentValue
            valueDisplay.textContent = currentValue
            return

        };

        if (firstNumber !== "" && oprator !== "" && currentNumber !== "") {
            secondNumber = operate(firstNumber, oprator, currentNumber);
        };


        firstNumber = secondNumber
        oprator = currentValue
        valueDisplay.textContent = firstNumber
        currentNumber = ""

    });
});

equal.addEventListener("click", (event) => {
    secondNumber = currentNumber
    if (firstNumber === "" || oprator === "" || currentNumber === "") return;

    let result = "";
    result = operate(firstNumber, oprator, secondNumber);

    if (typeof result === "string") {
        resetCalculator();
        valueDisplay.textContent = result;
        return
    }


    valueDisplay.textContent = result;


    resultDisplayed = true;
    firstNumber = "";
    oprator = "";
    currentNumber = result;
    firstNumber = result

});

clear.addEventListener("click", (event) => {
    resetCalculator();
    valueDisplay.textContent = "0";
});

backSpace.addEventListener("click", (event) => {
    currentNumber = currentNumber.slice(0, -1);
    valueDisplay.textContent = currentNumber || "0"
})

decimalBtn.addEventListener("click", (event) => {


    if (resultDisplayed) {
        currentNumber = "";
        resultDisplayed = false;
    };

    if (currentNumber.includes(".")) return;

    if (currentNumber === "") {
        currentNumber = "0.";
    }

    else {
        currentNumber += "."

    };

    valueDisplay.textContent = currentNumber;
});


document.addEventListener("keydown", (event) => {

    if (!isNaN(event.key)) {
        handleDigit(event.key)
    }
    // if (event.key === "Enter" || event.key === "=") {
    //     equal.click();
    // }
})
