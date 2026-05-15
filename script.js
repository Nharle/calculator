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

function displayUpdate() {
    calcInput.value = "0";
    calcButtons.addEventListener("click", (e) => {
        let target = e.target;
        switch(target.id) {
            
            case "0":
                if(!calcUndefined){
                    if(calcInput.value !== "0") {
                    if(operator === ""){
                        firstNumber += 0;
                        calcInput.value = firstNumber;
                    }
                    else {
                        secondNumber += 0;
                        calcInput.value = secondNumber;
                    }
                }
            }
            break;
            case "1":
                if(!calcUndefined){
                    if(operator === ""){
                    firstNumber += 1;
                    calcInput.value = firstNumber;
                    }
                    else {
                    secondNumber +=1;
                    calcInput.value = secondNumber;
                    }
                }
                break;
            case "2":
                if(!calcUndefined){
                    if(operator ===""){
                        firstNumber += 2;
                        calcInput.value = firstNumber;
                    }
                    else {
                        secondNumber += 2;
                        calcInput.value=secondNumber;
                    }
                }
                break;
            case "3":
                if(!calcUndefined){
                    if(operator===""){
                        firstNumber += 3;
                        calcInput.value = firstNumber;
                    }
                    else {
                        secondNumber +=3;
                        calcInput.value=secondNumber;
                    }
                }
                break;
            case "4":
                if(!calcUndefined){
                    if(operator===""){
                    firstNumber += 4;
                    calcInput.value = firstNumber;
                    }
                    else {
                        secondNumber +=4;
                        calcInput.value = secondNumber;
                    }
                }
                break;
            case "5":
                if(!calcUndefined){
                    if(operator ===""){
                    firstNumber += 5;
                    calcInput.value = firstNumber;
                    }
                    else{
                        secondNumber +=5;
                        calcInput.value=secondNumber;
                    }
                }
                break;
            case "6":
                if(!calcUndefined){
                    if(operator ===""){
                        firstNumber += 6;
                        calcInput.value = firstNumber;
                    }
                    else {
                        secondNumber+=6;
                        calcInput.value=secondNumber;
                    }
                }
                break;
            case "7":
                if(!calcUndefined){
                    if(operator===""){
                    firstNumber += 7;
                    calcInput.value = firstNumber;
                    }
                    else{
                        secondNumber+=7;
                        calcInput.value=secondNumber;
                    }
                }
                break;
            case "8":
                if(!calcUndefined){
                    if(operator===""){
                        firstNumber += 8;
                        calcInput.value = firstNumber;
                    }
                    else{
                        secondNumber+=8;
                        calcInput.value=secondNumber;
                    }
                }
                break;
            case "9":
                if(!calcUndefined){
                    if(operator===""){
                        firstNumber += 9;
                        calcInput.value = firstNumber;
                    }
                    else{
                        secondNumber+=9;
                        calcInput.value = secondNumber;
                    }
                }
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
        }
    });
}

displayUpdate();