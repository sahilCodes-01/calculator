let firstNumber = null
let oprator = null
let secondNumber = null


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

// let oper = function operate(firstNumber, oprator, secondNumber) {

//     switch (firstNumber, oprator, secondNumber) {
//         case "+":
//             add();
//             break;

//         case "-":
//             subtract();
//             break;

//         case "*":
//             multiply();
//             break;

//         case "/":
//             divide();
//             break;
//     }
// return operate
// }

