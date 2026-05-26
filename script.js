let calcInput = document.querySelector(".calcInput");
let calcButtons = document.querySelector(".calcButtons");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let calcUndefined = false;
const calcSymbolsInvalid = "~`!@#$%^&()_+{[}]|\\;:'<>,?abcdefghijklmnopqrstuvwxyz";

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

function operate(a,b) {
    switch(operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "x":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}

function handleNums(num) {
    if(!calcUndefined) {
        if(operator === ""){
            firstNumber += num;
            calcInput.value = firstNumber;
            }
        else {
            secondNumber += num;
            calcInput.value = secondNumber;
            }
    }
}

function displayUpdate() {
    calcInput.value = "0";
    calcButtons.addEventListener("click", (e) => {
        let target = e.target;
        switch(target.id) {
            
            case "0":
                if(calcInput.value !== "0") {
                    handleNums(0);
                }
            break;
            case "1":
               handleNums(1);
                break;
            case "2":
                handleNums(2);
                break;
            case "3":
                handleNums(3);
                break;
            case "4":
                handleNums(4);
                break;
            case "5":
                handleNums(5);
                break;
            case "6":
                handleNums(6);
                break;
            case "7":
                handleNums(7);
                break;
            case "8":
                handleNums(8);
                break;
            case "9":
                handleNums(9);
                break;  
            case "clear":
                firstNumber = "";
                secondNumber="";
                calcInput.value = "0";
                operator = "";
                calcUndefined = false;
                break;        
            case "addition":
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                if(firstNumber){
                if(operator ==="" || operator==="+"){
                    operator = "+";
                }
                else if (secondNumber){
                    calcInput.value = operate(+firstNumber,+secondNumber);
                    operator="+";
                    firstNumber = calcInput.value;
                    secondNumber = ""; 
                }
                else {

                }
                }
                break;
            case "subtraction":
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                if(firstNumber){
                if(operator==="" || operator==="-"){
                    operator = "-";
                }
                else if(secondNumber){
                    calcInput.value = operate(+firstNumber,+secondNumber);
                    operator="-";
                    firstNumber = calcInput.value;
                    secondNumber = ""; 
                }
                else {

                }
            }
                break;
            case "multiplication":
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                if(firstNumber){
                if(operator==="" || operator==="x"){
                    operator = "x";
                }
                else if(secondNumber){
                    calcInput.value = operate(+firstNumber,+secondNumber);
                    operator="x";
                    firstNumber = calcInput.value;
                    secondNumber = ""; 
                }
                else {

                }
                }
                break;
            case "division":
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                if(firstNumber){
                if(operator==="" || operator==="/"){
                    operator = "/";
                }
                else if(secondNumber){
                    calcInput.value = operate(+firstNumber,+secondNumber);
                    operator="/";
                    firstNumber = calcInput.value;
                    secondNumber = ""; 
                }
                else {

                }
                }
                break;
            case "equal":
                if(firstNumber && secondNumber){
                    if(secondNumber !== 0 && operator !=="/" || !calcUndefined){
                        calcInput.value = operate(+firstNumber,+secondNumber);
                        firstNumber = calcInput.value;
                        operator="";
                        secondNumber = ""; 
                    } 
                    else {
                        calcInput.value = "NaN";
                        firstNumber = "";
                        secondNumber = "";
                        calcUndefined = true;
                    }
                }
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                break;
                case "decimal":
                    if(!calcUndefined && !calcInput.value.includes(".")) {
                        if(operator ===""){
                            firstNumber += ".";
                            calcInput.value = firstNumber;
                        }
                        else {
                            secondNumber += ".";
                            calcInput.value = secondNumber;
                        }
                    }
                    break;
        }
    });
    calcInput.addEventListener("keydown", (e) => {
        console.log(e);
    });
}

displayUpdate();