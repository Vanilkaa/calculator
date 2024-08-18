const display = document.querySelector("#display");
const inputs = Array.from(document.querySelectorAll(".input"));

inputs.forEach((input) => input.onclick = () => {
            if(display.textContent.length > 9 || 
                input.textContent == "." && 
                display.textContent.includes(".")) return;
            display.textContent == "0" && 
                input.textContent != "." ?
                    display.textContent = (input.textContent) :
                    display.textContent += (input.textContent);
            });

const backspace = document.querySelector("#backspace");
backspace.onclick = () => {
    if(display.textContent.length == 1) {
        display.textContent = "0";
        return;
    }
    display.textContent = display.textContent.slice(0, -1);
}

const clear = document.querySelector("#clear");
clear.onclick = () => {
    display.textContent = "0";
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1, num2, operator;

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            add(num1, num2);
        case "-":
            subtract(num1, num2);
        case "*":
            multiply(num1, num2);
        case "/":
            divide(num1, num2);
    }
}

