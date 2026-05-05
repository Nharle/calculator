function add(a, b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a/b;
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function operate() {
    switch(operator) {
        case "+":
            add(firstNumber,secondNumber);
            break;
        case "-":
            subtract(firstNumber,secondNumber);
            break;
        case "x":
            multiply(firstNumber,secondNumber);
            break;
        case "/":
            divide(firstNumber,secondNumber);
            break;
    }
}