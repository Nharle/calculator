let calcInput = document.querySelector(".calcInput");
let calcButtons = document.querySelector(".calcButtons");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let calcUndefined = false;


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
            if(firstNumber !== "0"){
                firstNumber += `${num}`;
            }
            else {
                firstNumber = `${num}`;
            }
            calcInput.value = firstNumber;
            }
        else {
            if(secondNumber !== "0"){
                secondNumber += `${num}`;
            }
            else {
                secondNumber = `${num}`;
            }
            calcInput.value = secondNumber;
            }
    }
}
function handleSymbol(sym) {
    console.log(`FirstNumber: ${firstNumber}, SecondNumber: ${secondNumber}, operator:${operator}, calcUndefined ${calcUndefined}`);
    if(!calcUndefined){
        if(sym === "+" || sym === "-" || sym === "x" || sym === "/"){
            if(firstNumber){
                if(operator ==="" || operator===sym){
                    operator = sym;
                }
                else if (secondNumber){
                    if(+secondNumber === 0 && operator === "/"){
                        calcInput.value = NaN;
                        firstNumber = "";
                        secondNumber = "";
                        calcUndefined = true;
                    }
                    else {
                        calcInput.value = operate(+firstNumber,+secondNumber);
                        operator=sym;
                        firstNumber = calcInput.value;
                        secondNumber = ""; 
                    }
                }
                else {

                }
            }
        }
        else if (sym === "=") {
        if(firstNumber && secondNumber){
            if(+secondNumber === 0 && operator === "/") {
                calcInput.value = NaN;
                firstNumber = "";
                secondNumber = "";
                calcUndefined = true;
                    }
            else {
                calcInput.value = operate(+firstNumber,+secondNumber);
                firstNumber = calcInput.value;
                operator="";
                secondNumber = ""; 
                    } 

                }
        }
        else if(sym ===".") {
            if(!calcUndefined && !calcInput.value.includes(".")) {
                console.log(true);
                if(operator ===""){
                    firstNumber += ".";
                    calcInput.value = firstNumber;
                    }
                else {
                    secondNumber += ".";
                    calcInput.value = secondNumber;
                    }
                }
        }
    }
}

function handleInput(e) {
    key = e.key;
    console.log(key);
    e.preventDefault();
    if(!Number.isNaN(+key)) {
        if(+key === 0) {
            if(calcInput.value !== "0") {
                handleNums(+key);
            }
            else {
                e.preventDefault();
            }
        }
        else {
            handleNums(+key);
        }
    }
    else if(Number.isNaN(+key)) {
        if(key === "+" || key === "-" || key === "x" || key === "/" || key === "=" || key ===".") {
            handleSymbol(key);
            if(key !== "=") {
                if(!calcInput.value.includes("+") && !calcInput.value.includes("-") && !calcInput.value.includes("x") && !calcInput.value.includes("/") && !calcUndefined && key !== "."){
                calcInput.value += key;
                }
            }
        }
        else if(key === "*") {
            handleSymbol("x");
            if(!calcInput.value.includes("x")) {
                calcInput.value += "x";
            }
        }
        else if(key ==="Enter") {
            handleSymbol("=");
        }
        else if(key ==="Backspace" && !calcUndefined) {
            let numArr = calcInput.value.split("");
            numArr.pop();
            calcInput.value = numArr.join("");
            if(!operator) {
                firstNumber = calcInput.value;
            }
            else {
                secondNumber = calcInput.value;
            }
        }
        else {
            e.preventDefault();
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
                handleSymbol("+");
                break;
            case "subtraction":
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                handleSymbol("-");
                break;
            case "multiplication":
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                handleSymbol("x");
                break;
            case "division":
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                handleSymbol("/");
                break;
            case "equal":
               handleSymbol("=");
                console.log(`First Number: ${firstNumber} SecondNumber:${secondNumber}`);
                break;
                case "decimal":
                   handleSymbol(".");
                    break;
        }
    });
    calcInput.addEventListener("keydown", handleInput);
}

displayUpdate();